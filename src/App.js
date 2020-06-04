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

const ListTodoByCategory = withRouter(() => {
  let { id } = useParams();
  return (
    <>
      <h3>List Todo from category {id}</h3>
      ...
    </>
  );
});

const ListTodoByGroup = withRouter(() => {
  let { id } = useParams();
  return (
    <>
      <h3>List Todo from group {id}</h3>
      ...
    </>
  );
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
          <li>
            <Link to="/categories/1/todos">Todos from Category 1</Link>
          </li>
          <li>
            <Link to="/groups/1/todos">Todos from Group 1</Link>
          </li>
          {["groups", "categories"].map((res) => (
            <>
              <li>
                <Link style={{ textTransform: "capitalize" }} to={"/" + res}>
                  {res}
                </Link>
              </li>
              <li>
                <Link to={"/" + res + "/new"}>New {res}</Link>
              </li>
              <li>
                <Link to={"/" + res + "/1"}>View {res} 1</Link>
              </li>
              <li>
                <Link to={"/" + res + "/1/edit"}>Edit {res} 1</Link>
              </li>
            </>
          ))}
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
        <Route
          exact
          path="/categories/:id/todos"
          children={ListTodoByCategory}
        />
        <Route exact path="/groups/:id/todos" children={ListTodoByGroup} />
      </Switch>
    </Router>
  );
}

export default App;
