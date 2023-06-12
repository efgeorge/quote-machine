import './../styles/QuoteBox.scss';
import Button from './Button';

const QuoteBox = () => {
    return (
        <div id="quote-box">
            <div id="quote-text">
                Quote
            </div>
            <div id="quote-author">
                Author
            </div>
            <div id="button-wrapper">
                <Button text={"Twitter"} btnid={"tweet-quote"}/>
                <Button text={"Tumblr"} btnid={"tumblr-quote"}/>
                <Button text={"New quote"} btnid={"new-quote"} />
            </div>
        </div>
    )
}

export default QuoteBox;