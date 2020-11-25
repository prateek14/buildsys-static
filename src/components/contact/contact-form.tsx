import React, { useState } from 'react';
import { ToastUtils } from '../../utils/toast';

import './contact-form.scss';

interface IDictionary<T> {
    [key: string]: T;
}

interface PostBody {
    email: string;
    message: string;
}

export const ContactForm: React.FunctionComponent = (): JSX.Element => {
    const [errors, setErrors] = useState<IDictionary<string>>({});
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const target = event.target as HTMLFormElement;
        const data = new FormData(target);
        const nameValid = data.has('name') && (data.get('name') as string).trim();
        const emailValid = data.has('email') && (data.get('email') as string).trim();
        const messageValid = data.has('message') && (data.get('message') as string).trim();
        const companyValid = data.has('company') && (data.get('company') as string).trim();

        const errors: IDictionary<string> = {};
        if (!nameValid) {
            errors['name'] = 'This field cannot be blank.';
        }
        if (!emailValid) {
            errors['email'] = 'This field cannot be blank.';
        }
        if (!messageValid) {
            errors['message'] = 'This field cannot be blank.';
        }
        if (!companyValid) {
            errors['company'] = 'This field cannot be blank.';
        }

        if (Object.keys(errors).length === 0) {
        } else {
            setErrors(errors);
        }

        const object: IDictionary<string> = {};
        data.forEach((value, key) => {
            object[key] = value as string;
        });

        let message = 'New message on Contact Form' + '\r\n';
        message += 'Name: ' + object['name'] + '\r\n';
        message += 'Email: ' + object['email'] + '\r\n';
        message += 'Company: ' + object['company'] + '\r\n';
        message += 'Message:\r\n ' + object['message'] + '\r\n';

        const opts: PostBody = { email: 'hello@buildsys.co', message: message };

        fetch('/api/sendEmail', {
            method: 'post',
            body: JSON.stringify(opts),
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                ToastUtils.success('Message sent successfully.');
                target.reset();
            })
            .catch(() => {
                ToastUtils.error('Failed to submit message.');
            });

        event.preventDefault();
    };
    return (
        <form className="contact-form frm-show-form frm_js_validate " onSubmit={handleSubmit}>
            <div className="frm_form_fields ">
                <div className="frm_fields_container">
                    <div
                        id="frm_field_24_container"
                        className="frm_form_field form-field  frm_required_field frm_none_container">
                        <label htmlFor="name" className="frm_primary_label">
                            Name
                            <span className="frm_required"> *</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            data-reqmsg="This field cannot be blank."
                            data-invmsg="Name is invalid"
                            className=""
                        />
                        {errors['name'] && <div className="frm-error">{errors['name']}</div>}
                    </div>
                    <div
                        id="frm_field_25_container"
                        className="frm_form_field form-field  frm_required_field frm_none_container">
                        <label htmlFor="email" className="frm_primary_label">
                            Email Address
                            <span className="frm_required"> *</span>
                        </label>
                        <input type="email" id="email" name="email" />
                        {errors['email'] && <div className="frm-error">{errors['email']}</div>}
                    </div>
                    <div id="frm_field_26_container" className="frm_form_field form-field  frm_none_container">
                        <label htmlFor="company" className="frm_primary_label">
                            Company Name
                            <span className="frm_required"> *</span>
                        </label>
                        <input type="text" id="company" name="company" />
                        {errors['company'] && <div className="frm-error">{errors['company']}</div>}
                    </div>
                    <div
                        id="frm_field_56_container"
                        className="frm_form_field form-field  frm_required_field frm_none_container frm_full">
                        <label htmlFor="message" className="frm_primary_label">
                            Message
                            <span className="frm_required"> *</span>
                        </label>
                        <textarea name="message" id="message" rows={5}></textarea>
                        {errors['message'] && <div className="frm-error">{errors['message']}</div>}
                    </div>
                    <div className="frm_submit">
                        <input type="submit" value="Submit" />
                    </div>
                </div>
            </div>
        </form>
    );
};
