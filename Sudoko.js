import React, { useState } from 'react'
import './style.scss'
import '../App.css';

import Confetti from 'react-confetti'
export default function Sudoko() {
    var flag=-1;
    const [f,sf]=useState(-1);

    var matrix=['1', '3', '2', '1', '2', '3'];
    var player=[];
    function check(e)
    {
        // console.log(e.target.value);
        if(e.target.value==='')
        {
            player.pop();
        }
        else
        {
            player.push(e.target.value);
        }

       
        console.log(player)
    }
    function show()
    {
        flag=0;
      
        console.log(player);
        sf(0);
        for(let i=0;i<matrix.length;i++)
        {
            if(matrix[i]!==player[i])
            {
                alert("You lost");
                flag=1;
                sf(1);
                break;
            }
        }
        if(flag===0)
        {
            alert("You Won...!");
        }
    }
  return (
    <div className='sudoko'>
      <table>
        <tr>
            <td><input type="text" onChange={(e)=>(check(e))} /></td>
            <td><input type="text"onChange={(e)=>(check(e))} /></td>
            <td>2</td>
        </tr>
        <tr>
            <td>3</td>
            <td><input type="text" onChange={(e)=>(check(e))} /></td>
            <td><input type="text" onChange={(e)=>(check(e))}/></td>
        </tr>
        <tr>
            <td><input type="text" onChange={(e)=>(check(e))}/></td>
            <td>1</td>
            <td><input type="text" onChange={(e)=>(check(e))}/></td>
        </tr>
      </table>
      <div> <button onClick={()=>(show())} className="button" >Check</button> </div>

   
      { f===0 ? <Confetti/> : ""}
    </div>
  )
}
  