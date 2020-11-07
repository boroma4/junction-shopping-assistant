import React from 'react'
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
import blue from "@material-ui/core/colors/blue";
import Typography from "@material-ui/core/Typography";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

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

const ColorButtonSec = withStyles((theme) => ({
    root: {
        color: "white",
        backgroundColor: blue[700],
        justifyContent: 'center',
        margin: 5,
        '&:hover': {
            backgroundColor: blue[900],
        },
    },
}))(Button);

const CartPopup = ({productList,setProductList}) => {

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
                                return <ListItem>
                                    <ListItemText key={idx} primary={product.name} secondary={`Qty: ${product.quantity}`}/>
                                    <span style={{width:'2vw'}}/>
                                    <ListItemText key={idx} primary={`Price: ${product.price}$`}/>
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
                {productList.length === 0? (<ColorButton style={{justifyContent: 'center'}}>Generate list</ColorButton>) : (<ColorButton style={{justifyContent: 'center'}}>Proceed to checkout</ColorButton>)}

            </CardContent>
            {/*<CardActions>*/}


            {/*</CardActions>*/}
        </Card>);
};

export default CartPopup;
