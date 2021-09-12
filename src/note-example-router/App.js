import Notepad from "./Notepad";
import {Route, Switch} from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import {useState} from "react";
import NoteDetail from "./NoteDetail";
const App = () => {
    const [notes, setNotes] = useState( []);
    return (
        <Router>
            <Switch>
                <Route exact path = {"/"}>
                    <Notepad isNote={true} notes={notes} setNotes={setNotes}/>
                </Route>
                <Route exact path = {"/notes/:id"}>
                    <NoteDetail notes={notes}/>
                </Route>
                <Route exact path = {"/notes"}>
                    <Notepad isNote={false} notes={notes}/>
                </Route>
            </Switch>
        </Router>
    );
}
export default App;