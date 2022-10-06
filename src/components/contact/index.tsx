import { ContactInfo } from "./contact-info";
import { ContactForm } from "./contact-form";

export const Contact = () => {

    return (
        <div className="section" id="contact">
            <div className="cc-contact-information"
                style={{
                    backgroundImage: "url('images/staticmap.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}>
                <div className="container">
                    <div className="cc-contact">
                        <div className="row justify-content-center">
                            <div className="col-md-10">
                                <div className="card mb-0" data-aos="zoom-in">
                                    <div className="h4 text-center title">Contact Me</div>
                                    <div className="row">
                                        <ContactForm />
                                        <ContactInfo />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}