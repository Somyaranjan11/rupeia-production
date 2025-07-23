"use client";

import { useEffect, useRef, useState } from "react";
import referalScratchCard from "../../components/Images/referal-scrath-card.png";
import { GoCopy } from "react-icons/go";

export default function ScratchCard({ secretCode }) {
  const canvasRef = useRef(null);
  const [scratched, setScratched] = useState(false);
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;

    const image = new Image();
    image.src = "/scratch-icon.png"; // 👈 this image will be used as scratch layer

    image.onload = () => {
      ctx.drawImage(image, 0, 0, width, height); // draw image as scratch layer
    };

    let isDrawing = false;

    const clearScratch = (x, y) => {
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(x, y, 20, 0, Math.PI * 2, false);
      ctx.fill();
    };

    const getXY = (e) => {
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;

      const x =
        ((e.touches ? e.touches[0].clientX : e.clientX) - rect.left) * scaleX;
      const y =
        ((e.touches ? e.touches[0].clientY : e.clientY) - rect.top) * scaleY;

      return { x, y };
    };

    const handleStart = (e) => {
      isDrawing = true;
      const { x, y } = getXY(e);
      clearScratch(x, y);
      checkScratchPercent();
    };

    const handleMove = (e) => {
      if (!isDrawing) return;
      const { x, y } = getXY(e);
      clearScratch(x, y);
      checkScratchPercent();
    };

    const handleEnd = () => {
      isDrawing = false;
    };

    const checkScratchPercent = () => {
      const imageData = ctx.getImageData(0, 0, width, height);
      const totalPixels = imageData.data.length / 4;
      let cleared = 0;

      for (let i = 0; i < imageData.data.length; i += 4) {
        if (imageData.data[i + 3] === 0) cleared++;
      }

      const percent = (cleared / totalPixels) * 100;
      if (percent > 5 && !scratched) {
        setScratched(true);
      }
    };

    canvas.addEventListener("mousedown", handleStart);
    canvas.addEventListener("mousemove", handleMove);
    canvas.addEventListener("mouseup", handleEnd);

    canvas.addEventListener("touchstart", handleStart);
    canvas.addEventListener("touchmove", handleMove);
    canvas.addEventListener("touchend", handleEnd);

    return () => {
      canvas.removeEventListener("mousedown", handleStart);
      canvas.removeEventListener("mousemove", handleMove);
      canvas.removeEventListener("mouseup", handleEnd);

      canvas.removeEventListener("touchstart", handleStart);
      canvas.removeEventListener("touchmove", handleMove);
      canvas.removeEventListener("touchend", handleEnd);
    };
  }, [scratched]);
  useEffect(() => {
    if (scratched) {
      setZoomed(true);
      const timer = setTimeout(() => {
        setZoomed(false); // zoom out after 10 seconds
      }, 20000);
      return () => clearTimeout(timer);
    }
  }, [scratched]);

  return (
    <div className="flex justify-center items-center flex-col px-3">
      <div className="mb-6">
        <p className="text-[#FFFFFF] text-[15px] font-medium font-poppins leading-6">
          Introduce your friends to Rupeia and help them get the best value for
          their money.
        </p>
      </div>
      <div
        className={`relative w-[98%] h-[450px] rounded-lg overflow-hidden shadow-md flex justify-center items-center  ${
          scratched ? "" : "bg-white"
        }`}
      >
        {/* Hidden Code Below */}
        <div
          className={`px-5 absolute inset-0 z-0 w-[100%] h-[450px] flex items-center justify-center text-black text-2xl font-bold transition-opacity duration-300 border-[#D5A958] border-[5px] ${
            scratched ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`relative flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${
              zoomed ? "scale-110" : "scale-100"
            }`}
          >
            <img
              src={referalScratchCard.src}
              className="w-[98%] rounded-2xl h-[165px]"
            />
            <p className="text-[#F4DA71] absolute text-[15px] scratch-card-coupon px-8 left-10 top-[50%]">
              Invite Code {secretCode}
            </p>
            <div className="absolute -bottom-20 text-white left-[36%]">
              <p className="text-[13px] font-light flex flex-row gap-1">
                Copy code <GoCopy className="text-[16px]" />
              </p>
            </div>
          </div>
        </div>
        {/* Canvas with Scratch Image */}
        <canvas
          ref={canvasRef}
          width={600}
          height={1020}
          className="absolute top-0 left-0 w-[100%] h-[450px]"
        />
      </div>
      <div className="flex flex-col">
        <p className="text-[#FFFFFF] text-[14px] font-medium font-poppins leading-6 border-b-[1px] border-[#8D6C93] pt-8 pb-5">
          Note: Invite code can be sent over to 3 people.
        </p>
      </div>
      <div className="mt-5 mb-10">
        <p className="text-[#FFFFFF] text-[15px] font-medium font-poppins leading-6">
          1 Month of free service of Rupiea
        </p>
      </div>
    </div>
  );
}
