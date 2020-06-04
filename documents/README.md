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
