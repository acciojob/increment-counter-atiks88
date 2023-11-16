//your JS code here. If required.
 function incrementCounter() {
   
        const counterElement = document.getElementById('counter');
        const currentValue = parseInt(counterElement.innerText);

        alert("Un-incremented Value: " + currentValue);

        counterElement.innerText = currentValue + 1;
    }