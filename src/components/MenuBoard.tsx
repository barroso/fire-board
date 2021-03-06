import { Link } from 'react-router-dom';
import { Container, Dropdown, Menu, Image } from 'semantic-ui-react';

export function MenuBoard() {

  return (
    <Menu fixed='top'>
      <Container>
        <Menu.Item as='a' header>
          <Image size='mini' src='logo_fire.png' style={{ marginRight: '1.5em' }} />
          FireBoard
        </Menu.Item>
        <Menu.Item as='a'>
          <Link to="/">Painel</Link>
        </Menu.Item>
        <Dropdown item simple text='Menu'>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link to="/users">Usuários</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/about">Máquinas</Link>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Mensalidade</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>
  );
}