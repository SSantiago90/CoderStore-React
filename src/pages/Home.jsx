import React from "react";
import ItemListContainer from "../components/ItemListContainer";

function Home(props) {
  return (    
      <ItemListContainer title={props.title}  />
  );
}

export default Home;