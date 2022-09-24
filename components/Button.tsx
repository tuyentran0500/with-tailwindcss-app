interface buttonProps {
    color: string ;
    text: string;
}

const defaultProps = {
    color: 'red',
    text: 'Hello',
};
  
const Button = (props : buttonProps) => {
    return (
        <button className={`bg-${props.color}-500 hover:bg-${props.color}-700 py-2 px-4 text-white font-semibold rounded-lg shadow-md`}>
            {props.text}
        </button>
    )
};
export default Button
Button.defaultProps = defaultProps 