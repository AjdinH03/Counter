
    // set initial count
    let count = 0;

    // select value and buttons
    var value = document.querySelector('#value');

    var button = document.querySelector('.increase');
    button.addEventListener("click", function(){
        count++;
        value.textContent = count;
        if(count > 0){
            value.style.color = "green"
        }
        if(count < 0){
            value.style.color = "red"
        }
        if(count === 0){
            value.style.color = "white"
        }
    });

    var resetButton = document.querySelector('.reset');
    resetButton.addEventListener("click" , function(){
        count = 0;
        value.textContent = count;
        if(count === 0){
            value.style.color = "white"
        }
    });

    var decreaseBtn = document.querySelector('.decrease');
    decreaseBtn.addEventListener("click", function(){
        count--;
        value.textContent = count;
        if(count < 0){
            value.style.color = "red"
        }
        if(count > 0){
            value.style.color = "green"
        }
        if(count === 0){
            value.style.color = "white"
        }
    
    });














