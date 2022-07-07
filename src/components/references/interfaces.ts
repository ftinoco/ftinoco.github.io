import { IAbout } from "../../utils/interfaces/interfaces";

export interface IReference {
    name: string;
    img: string;
    position: string;
    comments: IAbout[];
}