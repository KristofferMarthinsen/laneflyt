import React, { useState } from "react";
import Lanedetaljer from "./Lanedetaljer";
import Lanetakere from "./Lanetakere";
import Husstanden from "./Husstanden";
import Legitimering from "./Legitimering";
import Estimat from "./Estimat";
import { ThemeProvider } from "styled-components";
import baseTheme from "@staccx/bento/lib/theming/baseTheme";
import { Breadcrumb } from "@staccx/bento";

const Step = ({ currentStep, onNext, onPrev }) => {
  switch (currentStep) {
    case 1:
      return <Lanedetaljer onNext={onNext} />;

    case 2:
      return <Lanetakere onNext={onNext} />;

    case 3:
      return <Husstanden onNext={onNext} />;

    case 4:
      return <Legitimering onNext={onNext} />;

    case 5:
      return <Estimat onNext={onNext} />;

    default:
      return <div>Ukjent steg</div>;
  }
};

function App() {
  const [step, setStep] = useState(1);
  return (
    <div className="laneflyt">
      <ThemeProvider theme={baseTheme}>
        <Breadcrumb
          path={[
            {
              name: "First page",
              to: "/"
            },
            {
              name: "Second page",
              to: "/level-2"
            },
            {
              name: "Third page",
              to: "/level-3"
            },
            {
              name: "Fourth page"
            }
          ]}
        />{" "}
        <Step
          currentStep={step}
          onNext={() => setStep(step + 1)}
          onPrev={() => setStep(step - 1)}
        />
      </ThemeProvider>
    </div>
  );
}

export default App;
