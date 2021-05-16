//script for buy/sell query

const albumConditionButton = async function(event){
    event.preventDefault();


    const conditionElement = document.getElementsByName('condition').value;

await fetch('/api/post',{
        method: 'POST',
        body: JSON.stringify({
            conditionElement

            
        }),
        headers:{ 'Content-Type': 'application/json'},
    });
    document.location.reload();
        

    };

    document.querySelector('#conditionButton')
    .addEventListener('click', albumConditionButton)



    

