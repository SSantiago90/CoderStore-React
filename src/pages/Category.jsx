import React, {useState} from "react";
import ItemListContainer from "../components/ItemListContainer";
import {useLocation , useParams} from "react-router-dom"

function Category() {
  const location = useLocation();
  const {category} = useParams();

  const [cat] = useState(category);
  
  return (
      <ItemListContainer key={location.key}/>
  );
}

export default Category;
