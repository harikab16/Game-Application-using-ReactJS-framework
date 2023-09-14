import React from 'react'
import './pstyle.scss';
import xox from '../images/xox.png'
import sudoko from '../images/sudoko.png';
import rps from '../images/rps.jpg';
import puzzle from '../images/puzzle.jpg';
import { Link } from 'react-router-dom';
export default function games() {
  return (
    <div className='games' style={{color:"white"}}>
      {/* Games Works */}
        <div className='game-card'>
            <div className='gcard1'>
                
               <Link to="/xox"><img src={xox} alt="xox-logo" width="200px" height="200px" /></Link>  <br />
                <p>Tic Tac Toe</p>
            </div>

            <div className='gcard2'>
                
                <Link to="/sudoko"><img src={sudoko} alt="sudoko-logo" width="200px" height="200px" /> </Link><br/>
                <p>Sudoko</p>
            </div>

            <div className='gcard3'>
                
                <Link to="/rps"><img src={rps} alt="rocks-paper-scissor-logo" width="200px" height="200px" /> </Link><br/>
                <p>Rock Paper & Scissor</p>
            </div>

            <div className='gcard4'>
                
                <Link to="/puzzle"><img src={puzzle} alt="sudoko-logo" width="200px" height="200px" /> </Link><br/>
                <p>puzzle</p>
            </div>
        </div>
    </div>
  )
}
