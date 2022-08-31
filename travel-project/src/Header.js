import React from "react";

const Header = () => {
  const style = {
    width: "50%",
    height: "35px",
    margin: "5px auto 0px",
    backgroundColor: "#f5625d",
    textAlign: "center",
    paddingTop: "5px",
    color: "#fff",
    fontWeight: "600",
    fontSize: "1.2rem",
  };
  return <header style={style}>My Travel Journal</header>;
};

export default Header;
