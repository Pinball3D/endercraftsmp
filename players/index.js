var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};
getJSON('https://api.mcsrvstat.us/2/play.endercraftsmp.tk', function(err, data) {
var player = 0
  while (player <= data.players.online) {
    var playername = data.players.list[player]
    console.log(playername)
    var playerelement = document.createElement('div')
    if (data.players.online == 0) {
       playerelement.innerHTML = "There are no players online." 
    }
    else if (data.players.online > 0) {
    playerelement.innerHTML = playername
    document.body.appendChild(playerelement)
    }
    player += 1
   
  }
})
