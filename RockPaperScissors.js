let score= JSON.parse(localStorage.getItem('score'));
        if(score===null){
            score={
                wins: 0,
                losses: 0,
                Ties: 0,

            };
        }

        updateScore();
        function playGame(PlayerChoice){
            let ComputerGuess=pickComputerChoice();
        let result='';
            if(PlayerChoice==='Rock'){
                if(ComputerGuess==='Rock'){
                      result='Tie!';
                }
                 else if(ComputerGuess==='Paper'){
                      result='You Lose.';
                }
                else{
                      result='You Win yahoo!';
                }
            }
            else if(PlayerChoice==='Paper'){
                if(ComputerGuess==='Rock'){
                    result='You Win yahoo!';
                }
                else if(ComputerGuess==='Paper'){
                    result='Tie!';
                }
                else{
                    result='You Lose.';
                }
            }
            else{
                if(ComputerGuess==='Scissors'){
                      result='Tie!';
                }
                 else if(ComputerGuess==='Rock'){
                      result='You Lose.';
                }
                else{
                      result='You Win yahoo!';
                }
                

        }
        if(result==='You Win yahoo!'){
            score.wins += 1;

        }
        else if(result==='You Lose.'){
            score.losses += 1;
        }
        else if(result==='Tie!'){
            score.Ties +=1;
        }
        localStorage.setItem("score",JSON.stringify(score));

        document.querySelector('.js-result').innerHTML=result;
        document.querySelector('.js-moves').innerHTML=`You picked <img class="move-img" src="images/${PlayerChoice}-emoji.png" alt=""> 
        Computer picked <img class="move-img" src="images/${ComputerGuess}-emoji.png" alt="">`
 
        updateScore();

        
    }
        function updateScore(){
        document.querySelector('.js-score').innerHTML=`wins: ${score.wins}, losses: ${score.losses}, Ties: ${score.Ties}`;


        }
        function pickComputerChoice(){
            const random=Math.random();
            let ComputerGuess='';
            if(random>0 && random<1/3){
                ComputerGuess='Rock';
            }
            else if(random>=1/3 && random<2/3){
                ComputerGuess='Paper';
            }
            else{
                ComputerGuess='Scissors';
            }
            return ComputerGuess
        }
