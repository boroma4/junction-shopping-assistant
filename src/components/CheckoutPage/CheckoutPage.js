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

const CheckoutPage = ({cart,setProductList}) => {
const [localCart,setLocalCart] = useState(cart);
const [suggestions, setSuggestions] = useState([]);

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

    const applySuggestions = () => {
        let suggestionsFound = [PRODUCTS[0],PRODUCTS[1],PRODUCTS[2]];
        /*TODO******************************
        *
        *
        ************************************/
        return suggestionsFound;
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
                                return <ListItem>
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

                <ColorButton>Buy <PaymentIcon fontSize={"large"}/></ColorButton>
            </Grid>
        </Grid>
      </Container>

  );
};

export default CheckoutPage;