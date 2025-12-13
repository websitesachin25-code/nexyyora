"use client";
import Image from "next/image";
import video_bg_img from "@/assets/img/video/video-bg-1.jpg";
import VideoIcon from "@/svg/services_icon/VideoIcon";
import { useVideoModal } from "@/provider/VideoProvider";

const MediaVideoArea = () => {
  const { playVideo } = useVideoModal();
  return (
    <section className="video-area pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="video-inner-wrap">
              <div className="video-inner-bg">
                <Image src={video_bg_img} alt="theme-pure" />
                <div className="video-inner-content">
                  <h4 className="video-inner-title">
                    Social <br /> Media Marketing
                  </h4>
                </div>
                <div className="video-inner-icon">
                  <a
                    className="popup-video"
                    onClick={() => playVideo("qmGYnJgCW1o")}
                    style={{ cursor: "pointer" }}
                  >
                    <span>
                      {" "}
                      <VideoIcon />{" "}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaVideoArea;
