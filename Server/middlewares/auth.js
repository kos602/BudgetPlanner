const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('../models/user');

module.exports.verifyToken = function(req, res, next){
	if(!req.headers.authorization ||
		req.headers.authorization.split(' ')[1] === null
	){
		return res.status(401).json({status:'Error', error: 'Unauthorized'});
	}

	const payload = jwt.verify(req.headers.authorization.split(' ')[1], 'secret');
	if(!payload){
		return res.status(401).json({status:'Error', error: 'Unauthorized'});
	}
	req.userId = payload.subject;
	next();
	// User.findOne({_id: mongoose.mongo.ObjectId(req.userId)}, (err, user)=>{
	// 	if(err || !user)  return res.status(401).json({status:'Error', error: 'Unauthorized'});
	// 	else {
	// 		req.user = user;
	// 		next();
	// 	}
	// });
}