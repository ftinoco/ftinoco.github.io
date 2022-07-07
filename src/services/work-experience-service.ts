
import { BehaviorSubject, Observable, of } from "rxjs";
import { IWorkExperience } from "../components/work-experiences/interfaces";
import workExperiences from "../data/work-expiriences.json";

export const workExperienceData$ = new BehaviorSubject<IWorkExperience[]>([]);
export const getWorkExperienceData$: Observable<IWorkExperience[]> = 
of(workExperiences);
