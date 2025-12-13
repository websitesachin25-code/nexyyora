'use client'
import Image from "next/image";
import hand from "@/assets/img/shape/inner-hand-1.png";
import shape_1 from "@/assets/img/shape/about-inner-shape-1.png";
import shape_2 from "@/assets/img/shape/about-inner-shape-2.png"; 
import MouseParallax from "@/utils/MouseParallax";

const BreadcrumbEight = () => {
    return (
        <div className="breadcrumb-services-area services-details-bg scene breadcrumb-bg p-relative overflow-hidden">
            <div className="about-inner-shape">
                {/* Shape 1 */}
                <MouseParallax factorX={0.07} factorY={0.07} className="about-inner-shape-2 d-none d-md-block">
                    <Image className="layer" data-depth="0.5" src={shape_1} alt="theme-pure" />
                </MouseParallax>

                {/* Shape 2 */}
                <MouseParallax factorX={0.07} factorY={0.07} className="about-inner-shape-3 d-none d-md-block">
                    <Image className="layer" data-depth="0.5" src={shape_2} alt="theme-pure" />
                </MouseParallax>

            </div>

            {/* Hand Shape */}
            <MouseParallax factorX={0} factorY={0.1} className="tpbanner-shape-y scene-y about-inner-shape-4 d-none d-lg-block">
                <Image className="layer" data-depth="0.6" src={hand} alt="theme-pure" />
            </MouseParallax>
        </div>
    );
};

export default BreadcrumbEight;
