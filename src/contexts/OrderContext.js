import React, { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [selectedOrder, setSelectedOrder] = useState(null);

  return (
    <OrderContext.Provider value={{ selectedOrder, setSelectedOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => useContext(OrderContext);
