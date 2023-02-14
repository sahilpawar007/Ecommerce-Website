import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";

import { MdAccountCircle } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import { MdAddShoppingCart } from "react-icons/md";

const options = {
  burgerColorHover: "eb4034",
  logo,
  logoWidth: "20vmax",
  navColor1: "white",
  logoHoverSize: "10px",
  logoHoverColor: "white",

  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",

  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",

  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",

  link1Size: "1.3vmax",
  link1Color: "rgba(35, 35, 35, 0.8)",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",

  ProfileIconElement: MdAccountCircle,
  SearchIconElement: MdSearch,
  CartIconElement: MdAddShoppingCart,

  profileIcon: true,
  searchIcon: true,
  cartIcon: true,

  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",

  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",

  cartIconMargin: "1vmax",
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;
