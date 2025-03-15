import useWindowResize from './useWindowResize';

const ResizeComponent = () => {
  const [windowHeight, windowWidth] = useWindowResize();
  return (
    <div className="flex flex-col gap-4">
      <h1>Window resize hook</h1>
      <p>
        <span>Window Width:</span>
        {windowWidth}
      </p>
      <p>
        <span>Window Height:</span>
        {windowHeight}
      </p>
    </div>
  );
};

export default ResizeComponent;
