# nodetodo
Test todo api made with node.js, features include creating, reading, updating, and deleting a todo.

## Features

To see all todos go to ```http://localhost:3000/api/todos/test```

Create a todo at ```http://localhost:3000/api/todo``` and pass the JSON in the following format:

```{"todo": "your todo",```

```"isDone": "if it's done",```

```"hasAttachment": "if the todo has an attachment" }```

To update a todo, go to the same address and pass the json but adding ```"id": "todoId"``` at the beginning of the JSON.

To delete the todo go to the same address but make a DELETE request and send the JSON with the id only. 

## Dependencies

Made using Express, Mongoose and body-parser.

## Installation and Usage

To access it you must first have node.js installed in your computer. When done run ```npm install``` in the command line to install all the required dependencies.

To use the api run ```node app.js```.

To setup api with seed data first go to ```http://localhost:3000/api/setupTodos```.
