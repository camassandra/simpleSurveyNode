const Sequelize = require('sequelize');
const db = new Sequelize ('postgres://postgres:' + process.env.POSTGRES_PASSWORD + '@localhost/camisurvey1');

const Responses = db.define('responses', {
	id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    gender: Sequelize.STRING,
    firstname: Sequelize.STRING,
    surname: Sequelize.STRING,
    email: Sequelize.STRING,
    phonenr: Sequelize.STRING,
    country: Sequelize.STRING,
    city: Sequelize.STRING,
    yearsINamst: Sequelize.STRING,
    comment: Sequelize.STRING}
    )
db.sync({
	force: true
})	
.then(function(dummyresponse){
	const respondentone = { 
		gender: 'man',
		firstname: 'Trumping',
		secondname: 'Dummy',
		email: 'dummyTrump@yahoo.net'
		phonenr: '+31 610677787',
		country: 'AZ',
		city: 'Baku',
		yearsINamst: '1-3',
		comment: 'salary and work environment are just great'
	}

	Responses.create(respondentone)
	
})
.catch((error) => console.log(error))

module.exports = {
	Db: db, 
	Responses: Responses
}