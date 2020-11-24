import { AzureFunction, Context, HttpRequest } from '@azure/functions';

import * as MailService from '@sendgrid/mail';

interface PostBody {
    email: string;
    message: string;
}

function sendEmail(to: string, subject: string, text: string) {
    MailService.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: to,
        from: 'prateek@wazostudio.com',
        subject: subject,
        text: text,
    };
    MailService.send(msg)
        .then(() => {
            console.log('Email sent');
        })
        .catch((error) => {
            console.error(error);
        });
}

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const name = req.query.name || (req.body && req.body.name);
    let responseMessage = name
        ? 'Hello, ' + name + '. This HTTP triggered function executed successfully.'
        : 'This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.';

    if (req.method === 'POST') {
        const body = req.body as PostBody;
        if (body.email && body.email.trim() && body.message && body.message.trim()) {
            sendEmail(body.email, 'New Contact Form Message', body.message);
        }
        responseMessage = 'Email Sent';
    }

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: {
            text: responseMessage,
        },
    };
};

export default httpTrigger;
