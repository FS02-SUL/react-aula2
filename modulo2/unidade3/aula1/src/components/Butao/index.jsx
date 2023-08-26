const Butao = ({cor , titulo, onclick}) => {

    let btnCSS = {
        backgroundColor: cor,
        width: '100px',
        height: '40px',
    }

    return(
        <>
            <button 
                style={btnCSS}
                onClick={onclick}
            >
                {titulo}
            </button>
        </>
    );
}

export default Butao;