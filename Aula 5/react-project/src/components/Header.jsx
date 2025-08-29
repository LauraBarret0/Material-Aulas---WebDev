

const Header = ({titulo, texto, cor}) =>{
    return(
        <div style={{color: cor}}>
            <h1>{titulo}</h1>
            <p>{texto}</p>
        </div>
    )
}

export default Header