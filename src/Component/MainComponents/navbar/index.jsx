import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { useSelector } from 'react-redux';

import CurrencyConverter from "../../MainComponents/CurrencyConverter";
import Cart from "../../MainComponents/Cart";
const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const itemCount = cartItems.length;



  const handleCartClick = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      toast.error("Please sign in first.");
      setTimeout(() => {
        navigate("/signin");
      }, 3000);
      return;
    }

    setIsCartOpen(true);
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);

    const handleStorageChange = () => {
      setUser(JSON.parse(localStorage.getItem("user")));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/signin");
  };

function index() {
  return (   
    <div>
 


      buffer matlab pdf images wagar a mongodb nhi bna aha ya chaezay store kay lia 
      AWS buket may image store ho te hai respose may url dey te hai  or wo ape database may save kar saktay ho 
      ek ate ha cloudinary ya be response may url dey  ta ha 
      </div>
  )
}

export default index