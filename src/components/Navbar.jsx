import React from "react";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./ComStyles.scss";
import Cart from "./Cart";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            {/* <img src="/img/en.png" alt="" /> */}
            {/* <KeyboardArrowDownIcon /> */}
          </div>
          <div className="item">
            <span>EUR</span>
            {/* <KeyboardArrowDownIcon /> */}
          </div>
          <div className="item">
            <Link className="link" to="/products/1">
              Chocolate
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Strawberry
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              Crêpe
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            Cake Store
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              Homepage
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Contact
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              {" "}
              Cake Stores
            </Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
