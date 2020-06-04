import React from "react";
import { createBrowserHistory } from "history";
import "./App.css";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  useParams,
  withRouter,
} from "react-router-dom";

const history = createBrowserHistory();

const ViewTodo = withRouter(() => {
  let { id } = useParams();
  return <h3>ID: {id}</h3>;
});

const EditTodo = withRouter(() => {
  let { id } = useParams();
  return <h3>Edit ID: {id}</h3>;
});

function App() {
  return (
    <Router history={history}>
      <>
        <ul>
          <li>
            <Link to="/todos">Todos</Link>
          </li>
          <li>
            <Link to="/todos/new">New todo</Link>
          </li>
          <li>
            <Link to="/todos/1">View todo 1</Link>
          </li>
          <li>
            <Link to="/todos/1/edit">Edit todo 1</Link>
          </li>
        </ul>
      </>
      <Switch>
        <Route exact path="/">
          <h1>Home</h1>
        </Route>
        <Route exact path="/todos">
          <h1>Todos</h1>
        </Route>
        <Route exact path="/todos/new">
          <h1>New Todo</h1>
        </Route>
        <Route exact path="/todos/:id" children={ViewTodo} />
        <Route exact path="/todos/:id/edit" children={EditTodo} />
      </Switch>
    </Router>
  );
}

export default App;
