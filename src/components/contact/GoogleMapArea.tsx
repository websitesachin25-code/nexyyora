

import LocationIconContact from "@/svg/contact_icon/LocationIconContact";
import type { JSX } from "react";
const google_map_link = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3589.6592203606197!2d86.60673262540436!3d25.88069107727732!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ee3db26d7465dd%3A0x887c2455772b456a!2sNexyora!5e0!3m2!1sen!2sin!4v1765537115959!5m2!1sen!2sin"
type google_map_content_type = {
    sub_title: string;
    title: string;
    locations: {
        id: number;
        icon: JSX.Element;
        country: string;
        address: JSX.Element;
        address_link: string;
    }[];
}
const google_map_content: google_map_content_type = {
   sub_title: "OUR OFFICES",
   title: "Visit one of our offices around the World",
   locations: [
       {
           id: 1, 
           icon: <LocationIconContact />,
           country: "Patna",
           address: <>Kankarbagh Patna Pin : 800020 <br /> Patna Bihar</>,
           address_link: "https://www.google.com/maps/place/Nexyora/@25.8806911,86.6067326,17z",
       },
       {
           id: 1, 
           icon: <LocationIconContact />,
           country: "Saharsa",
           address: <>Saharsa College Of Engineering <br /> Adarsh Nagar</>,
           address_link: "https://www.google.com/maps/place/Nexyora/@25.8806911,86.6067326,17z",
       },
   ]
}
const {sub_title, title, locations} = google_map_content

const GoogleMapArea = () => {
    return (
        <>
            <section className="map-area map-wrapper">
                <div className="container">
                    <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="map-wrap">
                            <div className="map-content">
                                <span>{sub_title}</span>
                                <h4 className="map-title">{title}</h4>
                            </div>
                            <ul>
                                {locations.map((item, i)  => 
                                    <li key={i}>
                                        <div className="location">
                                            <div className="location-icon">
                                                <span>{item.icon}</span>
                                            </div>
                                            <div className="location-content">
                                                <h4 className="location-title">{item.country}</h4>
                                                <p><a target="_blank" href={item.address_link}>{item.address}</a></p>
                                            </div>
                                        </div>
                                    </li>                                
                                )} 
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="map-bg">
                            <iframe src={google_map_link}></iframe>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default GoogleMapArea;