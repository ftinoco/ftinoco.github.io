import { ContactInfo } from "./contact-info";
import { ContactForm } from "./contact-form";

import './index.css';

export const Contact = () => {

    return (
        <div className="section" id="contact">
            <div className="cc-contact-information">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124838.77655773303!2d-86.32850087786538!3d12.097650227236846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f71560dd907880b%3A0x6c5ef4a2144f4c6a!2sManagua!5e0!3m2!1sen!2sni!4v1665608868740!5m2!1sen!2sni"
                    width="600" height="450" style={{ border: 0 }}
                    loading="lazy" className="background">
                </iframe>
                <div className="container">
                    <div className="cc-contact">
                        <div className="row justify-content-center">
                            <div className="col-md-10">
                                <div className="card mb-0" data-aos="zoom-in">
                                    <div className="h2 title">GET IN TOUCH WITH ME</div>
                                    <div className="row col-md-12">
                                        <div className="col-md-4">
                                            <div className="h4 title">Contact me</div>
                                            <p>
                                                Whether you have an interesting project or just want to say hi, feel free to shoot me a message.
                                            </p>
                                            <ContactInfo />
                                        </div>
                                        <div className="col-md-8">
                                            <ContactForm />
                                        </div>
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