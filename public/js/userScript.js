//script for buy/sell query

const albumConditionButton = async function(event){
    event.preventDefault();

    const ele = document.getElementsByName('condition').value;

    const response = await fetch(,{
        method: 'POST',
        body: JSON.stringify({
            condition: ele.value
            
        }),
        headers:{ 'Content-Type': 'application/json'},
    });
    document.location.reload();
        
    }
    document.querySelector('#conditionButton')
    .addEventListener('click', albumConditionButton)



    

