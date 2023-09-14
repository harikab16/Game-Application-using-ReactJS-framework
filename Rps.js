import React, { useState } from 'react'
import rock from '../images/rock.jpg'

import paper from '../images/paper.jpg'
import scissor from '../images/scissor.jpg';
import './style.scss';
export default function Rps() {

    const [winner,setWinner]=useState("Lets See who wins....");
    const [player,setPlayer]=useState("Start");
    const [cmp,setCmp]=useState("Start");
  function check(ply,cmp)
  {
    if(ply===cmp)
    {
        // console.log("Equal");
        setWinner("Draw Match");
    }
    else if((ply==="Rock"&& cmp==="Scissor")||(ply==="Paper" && cmp==="Rock") || (ply==="Scissor" && cmp==="Paper") )
    {
        // console.log("Not Equal..")
        setWinner("Player Wins...")
    }
    else
    {
        setWinner("Computer Wins...")
    }
  }  
 function rpsgame(data)
 {
    var myArray = ['Rock', 'Paper', 'Scissor']; 
    const randomElement = myArray[Math.floor(Math.random() * myArray.length)];
    // alert("Player : "+data);
    // alert("Computer :"+randomElement)
    setPlayer(data);
    setCmp(randomElement);
    check(data,randomElement);
    // document.getElementById('winner').innerText="Loading....";
 }

  return (
    <div className='RPS'>
      

      <div className='game-console'>
        <div className='player'>
            Player
            <div className='Rock'>
                <div onClick={()=>(rpsgame("Rock"))}><img src={rock}   width="120px" height="120px"/></div>
               
            </div>
            <div className='Paper'>
            <div onClick={()=>(rpsgame("Paper"))}> <img src={paper}  width="120px" height="120px" /></div>
               
            </div>
            <div className='Scissor'>
            <div onClick={()=>(rpsgame("Scissor"))}> <img src={scissor}  width="120px" height="120px"/></div>
              
            </div>
            
        </div>

        <div>
        
            <div id='winner'>
                <div style={{color:"blue", fontSize:"18px",fontWeight:"bolder"}}>Player's :{player}</div>
                <div style={{color:"red", fontSize:"18px",fontWeight:"bolder"}}>Computer's : {cmp}</div>
                <div style={{color:"green", fontSize:"25px",fontWeight:"bolder"}} >Winner : {winner}</div>
            </div>
        </div>
        <div className='Computer'>
            Computer
            <div className='Rock'>
                <img src={rock}  width="120px" height="120px"/>
               
            </div>
            <div className='Paper'>
                <img src={paper}  width="120px" height="120px"/>
                
            </div>
            <div className='Scissor'>
                <img src={scissor}  width="120px" height="120px"/>
              
            </div>
        </div>
      </div>
    </div>
  )
}
