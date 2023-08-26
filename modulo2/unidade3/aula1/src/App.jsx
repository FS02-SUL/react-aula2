import Card from "./components/Card";
import { CardPro } from "./components/CardPro";
import Lista from "./components/Lista";

//COMPONENT
const App = () => {
  //LOGICA DO COMPONENTE

  return (
    //CORPO DO COMPONENTE
    <>

      <Lista titulo={"PRO"}>
        <CardPro.CardProContainer>
          <CardPro.CardProTitulo titulo={"Titulo pro"} />
          <CardPro.CardProDescricao descricao={"lorem ipsum"} />
        </CardPro.CardProContainer>
        <CardPro.CardProContainer>
          <CardPro.CardProTitulo titulo={"Titulo pro"} />
          <CardPro.CardProDescricao descricao={"lorem ipsum"} />
          <CardPro.CardProButton />
        </CardPro.CardProContainer>
      </Lista>
    
      <Lista titulo={"Lista 1"}>
        <Card
          titulo={
            "Maconha: veja países que derrubaram restrições e o que o cenário indica como possível tendência para o Brasil"
          }
          imagem={
            "https://s2-g1.glbimg.com/-NBBxo7QK642q_MA1Cl0tIDXQy0=/0x226:766x768/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/d/A/nelZDZR36Zte0BuSMIiQ/tte-2.jpg"
          }
          categoria={"Novidades"}
          descricao={
            "Cinco ministros do Supremo Tribunal Federal (STF) votaram a favor da descriminalização do porte de maconha para uso pessoal, mas julgamento acabou sendo suspenso."
          }
          lerMais
        />
        <Card
          titulo={
            "Maconha: veja países que derrubaram restrições e o que o cenário indica como possível tendência para o Brasil"
          }
          imagem={
            "https://s2-g1.glbimg.com/-NBBxo7QK642q_MA1Cl0tIDXQy0=/0x226:766x768/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/d/A/nelZDZR36Zte0BuSMIiQ/tte-2.jpg"
          }
          categoria={"Novidades"}
          descricao={
            "Cinco ministros do Supremo Tribunal Federal (STF) votaram a favor da descriminalização do porte de maconha para uso pessoal, mas julgamento acabou sendo suspenso."
          }
        />
        <Card
          lerMais
          titulo={
            "Maconha: veja países que derrubaram restrições e o que o cenário indica como possível tendência para o Brasil"
          }
          imagem={
            "https://s2-g1.glbimg.com/-NBBxo7QK642q_MA1Cl0tIDXQy0=/0x226:766x768/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/d/A/nelZDZR36Zte0BuSMIiQ/tte-2.jpg"
          }
          categoria={"Novidades"}
          descricao={
            "Cinco ministros do Supremo Tribunal Federal (STF) votaram a favor da descriminalização do porte de maconha para uso pessoal, mas julgamento acabou sendo suspenso."
          }
        />
      </Lista>
      <Lista titulo={"Lista 2"}>
        <Card
          titulo={
            "Maconha: veja países que derrubaram restrições e o que o cenário indica como possível tendência para o Brasil"
          }
          imagem={
            "https://s2-g1.glbimg.com/-NBBxo7QK642q_MA1Cl0tIDXQy0=/0x226:766x768/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/d/A/nelZDZR36Zte0BuSMIiQ/tte-2.jpg"
          }
          categoria={"Novidades"}
          descricao={
            "Cinco ministros do Supremo Tribunal Federal (STF) votaram a favor da descriminalização do porte de maconha para uso pessoal, mas julgamento acabou sendo suspenso."
          }
        />
      </Lista>
    </>
  );
};

export default App;
