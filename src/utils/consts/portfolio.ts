import { IPortfolio } from "../interfaces/interfaces";

export const defaultValues: IPortfolio = {
    contact: {
        message: '',
        name: '',
        replyTo: '',
        subject: ''
    },
    educationData: [],
    profile: {
        about: [],
        address: '',
        age: 30,
        emails: {
            main: '',
            secundary: ''
        },
        firstName: '',
        languages: [
            {
                name: '',
                level: ''
            }
        ],
        lastName: '',
        phone: '',
        position: '',
        profession: '',
        profileImage: ''
    },
    projects: [],
    references: [],
    skills: [],
    socialMedia: [
        {
            icon:'linkedin',
            link: 'https://www.linkedin.com/in/ftinococ45',
            title: 'Connect with me on Linkedin'
        }
    ],
    workExperience: []
}