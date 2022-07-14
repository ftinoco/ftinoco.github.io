import { BehaviorSubject, Observable, of } from "rxjs";
import { IProject } from "../components/project/interfaces";
import projects from "../data/projects.json";

export const projectData$ = new BehaviorSubject<IProject[]>([]);
export const getProjectData$: Observable<IProject[]> = of(projects);
