import { Container, List, Segment, Image, Divider } from 'semantic-ui-react';

export function FooterBoard() {

  return (
    <Segment vertical className="footer">
    <Container textAlign='center'>
      <Divider section />
      <Image centered size='mini' src='logo_fire.png' />
      <List horizontal divided link size='small'>
        <List.Item as='a' href='#'>
          Site Map
      </List.Item>
        <List.Item as='a' href='#'>
          Contact Us
      </List.Item>
        <List.Item as='a' href='#'>
          Terms and Conditions
      </List.Item>
        <List.Item as='a' href='#'>
          Privacy Policy
      </List.Item>
      </List>
    </Container>
  </Segment>
    
  );
}