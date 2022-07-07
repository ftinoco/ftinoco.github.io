import { defaultValues } from "../utils/consts/portfolio";
import { BehaviorSubject, combineLatest, map, Observable, of } from "rxjs";
import { IProfile } from "../components/profile/interfaces";
import { IPortfolio } from "../utils/interfaces/interfaces";

import profile from "../data/data.json";
import socialMedias from "../data/social-media.json";

export const portfolioData$ = new BehaviorSubject<IPortfolio>(defaultValues);
export const getPorfolioData$: Observable<IPortfolio> = combineLatest([
    of(profile),
    of(socialMedias)
]).pipe(
    map(([profile, socialMedias]) => {
        const portfolio: IPortfolio = {
            profile: (profile as unknown) as IProfile,
            socialMedia: socialMedias
        };
        return portfolio;
    })
); 
