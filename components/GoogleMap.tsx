"use client";

import React from "react";

const MapEmbed = () => {
  return (
    <div className="w-full h-[450px] md:h-[600px] my-10">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.1973708905284!2d85.32068817603607!3d27.71119172532101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1959f8261a7d%3A0x1c2163306ca65083!2sCleaning%20Sewa!5e0!3m2!1sen!2snp!4v1775313871494!5m2!1sen!2snp"
        width="100%"
        height="90%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg shadow-md"
      ></iframe>
    </div>
  );
};

export default MapEmbed;