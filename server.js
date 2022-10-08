const express = require('express');
const app = express();
const eipiai = require('./api');

app.use(express.json());

app.get('/profile/:id', function(req, res){
	const idp = req.params.id;
	console.log(idp)
	eipiai(idp, function(data, err){
		res.send(data)
	})
});

app.listen(process.env.PORT || 5000);