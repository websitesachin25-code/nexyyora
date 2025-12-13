'use client'

import Image from "next/image";

import shape_1 from "@/assets/img/shape/about-inner-shape-1.png";
import shape_2 from "@/assets/img/shape/about-inner-shape-2.png";
import shape_3 from "@/assets/img/shape/inner-hand-1.png";
import shape_4 from "@/assets/img/banner/pricing-banner-shape.png";
import MouseParallax from "@/utils/MouseParallax";

const BreadcrumbSix = () => {
  return (
    <div className="breadcrumb-services-area pricing-inner-bg scene breadcrumb-bg p-relative overflow-hidden">

      <div className="about-inner-shape">

        {/* Shape 1 */}
        <MouseParallax factorX={0.1} factorY={0.2} className="about-inner-shape-2">
          <Image className="layer" src={shape_1} alt="theme-pure" />
        </MouseParallax>

        {/* Shape 2 */}
        <MouseParallax factorX={0.1} factorY={0.2} className="about-inner-shape-3 d-none d-lg-block">
          <Image className="layer" src={shape_2} alt="theme-pure" />
        </MouseParallax>

      </div>

      {/* Hand Shape */}
      <MouseParallax factorX={0} factorY={0.2} className="tpbanner-shape-y scene-y about-inner-shape-4 d-none d-lg-block">
        <Image className="layer" src={shape_3} alt="theme-pure" />
      </MouseParallax>

      {/* Shape 4 */}
      <MouseParallax factorX={0.1} factorY={0.2} className="about-inner-shape-5 d-none d-lg-block">
        <Image src={shape_4} alt="theme-pure" />
      </MouseParallax>

    </div>
  );
};

export default BreadcrumbSix;
