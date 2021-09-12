import Notepad from "./Notepad";
import {Route, Switch} from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import {createContext, useState} from "react";
import NoteDetail from "./NoteDetail";
export const NotesContext = createContext({notes: []});
const App = () => {
    const [notes, setNotes] = useState( []);
    return (
        <Router>
            <Switch>
                <NotesContext.Provider value={{notes: notes}}>
                <Route exact path = {"/"}>
                    <Notepad isNote={true} setNotes={setNotes}/>
                </Route>
                <Route exact path = {"/notes/:id"}>
                    <NoteDetail/>
                </Route>
                <Route exact path = {"/notes"}>
                    <Notepad isNote={false}/>
                </Route>
                </NotesContext.Provider>
            </Switch>
        </Router>
    );
}
export default App;