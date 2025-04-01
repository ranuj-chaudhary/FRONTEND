import React from 'react';
const style = {
  button: 'px-12 py-4 rounded-md cursor-pointer font-bold active:scale-95 transition-transform duration-150',
  reset: ' bg-red-500 hover:bg-red-600 text-white ',
  start: 'bg-blue-500 hover:bg-blue-600 text-white',
  pause: 'bg-yellow-500 hover:bg-yellow-600',
  continue: 'bg-orange-500 hover:bg-orange-600 text-white',
};
const Button = (props) => {
  if (props.type === 'reset')
    return (
      <button {...props} className={`${style[props.type]} ${style.button}`}>
        {props.title}
      </button>
    );
  if (props.type === 'start')
    return (
      <button {...props} className={`${style[props.type]} ${style.button}`}>
        {props.title}
      </button>
    );
  if (props.type === 'pause')
    return (
      <button {...props} className={`${style[props.type]} ${style.button}`}>
        {props.title}
      </button>
    );
  if (props.type === 'continue')
    return (
      <button {...props} className={`${style[props.type]} ${style.button}`}  >
        {props.title}
      </button>
    );
};

export default Button;
