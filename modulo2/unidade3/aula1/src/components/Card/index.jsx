import Butao from "../Butao";
import './index.css';

const Card = ({ titulo, imagem, descricao, categoria, lerMais = false }) => {

    return(
        <>
            <div className="card">
                <img src={imagem} alt={titulo} />
                <h3>{titulo}</h3>
                <h6>{categoria}</h6>
                <p>{descricao}</p>
                <Butao
                    titulo={"Saiba mais"}
                    cor={"#0066FF"}
                    onclick={
                        () => alert("Saiba mais")
                    }
                />
                { lerMais && 
                    <Butao
                        titulo={"Ler depois"}
                        cor={"#00DDFF"}
                        onclick={
                            () => alert("Ler depois")
                        }
                    />
                }
            </div>
        </>
    );
}

export default Card;