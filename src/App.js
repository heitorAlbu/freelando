
import { Estilos } from "./componentes/EstilosGlobais/Estilos"
import { Card } from "./componentes/Card/Card"
import { ProvedorTema } from "./componentes/ProvedorTema/ProvedorTema";
import { Tipografia } from "./componentes/Tipografia/Tipografia";
import { CampoTexto } from "./componentes/CampoTexto/CampoTexto";
import { Container, Row, Col } from "react-grid-system";
import { Botao } from "./componentes/Botao/Botao";
import { ListaSuspensa } from "./componentes/ListaSuspensa/ListaSuspensa";
function App() {
  return (
    <ProvedorTema>
      <Container style={{ margin: '80px 0' }}>
        <Estilos />
        <Row justify="center">
          <Col lg={6} md={8} sm={12}>
            <Card>
              <Tipografia variante="h1" componente="h1">
                <h1>Freelando</h1>
              </Tipografia>
              <Tipografia variante="body" componente="body">
                Crie seu perfil gratuitamente para começar a trabalharcom os melhores freelancers.
                Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho.
              </Tipografia>
              <Row>
                <Col>
                  <CampoTexto titulo="Nome Completo"></CampoTexto>
                </Col>
              </Row>
              <Row>
                <Col lg={4} md={4} sm={4}>
                  <ListaSuspensa titulo="Estado"></ListaSuspensa>
                </Col>
                <Col lg={8} md={8} sm={8}>
                  <CampoTexto titulo="Cidade"></CampoTexto>
                </Col>
              </Row>
              <Row>
                <Col>
                  <CampoTexto titulo="E-mail"></CampoTexto>
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={6}>
                  <CampoTexto titulo="Senha"></CampoTexto>
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <CampoTexto titulo="Repita a Senha"></CampoTexto>
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={6}>
                  <Botao variante="secundaria">
                    Anteriô'
                  </Botao>
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <div style={{ textAlign: 'right' }}>
                    <Botao variante="primaria">
                      Próxima
                    </Botao>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

      </Container>
    </ProvedorTema>
  );
}

export default App;
