import React from "react";
import ItemDetailContainer from "../components/ItemDetailContainer";
import {useLocation} from "react-router-dom"

function Detail() {
  const location = useLocation();
  return (
      <ItemDetailContainer key={location.key}/>
  );
}

export default Detail;