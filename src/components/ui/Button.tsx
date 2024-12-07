import React from "react";

type ButtonProps = {
  onClick?: () => void; // Optional onClick handler
  className?: string; // Optional additional classes
  children: React.ReactNode; // Children to render inside the button
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  className = "",
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative z-30 cursor-pointer inline-flex h-11 mt-6 overflow-hidden rounded-md p-[1.5px] focus:outline-none gap-2 ${className}`}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex font-Kanit h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-900 px-7 py-1 font-medium text-white backdrop-blur-3xl text-xs sm:text-sm">
        {children}
      </span>
    </button>
  );
};

export default Button;
