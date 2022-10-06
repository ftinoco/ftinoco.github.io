import { EMAIL_SENDER_ENDPOINT } from "../utils/consts";
import { IContact } from "../utils/interfaces/interfaces";

export const sendEmail = async (emailInfo: IContact) => {
    let message;
    let isSuccessful = false;

    const opts = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            message: emailInfo.message,
            name: emailInfo.name,
            Subject: emailInfo.subject,
            _replyto: emailInfo.replyTo
        })
    };

    try {
        const response = await fetch(EMAIL_SENDER_ENDPOINT, opts);
        if (!response.ok) {
            throw Error(response.status + ' ' + response.statusText)
        } else {
            isSuccessful = true;
            message = 'Thanks for contacting me. I will contact you as soon as possible';
        }
    } catch (error) {
        message = error;
    }

    return { isSuccessful, message };
}