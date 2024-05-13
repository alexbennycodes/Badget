import React from "react";

const images = [
  "/logo/logo-1.png",
  "/logo/logo-2.png",
  "/logo/logo-3.png",
  "/logo/logo-4.png",
  "/logo/logo-5.png",
  "/logo/logo-6.png",
  "/logo/logo-7.png",
];

const SocialProof = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative h-20 w-[200%] overflow-hidden">
        <div className="animate animate-infinite-scroll absolute left-0 flex h-20 w-[200%] items-center justify-around gap-20">
          {images.map((i) => {
            return (
              <div className="flex w-[95px] items-start justify-center" key={i}>
                <img src={i} className="text-primary" />
              </div>
            );
          })}
          {images.map((i) => {
            return (
              <div className="flex w-[95px] items-start justify-center" key={i}>
                <img src={i} className="text-primary" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
