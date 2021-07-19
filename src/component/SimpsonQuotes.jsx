import React from 'react'

function SimpsonQuote({quote, image, character}) {
    return (
        <div className='DisplayEmployee'>
            <img src={image}/>
            <ul>
                <li>{character}</li>
                <li>{quote}</li>
            </ul>
        </div>
    );
}

export default SimpsonQuote;
