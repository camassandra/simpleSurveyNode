const express = require ('express');
const app = express();
const port = '3000';

const bodyParser = require('body-parser');

app.use(express.static(__dirname+'/includes'));
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname+'/views');
app.set('view engine', 'html');


app.get('/', function(req, res){
	console.log('rendering survey page')
	//res.sendFile('surveypage');
	res.sendFile(__dirname+'/views/surveypage.html');
});


// app.post('/surveyhandler', function(req, res){
// console.log('posting survey results')
// res.redirect(__dirname+'/views/success.html');

// });


app.listen(port, function(){
	console.log('listening on '+port+' has started');
})