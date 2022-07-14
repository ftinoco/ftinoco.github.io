import { BehaviorSubject, Observable, of } from "rxjs";
import { IReference } from "../components/references/interfaces";
import references from "../data/references.json";

export const referenceData$ = new BehaviorSubject<IReference[]>([]);
export const getReferenceData$: Observable<IReference[]> = of(references);
