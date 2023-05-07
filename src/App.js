
import { Estilos } from "./componentes/EstilosGlobais/Estilos"
import { Card } from "./componentes/Card/Card"
import { ProvedorTema } from "./componentes/ProvedorTema/ProvedorTema";
import { Tipografia } from "./componentes/Tipografia/Tipografia";
import { CampoTexto } from "./componentes/CampoTexto/CampoTexto";
function App() {
  return (
    <ProvedorTema>
      <Estilos />
      <Card>
        <Tipografia variante="h1" componente="h1">
          <h1>Freelando</h1>
        </Tipografia>
        <Tipografia variante="body" componente="body">
          Crie seu perfil gratuitamente para começar a trabalharcom os melhores freelancers.
          Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho.
        </Tipografia>
        <CampoTexto titulo="Nome Completo"></CampoTexto>
      </Card>
    </ProvedorTema>
  );
}

export default App;
