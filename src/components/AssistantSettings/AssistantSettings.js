import {
  Checkbox,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core'
import React from 'react'

export const AssistantSettings = () => {
  return (
    <div className="centered">
      <List>
        <ListItem>
          <ListItemText primary={`Activate Saving Mode`} />
          <ListItemSecondaryAction>
            <Checkbox />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemText primary={`Enable Email Notifications`} />
          <ListItemSecondaryAction>
            <Checkbox />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemText primary={`Eco-Freindly Mode`} />
          <ListItemSecondaryAction>
            <Checkbox />
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </div>
  )
}
