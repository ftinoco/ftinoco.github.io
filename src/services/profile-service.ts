import { IPortfolio } from "../utils/interfaces/interfaces";
import { BehaviorSubject, Observable, of } from 'rxjs';
import { defaultValues } from "../utils/consts/portfolio";


export const profileData = new BehaviorSubject<IPortfolio>(defaultValues);
