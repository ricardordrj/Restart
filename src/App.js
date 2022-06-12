import Router from "./routes";
import { Loading } from "./Components";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  return isLoading ? <Loading /> : <Router />;
}

export default App;
