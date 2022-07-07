import { IPortfolio } from "../utils/interfaces/interfaces"; 
import { defaultValues } from "../utils/consts/portfolio";
import { BehaviorSubject } from "rxjs";


export const profileData = new BehaviorSubject<IPortfolio>(defaultValues);
