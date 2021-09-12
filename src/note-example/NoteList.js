import {Link} from "react-router-dom";
import {useContext} from "react";
import {NotesContext} from "./NotesContextProvider";

const NoteList = ({onClick}) => {
    const {notes} = useContext(NotesContext);
    return(
        <div className="grid-container">
            {notes.map(note =>
                    <div className="grid-item">
                    <text>
                        Name:{"\n"}
                        {note.name}{"\n"}
                        Contents:{"\n"}
                        {note.contents}{"\n"}
                    </text>
                    <button name={note.name} onClick={onClick}>Delete</button>
                    <Link to={"/notes/" + note.name}>Details</Link>
                </div>
                )
            }
            </div>
    );
}
export default NoteList;