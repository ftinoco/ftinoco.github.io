import { IPortfolio } from "../interfaces/interfaces";

export const defaultValues: IPortfolio = {
    contact: {
        message: '',
        name: '',
        replayTo: '',
        subject: ''
    },
    educations: [],
    profile: {
        about: [],
        adress: '',
        age: 30,
        email: {
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
        profession: ''
    },
    projects: [],
    references: [],
    skills: [],
    socialMedia: [],
    workExperience: []
}