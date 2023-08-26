let css = {
    border: '1px solid red',
}

const CardProContainer = ({children}) => {
    return(
        <>
            <div style={css}>
                {children}
            </div>
        </>
    );
}

export default CardProContainer;