import ToiletPaper from "../../pics/rsz_toilet-paper-png.png";
import Sanitizer from "../../pics/rsz_hand-sanitizer-png-image.png";
import Soap from "../../pics/rsz_non-branded-liquid-hand-wash-transparent.png";
import Cup from '../../pics/rsz_1red-party-cup-png-file.png'

export const PRODUCTS = [
    {id:0,description:"This is a relatively good toilet paper. You should be fine!", name: "Toilet paper", brandName:"Toilet Paper corporation",pic:ToiletPaper,price:15},
    {id:1,description:"This is a very good toilet paper brand which you will surely enjoy!", name: "Elite toilet paper", brandName:"Elite toilet paper corporation",pic:ToiletPaper,price:35},
    {id:2,description:"This is a very cheap toilet paper, it can save money!", name: "Cheap toilet paper", brandName:"PaperCorp",pic:ToiletPaper,price:5},
    {id:3,description:"The one and only!", name: "Mr Sanitize me", brandName:"Amazon",pic:Sanitizer,price:69},
    {id:4,description:"Kills 99.9% bacteria!", name: "Chuck Norris", brandName:"Rimi",pic:Sanitizer,price:250},
    {id:5,description:"Good soap!", name: "Premium Soap (Palmolive)", brandName:"ABB",pic:Soap,price:20},
    {id:6,description:"Pleb soap!", name: "Soap (Who knows)", brandName:"ABB",pic:Soap,price:5},
    {id:7,description:"A normal plastic cup.", name: "Plastic cup", brandName:"Selver",pic:Cup, price:5},
    {id:8,description:"A sub-normal plastic cup.", name: "Plastic cup", brandName:"Rimi",pic:Cup, price:8},
];
