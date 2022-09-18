

const replacetemplate = require('module/replacetemplate');

const tempcourse = require('./data/data.json');

const app = express();

PORT = 8000;

app.get('/', function (req, res) {

    res.write('hi There');
    res.end();
})

app.listen(PORT, function () {

    console.log(`The server is listening on port number ${PORT}`);


})