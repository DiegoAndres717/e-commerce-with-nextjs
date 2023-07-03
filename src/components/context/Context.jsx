"use client";

import { createContext, useState } from "react";

export const ShoppiContext = createContext();

export const ShoppiProvider = ({ children }) => {
  //Produc detail open/close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openModalDetail = () => setIsProductDetailOpen(true);
  const closeModalDetail = () => setIsProductDetailOpen(false);

  //Checkout modal open/close
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const openModalCheckout = () => setIsCheckoutModalOpen(true);
  const closeModalCheckout = () => setIsCheckoutModalOpen(false);

  const [productToShow, setProductToShow] = useState({});
  //add products card
  const [cardProducts, setCardProducts] = useState([]);

  //products card by title
  const [searchByTitle, setSearchByTitle] = useState([]);
  //product by categoty
  const [searchByCategory, setSearchByCategory] = useState(null);

  //products Order
  const [order, setOrder] = useState([]);
    
  return (
    <ShoppiContext.Provider
      value={{
        isProductDetailOpen,
        productToShow,
        cardProducts,
        isCheckoutModalOpen,
        order,
        searchByTitle,
        searchByCategory,
        openModalDetail,
        closeModalDetail,
        setProductToShow,
        setCardProducts,
        openModalCheckout,
        closeModalCheckout,
        setOrder,
        setSearchByTitle,
        setSearchByCategory,
      }}
    >
      {children}
    </ShoppiContext.Provider>
  );
};
