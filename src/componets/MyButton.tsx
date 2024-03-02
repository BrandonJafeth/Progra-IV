const MyButton = ({
 text = ' ', 
 action,
}) => {
return <button onClick={action}>{text}</button>;
};


export default MyButton;