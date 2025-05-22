/* 


--> PROPS SPREADING
import React from "react"

export default function Button(props) {
    return (
        <button {...props}>
            {props.children}
        </button>
    )
}


--> DESTRUCTURE PROPS
import React from "react"

export default function Button({children, ...rest}) {
    return (
        <button {...rest}>
            {children}
        </button>
    )
}


--> FIX CLASSNAMES ISSUES
Note: classnames is a library that allows you to conditionally join classNames together

import React from "react"
import classnames from "classnames"
export default function Button({children, className, size, ...rest}) {
    let sizeClass = size ? `button-${size}` : ""
    const allClasses = classnames(sizeClass, className)
    
    return (
        <button className={allClasses} {...rest}>
            {children}
        </button>
    )
}


--> BUTTON VARIANTS

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

 */
