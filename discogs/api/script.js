const Discogs = require('disconnect').Client;


var db = new Discogs({
    consumerKey: process.env.ConsumerKey,
    consumerSecret: process.env.ConsumerSecret
}).database();
console.log(db)
console.log(db.search({artist:"Beachwood Sparks"}).then(data => console.log(data)));

    Discogs.getArtist().then(
    function(data){
        console.log(data.body);
    },function(err){
        console.log('somenthing went wrong', err);
    });
    
    Discogs.getRelease('release_title').then(
        function(data){
            console.log(data.body);
        }, function(err){
            console.log('something went wrong', err);
        });

 
