import React from "react";
import {
} from "semantic-ui-react";
import Avatar from '@material-ui/core/Avatar';
import './Profile.css';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Face from '../../pics/face.jpg'
import {Button} from "@material-ui/core";

const ProfileContent = () => {
  return (
    <div className="profileHeader">
      <div className="centered">
        <List>
          <ListItem>
            <img src={Face} alt="Italian Trulli" width={300} height={300} style={{borderRadius: '50%'}}/>
          </ListItem>
          <ListItem>
            <h1>Nakasone Hisoka</h1>
          </ListItem>
          <ListItem>
            <div><b>Email: </b> nakasone420hisoka@hotgirls.com</div>
          </ListItem>
          <ListItem>
            <div><b>Number Of Family Members:</b> 4</div>
          </ListItem>
          <ListItem>
            <Button variant="contained" color="secondary">
              Edit
            </Button>
            {/*<ListItemText primary={`Activate Saving Mode`} />*/}
            {/*<ListItemSecondaryAction>*/}
            {/*  <Checkbox />*/}
            {/*</ListItemSecondaryAction>*/}
          </ListItem>

        </List>
      </div>
    </div>
  );
};

export default ProfileContent;
