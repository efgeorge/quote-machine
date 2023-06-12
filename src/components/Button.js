import './../styles/Button.scss';

const Button = ({ text, btnid, handler }) => {
    return (
        <button id={btnid} onClick={handler}>{text}</button>
    )
}

export default Button;