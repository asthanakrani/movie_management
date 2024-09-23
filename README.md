Overview
This Movie Management Project is a web-based application that allows users to manage a collection of movies. Users can add new movies, view details, update information, and delete records from the system. It is built using modern web technologies and adheres to best practices for maintaining a scalable and efficient system.

Features
Add Movie: Users can add a new movie with details such as title, genre, director, release date, and description.
View Movies: Users can browse the list of movies and view detailed information about each one.
Update Movie: Users can update the details of any movie in the collection.
Delete Movie: Users can remove a movie from the system.
Search Functionality: Allows users to search for movies by title, genre, or other filters.
Project Structure
graphql
Copy code
.
├── models
│   └── movie.js           # Mongoose schema for movie data
├── routes
│   └── movies.js          # API routes for movie CRUD operations
├── views
│   ├── movies.ejs         # List of all movies
│   ├── movieDetails.ejs   # View a single movie's details
│   ├── addMovie.ejs       # Form to add a new movie
│   ├── editMovie.ejs      # Form to edit movie details
├── public
│   ├── styles.css         # CSS for styling the views
│   └── scripts.js         # JavaScript for client-side interactions
├── app.js                 # Main application file
├── package.json           # Project metadata and dependencies
└── README.md              # Project documentation
Technologies Used

Node.js: Server-side JavaScript runtime.
Express.js: Web framework for Node.js.
MongoDB/Mongoose: NoSQL database for storing movie data.
EJS: Templating engine for rendering dynamic HTML.
Body-Parser: Middleware for parsing request bodies.
Method-Override: Middleware to support PUT/DELETE HTTP methods.

Installation


Install dependencies:

bash
Copy code
npm install
Set up environment variables: Create a .env file in the root of the project and add the following:

bash
Copy code
MONGO_URI=mongodb://localhost:27017/movie-management
PORT=3000
Run the application:

bash
Copy code
npm start


Usage
Add a New Movie:

Go to the /movies/new route to fill in the movie details and submit the form.
View Movies:

Go to /movies to browse the entire collection.
Edit Movie Details:

Click on a movie and select "Edit" to update the information.
Delete a Movie:

Select the "Delete" option from the movie details page to remove it from the database.
Dependencies
Express: Web framework for handling HTTP requests and routes.
Mongoose: ORM for MongoDB to manage database queries.
EJS: Templating engine to generate dynamic HTML.
Body-Parser: Middleware for parsing incoming form data.
Method-Override: For supporting PUT and DELETE requests in forms.
License
This project is licensed under the MIT License.

