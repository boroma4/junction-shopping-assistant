import React from "react";
import ProfileContent from "./ProfileContent";
import Graphs from "./Graphs"
import HeaderProfilePage from "./HeaderProfilePage"
import Footer from "../Footer/Footer";
import './Profile.css';


export default function Profile({ productList, setProductList }) {
  return (
    <div>
      <HeaderProfilePage
        productList={productList}
        setProductList={setProductList}
      />

      <div className="profilebody">
        <ProfileContent />
        <Graphs />
      </div>
      <Footer />
    </div>
  )
}
