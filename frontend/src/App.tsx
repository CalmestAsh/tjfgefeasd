import { ParticlesBackground } from "./components/ParticlesBackground";
import { Cover } from "./components/sections/Cover";
import { Introduction } from "./components/sections/Introduction";
import { Timeline } from "./components/sections/Timeline";
import { WhatIsList } from "./components/sections/WhatIsList";
import { Functionalities } from "./components/sections/Functionalities";
import { RealWorld } from "./components/sections/RealWorld";
import { Importance } from "./components/sections/Importance";
import { Examples } from "./components/sections/Examples";
import { Conclusion } from "./components/sections/Conclusion";
import { Customization } from "./components/sections/Customization";
import { Facets } from "./components/sections/Facets";
import { TidyverseContext } from "./components/sections/TidyverseContext";
import { Summary } from "./components/sections/Summary";

function App() {
  return (
    <main className="relative w-full h-screen overflow-x-hidden overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <ParticlesBackground />

      <div className="snap-start snap-always">
        <Cover />
      </div>

      <div className="snap-start snap-always">
        <Introduction />
      </div>

      <div className="snap-start snap-always">
        <Timeline />
      </div>

      <div className="snap-start snap-always">
        <WhatIsList />
      </div>

      <div className="snap-start snap-always">
        <Functionalities />
      </div>
      <div className="snap-start snap-always">
        <RealWorld />
      </div>

      <div className="snap-start snap-always">
        <Importance />
      </div>

      <div className="snap-start snap-always">
        <Examples />
      </div>

      <div className="snap-start snap-always">
        <Customization />
      </div>

      <div className="snap-start snap-always">
        <Facets />
      </div>

      <div className="snap-start snap-always">
        <TidyverseContext />
      </div>

      <div className="snap-start snap-always">
        <Summary />
      </div>

      <div className="snap-start snap-always">
        <Conclusion />
      </div>
    </main>
  );
}

export default App;
