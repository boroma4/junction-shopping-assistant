import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from '../Header/Header';
import MainFeaturedPost from '../MainFeaturedPost/MainFeaturedPost';
import Footer from '../Footer/Footer';
import Product from "../ProductCard/Product";
import SuggestionsSidebar from "../SuggestionsSidebar/SuggestionsSidebar";
import {DEFAULT_EVENTS} from './DEFAULT_EVENTS'
import {PRODUCTS} from "../ProductCard/PRODUCTS_LIST";

const mainFeaturedPost = {
    title: 'iPhone 12 Pro Max',
    description:
        "Go big.",
    image: 'https://fdn.gsmarena.com/imgroot/news/20/09/only-iphone-12-pro-max-with-mmwave/-1200/gsmarena_000.jpg',
    imgText: 'main image description',
    linkText: 'Pre-order today...',
};

export default function MainPage({event, setEvent, productList, setProductList, isSignedIn, setIsSignedIn}) {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header
                    events={DEFAULT_EVENTS}
                    setSelectedEvent={setEvent}
                    productList={productList}
                    setProductList={setProductList}
                    isSignedIn={isSignedIn}
                    setIsSignedIn={setIsSignedIn}
                />
                <main style={{display: "flex", alignItems: "flex-start"}}>
                    <div>
                        <MainFeaturedPost post={mainFeaturedPost} />
                        <Grid container spacing={4}>
                            {PRODUCTS.map((product) => {
                                return <Product product={product} key={product.id}/>
                            })}
                        </Grid>
                    </div>
                    <SuggestionsSidebar event={event} setEvent={setEvent}/>
                </main>
            </Container>
            <Footer/>
        </React.Fragment>
    );
}
