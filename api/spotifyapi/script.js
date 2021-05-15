var SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: '272d769b8e074ead9f750b3ca03cfcb1',
  clientSecret: '5894ac4f9ac7463ea5b14e5ddfab6956',
  redirectUri: 'http://localhost:8888/callback'
});

spotifyApi.setAccessToken('BQAHIJCNRVQdLuLB_Jh-VoGfIQsdCk34hgEsI5L-VZUfQ28F4itceW8SpUoQeLWMARIrtFcLJ74FXq8cSGU');
  
  // Retrieve an access token.
  spotifyApi.clientCredentialsGrant().then(
    function(data) {
      console.log('The access token expires in ' + data.body['expires_in']);
      console.log('The access token is ' + data.body['access_token']);
  
      // Save the access token so that it's used in future calls
      spotifyApi.setAccessToken(data.body['access_token']);
    },
    function(err) {
      console.log('Something went wrong when retrieving an access token', err);
    }
  );

// Search tracks whose artist's name contains 'Kendrick Lamar', and track name contains 'Alright'
// spotifyApi.searchTracks('track:Lose Yourself artist:Eminem')
//   .then(function(data) {
//     console.log('Search tracks by "Hello" in the track name and "Lionel Richie" in the artist name', data.body);
//   }, function(err) {
//     console.log('Something went wrong!', err);
//   });

  // Get tracks in an album
spotifyApi.getAlbumTracks('41MnTivkwTO3UUJ8DrqEJJ', { limit : 5, offset : 1 })
.then(function(data) {
  console.log(data.body);
}, function(err) {
  console.log('Something went wrong!', err);
});

// spotifyApi.getAlbum('Hello')
//   .then(function(data) {
//     console.log('Album information', data.body);
//     result.innerHTML = "<img src='images/heads.png' alt='heads' />";
    
//   }, function(err) {
//     console.error(err);
//   });


