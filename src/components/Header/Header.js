import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from '../../logo.png'
import SearchBar from "material-ui-search-bar";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import Typography from "@material-ui/core/Typography";
import CartPopup from "../Cart/CartPopup";
import Popover from "@material-ui/core/Popover";


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
        marginLeft:'2vw',
        marginRight:'auto'
    }
}));

export default function Header({events, setSelectedEvent}) {
    const classes = useStyles();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showEvents, setShowEvents] = useState(true);
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
                <img src={logo} alt="Logo" height="50" width="60" />
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
                            <CartPopup/>
                        </Popover>
                    </IconButton>
                    {isLoggedIn
                        ?<IconButton>
                            <PersonIcon />
                        </IconButton>
                        :<Button variant="outlined" size="small" onClick={()=>setIsLoggedIn(true)}>
                            Sign in
                        </Button>
                    }
                </div>
            </Toolbar>
            {
                showEvents
                    ?
                    <IconButton style={{padding:0}} onClick={() => setShowEvents(false)}>
                        <ArrowDropUpIcon />
                    </IconButton>
                    :
                    <IconButton style={{padding:0}} onClick={() => setShowEvents(true)}>
                        <ArrowDropDownIcon />
                    </IconButton>
            }
            {showEvents &&
                <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                    <Typography variant="h6">
                        Popular events:
                    </Typography>
                    {events.map((event) => (
                        <Typography variant="p"
                                    key={event.title}
                                    className={classes.toolbarEvent}
                                    onClick={()=>setSelectedEvent(event)}
                        >
                            {event.title}
                        </Typography>
                    ))}
                </Toolbar>
            }
        </React.Fragment>
    );
}

Header.propTypes = {
    sections: PropTypes.array,
    title: PropTypes.string,
};
