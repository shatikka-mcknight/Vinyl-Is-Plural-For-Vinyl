const searchButtonHandler = async function(event){
    event.preventDefault()

    let _data ={
      artist_id:this.artist_id,
      title: this.title,
      format: this.format,
      year: this.year,
      catno: this.catno,
      country:this.country,
      condition: this.condition,
    



    }


 fetch(`https://api.discogs.com/database/search?type=artist&q=&token=cHZUIbGIvpsKYHSyNhoDoyyXafHfIMXumACktuLd`,{
   method: 'POST',
   body: JSON.stringify(_data),
   headers: {
     'Content-type': 'application/json'}
 })

  
  .then(response => response.json())
  .then(data => console.log(data));
 
 
    
}
document.querySelector('#search-form')
addEventListener('submit', searchButtonHandler);

