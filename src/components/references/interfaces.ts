import { IAbout } from "../../utils/interfaces/interfaces";

export interface IReference {
    name: string;
    img: string;
    isImg: boolean;
    position: string;
    comments: IAbout[];
}