import './../styles/QuoteBox.scss';
import Button from './Button';

const QuoteBox = () => {
    return (
        <div id="quote-box">
            <div id="quote-text">
                sdgdgdfgdf
            </div>
            <div id="quote-author">
                dsds
            </div>
            <div id="button-wrapper">
                <Button text={"Twitter"} id={"-twitter"}/>
                <Button text={"Tumblr"} id={"-tumblr"}/>
                <Button text={"New quote"} id={"-new-quote"}/>
            </div>
        </div>
    )
}

export default QuoteBox;