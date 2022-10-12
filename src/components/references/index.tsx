import { useObservableState, useSubscription } from "observable-hooks";
import { getReferenceData$, referenceData$ } from "../../services/reference-service";
import { IReference } from "./interfaces";

import './index.css';

export const Reference = () => {
    const references = useObservableState<IReference[]>(
        referenceData$, []
    );
    useSubscription(getReferenceData$, (r) => { referenceData$.next(r) });

    const getActiveClass = (index: number) => {
        return index === 0 ? "active" : "";
    }
    return (
        <div className="section" id="reference">
            <div className="container cc-reference">
                <div className="h4 mb-4 text-center title">References</div>
                <div className="card" data-aos="zoom-in">
                    <div className="carousel slide" id="cc-Indicators" data-ride="carousel">
                        <ol className="carousel-indicators">
                            {
                                references.map((reference, idx) =>
                                    <li key={idx}
                                        className={getActiveClass(idx)}
                                        data-target="#cc-Indicators"
                                        data-slide-to={idx}>
                                    </li>
                                )
                            }
                        </ol>
                        <div className="carousel-inner">
                            {
                                references.map((reference, idx) =>
                                    <div key={idx} className={`carousel-item ${getActiveClass(idx)}`}>
                                        <div className="row">
                                            <div className="col-lg-3 col-md-4 cc-reference-header">
                                                <div className="avatar">
                                                    {reference.isImg ? (
                                                        <>
                                                            <div className="avatar__letters">
                                                                <img src={reference.img} />
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <div className="avatar__letters">{reference.img}</div>
                                                        </>
                                                    )}
                                                </div>
                                                <div className="h5 pt-2">{reference.name}</div>
                                                <p className="category">{reference.position}</p>
                                            </div>
                                            <div className="col-lg-9 col-md-8">
                                                {reference.comments.map((comment, i) => <p key={i}>{comment.description}</p>)}
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}