import React, {useState} from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CartPopup from "../Cart/CartPopup";
import Container from "@material-ui/core/Container";
import Header from "../UserProfile/HeaderProfilePage";

const CheckoutPage = ({cart,setProductList}) => {
const [localCart,setLocalCart] = useState(cart);


  return (
      <Container>
        <Header />
        <CartPopup productList={cart} setProductList={setProductList} stationary={true}/>
      </Container>

  );
};

export default CheckoutPage;