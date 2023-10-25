// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
    //Declaring variables ----------------------------------
        var num1;
        var num2;
        var num1Box = document.getElementById("number1");
        var num2Box = document.getElementById("number2");

    //Creating a function to generate random numbers 
        function generateRandom(){
                num1 = Math.floor(Math.random()*100);
                num2 = Math.ceil(Math.random()*100);
                num1Box.textContent = num1;
                num2Box.textContent = num2;
        }

    //Calling that function to generate random numbers
        generateRandom();

// Iteration 3: Creating variables required to make the game functional
    //Creating variables to store value of different operations
        var sum;
        var diff;
        var prod;
        var quot;
        var remain;
    //empty array to store values of operation variables
        let operatorsArray = [];
        var randomIndex;

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
    //Declaring variables ----------------------------------
        var num3;
        var num3Box  = document.getElementById("number3");

// Iteration 5: Creating a randomise function to make the game functional

    function randomise(){
    sum = num1 + num2;
    diff = num1 - num2;
    prod = num1 * num2;
    quot = Math.floor(num1 / num2);
    remain = num1 % num2;

    //Storing operation variables in an array
        operatorsArray = [sum, diff, prod, quot, remain];

    //Creating random index to get perform operations 
        randomIndex = Math.floor(Math.random()*operatorsArray.length)

    //Setting the value of random index to num3
        num3 = operatorsArray[randomIndex];
        num3Box.textContent = num3;
}
randomise();

// Iteration 6: Making the Operators (button) functional
    var plusButton = document.getElementById("plus")
    var minusButton = document.getElementById("minus")
    var multButton = document.getElementById("mul")
    var divButton = document.getElementById("divide")
    var remButton = document.getElementById("modulus")
    var score = 0;

    //Adding event listeners to operation buttons
        plusButton.addEventListener("click", function(){
            if(num3==num1+num2){
                score++;
                generateRandom();
                randomise();
                clearInterval(interval)
                startInterval();
                localStorage.setItem("score", score)

            }else{
                location.href = './gameover.html'
            }
        })

        minusButton.addEventListener("click", function(){
            if(num3==num1-num2){
                score++;
                generateRandom();
                randomise();
                clearInterval(interval)
                startInterval();
                localStorage.setItem("score", score)

            }else{
                location.href = './gameover.html'
            }
        })

        multButton.addEventListener("click", function(){
            if(num3==(num1*num2)){
                score++;
                generateRandom();
                randomise();
                clearInterval(interval)
                startInterval();
                localStorage.setItem("score", score)
            }else{
                location.href = './gameover.html'
            }
        })

        divButton.addEventListener("click", function(){
            if(num3==(Math.floor(num1 / num2))){
                score++;
                generateRandom();
                randomise();
                clearInterval(interval)
                startInterval();
                localStorage.setItem("score", score)
            }else{
                location.href = './gameover.html'
            }
        })

        remButton.addEventListener("click", function(){
            if(num3==(num1%num2)){
                score++;
                generateRandom();
                randomise();
                clearInterval(interval)
                startInterval();
                localStorage.setItem("score", score)
            }else{
                location.href = './gameover.html'
            }
        })

// Iteration 7: Making Timer functional
    var timerBox = document.getElementById("timer")
    var timer = 20;
    let interval;

    function startInterval(){
        timer = 20;
        interval = setInterval(()=>{
            timerBox.textContent = timer;
            timer--;
    //Clearing interval when the timer value comes to 0
            if(timer==0){
                clearInterval(interval)
                location.href = "./gameover.html";
            }
        }, 1000);
    }
    startInterval();
    localStorage.setItem("score", score)