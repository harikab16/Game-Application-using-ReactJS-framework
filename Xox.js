import React, { useState } from 'react'

import { Link } from 'react-router-dom';

import Confetti from 'react-confetti';
export default function Xox() {
    var count=0;
   const [temp,setTemp]=useState(0);
   
    const matrix=[[0,0,0],[0,0,0],[0,0,0]];
    function refreshPage() {
        window.location.reload(false);
      }

      function gameover(winner)
      {
        document.getElementById('win').style.display="block";
        document.getElementById('win').innerText=winner;
        document.getElementsByTagName('table').disabled=true;
        setTemp(1);
         setTimeout( refreshPage,5000);
      }
    function check()
    {
        //If all Rows are Equal
        if((matrix[0][0]===1 && matrix[0][1]===1 && matrix[0][2]===1)|| (matrix[1][0]===1 && matrix[1][1]===1 && matrix[1][2]===1) || (matrix[2][0]===1 && matrix[2][1]===1 && matrix[2][2]===1))
        {
            // console.log("X Wins");
            return gameover("X wins");
        }
        if((matrix[0][0]===2 && matrix[0][1]===2 && matrix[0][2]===2)|| (matrix[1][0]===2 && matrix[1][1]===2 && matrix[1][2]===2) || (matrix[2][0]===2 && matrix[2][1]===2 && matrix[2][2]===2))
        {
            // console.log("O Wins"); 
            return gameover("O wins");   
        }
        //If all Diagnols are Equal
        if((matrix[0][0]===1 &&  matrix[1][1]===1 && matrix[2][2]===1)|| (matrix[0][2]===1 &&  matrix[1][1]===1 && matrix[2][0]===1))
        {
            // console.log("X wins");
            return gameover("X wins");
        }
        if((matrix[0][0]===2 &&  matrix[1][1]===2 && matrix[2][2]===2)|| (matrix[0][2]===2 &&  matrix[1][1]===2 && matrix[2][0]===2))
        {
            // console.log("O wins");
            return gameover("O wins");
        }

        //If Columns are equal
        if((matrix[0][0]===1 && matrix[1][0]===1 && matrix[2][0]===1 )||(matrix[0][1]===1 && matrix[1][1]===1 && matrix[2][1]===1 ) || (matrix[0][2]===1 && matrix[1][2]===1 && matrix[2][2]===1 ) )
        {
            // console.log("X Wins");
            return gameover("X wins");
        }
        if((matrix[0][0]===2 && matrix[1][0]===2 && matrix[2][0]===2 )||(matrix[0][1]===2 && matrix[1][1]===2 && matrix[2][1]===2 ) || (matrix[0][2]===2 && matrix[1][2]===2 && matrix[2][2]===2 ) )
        {
            // console.log("O Wins");
            return gameover("O wins");
        }

    }
    
    var flag=0;
    function fun(row,col,id)
    {
        // alert("clicked..."+id)
        count=count+1;
        if(flag===0)
        {
            document.getElementById(id).innerText="X";
            document.getElementById(id).style.color="red";
            flag=1;
            matrix[row][col]=1;
        }
        else
        {
            document.getElementById(id).innerText="O";
            document.getElementById(id).style.color="green";
            flag=0
            matrix[row][col]=2;
        }
        if(count>4)
        {
            console.log(matrix);
            check();
        }
       
 
    }
  return (
    <div className='xox-game'>
        <div className='Player-details'>
            <span>Player 1 : X</span> <br/>
            <span>Player 2 : O</span>
        </div>
      <table>
        <tr>
            <td onClick={()=>(fun(0,0,1))}><div id='1'></div></td>
            <td onClick={()=>(fun(0,1,2))}><div id='2'></div></td>
            <td onClick={()=>(fun(0,2,3))}><div id='3'></div></td>
        </tr>
        <tr>
            <td onClick={()=>(fun(1,0,4))}><div id='4'></div></td>
            <td onClick={()=>(fun(1,1,5))}><div id='5'></div></td>
            <td onClick={()=>(fun(1,2,6))}> <div id='6'></div></td>
        </tr>
        <tr>
            <td onClick={()=>(fun(2,0,7))}><div id='7'></div></td>
            <td onClick={()=>(fun(2,1,8))}><div id='8'></div></td>
            <td onClick={()=>(fun(2,2,9))}><div id='9'></div></td>
        </tr>
      </table>

      <div>
      <button onClick={refreshPage} className="button">Click to reload!</button> <br/>
      <div>{ temp===1 ? <Confetti />:""  } 
      <div  id='win'> csdvd</div>
      </div>
      </div>
    </div>
  )
}
