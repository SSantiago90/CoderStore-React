import React from "react";
import ItemListContainer from "../components/ItemListContainer";
import {useLocation} from "react-router-dom"

function Category() {
  const location = useLocation();
  
  return (
      <ItemListContainer key={location.key}/>
  );
}

export default Category;
