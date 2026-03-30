'use client';

import { useEffect, useState, useCallback } from "react";

const RoadBlock = () => {
  const today = new Date();
  const day = today.getDate();
  const monthNames = [
    "january","february","march","april","may","june",
    "july","august","september","october","november","december","default"
  ];
  const month = monthNames[today.getMonth()];

  // --- STATES ---
  const [showRoadBlock, setShowRoadBlock] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [timeLeft, setTimeLeft] = useState(40);      // total display time
  const [displayTimeLeft, setDisplayTimeLeft] = useState(10); // X button timer

  // --- Close Function ---
  const onClose = useCallback(() => {
    document.body.classList.remove('hideScroll');
    document.body.classList.add('showScroll');
    setShowRoadBlock(false);
  }, []);

  // --- Show roadblock once per session ---
  useEffect(() => {
    const hasSeen = sessionStorage.getItem("roadblock_seen");
    if (!hasSeen) {
      setShowRoadBlock(true);
      sessionStorage.setItem("roadblock_seen", "true");
    }
  }, []);

  // --- Hide scroll when roadblock is visible ---
  useEffect(() => {
    if (showRoadBlock) {
      document.body.classList.add('hideScroll');
    } else {
      document.body.classList.remove('hideScroll');
    }
  }, [showRoadBlock]);

  // --- Preload Roadblock Image ---
  useEffect(() => {
    const img = new Image();
    img.src = `/roadblock/${month}/${day}.jpg`;
    img.onload = () => setImageLoaded(true);
    img.onerror = () => {
      // fallback to default image
      const defaultImg = new Image();
      defaultImg.src = `/roadblock/default.jpg`;
      defaultImg.onload = () => setImageLoaded(true);
      defaultImg.onerror = onClose;
    };
  }, [month, day, onClose]);

  // --- Force-close timer ---
  useEffect(() => {
    if (!showRoadBlock) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          onClose();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [showRoadBlock, onClose]);

  // --- Close button display timer ---
  useEffect(() => {
    if (!showRoadBlock) return;
    const timer = setInterval(() => {
      setDisplayTimeLeft(prev => (prev <= 1 ? 0 : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [showRoadBlock]);

  // --- Image Error Handler ---
  const handleImageError = () => onClose();

  return (
    <>
      {showRoadBlock && (
        <div className="fixed inset-0 bg-[#D0D0D0] z-9999 flex items-center justify-center">
          <div className="relative">
            {/* Close Button */}
            <button
              onClick={displayTimeLeft <= 0 ? onClose : undefined}
              className={`sm:-top-2.5 sm:-right-2.5 ${window.innerWidth < 550 ? "top-10 right-0" : "-top-2.5 -right-2.5"}`}
              style={{
                backgroundColor: "#055d59",
                borderRadius: "50%",
                border: "0px",
                width: "40px",
                height: "40px",
                textAlign: "center",
                position: "absolute",
                color: "white",
                fontSize: "20px",
                fontWeight: "bold",
                cursor: displayTimeLeft <= 0 ? "pointer" : "not-allowed",
              }}
            >
              {displayTimeLeft <= 0 ? "X" : displayTimeLeft}
            </button>

            {/* Loader */}
            {!imageLoaded && (
              <div className="flex items-center justify-center w-[550px] h-[550px] bg-white rounded">
                <span className="text-gray-700">Loading...</span>
              </div>
            )}

            {/* Roadblock Image */}
            {imageLoaded && (
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src={`/roadblock/${month}/${day}.jpg`}
                  onError={(e) => {
                    const originalSrc = e.currentTarget.src;
                    e.currentTarget.onerror = null;
                    if (!originalSrc.includes("default.jpg")) {
                      e.currentTarget.src = "/roadblock/default.jpg";
                    } else {
                      handleImageError();
                    }
                  }}
                  className="img-fluid rounded"
                  style={{
                    borderRadius: "3%",
                    objectFit: "contain",
                    height: "550px",
                    width: "550px",
                  }}
                  alt="Advertisement"
                />
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default RoadBlock;