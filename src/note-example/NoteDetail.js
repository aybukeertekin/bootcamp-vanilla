import {Link, useParams} from "react-router-dom";
import {useContext} from "react";
import {NotesContext} from "./NotesContextProvider";

const NoteDetail = () => {
    const {id} = useParams();
    const {notes} = useContext(NotesContext)
    const note = notes.find(note => note.name === id);
    if(!note) return <div>Note cannot be found!</div>
    return(
        <div className="grid-container">
            <Link to={"/"}>Home</Link>
                <div className="grid-item">
                    <text>
                Name:{"\n"} {note.name}{"\n"}
                Contents:{"\n"} {note.contents}{"\n"}
                </text>
                </div>
        </div>
    );
}
export default NoteDetail;