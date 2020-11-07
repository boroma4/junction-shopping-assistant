import React from "react";
import ProfileHeader from "./ProfileHeader";
import HeaderProfilePage from "./HeaderProfilePage"
import Footer from "../Footer/Footer";


export default function Profile ({productList, setProductList}) {
  return(
      <div>
        <HeaderProfilePage
            productList={productList}
            setProductList={setProductList}
        />
        <ProfileHeader/>
        <Footer/>
      </div>
  )
}
