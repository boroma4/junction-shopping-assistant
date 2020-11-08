import React, {useEffect, useState} from 'react'
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import withStyles from "@material-ui/core/styles/withStyles";
import green from "@material-ui/core/colors/green";
import Typography from "@material-ui/core/Typography";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import {useHistory} from 'react-router-dom'
import {PRODUCTS} from "../ProductCard/PRODUCTS_LIST";


const ColorButton = withStyles((theme) => ({
    root: {
        color: "white",
        backgroundColor: green[500],
        margin: 5,
        justifyContent: 'center',
        '&:hover': {
            backgroundColor: green[700],
        },
    },
}))(Button);

const CartPopup = ({productList,setProductList,stationary, purchaseHistory}) => {
    let history = useHistory();


    const findLatestDate = () => {
        let latest = new Date();
        latest.setFullYear(1970,1,1);
        for (let i=0;i<purchaseHistory.length;i++){
            if(purchaseHistory[i].date > latest){
                latest = purchaseHistory[i].date;
            }
        }
        return latest;
    };

    const getType = (type,row) => {
        if (type === "past"){
            return row.type;
        }else{
            return row.data.type;
        }
    };

    const getCap = (type,row) => {
        if (type === "past"){
            return row.cap;
        }else{
            return row.data.cap;
        }
    };

    // Nevermind. Better ask
    // Two types are applicable: "past" and "future"
    const calculateSum = (sumFunc,products, type) => {
        let tp8 = products.filter(row => getType(type,row)==="tp8").map((e)=>getCap(type,e))?.reduce(sumFunc,0);
        let trash50 = products.filter(row => getType(type,row)==="trash50").map((e)=>getCap(type,e))?.reduce(sumFunc,0);
        let shamp500 = products.filter(row => getType(type,row)==="shamp500").map((e)=>getCap(type,e))?.reduce(sumFunc,0);
        let tpaste500 = products.filter(row => getType(type,row)==="tpaste500").map((e)=>getCap(type,e))?.reduce(sumFunc,0);
        let tbrush = products.filter(row => getType(type,row)==="tbrush").map((e)=>getCap(type,e))?.reduce(sumFunc,0);
        let plcup = products.filter(row => getType(type,row)==="plcup").map((e)=>getCap(type,e))?.reduce(sumFunc,0);
        let soap500 = products.filter(row => getType(type,row)==="soap500").map((e)=>getCap(type,e))?.reduce(sumFunc,0);
        let san500 = products.filter(row => getType(type,row)==="san500").map((e)=>getCap(type,e)).reduce(sumFunc,0);

        return {
            tp8:tp8,
            trash50:trash50,
            shamp500:shamp500,
            tpaste500:tpaste500,
            tbrush:tbrush,
            plcup:plcup,
            soap500:soap500,
            san500:san500
        };
    };

    const queryUserProducts = (suggestedTypes) => {
        let suggestionArray = [];
        for(let i=0;i<suggestedTypes.length;i++){
            let previousPurchases = purchaseHistory.filter((purchase)=> purchase.type === suggestedTypes[i]);
            if (previousPurchases && previousPurchases.length!==0){
                let prodName = previousPurchases[0].name;
                let data = PRODUCTS.find((prod)=> prod.name === prodName);

                suggestionArray.push({name:prodName, quantity:1, price: data.price,data});
            }

        }
        return suggestionArray;
    };

    const applySuggestions = () => {
        const latestDate = findLatestDate();
        let lastWeeksGoods = purchaseHistory.filter(purchase => purchase.date === latestDate);
        const sumFunc = (acc, curVal)=> {return acc+curVal};

        let lastWeekSum = calculateSum(sumFunc,lastWeeksGoods,"past");
        let thisCartSum = calculateSum(sumFunc,productList,"future");
        let resultSum = [];

        for (let key in thisCartSum){
            let mlt = productList.find(elem => elem.data.type === key)?.quantity;
            if (!mlt) {
                mlt = 0;
            }
            if (thisCartSum !== 0){
                thisCartSum[key] = thisCartSum[key]*mlt;
            }
            resultSum[key] = lastWeekSum[key]+thisCartSum[key]-7;
        }

        let suggestedTypes = [];
        for(let key in resultSum){
            if (resultSum[key] <= 0){
                suggestedTypes.push(key);
                resultSum[key] = 0;
            }
        }
        return queryUserProducts(suggestedTypes);
    };


    /********************* First render **************************/

    const onDeleteClick = (e,idx) => {
        let newState = [...productList];
        newState.splice(idx,1);
        setProductList(newState)
    };

    const calcTotal = () =>{
        return productList.reduce((total, product)=> {
            return total + product.price * product.quantity;
        }, 0);
    };

    const onChangeQuantity = (e, idx, change) =>{
        let newState = [...productList];
        let product = newState[idx];
        product.quantity += change;
        if(product.quantity === 0){
            newState.splice(idx,1);
        }
        setProductList(newState)
    };
    if (!stationary) stationary = false;


    const onGenerateCart = () =>{
        setProductList(applySuggestions());
    };

    return (
        <Card>
            <CardHeader title="This is your shopping cart!"/>
            <Divider variant={"middle"}/>
            <CardContent>
                {productList.length===0? (
                        <Typography gutterBottom variant="h5" component="h2" align={"center"}>
                            Nothing here yet!
                        </Typography>
                    ):
                    (
                        <List>
                            {productList.map((product,idx)=>{
                                return <ListItem key={idx}>
                                    <ListItemText  primary={product.name} secondary={`Qty: ${product.quantity}`}/>
                                    <span style={{width:'2vw'}}/>
                                    <ListItemText primary={`Price: ${product.price}$`}/>
                                    <IconButton color={"primary"} component="span" onClick={(event)=>onChangeQuantity(event,idx, +1)}>
                                        <AddIcon />
                                    </IconButton>
                                    <IconButton color={"default"} component="span" onClick={(event)=>onChangeQuantity(event,idx, -1)}>
                                        <RemoveIcon />
                                    </IconButton>
                                    <IconButton color={"secondary"} aria-label="Delete record" component="span" onClick={(event)=>onDeleteClick(event,idx)}>
                                        <DeleteForeverIcon />
                                    </IconButton>
                                </ListItem>
                            })}
                        </List>
                    )}
                    <Divider/>

                <Typography gutterBottom variant="h5" component="h2" align={"left"}>
                    Total: {calcTotal()}$
                </Typography>
                {stationary? (<></>): (
                    productList.length === 0?
                            (<ColorButton style={{justifyContent: 'center'}} onClick={()=>onGenerateCart()}>Generate list</ColorButton>)
                            :
                            (<ColorButton style={{justifyContent: 'center'}} onClick={()=>{history.push("/checkout")}}>Proceed to checkout</ColorButton>)
                )}
            </CardContent>
        </Card>);
};

export default CartPopup;
