import './../styles/Wrapper.scss';
import useGenerateRandomColor from '../utils/useGenerateRandomColor';
import QuoteBox from "./QuoteBox";

const Wrapper = () => {
    const { color, generateColor } = useGenerateRandomColor();

    return (
        <div id="wrapper" style={{backgroundColor: color, color: !color}}>
            <QuoteBox generateColor={generateColor}/>
        </div>
    )
}

export default Wrapper;