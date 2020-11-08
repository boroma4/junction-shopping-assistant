import {
  Checkbox,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core'
import React from 'react'

export const AssistantSettings = ({userSettings, setUserSettings}) => {

  const setSaver = (event) =>{
    setUserSettings(prev=>{
      let ns = {...prev};
      ns.save = event.target.checked;
      return ns;
    })
  };

  const setEmails = (event) =>{
    setUserSettings(prev=>{
      let ns = {...prev};
      ns.emails = event.target.checked;
      return ns;
    })
  };

  const setEco = (event) =>{
    setUserSettings(prev=>{
      let ns = {...prev};
      ns.eco = event.target.checked;
      return ns;
    })
  };
  return (
    <div className="centered" style={{height:'70vh'}}>

      <List>
        <ListItem>
          <ListItemText primary={`Activate Saving Mode`} />
          <ListItemSecondaryAction>
            <Checkbox checked={userSettings.save} onChange={setSaver} />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemText primary={`Enable Email Notifications`} />
          <ListItemSecondaryAction>
            <Checkbox checked={userSettings.emails} onChange={setEmails} />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemText primary={`Eco-Freindly Mode`} />
          <ListItemSecondaryAction>
            <Checkbox checked={userSettings.eco} onChange={setEco} />
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </div>
  )
};
