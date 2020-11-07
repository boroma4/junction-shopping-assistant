import ToiletPaper from "../../pics/rsz_toilet-paper-png.png";
import Sanitizer from "../../pics/rsz_hand-sanitizer-png-image.png";
import Soap from "../../pics/rsz_non-branded-liquid-hand-wash-transparent.png";
import Cup from '../../pics/rsz_1red-party-cup-png-file.png'
import Toothbrush from '../../pics/rsz_toothbrush.jpg'
import Toothpaste from '../../pics/rsz_toothpaste.jpg'
import Shampoo from '../../pics/rsz_shampoo.jpg'
import Trash from '../../pics/rsz_trash-bag.jpg'
import Pods from '../../pics/rsz_best-toilet-tablets.jpg'

export const PRODUCTS = [
    {id:0,description:"This is a relatively good toilet paper. You should be fine!", name: "Toilet paper (8 rolls)", brandName:"Toilet Paper corporation",pic:ToiletPaper,price:15, cat: 'Toilet' , cap: 7, type:'tp8'},
    {id:1,description:"This is a very good toilet paper brand which you will surely enjoy!", name: "Elite toilet paper (8 rolls)", brandName:"Elite toilet paper corporation",pic:ToiletPaper,price:35, cat: 'Toilet' , cap: 7, type:'tp8'},
    {id:2,description:"This is a very cheap toilet paper, it can save money!", name: "Cheap toilet paper (8 rolls)", brandName:"PaperCorp",pic:ToiletPaper,price:5, cat: 'Toilet' , cap: 7, type:'tp8'},

    {id:3,description:"The one and only!", name: "Mr Sanitize me (200ml)", brandName:"Exorcisma",pic:Sanitizer,price:69, cat: 'Misc' , cap: 20, type:'san500'},
    {id:4,description:"Kills 99.9% bacteria!", name: "Chuck Norris (200ml)", brandName:"Dollybood",pic:Sanitizer,price:250, cat: 'Misc' , cap: 20, type: 'san500'},

    {id:5,description:"Good soap!", name: "Chamomile soap (500ml)", brandName:"Linas",pic:Soap,price:20, cat: 'Bathroom' , cap: 30, type:'soap500'},
    {id:6,description:"Pleb soap!", name: "Plain soap (500ml)", brandName:"LoBidaVolka",pic:Soap,price:5, cat: 'Bathroom' , cap: 30, type:'soap500'},

    {id:7,description:"A normal plastic cup.", name: "Plastic cup", brandName:"Velver",pic:Cup, price:5, cat: 'Misc' , cap: 1, type:'plcup'},
    {id:8,description:"A sub-normal plastic cup.", name: "Plastic cup", brandName:"Dini",pic:Cup, price:8, cat: 'Misc' , cap: 1, type:'plcup'},

    {id:9,description:"Pleb toothbrush!", name: "Toothbrush", brandName:"Cowgate",pic:Toothbrush, price:2, cat: 'Bathroom' , cap: 90, type:'tbrush'},
    {id:10,description:"Standard toothbrush!", name: "Toothbrush", brandName:"Corngate",pic:Toothbrush, price:5, cat: 'Bathroom' , cap: 90, type:'tbrush'},
    {id:11,description:"Cleans your teeth in two seconds!", name: "Brush4000", brandName:"Conjugate",pic:Toothbrush, price:100, cat: 'Bathroom' , cap: 90, type:'tbrush'},

    {id:12,description:"Pleb toothpaste!", name: "Toothpaste (400ml)", brandName:"Anyway",pic:Toothpaste, price:4, cat: 'Bathroom' , cap: 60, type:'tpaste500'},
    {id:13,description:"Standard toothpaste!", name: "Toothpaste (400ml)", brandName:"Acid",pic:Toothpaste, price:10, cat: 'Bathroom' , cap: 60, type:'tpaste500'},
    {id:14,description:"You can even wash your hair with it!", name: "Toothpaste (400ml)", brandName:"Vroom Vroom",pic:Toothpaste, price:50, cat: 'Bathroom' , cap: 60, type:'tpaste500'},

    {id:15,description:"Your hair might fall off :)", name: "Shampoo 55 (500ml)", brandName:"FE",pic:Shampoo, price:10, cat: 'Bathroom' , cap: 30, type:'shamp500'},
    {id:16,description:"Your hair will stay :)", name: "Shampoo Vanilla taste (500ml)", brandName:"Hand&Temples",pic:Shampoo, price:50 , cat: 'Bathroom' , cap: 30, type:'shamp500'},
    {id:17,description:"You will love it!", name: "Shampoo Extra++ Fortnite edition (500ml)", brandName:"Stolen from a well-known hotel",pic:Shampoo, price:200, cat: 'Bathroom' , cap: 30, type:'shamp500'},

    {id:18,description:"Very normal.", name: "Trashbags (50l)", brandName:"Bibi",pic:Trash, price:1, cat: 'Misc' , cap: 120, type:'trash50'},
    {id:19,description:"Just nice!", name: "Trashbags (50l)", brandName:"Velver",pic:Trash, price:5, cat: 'Misc' , cap: 120, type:'trash50'},
    {id:20,description:"They will taken themselves to the bin!", name: "Trashbags with self-cleaning (50l)", brandName:"Frismo",pic:Trash, price:100, cat: 'Misc' , cap: 120, type:'trash50'},

    {id:21,description:"I think it only got worse.", name: "Toilet tablets (5pcs)", brandName:"Bibi",pic:Pods, price:1, cat: 'Toilet' , cap: 180, type:'tablets5'},
    {id:22,description:"Smells nice.", name: "Toilet tablets (5pcs)", brandName:"Velver",pic:Pods, price:5, cat: 'Toilet' , cap: 180, type:'tablets5'},
    {id:23,description:"Have you tried the shampoo from that hotel already?", name: "Toilet tablets (5pcs)", brandName:"Stolen from a well-known hotel",pic:Pods, price:100, cat: 'Toilet' , cap: 180, type:'tablets5'},
];
