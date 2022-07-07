import { IAbout } from "../../utils/interfaces/interfaces";

export interface IProfile {
    firstName: string;
    lastName: string;
    profession: string;
    position: string;
    age: number;
    email: {
        main: string;
        secundary: string;
    }
    phone: string;
    adress: string;
    languages: ILanguage[];
    about: IAbout[]
}

export interface ILanguage {
    name: string;
    level: string
}