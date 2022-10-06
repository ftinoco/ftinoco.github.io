import { IPortfolio } from "../interfaces/interfaces";

export const MAX_WORK_EXPERIENCE_TO_SHOW = 3;

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
    socialMedia: [],
    workExperience: []
}