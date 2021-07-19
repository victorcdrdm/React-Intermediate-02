import React from 'react'

function SimpsonQuote({quote}) {
    return (
        quote && (
            <div className='DisplayEmployee'>
                <img src={quote.image}/>
                <ul>
                    <li>{quote.character}</li>
                    <li>{quote.quote}</li>
                </ul>
            </div>
        )
    );
}

export default SimpsonQuote;
