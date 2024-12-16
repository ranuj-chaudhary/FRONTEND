import "./PasswordLengthSlider.css";
const PasswordLengthSlider = ({ title, min, max, state, setState }) => {
  return (
    <div className="slider">
      <div className="slider__heading">
        <p className="slider__length__title">{title}</p>
        <p className="slider__length">{state}</p>
      </div>
      <input
        type="range"
        className="slider__range"
        value={state}
        onChange={(e) => setState(e.target.value)}
        id={title.replace(" ", "-")}
        min={min}
        max={max}
      />
    </div>
  );
};

export default PasswordLengthSlider;
