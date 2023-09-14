import React from 'react'
import './pstyle.scss';
import { useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux';
// import iron_man from '../images/iron-man.jpg';

import car1 from '../images/car1.jpg';
import car2 from '../images/car2.jpg';
import car3 from '../images/car3.jpg';
import car4 from '../images/car4.jpg';
// import gamer from '../images/gamer2.jpg';
export default function Home() {
  setTimeout(applycolor,1000);
  function sleep(ms) {
    // console.log("c")
    return new Promise(resolve => setTimeout(resolve, ms));
 }
 var trafcolors=['red','yellow','orange','green'];
  async function applycolor()
  {
    var prev="";
    var prev2=""
    var ele=document.getElementsByClassName('p-season');
    var cele=document.getElementsByClassName('traffic-col');
    var cele2=document.getElementsByClassName('traffic-col2');
    
     for( let i=0;i<ele.length;i++)
     {
      if(i===0)
      {
        // prev=ele;
        console.log();
      }
      else if(i===3)
      {
        cele[1].style.fill="transparent"
        cele2[1].style.fill="transparent";
      }
      else
      {
        // console.log(prev);
       prev.style.fill="transparent";
       prev2.style.fill="transparent";
      //  console.log("Second")
      }
      ele[i].style.background="black";
      if(i===2)
      {
        cele[1].style.fill=trafcolors[i];
        cele2[1].style.fill=trafcolors[i];
      }
      else if(i>2)
      {
        cele[2].style.fill=trafcolors[i];
        cele2[2].style.fill=trafcolors[i];
      }
      else{
        cele[i].style.fill=trafcolors[i];
        cele2[i].style.fill=trafcolors[i];
      }
      
      
      prev=cele[i];
      prev2=cele2[i];
      // console.log(prev)
      await sleep(2000);
     }
  }
  const user=useSelector((state)=>state.userLogin.value);

  return (
    <div className='home' style={{textAlign:"center"}}>
      {/* <div>
        <img src={gamer} width="100%" height="500px" alt='Image of the website'/>
      </div> */}
      <div  className="home-page-graphics">
        <div style={{flexGrow:"1"}}>
          <div className='traffic'>
              <div className='traffic-sign'>
              <svg width="100" height="100">
                <circle cx="50" cy="50" r="20" stroke="white" stroke-width="2" className='traffic-col' fill="transparent" />
                  Sorry, your browser does not support inline SVG.
                </svg>
              </div>
              <div className='traffic-sign'>
              <svg width="100" height="100">
                <circle cx="50" cy="50" r="20" stroke="white" stroke-width="2" className='traffic-col' fill="transparent" />
                  Sorry, your browser does not support inline SVG.
                </svg>
              </div>
              <div className='traffic-sign'>
              <svg width="100" height="100">
                <circle cx="50" cy="50" r="20" stroke="white" stroke-width="2" className='traffic-col' fill="transparent" />
                  Sorry, your browser does not support inline SVG.
                </svg>
              </div>
          </div>
        </div>
      <div style={{flexGrow:"2"}}>
      <div class="season one" >
	      <p class="p-season text__one"> GET </p>
      </div>
      <div class="season two">
	      <p class="p-season text__two">SET </p>
      </div>
      <div class="season three">
	      <p class=" p-season text__three"> READY </p>
      </div>
      <div class="season four">
	      <p class=" p-season text__four"> GO...
         </p>
      </div>
      </div>

      <div style={{flexGrow:"1"}}>
          <div className='traffic'>
              <div className='traffic-sign'>
              <svg width="100" height="100">
                <circle cx="50" cy="50" r="20" stroke="white" stroke-width="2" className='traffic-col2' fill="transparent" />
                  Sorry, your browser does not support inline SVG.
                </svg>
              </div>
              <div className='traffic-sign'>
              <svg width="100" height="100">
                <circle cx="50" cy="50" r="20" stroke="white" stroke-width="2" className='traffic-col2' fill="transparent" />
                  Sorry, your browser does not support inline SVG.
                </svg>
              </div>
              <div className='traffic-sign'>
              <svg width="100" height="100">
                <circle cx="50" cy="50" r="20" stroke="white" stroke-width="2" className='traffic-col2' fill="transparent" />
                  Sorry, your browser does not support inline SVG.
                </svg>
              </div>
          </div>
        </div>
      </div>
     <br/>
     {/* <div style={{color:"white"}} id='Date' onMouseOver={DisplayDate}>
      1
     </div> */}
     <br/>
     {/* Score Card  */}
    <div className='player-details' style={{color:"whitesmoke"}}>
      <h2 style={{textDecoration:"underline"}}>Player Details</h2>
      <h1>Player ID : {user.id}</h1>
      <h1>Player name : {user.name}</h1>
      <h1> Team : {user.team} </h1>
      <h1>Date of Join : {user.doj}</h1>
      <h1>Score : ???</h1>
    </div>
     <br/>
      {/* Badges */}
      <div className='badges'>
        <div className='first-rank'>
          <span>1</span>
        </div>
        <div className='Second-rank'>
          <span>2</span>
        </div>
        <div className='third-rank'>
          <span>3</span>
        </div>
        <div className='fourth-rank'>
          <span>4</span>
        </div>
      </div>
      <br/>
      {/* <button 
      onClick={()=>{
        
        dispatch(login({id:2,name:"Jeevan"}))
      }}
      className="button"
      >
        Change name
      </button> <br></br> */}
      {/* <div style={{marginLeft:"-185px"}}>
        <img src={iron_man}  style={{WebkitBoxReflect:"right"}} alt="iron man"/>
      </div> */}
      

      <div className='road ' id='road ' style={{width:"auto",height:"auto",background:"black",border:"2px solid antiquewhite",color:"white"}}>
        No Parking
        <hr/>
      <marquee style={{color:"white"}} scrollamount="10">
        <img src={car3} width="50px" style={{borderRadius:"20px"}} height="30px" alt='cars' />
      </marquee>
     <hr></hr>
      {/* <span style={{color:"white",borderRight:"3px solid white"}}>- - - - - - - - - - - - - - - - -  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </span> */}
      <marquee style={{color:"white",borderBottom:"6px solid yellow"}} scrollamount="40">
        <img src={car4} width="50px" style={{borderRadius:"20px"}} height="30px"  alt='cars'/>
      </marquee>
      <marquee style={{color:"white"}} direction="right">
      <img src={car1} width="50px" style={{borderRadius:"20px"}} height="30px" alt='cars' />
      </marquee>
      <hr></hr>
      {/* <span style={{color:"white",borderRight:"3px solid white"}}>- - - - - - - - - - - - - - - - -  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </span> */}
      <marquee style={{color:"white"}} direction="right" scrollamount="20">
      <img src={car2} width="50px" style={{borderRadius:"20px"}} height="30px" alt='cars' />
      </marquee>
      <hr/>
       No Parking 
      </div>

      <br/>
    
    </div>
  )
}
