import React from "react";
import PropTypes from "prop-types";

const variants = {
  FillRed700: "bg-red_700 text-black_900",
  FillGreen800: "bg-green_800 text-black_900",
  FillBlue400: "bg-blue_400 text-black_900",
};
const sizes = {
  sm: "p-[11px] sm:p-[5px] md:p-[7px]",
  md: "sm:pb-[13px] md:pb-[17px] pb-[25px] pt-[12px] sm:pt-[6px] md:pt-[8px] px-[12px] sm:px-[6px] md:px-[8px]",
  lg: "sm:pb-[4px] md:pb-[6px] pb-[9px] pt-[14px] sm:pt-[7px] md:pt-[9px] sm:px-[4px] md:px-[6px] px-[9px]",
  xl: "md:p-[12px] p-[18px] sm:px-[15px] sm:py-[9px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className}  ${variants[variant] || ""} ${
        sizes[size] || ""
      } `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.oneOf(["FillRed700", "FillGreen800", "FillBlue400"]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
};
Button.defaultProps = { className: "", variant: "FillBlue400", size: "sm" };

export { Button };
