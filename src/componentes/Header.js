import React from 'react';

const Header = (props) =>{
    return(
    <header>
        
        <div className="text-center"><h1>{props.titulo}</h1></div>
    </header>
    )
}

export default Header;
