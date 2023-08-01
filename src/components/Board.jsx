import React from 'react'
import Square from './Square'
import { useState } from 'react'


const Board = () => {
    
    const [marks , setMarks] = useState(Array(9).fill(null));
    const [Xturn , setXTurn] = useState(true);

    const checkWinner = () => {
      const winnerLogic = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],]

        for(let logic of winnerLogic){
            const [a , b, c] = logic;

            if(marks[a]!== null && marks[a] === marks[b] && marks[a] === marks[c]){
                return marks[a];
            }
        }
        return false;
    }

    const isWinner =  checkWinner();
    
    const handleClick = (index) =>{

        if(marks[index] !== null){
            return;
        }
        ct++;
        const copyArray = {...marks};
        copyArray[index] = Xturn ? "X" : "O";
        setMarks(copyArray);
        setXTurn(!Xturn);
    };

    const handleReset = () => {
        setMarks(Array(9).fill(null));

    }

  return (
    <div className='boardContainer'>
        {isWinner ? (<>{isWinner +' won the game!'}  
         <button class="replay" onClick={handleReset}>Play Again!</button>
        </>) :
         (<> 
          <h4>It's {Xturn ? 'X':'O'}'s turn!</h4>
           <div className='board-row'>
          <Square onClick= {() => handleClick(0)} value = {marks[0]}/>
          <Square onClick= {() => handleClick(1)} value = {marks[1]}/>
          <Square onClick= {() => handleClick(2)} value = {marks[2]}/>
        </div>
        <div className='board-row'>
        <Square onClick= {() => handleClick(3)} value = {marks[3]}/>
        <Square onClick= {() => handleClick(4)} value = {marks[4]}/>
        <Square onClick= {() => handleClick(5)} value = {marks[5]}/>
        </div>
        <div className='board-row'>
        <Square onClick= {() => handleClick(6)} value = {marks[6]}/>
        <Square onClick= {() => handleClick(7)} value = {marks[7]}/>
        <Square onClick= {() => handleClick(8)}  value = {marks[8]}/>
        </div></>)}
    </div>
  )
}

export default Board