import Form from "./Form";
import NoteList from "./NoteList";
import {Link} from "react-router-dom";
import {useContext} from "react";
import {NotesContext} from "./NotesContextProvider";

const Notepad = ({isNote}) => {
    const {notes, setNotes} = useContext(NotesContext);
    return(
        <div>
            {isNote ? <Link to="/notes">Notes</Link> : <Link to="/">Home</Link>}
            {isNote &&
            <Form onSubmit = {(event) => {event.preventDefault();
                if (notes.filter(e => e.name === event.target[0].value).length > 0) {
                    alert("You cannot add notes with same name");
                    return;
                }
                setNotes(
                    notes.concat([{name: event.target[0].value, contents: event.target[1].value}]));}}/>}
            <NoteList onClick={(event) => {
    event.preventDefault();
    setNotes(notes.filter(note => {
        return note.name !== event.target.name
    }));
}}/>
        </div>
    );
};
export default Notepad;