import React from "react";
import Data from "./Data";
import Card from "./Card";

const App = () => {
  const cardElements = Data.map((element) => {
    return <Card key={element.id} {...element} />;
  });
  return <div>{cardElements}</div>;
};

export default App;
