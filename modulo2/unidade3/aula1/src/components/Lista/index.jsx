import './index.css';

const Lista = ({ titulo, children }) => {

    return(
        <>
            <h2>{titulo}</h2>
            <div className='cards'>
                {children}
            </div>
        </>
    );
}

export default Lista;