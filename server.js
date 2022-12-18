const express = require('express');
const app = express();
app.use(express.static('website')); // to determine which files to get information from

// configure express to use bodyparser as middleware
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');// enable server to listen to http requests
app.use(cors());

//Local server when running it produces feedback to Cmd through a working callback function
const port = 8001;
app.listen(port, listening);
function listening() {
    console.log(`Server Running on port ${port}`);
}

// set empty js object to act as endpoint for all routes
let projectData = {};

app.get('/all', function (request, response) {
    if (projectData != null) {
        response.send(projectData);
    }
});

app.post('/add', function (request, response) {
    projectData['temp'] = request.body.temp;
    projectData['date'] = request.body.date;
    projectData['content'] = request.body.content;
    console.log(projectData);
});
