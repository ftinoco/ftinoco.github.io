import { IAbout } from "../../interfaces";

export interface IWorkExperienceProps {
    data: IWorkExperience[];
}

export interface IWorkExperience {
    company: string;
    role: string;
    startDate: string;
    endDate: string;
    about: IAbout[];
    url: string;
    stack: IStack[];
}

export interface IStack {
    name: string;
}