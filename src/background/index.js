var fs            = require('fs');
var ipc           = require('ipc');
var AppConstants  = require('../constants/AppConstants');
var request       = require('request');
var PlayMusic     = require('playmusic');
var PlayClient    = new PlayMusic();
var ActionTypes   = AppConstants.ActionTypes;

ipc.on(AppConstants.Channels.MAIN, function(event, request) {

  switch(request.action) {

    case ActionTypes.SIGN_IN:
      signIn(event, request);
      break;

    case ActionTypes.FETCH_LIBRARY:
      fetchLibrary(event, request);
      break;

    case ActionTypes.DOWNLOAD_ALBUM:
      downloadAlbum(event, request);
      break;
  }
});


function createAlbumFolder(name, callback) {
  fs.mkdir(AppConstants.Folders.HOME + AppConstants.Folders.DOWNLOADS, function() {
    if(!e || (e && e.code === 'EEXIST')) {
      callback(null);
    } else {
      callback(e);
    }
  });
}

function signIn(event, request) {
  PlayClient.init(
    request.config,
    function success(data) {
      event.sender.send(AppConstants.Channels.MAIN, {
        action: ActionTypes.SIGN_IN_SUCCESS,
        data: data
      });
    },
    function fail(error) {
      event.sender.send(AppConstants.Channels.MAIN, {
        action: ActionTypes.SIGN_IN_FAIL,
        error: error
      });
    }
  );
}

function downloadSong(event, folder, album, song) {
  var fullpath = folder + '/' + (song.artist || 'Unknown Artist') + ' - ' + song.title + '.mp3';

  PlayClient.getStreamUrl(song.id, function download(url) {
    var w = fs.createWriteStream(fullpath);

    request(url).pipe(w);

    w.on('finish', function(){
      console.log('file downloaded to ', fullpath);
      event.sender.send(AppConstants.Channels.MAIN, {
        action: ActionTypes.DOWNLOAD_ALBUM_SUCCESS,
        albumId: album.id
      });
    });
  });
}

function downloadAlbum(event, request) {
  var model       = request.album;
  var albumName   = model.album || 'Unknown Album';
  var artistName  = model.albumArtist || 'Unknown Artist';
  var Folders     = AppConstants.Folders;
  var albumPath   = Folders.HOME + Folders.DOWNLOADS + artistName + ' - ' + albumName;

  fs.mkdir(albumPath, function(e){
    if(!e || (e && e.code === AppConstants.Errors.EXISTING_FOLDER)){
      model.songs.forEach(function(song) {
        downloadSong(event, albumPath, model, song);
      });
    } else {
      event.sender.send(AppConstants.Channels.MAIN, {
        action: ActionTypes.DOWNLOAD_ALBUM_FAIL,
        album: model.id
      });
    }
  });
}

function fetchLibrary(event, request) {
  PlayClient.getAllTracks(
    function success(library) {
      event.sender.send(AppConstants.Channels.MAIN, {
        action: ActionTypes.FETCH_LIBRARY_SUCCESS,
        library: library
      });
    },
    function fail(error) {
      event.sender.send(AppConstants.Channels.MAIN, {
        action: ActionTypes.FETCH_LIBRARY_FAIL,
        error: error
      });
    }
  );
}