import { useEffect, useState } from "react";
import "./App.css";
import ProgreessBar from "./components/ProgreessBar";
function App() {
  const [value, setValue] = useState(0);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    const id = setInterval(() => {
      setValue((value) => value + 10);
    }, 200);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div className="App">
      <ProgreessBar value={value} onComplete={() => setSuccess(true)} />
      {<span>{!success ? "Loading..." : "Completed"}</span>}
    </div>
  );
}

export default App;
