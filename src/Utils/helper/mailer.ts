import config from "@/Config";
import CustomError from "@/Utils/errors/customError.class";
import { MailtrapClient } from "mailtrap";

type TMailPayload = {
    receiverEmail: string, subject: string, html: string, category: string
}

export const sendAMail = async ({
                                    receiverEmail, category, subject, html
                                }: TMailPayload) => {

    const {token} = config.mail

    const sender = {
        email: "support@trelyt.store",
        name: "Trelyt Support",
    };

    const recipients = [
        {
            email: receiverEmail,
        }
    ];

    const client = new MailtrapClient({token});

    // console.log('pre mail', {
    //     from: sender,
    //     to: recipients,
    //     subject,
    //     html,
    //     category
    // })
    client
        .send({
            from: sender,
            to: recipients,
            subject,
            html,
            category
        })
        .then((res => {
            console.log(res)
            return res.success
        }))
        .catch(err => {
            console.error(err)
            throw new CustomError(err.message, 500)
        });
}
