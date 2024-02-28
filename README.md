# Weather Journal App

# Introduction
    This project to create an asynchronous web app that uses Web API and user data to dynamically update the UI for a Weather-Journal App.

# Languages - Technologies 
    1: html 
    2: css
    3: javaScript
    4: Nodejs

# Dependencies
    1: Express
    2: Body-Parser
    3: Cors

# app.js Functions
    1: retrieveData
    2: postData
    3: getData
    4: takeAction

# Instructions
    1: Node and Express Environment
        Node and Express should be installed on the local machine. The project file server.js should require express(), and should create an instance of their app using express.
        The Express app instance should be pointed to the project folder with .html, .css, and .js files.

    2: Project Dependencies
        The ‘cors’ package should be installed in the project from the command line, required in the project file server.js, and the instance of the app should be setup to use cors().

        The body-parser package should be installed and included in the project.

    3: Local Server
        Local server should be running and producing feedback to the Command Line through a working callback function.
    
    4: API Credentials
        Create API credentials on OpenWeatherMap.com

    5: APP API Endpoint
        There should be a JavaScript Object named projectData initiated in the file server.js to act as the app API endpoint.

    6: Integrating OpenWeatherMap API
        The API Key variable is passed as a parameter to fetch().
        Data is successfully returned from the external API.

    7: Return Endpoint Data
        Server Side
            There should be a GET route setup on the server side with the first argument as a string naming the route, and the second argument a callback function to return the JS object created at the top of server code.
        Client Side
            There should be an asynchronous function to fetch the data from the app endpoint

    8: POST Route
        You should be able to add an entry to the project endpoint using a POST route setup on the server side and executed on the client side as an asynchronous function.
    
    9: Event Listeners
        Adds an event listener to an existing HTML button from DOM using Vanilla JS.
    
    10: Dynamically Update UI
        Sets the properties of existing HTML elements from the DOM using Vanilla JavaScript.
        Included in the async function to retrieve that app’s data on the client side, existing DOM elements should have their innerHTML properties dynamically set according to data returned by the app route.



![weather](https://github.com/NadaOmar22/Weather_Journal_App/assets/75037231/0697b9de-b2ae-487e-8621-2b44b7f38e70)
