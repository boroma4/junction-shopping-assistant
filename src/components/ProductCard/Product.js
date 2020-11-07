import React from 'react';
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import EcoIcon from '@material-ui/icons/Eco';

const useStyles = makeStyles({
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
        height:172
    },
});





const Product = ({product, addProduct}) => {
    const classes = useStyles();
    return(
        <Grid item xs={12} md={6}>
                <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                        <CardContent>
                            <Typography component="h2" variant="h5">
                                {product.name}
                                {product.isEco && <EcoIcon style={{marginLeft:'5px'}}/>}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {product.brandName}
                                </Typography>
                            <Typography variant="subtitle1" paragraph>
                                {product.description}
                            </Typography>
                            <Typography variant="subtitle1" color="default">
                                Price: {product.price}$
                                <span>
                                    <IconButton color={'primary'} onClick={()=>addProduct(product)}>
                                        <AddShoppingCartOutlinedIcon fontSize={'large'}/>
                                    </IconButton>
                                </span>
                            </Typography>
                        </CardContent>
                    </div>
                    <Hidden xsDown>
                        <CardMedia component="img" className={classes.cardMedia} src={product.pic} title={product.name}/>
                    </Hidden>
                </Card>
        </Grid>);
};

export default Product;
