import React from "react";
import Receipt from "../components/Receipt";
import { useLocation } from "react-router-dom";

function Checkout() {
    const location = useLocation();

  return (        
    <div>
      <Receipt id={location.state.id} error={location.state.errorMsg} />
    </div>
  );
}

export default Checkout;