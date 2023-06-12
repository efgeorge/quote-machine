import './../styles/Button.scss';

const Button = ({ text, btnid }) => {
    return (
        <button id={btnid}>{text}</button>
    )
}

export default Button;