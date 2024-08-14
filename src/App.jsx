import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header title="My Website" />
      <Content />
      <Footer year="2024" />
    </div>
  );
}

export default App;
