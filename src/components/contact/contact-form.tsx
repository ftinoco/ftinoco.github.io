import { useForm } from 'react-hook-form';
import { IContact } from "../../utils/interfaces/interfaces";
import { sendEmail } from "../../services/email-service";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const ContactForm = () => {
    const MySwal = withReactContent(Swal);

    const {
        register,
        handleSubmit,
        reset,
        clearErrors,
        formState: { errors }
    } = useForm({ mode: 'all' });

    const onClearHandler = () => {
        reset();
        clearErrors();
    }

    const onSubmitHandler = async (info: IContact) => {
        MySwal.fire({
            title: 'Sending...',
            timerProgressBar: true,
            didOpen: () => {
                MySwal.showLoading();
            },
        })
        await sendEmail(info).then((result) => {
            MySwal.close();
            if (result.isSuccessful) {
                MySwal.fire({
                    icon: 'success',
                    title: 'Email has been sent',
                    text: result.message as string,
                    allowOutsideClick: false
                }).then(() => {
                    reset();
                });
            } else {
                MySwal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    allowOutsideClick: false
                });
                console.debug(result.message);
            }
        });
    }

    return (
        <div className="contact-frm">
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmitHandler)} autoComplete="off">
                    <div className="h4 title">Send a message</div>
                    <div className="row mb-3">
                        <div className="col">
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="fa fa-user-circle"></i>
                                </span>
                                <input type="text"
                                    placeholder="Name"
                                    className="form-control"
                                    data-testid="name"
                                    {...register('name', {
                                        maxLength: {
                                            message: 'Enter a maximum of 64 characters.',
                                            value: 64
                                        },
                                        required: {
                                            message: 'This field is required.',
                                            value: true
                                        }
                                    })} />
                            </div>
                            {errors?.name &&
                                <label role="error"
                                    data-testid="name-error"
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
                                <input type="text"
                                    className="form-control"
                                    placeholder="Subject"
                                    {...register('subject', {
                                        maxLength: {
                                            message: 'Enter a maximum of 128 characters.',
                                            value: 128
                                        },
                                        required: {
                                            message: 'This field is required.',
                                            value: true
                                        }
                                    })} />
                            </div>
                            {errors?.subject &&
                                <label role="error"
                                    style={{ display: 'block' }}
                                    data-testid="subject-error"
                                    className="error mt-2 invalid-feedback">
                                    {errors?.subject?.message as string}
                                </label>
                            }
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="fa fa-envelope"></i>
                                </span>
                                <input type="text"
                                    className="form-control"
                                    placeholder="E-mail"
                                    data-testid="email"
                                    {...register('replyTo', {
                                        maxLength: {
                                            message: 'Enter a maximum of 64 characters.',
                                            value: 64
                                        },
                                        required: {
                                            message: 'This field is required.',
                                            value: true
                                        },
                                        pattern: {
                                            message: 'Invalid email.',
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                                        }
                                    })} />
                            </div>
                            {errors?.replyTo &&
                                <label role="error"
                                    style={{ display: 'block' }}
                                    data-testid="email-error"
                                    className="error mt-2 invalid-feedback">
                                    {errors?.replyTo?.message as string}
                                </label>
                            }
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <div className="form-group">
                                <textarea className="form-control"
                                    placeholder="Your Message"
                                    data-testid="message"
                                    {...register('message', {
                                        maxLength: {
                                            message: 'Enter a maximum of 512 characters.',
                                            value: 512
                                        },
                                        required: {
                                            message: 'This field is required.',
                                            value: true
                                        }
                                    })}>
                                </textarea>
                            </div>
                            {errors?.message &&
                                <label role="error"
                                    style={{ display: 'block' }}
                                    data-testid="message-error"
                                    className="error mt-2 invalid-feedback">
                                    {errors?.message?.message as string}
                                </label>
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button className="btn btn-outline-primary"
                                onClick={(e) => {
                                    e.preventDefault();
                                    onClearHandler()
                                }}
                                data-testid="btn-clear">
                                CLEAR
                            </button>
                            <button type="submit"
                                className="btn btn-outline-primary"
                                data-testid="btn-send">
                                SEND MESSAGE
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
