import React from "react";
import { BsFillBagFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {
  const { totalQuantities } = useSelector((state) => state.CartReducer);
  return (
    <div className="nav">
      <div className="container">
        <div className="nav__container">
          <div className="nav__left">
            <Link to="/">
              <h1>
                Instashop
                <span style={{ color: "lightsalmon", fontWeight: "bolder" }}>
                  .
                </span>
              </h1>
            </Link>
          </div>
          <div className="nav__right">
            <Link to="/cart">
              <div className="basket">
                <BsFillBagFill className="cart-icon" />
                <span>{totalQuantities}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
