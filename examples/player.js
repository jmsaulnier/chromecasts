var chromecasts = require('..')()

chromecasts.on('update', function (player) {
  console.log('all players: ', chromecasts.players)
  player.play('http://www.w3schools.com/html/mov_bbb.mp4', {title: 'Chromecast - player example', type: 'video/mp4'})
})