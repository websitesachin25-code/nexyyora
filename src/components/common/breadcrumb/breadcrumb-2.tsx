"use client";

import Image from "next/image";
import hand_img from "@/assets/img/shape/inner-hand-1.png";
import breadcrumb_shape_1 from "@/assets/img/shape/about-inner-shape-1.png";
import breadcrumb_shape_2 from "@/assets/img/shape/about-inner-shape-2.png";
import { Parallax } from "react-scroll-parallax";

const BreadcrumbTwo = () => {
  return (
    <div className="breadcrumb-services-area services-details-bg scene breadcrumb-bg p-relative">

      {/* Shapes Container */}
      <div className="about-inner-shape">

        {/* Shape 1 */}
        <Parallax speed={-10} rotate={[0, 5]} scale={[1, 1.1]}>
          <div className="about-inner-shape-2">
            <Image src={breadcrumb_shape_1} alt="theme-pure" />
          </div>
        </Parallax>

        {/* Shape 2 */}
        <Parallax speed={10} rotate={[0, -5]} scale={[1, 1.05]}>
          <div className="about-inner-shape-3">
            <Image src={breadcrumb_shape_2} alt="theme-pure" />
          </div>
        </Parallax>

      </div>

      {/* Hand Shape */}
      <Parallax speed={-20} opacity={[0.9, 1]}>
        <div className="about-inner-shape-4 d-none d-lg-block">
          <Image src={hand_img} alt="theme-pure" />
        </div>
      </Parallax>

    </div>
  );
};

export default BreadcrumbTwo;
