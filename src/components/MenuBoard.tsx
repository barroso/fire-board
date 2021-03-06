import { Container, Dropdown, Menu, Image } from 'semantic-ui-react';

export function MenuBoard() {

  return (
    <Menu fixed='top'>
      <Container>
        <Menu.Item as='a' header>
          <Image size='mini' src='logo_fire.png' style={{ marginRight: '1.5em' }} />
          FireBoard
        </Menu.Item>
        <Menu.Item as='a'>Painel</Menu.Item>

        <Dropdown item simple text='Menu'>
          <Dropdown.Menu>
            <Dropdown.Item>Usuários</Dropdown.Item>
            <Dropdown.Item>Máquinas</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Mensalidade</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>
  );
}