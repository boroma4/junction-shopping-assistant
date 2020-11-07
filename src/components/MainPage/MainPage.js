import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from '../Header/Header';
import MainFeaturedPost from '../MainFeaturedPost/MainFeaturedPost';
import FeaturedPost from '../FeaturedPost/FeaturedPost';
import Footer from '../Footer/Footer';
import Product, {products} from "../ProductCard/Product";
import SuggestionsSidebar from "../SuggestionsSidebar/SuggestionsSidebar";
import {EVENTS} from './Events'

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },
}));

const mainFeaturedPost = {
    title: 'Title of a longer featured blog post',
    description:
        "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: 'https://source.unsplash.com/random',
    imgText: 'main image description',
    linkText: 'Continue reading…',
};

const featuredPosts = [
    {
        title: 'Featured post',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random',
        imageText: 'Image Text',
    },
    {
        title: 'Post title',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random',
        imageText: 'Image Text',
    },
];
export default function MainPage() {
    const classes = useStyles();
    const [selectedEvent, setSelectedEvent] = useState(null);

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header events={EVENTS} setSelectedEvent={setSelectedEvent} />
                <main style={{display: "flex", alignItems: "flex-start"}}>
                    <div>
                        <MainFeaturedPost post={mainFeaturedPost} />
                        <Grid container spacing={4}>
                            {featuredPosts.map((post) => (
                                <FeaturedPost key={post.title} post={post} />
                            ))}
                            {products.map((product) => {
                                return <Product product={product} key={product.id}/>
                            })}
                        </Grid>
                    </div>
                    <SuggestionsSidebar event={selectedEvent}/>
                </main>
            </Container>
            <Footer/>
        </React.Fragment>
    );
}
