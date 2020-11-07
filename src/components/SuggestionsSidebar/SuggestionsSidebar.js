import React from "react";
import StickyBox from "react-sticky-box";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from "@material-ui/core/IconButton";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CloseIcon from '@material-ui/icons/Close';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: '1vw',
    },
    list: {
        width: '100%',
        backgroundColor: '#DCDCDC',
        borderRadius:'20px',
    },
    closeButton:{
        float:'right'
    },
}));

export default function SuggestionsSidebar({event, setEvent}){

    const classes = useStyles();

    const handleToggle = (suggestionName) => () => {
        const idx = getEventSuggestionIdx(suggestionName);
        setEvent(prev =>{
            let n = {...prev};
            n.suggestions[idx].checked = !n.suggestions[idx].checked;
            return n;
        });
    };

    const getEventSuggestionIdx = (suggestionName) =>{
       return event.suggestions.map(function(e) { return e.name; }).indexOf(suggestionName);
    };

    const removeSuggestion = (suggestionName) => {
        const idx = getEventSuggestionIdx(suggestionName);
        setEvent(prev =>{
            let n = {...prev};
            n.suggestions.splice(idx, 1);
            if (n.suggestions.length === 0) return null;
            return n;
        });

    };

    return(
            <StickyBox className={classes.root} offsetTop={20} offsetBottom={20}>
                {event &&
                <List className={classes.list}>
                    <IconButton onClick={() => setEvent(null)} className={classes.closeButton}>
                        <CloseIcon/>
                    </IconButton>
                    <h4>
                        {event.title}
                    </h4>
                    <Divider/>
                    {event.suggestions.map(suggestion => (
                        <ListItem key={suggestion.name} role={undefined} dense button
                                  onClick={handleToggle(suggestion.name)}>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={event.suggestions[getEventSuggestionIdx(suggestion.name)].checked}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{'aria-labelledby': `checkbox-list-label-${suggestion.name}`}}
                                />
                            </ListItemIcon>
                            <ListItemText id={`checkbox-list-label-${suggestion.name}`} primary={suggestion.name}/>
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="comments"
                                            onClick={() => removeSuggestion(suggestion.name)}>
                                    <HighlightOffIcon/>
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>
                }
            </StickyBox>
    )
}
