import { useState } from "react";
const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj"
    ></img>
  </a>
);
const Header = () => {
  const [logBtn, setLogBtn] = useState("Login");
  return (
    <div className="header">
      <Title />
      <div className="navitems">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              console.log("clicked");
              logBtn === "Login" ? setLogBtn("Logout") : setLogBtn("Login");
            }}
          >
            {logBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
