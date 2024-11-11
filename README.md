# To-Do List React App

This is a simple To-Do List application built with React. It allows users to add, edit, and delete tasks, as well as clear the entire task list. The app is styled using Bootstrap and provides basic functionalities for managing a task list with a user-friendly interface.

## Features

- Add tasks with unique identifiers using UUID.
- Edit existing tasks.
- Delete individual tasks from the list.
- Clear all tasks with a single button.
- Persistent task data management using React state.
- Bootstrap styling for the UI.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Bootstrap**: Front-end framework for responsive design.
- **UUID**: Used to generate unique IDs for tasks.

## Installation

To get started with the project, follow the steps below:

1. Clone the repository:
   git clone [<repository_url>](https://github.com/an4s3crwt/react-simple-todolist.git)
2. Navigate to the project folder:
    cd todolist
3. Install dependencies:
    npm install
4. Start the development server:
    npm start
    The app will be available at http://localhost:3000.

    ## Usage

**Add a task:** Type your task into the input field and click the Add Item button.
**Edit a task:** Click the pen icon next to a task to edit it.
**Delete a task:** Click the trash icon next to a task to delete it.
**Clear the list:** Click the Clear List button to remove all tasks.

## Components

### `App.js`
- Manages the state for tasks, including adding, editing, and deleting tasks.
- Passes state and event handlers to child components (`TodoInput`, `TodoList`).

### `TodoInput.js`
- A form that allows the user to input new tasks or edit existing ones.
- Displays a button with dynamic text depending on whether the user is adding or editing a task.

### `TodoList.js`
- Displays a list of tasks and includes the option to clear the list.
- Each task is rendered using the `TodoItem` component.

### `TodoItem.js`
- Displays an individual task with options to edit or delete it.

## License

This project is open-source and available under the [MIT License](LICENSE).
