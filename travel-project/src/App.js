import React from "react";
import Data from "./Data";
import Card from "./Card";
import Header from "./Header";

const App = () => {
  const cardElements = Data.map((element) => {
    return <Card key={element.id} {...element} />;
  });

  return (
    <div>
      <Header />
      {cardElements}
    </div>
  );
};

export default App;
