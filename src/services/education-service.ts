import { BehaviorSubject, Observable, of } from "rxjs";
import { IEducation } from "../components/education/interface"; 
import education from "../data/educations.json";

export const educationData$ = new BehaviorSubject<IEducation[]>([]);
export const getEducationData$: Observable<IEducation[]> = of(education);
