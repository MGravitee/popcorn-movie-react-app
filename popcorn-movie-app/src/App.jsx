import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";

import AppRouter from "./router/AppRouter.jsx";

function App() {
  const [count, setCount] = useState(0);

  return <AppRouter />;
}

export default App;
