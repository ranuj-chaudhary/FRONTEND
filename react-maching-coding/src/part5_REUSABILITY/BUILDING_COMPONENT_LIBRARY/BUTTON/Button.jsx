import React from 'react';
import classnames from 'classnames';
import "./button.css"
export default function Button({
  children,
  variant,
  className,
  size,
  ...rest
}) {
  let sizeClass = size ? `button-${size}` : '';
  let variantClass = variant ? `button-${variant}` : '';
  let allClasses = classnames(sizeClass, className, variantClass);
  if (variant)
    return (
      <button className={allClasses} {...rest}>
        {children}
      </button>
    );
}
