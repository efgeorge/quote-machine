import './../styles/Button.scss';

const Button = ({ text, id }) => {
    return (
        <button id={`button btn${id}`}>{text}</button>
    )
}

export default Button;