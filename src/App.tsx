import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import Tech from "./Components/Tech";
import type { Itechnology } from "./Types/technology";
import Footer from "./Components/Footer";
import { Suspense, lazy } from "react";
import LoadingSpinner from "./Components/LoadingSpinner";

const Technologies = lazy(() => import("./Components/technologies/Technologies"));

function App() {
  const stackDataPromise = async (): Promise<Itechnology[]> => {
    const res = await fetch("/data.json");
    const data = await res.json();
    return data;
  };
  return (
    <div>
      <Nav />
      <Hero />
      <Tech />
      <Suspense fallback={<LoadingSpinner/>}>
        <Technologies technologiesPromise={stackDataPromise()}/>
      </Suspense>
      <Footer/>
    </div>
  );
}

export default App;
