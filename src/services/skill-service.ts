import { BehaviorSubject, Observable, of } from "rxjs";
import { ISkill } from "../components/skills/interfaces";
import skills from "../data/skills.json";

export const skillData$ = new BehaviorSubject<ISkill[]>([]);
export const getSkillData$: Observable<ISkill[]> = of(skills);
