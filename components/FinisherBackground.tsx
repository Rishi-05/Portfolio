"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    FinisherHeader: any;
  }
}

export default function FinisherBackground() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/finisher-header.es5.min.js";
    script.async = true;
    script.onload = () => {
      if (window.FinisherHeader) {
        new window.FinisherHeader({
          "count": 6,
          "size": {
            "min": 1100,
            "max": 1300,
            "pulse": 0
          },
          "speed": {
            "x": {
              "min": 0.1,
              "max": 0.3
            },
            "y": {
              "min": 0.1,
              "max": 0.3
            }
          },
          "colors": {
            "background": "#0b132b",
            "particles": [
              "#042a4c"
            ]
          },
          "blending": "overlay",
          "opacity": {
            "center": 1,
            "edge": 0.1
          },
          "skew": 0,
          "shapes": [
            "c"
          ] 
        });
      }
    };
    document.body.appendChild(script);

    return () => {
    };
  }, []);

  return <div className="header finisher-header" style={{ width: "100%", height: "100%", position: "fixed", top: 0, left: 0, zIndex: -1 }} />;
}
