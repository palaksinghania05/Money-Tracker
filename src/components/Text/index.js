import React from "react";
const variantClasses = {
  h1: "font-normal sm:text-[28px] md:text-[30px] text-[32px]",
  h2: "font-extrabold sm:text-[20px] md:text-[22px] text-[24px]",
  h3: "text-[20px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
