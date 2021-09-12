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
                <label htmlFor="name">Name</label>
                <InputText type="text" className={"name-style"} id="name" />
            </span>
            </div>
            <div className={"p-grid"}>
            <span className="p-float-label">
                 <label htmlFor="contents">Content</label>
                <InputTextarea type="text" className={"name-style"} id="contents" />

            </span>
            </div>
            <Button  label="Submit"/>
        </form>
        </div>
    );
}
export default Form;