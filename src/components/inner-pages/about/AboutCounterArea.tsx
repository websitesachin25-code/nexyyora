
import Image, { StaticImageData } from "next/image";
import counter_shape_1 from "@/assets/img/shape/counter-shape-1.png";
import counter_shape_2 from "@/assets/img/shape/counter-shape-2.png";
import counter_shape_3 from "@/assets/img/shape/counter-shape-3.png";
import Count from "@/components/common/count";

import type { JSX } from "react";

type about_content_type = {
    id: number,
    cls: string,
    img: StaticImageData,
    count_number: number,
    type: string,
    info: JSX.Element,
}
const about_counter: about_content_type[] = [
    {
        id: 1,
        cls: "",
        img: counter_shape_1,
        count_number: 7,
        type: "count",
        info: <>Years <br /> Of Experience</>,
    },
    {
        id: 2,
        cls: "ml-70",
        img: counter_shape_2,
        count_number: 621,
        type: "count",
        info: <>Project <br /> Completed</>,
    },
    {
        id: 3,
        cls: "d-flex justify-content-end",
        img: counter_shape_3,
        count_number: 153,
        type: "count",
        info: <>Satisfied Clients <br /><strong>7<span style={{ transform: "translateY(-2px)", display: "inline-block" }}>+</span></strong>Countries
        </>
    },

]

const AboutCounterArea = () => {
    return (
        <>
            <div className="counter-area pb-120">
                <div className="container">
                    <div className="counter-border">
                        <div className="row">
                            {about_counter.map((item, i) =>
                                <div key={i} className="col-lg-4 col-md-6">
                                    <div className={`inner-counter ${item.cls}`}>
                                        <div className={`inner-counter-shape inner-counter-shape-${item.id}`}>
                                            <Image src={item.img} alt="theme-pure" />
                                        </div>
                                        <div className="inner-counter-count d-flex align-items-center">
                                            <div className="inner-counter-list">
                                                <span data-purecounter-duration="1" data-purecounter-end="340" className="purecounter">
                                                    <Count number={item.count_number} type={item.type} />
                                                </span>
                                            </div>
                                            <div className="inner-counter-info">
                                                <span>{item.info}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutCounterArea;