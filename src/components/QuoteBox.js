import { useState } from 'react';
import './../styles/QuoteBox.scss';
import Button from './Button';

const QuoteBox = ({}) => {
    const quotes = [
        {quote: "Be yourself; everyone else is already taken.", author: "Oscar Wilde"},
        {quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein"},
        {quote: "Soarele, atata timp cat sta pe cer, tine de cald la toata lumea.", author: "Anaser Duduianu"}
    ]
    

    const [randomNumber, setRandomNumber] = useState(0);

    const generateRandomNumberHandler = () => {
        const randomNumber = Math.floor(Math.random() * quotes.length);
        setRandomNumber(randomNumber);
    }

    return (
        <div id="quote-box">
            <div id="quote-text">
                {quotes[randomNumber].quote}
            </div>
            <div id="quote-author">
                {quotes[randomNumber].author}
            </div>
            <div id="button-wrapper">
                <Button text={"New quote"} btnid={"new-quote"} handler={generateRandomNumberHandler} />
            </div>
        </div>
    )
}

export default QuoteBox;