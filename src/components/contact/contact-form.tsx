import { EMAIL_SENDER_ENDPOINT } from "../../utils/consts";
import { useForm } from 'react-hook-form';

export interface EmailInfo {
    name?: string;
}

export const ContactForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ mode: 'all' });

    const onSubmitHandler = (info: EmailInfo) => {
        console.log('submiting...'); 
        console.log(info);
    }

    return (
        <div className="col-md-6">
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmitHandler)} action={EMAIL_SENDER_ENDPOINT}
                    autoComplete="off" method="POST" id="frmContact">
                    <div className="p pb-3">
                        <strong>Feel free to contact me</strong>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="fa fa-user-circle"></i>
                                </span>
                                <input type="text"
                                    placeholder="Name"
                                    className="form-control"
                                    {...register('name', {
                                        maxLength: {
                                            message: 'Enter a maximum of 50 characters.',
                                            value: 50
                                        },
                                        required: {
                                            message: 'This field is required.',
                                            value: true
                                        }
                                    })} />
                            </div>
                            {errors?.name &&
                                <label id="name-error"
                                    style={{ display: 'block' }}
                                    className="error mt-2 invalid-feedback">
                                    {errors?.name?.message as string}
                                </label>
                            }
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="fa fa-file-text"></i>
                                </span>
                                <input className="form-control" type="text" name="Subject" placeholder="Subject" />
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="fa fa-envelope"></i>
                                </span>
                                <input className="form-control" type="email" name="_replyto" placeholder="E-mail" />
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <div className="form-group">
                                <textarea className="form-control" name="message" placeholder="Your Message" maxLength={500}>
                                </textarea>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button type="submit"
                                className="btn btn-primary" >
                                Send
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}