import { useState } from "react";
import { Header } from "./components/common/header";
import { Sticky } from "./components/common/stickyNav/sticky";
import { Hero } from "./components/hero";
import { SecondSection } from "./components/secondSection";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <main className="z-10 min-h-[1000vh]">
      <Header />
      <Sticky />
      <Hero toggle={setToggle} />
      <SecondSection toggle={toggle} />
    </main>
  );
}

export default App;
