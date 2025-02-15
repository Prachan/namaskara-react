
const CallBack = (props) =>{
    console.log("Child Called");
    const {handleNumber} = props;
    return (
        <div>
            <h1>Child to check CallBack ref</h1>
        </div>
    )
}

export default CallBack;