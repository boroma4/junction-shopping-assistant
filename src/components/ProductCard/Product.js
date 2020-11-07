import React from 'react';
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";


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





const Product = ({product}) => {
    const classes = useStyles();
    return(
        <Grid item xs={12} md={6}>
            <CardActionArea component="a" href="#">
                <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                        <CardContent>
                            <Typography component="h2" variant="h5">
                                {product.name}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {product.brandName}
                                </Typography>
                            <Typography variant="subtitle1" paragraph>
                                {product.description}
                            </Typography>
                            <Typography variant="subtitle1" color="primary">
                                Price: {product.price}$
                            </Typography>
                        </CardContent>
                    </div>
                    <Hidden xsDown>
                        <CardMedia component="img" className={classes.cardMedia} src={product.pic} title={product.name}/>
                    </Hidden>
                </Card>
            </CardActionArea>
        </Grid>);
};

export default Product;
