const express = require ('express');
const app = express();
const port = '3000';

const bodyParser = require('body-parser');

app.use(express.static(__dirname+'/includes'));
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname+'/views');
//app.set('view engine', 'html');


app.get('/', function(req, res){
	console.log('rendering survey page')
	//res.sendFile('surveypage');
	res.sendFile(__dirname+'/views/surveypage.html');
});


// app.post('/surveyhandler', function(req, res){
// console.log('posting survey results')
// res.redirect(__dirname+'/views/success.html');

// });

// app.post('/surveyhandler', function(req, res){
// 	console.log('handling form submission');
// 	var errorMessage = 'Please enter a valid ';
// 	var target = '';


// 	if (req.body.firstname.length === 0) {
// 		target = 'first name'
	
// 	} 
// 	else if (req.body.secondname.length === 0) {
// 		target = 'second name'
		
// 	}
// 	else if (req.body.username.length === 0) {
// 		target = 'username'
	

// 	}
// 	else if (req.body.password.length === 0) {
// 		target = 'password'
		
// 	}
// 	else if (req.body.email.length === 0) {
// 		target = 'email address'
		
// 	}

// 	if (target.length === 0) {
// 		bcrypt.hash(req.body.password, 8, function(err, hash){
// 			if (err) throw err
// 			Db.Users.create({
// 				firstname: req.body.firstname,
// 				secondname: req.body.secondname ,
// 				username: req.body.username,
// 				password: hash,
// 				email: req.body.email,
// 			})
// 		})
		
// 		response.redirect('/?message=' + encodeURIComponent("Successfully submitted. Thank you!"));
// 	}
// 	else response.redirect('/register?message=' + encodeURIComponent(errorMessage + target))
// });

app.listen(port, function(){
	console.log('listening on '+port+' has started');
})