# Issue Tracker

This is an issue tracker application built using Node.js and EJS. It allows users to track issues/bugs for different projects. The application provides a user interface to create projects, view project details, filter issues, and create new issues.

## Features

- Neat UI with a home page showing a list of projects.
- Ability to create a new project with name, description, and author.
- Project detail page to view bugs related to a specific project.
- Filter issues by multiple labels, author, and search by title and description.
- Create new issues for a project with a title, description, labels, and author.

## Dependencies
- config
- dotenv
- ejs
- express
- express-ejs-layouts
- mongoose
- nodemon

## Prerequisites

- Node.js (version X.X.X)
- npm (version X.X.X)

# Navigate to the project directory
cd issue-tracker

# Install the dependencies
npm install

# Start the application
nodemon index.js

## File Structure
Issue Tracker Backend/
|-- node_modules/
|-- public/
|   |-- styles/
|   |   |-- style.css
|   |-- scripts/
|   |   |-- script.js
|-- views/
|   |-- home.ejs
|   |-- createProject.ejs
|   |-- projectDetail.ejs
|   |-- createIssue.ejs
|-- .env
|-- .gitignore
|-- app.js
|-- package.json
|-- README.md


## Directory Structure and flow of The Code

This code follows MVC pattern and hence everything is differentiated and well managed:

    Issue Tracker Backend
        |-----assets
        |       |--- JS
        |       |     |-- filterIssues.js
        |       |     |-- searchIssues.js
        |------ config
        |         └--- mongoose.js
        |------ controller
        |         └--- fileController.js
        |------ models
        |         └--- fileModel.js
        |------ routes
        |         └--- index.js
        |------ uploads
        |         |--- files
        |------ views
        |         |--- file.ejs
        |         |--- home.ejs
        |------ .gitignore
        |------ index.js
        |------ package.json
        |------ package-lock.json
        └------ README.md

<!-- CONTRIBUTING -->
