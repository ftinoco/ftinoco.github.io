import { IAbout, ISocialMedia } from "../../utils/interfaces/interfaces";

export interface IProfileProps{
    fullName: string;
    profile:IProfile;
    socialMedias: ISocialMedia[];
}

export interface IProfile {
    firstName: string;
    lastName: string;
    profession: string;
    position: string;
    age: number;
    emails: {
        main: string;
        secundary: string;
    }
    phone: string;
    address: string;
    languages: ILanguage[];
    about: IAbout[];
    profileImage: string;
}

export interface ILanguage {
    name: string;
    level: string
}