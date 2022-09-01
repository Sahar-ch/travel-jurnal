import React from "react";

const Header = () => {
  const style = {
    display: "flex",
    width: "50%",
    height: "35px",
    margin: "5px auto 0px",
    backgroundColor: "#f5625d",
    alignItems: "center",
    justifyContent: "flex-start",
    position: "relative",
    color: "#fff",
    fontWeight: "600",
    fontSize: "1.2rem",
  };
  const paraph = {
    flex: "0 1 auto",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
  };
  const image = {
    width: "25px",
  };
  const anchor = {
    flex: "0 1 auto",
    marginLeft: "auto",
  };
  return (
    <header style={style}>
      <p style={paraph}>My Travel Journal</p>
      <a style={anchor}>
        <img src="./icons/woman.png" style={image} />
      </a>
    </header>
  );
};

export default Header;
