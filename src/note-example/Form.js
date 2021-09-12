import "./notepad.css"
import {InputTextarea} from "primereact/inputtextarea";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
const Form = ({onSubmit}) => {
    return(
        <div>
            <text>
                Please do not add notes with same name.
            </text>
        <form onSubmit={onSubmit}>
            <div className={"p-grid"}>
            <span className="p-float-label">
                <InputText id="name"  className={"name-style"} />
                <label htmlFor="name">Name</label>
            </span>
            </div>
            <div className={"p-grid"}>
            <span className="p-float-label">
                <InputTextarea className={"name-style"} id="contents" />
                 <label htmlFor="contents">Content</label>
            </span>
            </div>
            <Button  label="Submit" />
        </form>
        </div>
    );
}
export default Form;