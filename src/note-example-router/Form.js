import "./notepad.css"
const Form = ({onSubmit}) => {
    return(
        <div>
            <text>
                Please do not add notes with same name.
        </text>
        <form onSubmit={onSubmit}>
            <label>
                Name:
                <input type="text" className={"name-style"} name="name" />
            </label>
            <label>
                Content:
                <input type="text" className={"name-style"} name="contents" />
            </label>
            <input type="submit" value="Submit"/>
        </form>
        </div>
    );
}
export default Form;