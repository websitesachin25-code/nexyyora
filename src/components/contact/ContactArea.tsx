
import EmailIconContact from "@/svg/contact_icon/EmailIconContact";
import PhoneIconContact from "@/svg/contact_icon/PhoneIconContact";
import RightArrowIconContact from "@/svg/contact_icon/RightArrowIconContact";
import { SocialLinksTwo } from "../common/social-links";
import ContactUs from "../forms/ContactUs";


import type { JSX } from "react";


type contact_conent_type = {
    title: string;
    sm_info: JSX.Element;
    email: string;
    phone: string;
    btn_text: string;
}

const contact_conent: contact_conent_type = {
    title: "Get in Touch with Nexyora",
    sm_info: <>Reach out to us anytime. Nexyora is here to guide you, <br/>Support you, and help your business grow.</>,
    email: "nexyora@gmail.com",
    phone: "+91 99559 82901",
    btn_text: "Contact Us",
}
const { title, sm_info, email, phone, btn_text } = contact_conent

const ContactArea = () => {
    return (
        <>
            <section className="contact-area contact-bg pt-200">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6">
                            <div className="contact-content mb-30">
                                <h4 className="contact-title">{title}</h4>
                                <p>{sm_info}</p>
                                <div className="contact-info">
                                    <a href={`mailto:${email}`} className="contact-mail mb-15">
                                        <span><EmailIconContact /></span>
                                        {email}
                                        <i> <RightArrowIconContact /> </i>
                                    </a>
                                    <a href={`tel:${phone}`} className="contact-mail mb-20">
                                        <span><PhoneIconContact /></span>
                                        {phone}
                                        <i> <RightArrowIconContact /> </i>
                                    </a>
                                </div>
                                <div className="contact-social">
                                    <SocialLinksTwo />
                                </div>
                            </div>
                        </div>
                        <div className="offset-xl-1 col-xl-6 col-lg-6">
                            <div className="contact-form">
                                <h4 className="contact-form-title">{btn_text}</h4>
                                <ContactUs />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactArea;