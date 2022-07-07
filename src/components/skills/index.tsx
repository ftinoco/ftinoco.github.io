import { useObservableState, useSubscription } from "observable-hooks";
import { getSkillData$, skillData$ } from "../../services/skill-service";
import { ISkill } from "./interfaces";

export const Skill = () => {
    const skills = useObservableState<ISkill[]>(skillData$, []);
    useSubscription(getSkillData$, (s) => { skillData$.next(s) });

    return (
        <div className="section" id="skill">
            <div className="container">
                <div className="h4 text-center mb-4 title">Professional Skills</div>
                <div className="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <div className="card-body">
                        {skills.map((skill, idx, $skills) =>
                        (
                            ((idx % 2) === 0) &&
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="progress-container progress-primary">
                                        <span className="progress-badge">{skill.name}</span>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-primary" data-aos="progress-full"
                                                data-aos-offset="10" data-aos-duration="2000" role="progressbar"
                                                aria-valuenow={skill.percentage} aria-valuemin={0} aria-valuemax={100}
                                                style={{ width: `${skill.percentage}%` }}></div>
                                            <span className="progress-value">{skill.percentage}%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="progress-container progress-primary">
                                        <span className="progress-badge">{$skills[idx + 1].name}</span>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-primary" data-aos="progress-full"
                                                data-aos-offset="10" data-aos-duration="2000" role="progressbar"
                                                aria-valuenow={$skills[idx + 1].percentage} aria-valuemin={0} aria-valuemax={100}
                                                style={{ width: `${$skills[idx + 1].percentage}%` }}></div>
                                            <span className="progress-value">{$skills[idx + 1].percentage}%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}