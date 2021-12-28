import { BlogPost } from './abstract';

const X: { blogs: BlogPost[]; news: BlogPost[] } = {
    blogs: [
        {
            title: 'Technology enabling collaboration in construction teams during the pandemic',
            description:
                'The construction industry, like many other sectors, took a hit during the pandemic - site work came to a standstill, projects were delayed indefinitely, and supply chains were disrupted. However, the industry has taken a promising turn towards technology to meet these challenges - a shift that is predicted to have a lasting impact on its future.',
            slug: 'technology-collaboration-pandemic',
            date: '2021-02-16T14:43:20.749Z',
            url: '1.md',
            img: '/assets/blogs/images/1-1.jpg',
            tags: ['technology', 'collaboration', 'pandemic'],
        },
        {
            title: 'Cloud technology & apps bridging gaps in the construction industry in the post-COVID19 world.',
            description:
                'The construction industry has many limitations like fragmented ways of communication, site delays, miscommunication in the teams etc. In this post-COVID19 world, the need to switch to cloud tech & apps are ways to connect & communicate to enable remote working.',
            slug: 'apps-bridge-construction',
            date: '2021-02-26T14:43:20.749Z',
            img: '/assets/blogs/images/app-bridge-construction.jpg',
            url: '2.md',
            tags: ['technology', 'collaboration', 'managers', 'projects'],
        },
        {
            title: 'Mobile apps replacing conventional 2D drawings and methods in the new era of rapid construction',
            description:
                'The construction industry has played a pivotal role in responding to the crisis caused by the global pandemic, from constructing hospitals in record time to refurbishing spaces as per social-distancing norms. The shift towards digitization and the efficient use of smartphones has led to enhanced mobility and improved efficiency in all workflows.',
            slug: 'digitization-efficiency-construction',
            date: '2021-03-17T14:43:20.749Z',
            url: '6.md',
            img: '/assets/blogs/images/all-in-one-place.jpg',
            tags: ['digitization', 'construction', 'technology', 'managers', 'projects'],
        },
        {
            title:
                'Mobile Applications enabling management of the construction lifecycle through cloud & collaboration technology',
            description:
                'The construction industry consistently seeks out new methods of digitizing multiple amounts of data, including drawings, texts, images, coordination and communication. One such way to enable this would be by using cloud and collaboration technologies.',
            slug: 'mobile-apps-construction-lifecycle',
            date: '2021-04-30T14:43:20.749Z',
            url: '7.md',
            img: '/assets/blogs/images/7-1.jpg',
            tags: ['digitization', 'construction', 'technology', 'lifecycle', 'collaboration'],
        },
        {
            title: 'What is the Potential of Smart Applications for Construction Management',
            description:
                'The most powerful feature that smart apps facilitate is offsite project management and instant plan sharing',
            slug: 'potential-smart-apps-construction-management',
            date: '2021-06-24T14:43:20.749Z',
            url: '8.md',
            img: '/assets/blogs/images/hello Yukti.jpg',
            tags: ['digitization', 'construction', 'technology', 'apps', 'collaboration'],
        },
        {
            title: 'Transitioning to Paperless Construction',
            description:
                'Going paperless is about realizing a dramatic increase in productivity for business. By making the switch to a digital solution, construction professionals will be able to save time, eliminate rework, reduce costs, protect their plans and improve accountability.',
            slug: 'paperless-construction',
            date: '2021-07-17T14:43:20.749Z',
            url: '9.md',
            tags: ['paperless', 'construction', 'technology', 'productivity', 'collaboration'],
        },
        {
            title: 'Tracking Minutes and Tasks of a Meeting',
            description:
                'Decisions taken need to be conveyed to all via efficient communication and then monitored and controlled to get things done!',
            slug: 'meeting-minutes',
            date: '2021-08-17T14:43:20.749Z',
            url: '10.md',
            tags: ['paperless', 'minutes of meeting', 'tasks', 'productivity', 'collaboration'],
        },
    ],
    news: [
        {
            title: 'Cut costs, increase productivity, promote collaboration',
            description: 'Merits of going paperless in architecture, engineering and construction with Buildsys.',
            date: '2021-09-22T14:43:20.749Z',
            publisher: 'Hotelier India',
            external: true,
            url: 'https://www.hotelierindia.com/design/17181-cut-cost-increase-productivity-promote-collaboration',
        },
        {
            title: 'Together for the long run',
            description:
                'Buildsys co-founders yukti and prateek arora on constructing their life and a business with each other.',
            date: '2021-02-21T14:43:20.749Z',
            img: '/assets/blogs/images/together.png',
            publisher: 'The Sunday Standard',
            external: true,
            url: 'https://www.newindianexpress.com/thesundaystandard/2021/feb/21/together-for-thelong-run-2266690.html',
        },
        {
            title: 'Our Founder Yukti Arora on Women’s Day',
            description:
                'Women need to take up more challenging roles in the construction domain. Women need to take a stand wherever required and put forward their point unapologetically. Times are changing and I hope to see more women representatives in the construction industry soon.',
            slug: 'womens-day-yukti-arora',
            date: '2021-03-08T14:43:20.749Z',
            img: '/assets/blogs/images/Yukti-Arora-Interview.JPG',
            publisher: '99 acres',
            external: true,
            url: '',
        },
        {
            title:
                'Lady bosses have a message for Class of 2021: Aspire to be in the C-suite, be bold and keep your options open',
            description: 'Our founder Yukti Arora featured on ET Panache',
            slug: 'lady-bosses-2021',
            date: '2021-03-03T14:43:20.749Z',
            publisher: 'The Economic Times | Panache',
            external: true,
            url: '',
        },
        {
            title: 'The process of construction requires informed decision making',
            description:
                'Yukti Arora, Co-Founder and CPO, Buildsys points out the challenges in remote construction management and how Buildsys can help simplify the process.',
            date: '2021-05-31T14:43:20.749Z',
            publisher: 'Ace Update',
            external: true,
            url:
                'https://aceupdate.com/2021/05/31/the-process-of-construction-requires-informed-decision-making-yukti-arora-buildsys/',
        },
        {
            title: '#LetsTalk Transitioning to Paperless Construction',
            description: 'Paperless construction with Buildsys',
            date: '2021-08-26T14:43:20.749Z',
            publisher: 'Architect and Interiors India',
            external: true,
            url:
                'https://www.architectandinteriorsindia.com/people/23748-letstalk-transitioning-to-paperless-construction-management',
        },

        {
            title: 'Construction productivity application heralds digital revolution in the industry',
            description:
                'Buildsys offers a streamlined construction process, reducing paperwork and enabling effective field-to-office communication',
            date: '2021-03-23T14:43:20.749Z',
            publisher: 'Construction Week',
            external: true,
            url:
                'https://www.constructionweekonline.in/business/17031-construction-productivity-application-heralds-digital-revolution-in-the-industry',
        },

        {
            title: 'Buildsys construction productivity app paves way for digital revolution in the industry',
            description:
                'Buildsys offers a streamlined construction process, reducing paperwork and enabling effective field-to-office communication',
            date: '2021-03-23T14:43:20.749Z',
            publisher: 'NBM & CW',
            external: true,
            url:
                'https://www.nbmcw.com/product-technology/technologies-digitilization-software/buildsys-construction-productivity-app-paves-way-for-digital-revolution-in-the-industry.html',
        },

        {
            title: 'Construction Technology Trade News',
            description:
                'Buildsys reduces paperwork and makes field-to-office communication faster, trackable and mobile.',
            date: '2021-03-12T14:43:20.749Z',
            publisher: 'Architecture+Design',
            external: true,
            url: 'https://www.dropbox.com/s/uitkqoi4ijtg84p/AD_2.jpeg?dl=0',
        },
    ],
};

export default X;
