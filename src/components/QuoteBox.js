import { useState } from 'react';
import './../styles/QuoteBox.scss';
import Button from './Button';
import useGenerateRandomColor from '../utils/useGenerateRandomColor';

const QuoteBox = () => {
    const quotes = [
        {quote: "Be yourself; everyone else is already taken.", author: "Oscar Wilde"},
        {quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein"},
        {quote: "Soarele, atata timp cat sta pe cer, tine de cald la toata lumea.", author: "Anaser Duduianu"}
    ]
    
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * quotes.length));
    const { color, generateColor } = useGenerateRandomColor();

    const generateRandomNumberHandler = () => {
        const randomNumber = Math.floor(Math.random() * quotes.length);
        setRandomNumber(randomNumber);
    }

    const handleClick = () => {
        generateRandomNumberHandler();
        generateColor();    
    }

    return (
        <div id="quote-box" style={{backgroundColor: color, color: !color}}>
            <div id="quote-text">
                {quotes[randomNumber].quote}
            </div>
            <div id="quote-author">
                {quotes[randomNumber].author}
            </div>
            <div id="button-wrapper">
                <Button text={"New quote"} btnid={"new-quote"} handler={handleClick} />
            </div>
        </div>
    )
}

export default QuoteBox;