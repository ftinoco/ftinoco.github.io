import { IEducation } from "../../components/education/interface";
import { IProject } from "../../components/project/interfaces";
import { IProfile } from "../../components/profile/interfaces";
import { IReference } from "../../components/references/interfaces";
import { ISkill } from "../../components/skills/interfaces";
import { IWorkExperience } from "../../components/work-experiences/interfaces";

export interface IAbout {
    description: string;
}

export interface ISocialMedia {
    icon: string;
    link: string;
    title: string;
}

export interface IContact {
    name: string;
    subject: string;
    replayTo: string;
    message: string;
}

export interface IPortfolio {
    profile: IProfile;
    socialMedia: ISocialMedia[];
    skills: ISkill[];
    projects: IProject[];
    workExperience: IWorkExperience[];
    educations: IEducation[];
    references: IReference[];
    contact: IContact;
}