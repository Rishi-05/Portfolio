import React from "react";

interface BackgroundGradientProps {
  className?: string;
  children?: React.ReactNode;
}

export const BackgroundGradient: React.FC<BackgroundGradientProps> = ({
  className = "",
  children,
}) => {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        background: "linear-gradient(135deg, #16048EFF, #4655F8FF, #48CEECFF)",
        backgroundSize: "400% 400%",
        animation: "gradientShift 12s ease infinite",
      }}
    >
      {children}
      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
};

