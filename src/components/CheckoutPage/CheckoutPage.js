import React, {useEffect, useState} from "react";
import CartPopup from "../Cart/CartPopup";
import Container from "@material-ui/core/Container";
import Header from "../UserProfile/HeaderProfilePage";
import Grid from "@material-ui/core/Grid";
import {Button} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import green from "@material-ui/core/colors/green";
import Typography from "@material-ui/core/Typography";
import PaymentIcon from '@material-ui/icons/Payment';
import {purple} from "@material-ui/core/colors";
import {PRODUCTS} from "../ProductCard/PRODUCTS_LIST";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";
import AddShoppingCartOutlinedIcon from "@material-ui/icons/AddShoppingCartOutlined";
import {useHistory} from 'react-router-dom';

const CheckoutPage = ({cart,setProductList, setPurchaseHistory,purchaseHistory}) => {
const [localCart,setLocalCart] = useState(cart);
const [suggestions, setSuggestions] = useState([]);
const [finalCapResult, setFinalCupResult] = useState([]);
const history = useHistory();

    const ColorButton = withStyles((theme) => ({
        root: {
            color: "white",
            backgroundColor: green[500],
            margin: "2vh",
            width: "15vw",
            fontSize: "4vh",
            justifyContent: 'center',
            '&:hover': {
                backgroundColor: green[700],
            },
        },
    }))(Button);

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
        }



    };

    const queryUserProducts = (suggestedTypes) => {
        let suggestionArray = [];
        for(let i=0;i<suggestedTypes.length;i++){
            let product = PRODUCTS.filter(prod => prod.type === suggestedTypes[i])[0];
            let previousPurchases = purchaseHistory.filter((purchase)=> purchase.type === suggestedTypes[i]);
            if (!previousPurchases && previousPurchases.length!==0){
                suggestionArray.push(previousPurchases[0]);
            }

        }
        return suggestionArray;
    };

    const applySuggestions = () => {
        const latestDate = findLatestDate();
        let lastWeeksGoods = purchaseHistory.filter(purchase => purchase.date === latestDate);
        const sumFunc = (acc,curVal)=> {return acc+curVal};
        const sumFuncWithCalc = (acc,curVal)=> {return acc+curVal};

        let lastWeekSum = calculateSum(sumFunc,lastWeeksGoods,"past");
        let thisCartSum = calculateSum(sumFunc,cart,"future");
        let resultSum = [];

        for (let key in thisCartSum){
            let mlt = cart.find(elem => elem.data.type === key)?.quantity;
            if (!mlt){
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
        setFinalCupResult(resultSum);
        return queryUserProducts(suggestedTypes);
    };

    const addProduct = (product) => {
        setProductList(prev=>{
            let newCart = [...prev];
            const productIdx = prev.map((prod) => prod.name).indexOf(product.name);
            if(productIdx !== -1){
                newCart[productIdx].quantity++;
            }else{
                const newProd = {name:product.name, quantity:1, price: product.price};
                newCart.push(newProd);
            }
            return newCart;
        })
    };

    /********************* First render **************************/
    useEffect(()=>{
        setSuggestions(applySuggestions());
    },[]);

    const SmallButton = withStyles((theme) => ({
        root: {
            color: "white",
            backgroundColor: purple[500],
            margin: "2vh",
            fontSize: "2vh",
            justifyContent: 'center',
            '&:hover': {
                backgroundColor: purple[700],
            },
        },
    }))(Button);

    const onBuyClick = () =>{
        let newDate = new Date();

        if(purchaseHistory.length !== 0){
            const latestDate = new Date(Math.max(...purchaseHistory.map(e => new Date(e.date))));
            console.log(latestDate);
            console.log(newDate);
            newDate.setDate(latestDate.getDate() + 7);
        }
        setPurchaseHistory(prev=>{
            const newPurchases = cart.map(product => {
               let purchaseData = {...product.data};
               purchaseData.price *= product.quantity;
               purchaseData.cap *= product.quantity;
               purchaseData.date = newDate;
               return purchaseData;
            });
            return [...prev, ...newPurchases ]
        });
        setProductList([]);
        history.push("/");
    };

  return (
      <Container>
        <Header cartDisabled={true} />
        <Grid container spacing={3} alignContent={"center"} style={{marginTop:"15vh"}}>
            <Grid item xs={4}>
                <CartPopup productList={cart} setProductList={setProductList} stationary={true}/>
                <Typography gutterBottom variant="h5" component="h2" style={{fontStyle:"italic",marginTop:"5vh"}}>
                    Do you feel like you could be saving more? <SmallButton>Show me!</SmallButton>
                </Typography>
            </Grid>
            <Grid item xs={8}>
                {suggestions.length === 0? (
                    <Typography gutterBottom variant="h5" component="h2" style={{fontStyle:"italic"}}>
                        Looks like you're all set up !
                    </Typography>
                ) : (<Card>
                    <CardHeader title="We have noticed, you might be running out of these products!"/>
                    <Divider variant={"middle"}/>
                    <CardContent>
                        <List>
                            {suggestions.map((suggestion,idx)=>{
                                return <ListItem key={idx}>
                                    <ListItemText>
                                        {suggestion.name}
                                    </ListItemText>
                                    <IconButton color={'primary'} onClick={()=>addProduct(suggestion)}>
                                        <AddShoppingCartOutlinedIcon fontSize={'large'}/>
                                    </IconButton>
                                </ListItem>
                            })}
                        </List>
                    </CardContent>
                </Card>)}

                <ColorButton onClick={onBuyClick}>Buy <PaymentIcon fontSize={"large"}/></ColorButton>
            </Grid>
        </Grid>
      </Container>

  );
};

export default CheckoutPage;
