import React from "react";
import {
  Segment,
  Item,
  Header,
  Button,
  Grid,
  Statistic,
  Divider,
  Reveal,
} from "semantic-ui-react";

const ProfileHeader = () => {
  return (
    <Segment>
      <Grid>
        <Grid.Column width={12}>
          <Item.Group>
            <Item>
              <Item.Image
                avatar
                size="small"
                src={profile.image || "/assets/user.png"}
              />
              <Item.Content verticalAlign="middle">
                <Header as="h1">{profile.displayName}</Header>
              </Item.Content>
            </Item>
          </Item.Group>
        </Grid.Column>
        <Grid.Column width={4}>
          <Divider />
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default observer(ProfileHeader);
