import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  FillLime800: "bg-lime_800",
  FillBluegray100: "bg-bluegray_100",
};

const sizes = {
  sm: "md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px]",
  md: "sm:pb-[12px] md:pb-[15px] pb-[23px] md:pt-[11px] pt-[17px] sm:pt-[9px] md:px-[11px] sm:px-[15px] px-[17px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName}  ${variants[variant] || ""} ${
            sizes[size] || ""
          }`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.oneOf(["FillLime800", "FillBluegray100"]),
  size: PropTypes.oneOf(["sm", "md"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  variant: "FillLime800",
  size: "sm",
};

export { Input };
