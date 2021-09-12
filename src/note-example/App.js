import Notepad from "./Notepad";
import {Route, Switch} from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import NoteDetail from "./NoteDetail";
import NotesContextProvider from "./NotesContextProvider";
const App = () => {

    return (
        <Router>
            <Switch>
                <NotesContextProvider>
                <Route exact path = {"/"}>
                    <Notepad isNote={true}/>
                </Route>
                <Route exact path = {"/notes/:id"}>
                    <NoteDetail/>
                </Route>
                <Route exact path = {"/notes"}>
                    <Notepad isNote={false}/>
                </Route>
                </NotesContextProvider>
            </Switch>
        </Router>
    );
}
export default App;