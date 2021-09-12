import {createContext, useState} from "react";
export const NotesContext = createContext({notes: [], setNotes: undefined});
const NotesContextProvider = (props) => {
    const [notes, setNotes] = useState( []);
    return (
                <NotesContext.Provider value={{notes: notes, setNotes: setNotes}}>
                    {props.children}
                </NotesContext.Provider>
    );
}
export default NotesContextProvider;