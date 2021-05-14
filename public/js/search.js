const searchButtonHandler = async function(event){
    event.preventDefault()


 fetch(`https://api.discogs.com/database/search?type=artist&q=&token=cHZUIbGIvpsKYHSyNhoDoyyXafHfIMXumACktuLd`)

  
  .then(response => response.json())
  .then(data => console.log(data));
 
 
    
}
document.querySelector('#search-form')
addEventListener('submit', searchButtonHandler);