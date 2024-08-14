import Header from "./components/Header";
import Content from "./components/Content";
import Counter from "./components/Counter";
import Status from "./components/Status";
import Footer from "./components/Footer";

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <Header title="Counter App" />
      <Content />
      <Counter increment={increment} count={count} />
      <Status count={count} />
      <Footer year="2024" />
    </div>
  );
}

export default App;
