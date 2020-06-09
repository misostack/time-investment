# Documentation

## React Router

```bash
yarn add react-router-dom
```

### Route types

> Eg : groups,todos,categories

| Path                          | Used for                                     |
| ----------------------------- | -------------------------------------------- |
| /todos/                       | display a list of all todos                  |
| /todos/new                    | display an html form for creating a new todo |
| /todos/:id                    | display a specific todo                      |
| /todos/:id/edit               | display an html form for editing a todo      |
| /categories/:categoryId/todos | display a list of all todos in category      |
| /groups/:groupId/todos        | display a list of all todos in group         |

> To allow useParams or useRouteMatch must wrap your component with Router HOC like this

- https://reacttraining.com/react-router/web/guides/quick-start
- Ref : https://stackoverflow.com/questions/58435074/react-router-dom-invalid-hook-call-hooks-can-only-be-called-inside-of-the-body
- https://knowbody.github.io/react-router-docs/api/Link.html
- https://css-tricks.com/learning-react-router/

```js
export default withRouter(Catalog);
```

## Stylesheets

- CSS Framework : https://bulma.io/documentation/customize/with-node-sass/#3-create-a-sass-file

```bash
yarn add node-sass bulma
```
