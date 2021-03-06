
import { Card, Container, Divider, Grid, Header } from 'semantic-ui-react';
import PieBoard from './charts/PieBoard';
import LineBoard from './charts/LineBoard';

export function BodyBoard() {

  return (
    <Container text className="bodyBoard" >
      <Header as='h1'>Painel Principal</Header>

      <Card.Group>
        <Card>
          <Card.Content>
            <Card.Header>Processadores</Card.Header>
            <Card.Meta>1.5G</Card.Meta>
            <Card.Description>
              Processadores Ativos
              <img src="icons/cogs.png" alt="processador" />
            </Card.Description>
          </Card.Content>
        </Card>

        <Card>
          <Card.Content>
            <Card.Header content='Valor' />
            <Card.Meta content='R$' />
            <Card.Description>
              R$ 78,00
              <img src="icons/coin-dollar.png" alt="valor" />
            </Card.Description>
          </Card.Content>
        </Card>

        <Card>
          <Card.Content>
            <Card.Header content='Saldo' />
            <Card.Meta content='R$' />
            <Card.Description>
              R$ 178,00
              <img src="icons/coin-dollar.png" alt="valor" />
            </Card.Description>
          </Card.Content>
        </Card>

      </Card.Group>

      <Divider section />

      <Grid divided='vertically'>
        <Grid.Row columns={2}>
          <Grid.Column>
            <LineBoard />
          </Grid.Column>
          <Grid.Column>
            <PieBoard />
          </Grid.Column>
        </Grid.Row>
      </Grid>



    </Container>
  );
}