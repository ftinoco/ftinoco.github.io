import { IPortfolio } from "../interfaces/interfaces";

export const defaultValues: IPortfolio = {
    contact: {
        message: '',
        name: '',
        replyTo: '',
        subject: ''
    },
    educationData: [{
        title: "Computing Engineer",
        institution: "Harvard University",
        startDate: 2010,
        endDate: 2015,
        degree: "Bachelor's Degree",
        description: "<p>I graduated as a Computing Engineer</p>",
        credentials: ""
    }],
    profile: {
        about: [
            { description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at justo justo. Nulla id metus ultrices, semper sapien nec, porta elit. Suspendisse lacinia in urna sed consectetur. Nulla elit nisi, luctus non efficitur eu, placerat in risus. Nunc viverra vehicula varius. Pellentesque ornare ullamcorper eleifend.' },
            { description: 'Praesent vitae dolor venenatis, placerat nibh sed, venenatis ligula. Curabitur ac sodales erat. Nunc quis metus vestibulum, convallis erat fringilla, sagittis lacus. Curabitur semper sit amet arcu vitae ultricies. Nulla hendrerit tristique velit, eu tristique quam imperdiet non.' },
            { description: 'Cras leo lorem, porta ac posuere vel, pellentesque dignissim leo. Vivamus euismod turpis et magna congue pulvinar. Donec vitae leo in urna lacinia feugiat. Sed mollis, dolor bibendum ultricies scelerisque, tortor eros gravida odio, sed sodales nunc ligula vel libero.' }
        ],
        address: 'Managua, Nicaragua',
        age: 30,
        emails: {
            main: 'ftinococ.45@gmail.com',
            secundary: 'ftinoco45@yahoo.com'
        },
        firstName: 'John',
        languages: [
            {
                name: 'English',
                level: 'Native'
            },
            {
                name: 'French',
                level: 'B2'
            },
            {
                name: 'Spanish',
                level: 'C1'
            }
        ],
        lastName: 'Doe',
        phone: '+1 562 5623',
        position: 'Web designer',
        profession: 'Web designer',
        profileImage: ''
    },
    projects: [
        {
            title: "Sender Email",
            img: "images/project-2.jpg",
            role: "Python/Flask Development",
            url: "https://github.com/ftinoco/flask_sender_email"
        },
        {
            img: "images/project-4.jpg",
            title: ".NET Core Utils Project",
            role: "Class Library Package",
            url: "https://www.nuget.org/packages/NetCoreCommon/"
        }
    ],
    references: [
        {
            img: "JR",
            isImg: false,
            name: "Jorge Rivera",
            position: "AWS Certified | Scrum Certified | SQL Server | .NET C# | Consultant",
            comments: [
                {
                    "description": "Fernando is a dedicated and proactive professional. During the time we shared in VersaTec, he worked with ASP.NET, C# and SQL Server in different projects, and he proved to improve and grow in knowledge and skills."
                },
                {
                    "description": "I have no doubt that any company that decides to acquire his services is winning a great professional who will help it to achieve its goals."
                }
            ]
        },
        {
            img: "WP",
            isImg: false,
            name: "William Palacios",
            position: "Software Engineer at PayPal",
            comments: [
                {
                    "description": "Fernando is one of the best professionals and .NET developers I have worked with, he has outstanding leadership skills, his passion for excellence and continuous improvement, always lead him to apply the best software development standards and practices."
                },
                {
                    "description": "I had the pleasure to work with Fernando a few years ago, and I was very impressed with his technical quality and soft skills, definitely a great team player. He has my full confidence and recommendation, I'm sure he will be able to exceed the expectations of any team, and will be a fundamental piece to achieve the goals of any organization."
                }
            ]
        },
        {
            img: "images/reference-image-1.jpg",
            isImg: true,
            name: "Luis Fernández",
            position: "Chief Technology Officer & Co-Founder en UNLIMITED PGASUS S.A. DE C.V.",
            comments: [
                {
                    "description": "Fernando is a developer of great technical capacity, attentive to details and above all careful to always deliver products that follow the best development practices, quality standards and testing."
                },
                {
                    "description": "He is very focused on delivering his activities as soon as possible and is attentive to his colleagues in order to overcome project problems as a team."
                }
            ]
        }
    ],
    skills: [
        {
            name: "ASP.NET / ASP.NET CORE",
            percentage: 80
        },
        {
            name: "Azure DevOps",
            percentage: 60
        },
        {
            name: "React",
            percentage: 40
        }
    ],
    socialMedia: [
        {
            icon: 'linkedin',
            link: 'https://www.linkedin.com/in/ftinococ45',
            title: 'Connect with me on Linkedin'
        },
        {
            icon: 'github',
            link: 'https://github.com/ftinoco',
            title: 'Connect with me on Github'
        }
    ],
    workExperience: [
        {
            company: "Saongroup / Stepstone",
            role: ".NET Developer",
            startDate: "August 2021",
            endDate: "Current",
            about: [
                {
                    description: "My first job where I work alongside european people."
                },
                {
                    description: "Currently I am working here, the experience in the company has been great as allows me learn about new technologies such as react. In addition, it allows me interact with irish, polish and salvadorean colleague."
                },
                {
                    description: "My main responsabilities here is develop and maintenence of existing job sites. But currently I working on a project react and its ecosystem, developing unit testing for react components."
                }
            ],
            url: "https://www.stepstone.com/en/",
            stack: [
                { name: ".Net Core" },
                { name: "C#" },
                { name: "ASP.NET" },
                { name: "Javascript" },
                { name: "Jira" },
                { name: "MSSQL Server" },
                { name: "React" },
                { name: "SCRUM" }
            ]
        },
        {
            company: "Opticall BPO",
            role: "Senior Software Developer",
            startDate: "April 2021",
            endDate: "August 2021",
            about: [
                { description: "My first contact with English in professional environment." },
                {
                    description: "My main dutties were the maintenance of the business application. Development of new functionalities for the managed care, inventory and sales department. Collaboration with Indian developers and American coordinator, in addition, with the staff of the department where I was responsible for developing new functionalities."
                }
            ],
            url: "https://www.opticallbpo.com/",
            stack: [
                { name: ".Net framework" },
                { name: "C#" },
                { name: "ASP.NET MVC" },
                { name: "Javascript" },
                { name: "Jira" },
                { name: "MSSQL Server" },
                { name: "jQuery" }
            ]
        },
        {
            company: "Consulting Group",
            role: "Development Engineer Consultant",
            startDate: "Octuber 2019",
            endDate: "March 2021",
            about: [
                { description: "Great place to work." },
                {
                    description: "I was worked as a developer 100% remotely. My main functions there are develop business solutions for our clients in throughout Central American region."
                },
                {
                    description: "Among my greatest achievements in the company is the development and implementation of cost-effectiveness calculation processes for Central American Bank, in technologies such as Oracle, DevExtreme, C# and ASP.NET MVC 5."
                }
            ],
            url: "https://www.cgclatam.com/",
            stack: [
                { name: "Oracle" },
                { name: "DevExtreme" },
                { name: "C#" },
                { name: "ASP.NET MVC 5" },
                { name: "Javascript" },
                { name: "Azure DevOps" },
                { name: "SCRUM" },
                { name: ".NET Core" },
                { name: "MSSQL Server" }
            ]
        },
        {
            company: "Xolo S.A",
            role: "Programmer Analyst",
            startDate: "March 2016",
            endDate: "September 2019",
            about: [
                { description: "The place where I got most of my professional experience." },
                {
                    description: "I worked here around 4 years, in that time I performed as a programmer analyst where my duties were develop, test and implement business sofware solutions for many companies in Nicaragua, both private and public sectors."
                },
                {
                    description: "Among my outstanding performance, I can outstanding development of the Agricultural Quarentine System for a government institution here in Nicaragua, this project was my most important development in the company because it had a great impact on the control of import of agricultural products in the country, optimizing and improving this process. For this project we use technologies such as ASP.NET MVC 5, MSSQL Server, ASP.NET Web Api."
                }
            ],
            url: "http://www.xolosa.com/",
            stack: [
                { name: "Oracle" },
                { name: "MSSQL Server" },
                { name: "C#" },
                { name: "ASP.NET MVC 5" },
                { name: "Javascript" },
                { name: "Java" },
                { name: "ASP.NET Web API" },
                { name: "VB.NET" },
                { name: "ZK" },
                { name: "Entity Framework" }
            ]
        },
        {
            company: "Versatec",
            role: "Technical Developer I",
            startDate: "Octuber 2013",
            endDate: "July 2015",
            about: [
                { description: "My beginnings." },
                {
                    description: "In this company I started my career as a software developer, here I was given the opportunity to show my skills when I was still a university student. Here I was part of many projects based on the .NET platform."
                },
                {
                    description: "I worked on vehicle fleet control system, generic reporting application based on Devexpress suite, but my most important participation was in development of payroll system for a company that provided the payroll control as service in Panama, for this development was used Devexpress suite, C#, MSSQL Server and ASP.NET Webform."
                }
            ],
            url: "http://www.versateclatam.com/",
            stack: [
                { name: "ASP.NET Webform" },
                { name: "MSSQL Server" },
                { name: "C#" },
                { name: "Devexpress suite" },
                { name: "Javascript" },
                { name: "VB.NET" },
                { name: "jQuery" }
            ]
        }
    ]
}