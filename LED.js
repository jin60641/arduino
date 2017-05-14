'use strict';

var express = require('express');
var app = express()
var ejs = require('ejs');
var SerialPort = require('serialport');
var port = new SerialPort('COM4',{baudRate:9600});

app.set('view engine', 'ejs');

var server = require('http').Server(app);


server.listen(80);

app.get('/', function( req,res ){
	res.render(__dirname+'/a.ejs');
});

app.post('/:switch', function(req, res) {
	var onoff =req.params.switch;
	if (onoff == 'on') setLED(1);
	if (onoff == 'off') setLED(0);
	res.send("123");
});

function setLED(flag) {
	port.write(flag ? '1' : '0', function(err) {
		if( err ){
			console.log(err);
		}
		console.log( flag + "123" );
	});
}
