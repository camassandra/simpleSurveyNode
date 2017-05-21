const express = require ('express');
const app = express();

const bodyParser = require('body-parser');

app.use(express.static(__dirname+'/includes'));
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname+'/views');
app.set('view engine', 'html');


app.get('/', function(req, res){
	console.log('rendering survey page')
	//res.sendFile('surveypage');
	res.sendFile(__dirname+'/views/index.html');
})