var SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: '272d769b8e074ead9f750b3ca03cfcb1',
  clientSecret: '5894ac4f9ac7463ea5b14e5ddfab6956',
  redirectUri: 'http://localhost:8888/callback'
});

spotifyApi.setAccessToken('BQBHDHvIJEcuYnVTV-7dwp03_5fZTVce7FjxmbGF7MZum2y4utu8Ne786pgdY1qb3AqPuDdFloAfnpM0umQ');
  
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
spotifyApi.searchTracks('track:Hello artist:Lionel Richie')
  .then(function(data) {
    console.log('Search tracks by "Hello" in the track name and "Lionel Richie" in the artist name', data.body);
  }, function(err) {
    console.log('Something went wrong!', err);
  });

  // Get tracks in an album
spotifyApi.getAlbumTracks('41MnTivkwTO3UUJ8DrqEJJ', { limit : 5, offset : 1 })
.then(function(data) {
  console.log(data.body);
}, function(err) {
  console.log('Something went wrong!', err);
});

