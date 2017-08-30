var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
	res.send('<h1>Welcome Realtime Server</h1>');
});

//Online user
var onlineUsers = {};
//People online
var onlineCount = 0;

io.on('connection', function(socket){
	console.log('a user connected');
	
	//When new users come
	socket.on('login', function(obj){
		//the new users as the socket's name'，and it will be used later
		socket.name = obj.userid;
		
		//new users in the list if he is not here
		if(!onlineUsers.hasOwnProperty(obj.userid)) {
			onlineUsers[obj.userid] = obj.username;
			//new users +1
			onlineCount++;
		}
		
		//to announce new users when they are in
		io.emit('login', {onlineUsers:onlineUsers, onlineCount:onlineCount, user:obj});
		console.log(obj.username+'enter the chatroom');
	});
	
	//listen to new users quit
	socket.on('disconnect', function(){
		//delete the quit users from list
		if(onlineUsers.hasOwnProperty(socket.name)) {
			//the information of the new users
			var obj = {userid:socket.name, username:onlineUsers[socket.name]};
			
			//delete
			delete onlineUsers[socket.name];
			//people online-1
			onlineCount--;
			
			//announce the quit users quit 
			io.emit('logout', {onlineUsers:onlineUsers, onlineCount:onlineCount, user:obj});
			console.log(obj.username+'Quit from chatroom');
		}
	});
	
	//the users message from all users
	socket.on('message', function(obj){
		//announce to the all users' message
		io.emit('message', obj);
		console.log(obj.username+'say：'+obj.content);
	});
  
});

http.listen(3000, function(){
	console.log('listening on *:3000');
});