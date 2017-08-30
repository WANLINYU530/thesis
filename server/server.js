//receive the pictures from users
 socket.on('img', function(imgData) {
    //send the pictures to other users except you
     socket.broadcast.emit('newImg', socket.nickname, imgData);
 });

 //receive pictures through init method

  this.socket.on('newImg', function(user, img) {
     that._displayImage(user, img);
 });

  