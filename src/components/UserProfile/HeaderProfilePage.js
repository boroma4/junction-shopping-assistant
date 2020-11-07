import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import logo from '../../logo.png'
import SearchBar from "material-ui-search-bar";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useHistory } from "react-router-dom";
import Popover from "@material-ui/core/Popover";
import CartPopup from "../Cart/CartPopup";



const useStyles = makeStyles((theme) => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'start',
        overflowX: 'auto',
        marginBottom:'1vh'
    },
    toolbarEvent: {
        padding: theme.spacing(2),
        flexShrink: 0,
        cursor:'pointer',
        "&:hover": {
            textDecoration: 'underline',
            color:'gray'
        },
    },
    rightSide:{
        marginLeft:'auto'
    },
    shopAssBtn: {
        marginRight: '1vw'
    },
    searchBar:{
        width:'60vw',
        marginLeft:'10vw',
        marginRight:'auto'
    }
}));


export default function Header({productList, setProductList}) {

    let history = useHistory();
    const classes = useStyles();

    /************************************ Popup declarations start *******************************************/
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    /************************************ Popup declarations end *******************************************/

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <React.Fragment>
            <Toolbar className={classes.toolbar}>
                <img src={logo} alt="Logo" height="50" width="60" onClick={()=>history.push('/')} />
                <SearchBar
                    className={classes.searchBar}
                    //onChange={(newValue) => this.setState({ value: newValue })}
                    //onRequestSearch={() => doSomethingWith(this.state.value)}
                />
                <div className={classes.rightSide}>
                    <IconButton>
                        <ShoppingCartIcon onClick={handleClick}/>
                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            style={{marginTop:"20px"}}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                            transitionDuration={800}
                        >
                            <CartPopup productList={productList} setProductList={setProductList}/>
                        </Popover>
                    </IconButton>
                </div>
            </Toolbar>

        </React.Fragment>
    );
}

Header.propTypes = {
    sections: PropTypes.array,
    title: PropTypes.string,
};
