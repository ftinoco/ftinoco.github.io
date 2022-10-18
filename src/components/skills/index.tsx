import { useObservableState, useSubscription } from "observable-hooks";
import { getSkillData$, skillData$ } from "../../services/skill-service";
import { ISkill } from "./interfaces";
import * as Utils from '../../utils';

import './index.css'

export const Skill = () => {
    const skills = useObservableState<ISkill[]>(skillData$, []);
    useSubscription(getSkillData$, (s) => { skillData$.next(s) });

    return (
        <div className="section" id="skill">
            <div className="container">
                <div className="h4 text-center mb-4 title">Technical Skills</div>
                <div className="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    {skills.map((skill, idx) =>
                                    (
                                        <div key={idx} className="col-lg-3 col-md-2 col-sm-5">
                                            <div className="progress-container progress-primary">
                                                <div className="skill-svg"
                                                    dangerouslySetInnerHTML={Utils.sanitizedData(skill, 'icon')} />
                                                <span className="progress-badge">{skill.name}</span>
                                            </div>
                                        </div>
                                    )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}