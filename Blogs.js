// import React from 'react'
import React, { Fragment } from 'react';

import bg from '../images/hbg1.jpg';
import profile from '../images/profile.jpg';
import './pstyle.scss';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { add } from '../features/post';
import { remove, edit, like, comment } from '../features/post';
export default function Blogs() {
    const post = useSelector((state) => state.post.value);
    const dispatch = useDispatch();
    // console.log(post);
    var flag=0;
    var count = 2;
    function getData(e) {
        e.preventDefault();
        var form = document.getElementById('form-p').value;

        if (form.length === 0) {
            alert("Please provide some data");
            return;
        }
        count = count + 1;
        dispatch(add({ msg: form }));
        // console.log(form);
   
        form = '';
        document.getElementById('pop-up-msg').style.display = "block";
        document.getElementById('pop-up-msg').innerText = "Posted";
        setTimeout(() => {
            document.getElementById('pop-up-msg').style.display = "none";
        }, 2000);
    }

    function removeData(did) {
        // alert(did);
        document.getElementById('pop-up-msg').style.display = "block";
        document.getElementById('pop-up-msg').innerText = "deleted";
        setTimeout(() => {
            document.getElementById('pop-up-msg').style.display = "none";
        }, 2000);
        dispatch(remove({ id: did }));

    }

    function editi(id) {
        // alert(id);
        var data = prompt("Enter the data that you want to change :");
        if (data.length < 5) {
            return alert("Data is Too short");
        }
        dispatch(edit({ id: id, data: data }))
    }

    function likes(id) {

        dispatch(like({ id: id }));
    }
    function Comments(id) {
        // alert("Comments are Inprogress..");
        if(flag===0)
        {
            document.getElementById('chat-box'+id).style.display="block";
            document.getElementById('comment-section'+id).style.display="block";
            flag=1;
        }
        else
        {
            // document.getElementById('chat-box'+id).style.display="none";
            document.getElementById('comment-section'+id).style.display="none";
            flag=0;
        }
       
       
    }
    function fncomment(id)
    {
        var data=document.getElementById('cmt-inp'+id).value;
        if(data==='')
        {
            alert("Please provide data..");
            return;
        }
        // console.log(data)
        dispatch(comment({ id: id, cmts: data }));
        // document.getElementById('chat-box'+id).style.display="none";
        flag=0;
    }
    return (
        <Fragment>

            <div className='blog-img'>
                <div className='blog-img-text'>
                    <img src={profile} alt="profile" />
                </div>

                <img src={bg} className="blog-bg" alt='blog-background' />
            </div>
            <div>
                <form className='post-form' >

                    <div>
                        {/* <input type="text" placeholder='Post here ....'/> */}
                        <img src={profile} alt="profile " height="40px" />
                        <textarea rows="4" id='form-p' cols="30"  placeholder='Post something here...'>

                        </textarea>
                    </div>
                    <div>
                        <input type="submit" className='form-p-btn button' value="Post " onClick={(e) => { getData(e) }} />
                    </div>
                </form>
            </div>
            <div className='post-data'>

                {
                    post.map((data) =>
                    (
                        <div style={{margin:"10px 0px",padding:"10px",borderRadius:"10px"}}>
                            <div className='post'>

                                <div style={{ display: "flex", flexDirection: "row", marginLeft: "auto" }}>
                                    {/* profile */}
                                    <span style={{ marginRight: "auto" }}>

                                    </span>
                                    {/* Edit Button */}
                                    <span style={{ marginRight: "10px" }} onClick={() => (editi(data.pid))}>
                                        <span className="material-symbols-outlined hov">
                                            edit
                                        </span>
                                    </span>

                                    {/* remove button */}
                                    <span className='rmv hov' >

                                        <div style={{ cursor: "pointer" }} id={data.pid}
                                            onClick={() => (removeData(data.pid))}
                                        >
                                            <span className="material-symbols-outlined">
                                                delete
                                            </span></div>
                                    </span>
                                </div>
                                {/* <span> {data.pid}</span> */}
                                <span> {data.msg}</span>
                                <span className='post-reactions' style={{ display: "grid", gridTemplateColumns: "auto auto auto", padding: "10px" }}>

                                    <div>
                                        {data.like}

                                        <span className="material-symbols-outlined hov " onClick={() => (likes(data.pid))} >
                                            thumb_up
                                        </span>

                                    </div>

                                    <div>

                                        <span className="material-symbols-outlined hov" onClick={() => (Comments(data.pid))} style={{ marginTop: "20px" }}>
                                            chat
                                        </span>
                                       
                                       
                                    </div>
                                    <div>
                                        <span className="material-symbols-outlined hov" style={{ marginTop: "20px" }}>
                                            share
                                        </span>
                                    </div>

                                </span>
                            </div>
                            <div id={'comment-section'+data.pid} style={{display:"none",backgroundColor:"lightgoldenrodyellow",paddingLeft:"10px",borderBottomRightRadius:"30px"}}>
                            <div id={'chat-box'+data.pid} style={{display:"none",marginTop:"5px",textAlign:"center"}}>
                                Chat : &nbsp;
                                            <span style={{marginRight:"5px"}}>
                                                <input type="text" id={"cmt-inp"+data.pid } />
                                            </span>
                                            <span>
                                                <span class="material-symbols-outlined button" style={{cursor:"pointer",fontSize:"15px"}} onClick={()=>(fncomment(data.pid))}>
                                                chevron_right
                                                </span>
                                            </span>
                                            
                                        </div><br/>
                            
                            Replies : &nbsp;
                            {
                            data.comments.map(item=>
                                {
                                    return <p><img src={profile} alt="profile" width="40px" height="40px" style={{borderRadius:"50%"}}/> &nbsp; {item}</p>
                                })
                            
                            }
                            </div>

                        </div>
                    ))
                }



            </div>
            <div className='pop-up-msg' id='pop-up-msg' style={{ display: "none", position: "fixed", top: "50px", background: "white", padding: "5%", marginLeft: "40%", border: "2px solid black" }}>
                hello world
            </div>
        </Fragment>
    )
}
