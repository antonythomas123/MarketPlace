import React, { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [paymentDetails, setPaymentDetails] = useState(null); 
  const [items, setItems] = useState(null); 

  return (
    <OrderContext.Provider value={{
        selectedOrder,
        setSelectedOrder,
        paymentDetails, 
        setPaymentDetails, 
        items, 
        setItems,
      }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => useContext(OrderContext);
