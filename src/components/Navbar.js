import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./navbar.css";
const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <nav className="navbar">
      <span className="logo">🛒 Redux Store</span>
      <div className="nav-links">
        <Link className="navLink navButton" to="/">
          Home
        </Link>
        <Link className="navLink navButton" to="/cart">
          Cart
        </Link>

        <span className="cartCount">🧺 {items.length}</span>
      </div>
    </nav>
    // <div
    //     style={{
    //         display: 'flex',
    //         alignItems: 'center',
    //         justifyContent: 'space-between',
    //     }}
    // >
    //     <span className="logo">REDUX STORE</span>
    //     <div>
    //         <Link className="navLink" to="/">
    //             Home
    //         </Link>
    //         <Link className="navLink" to="/cart">
    //             Cart
    //         </Link>
    //         <span className="cartCount">Cart items: {items.length}</span>
    //     </div>
    // </div>
  );
};

export default Navbar;
