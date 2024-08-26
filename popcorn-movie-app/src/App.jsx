import { useState } from "react";
import "./App.scss";

import AppRouter from "./router/AppRouter.jsx";

function App() {
  const [count, setCount] = useState(0);

  return <AppRouter />;
}

export default App;
