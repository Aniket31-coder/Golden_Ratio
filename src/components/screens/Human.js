import React, { useEffect,useState } from 'react';
import humanface from '../images/face.jpg';
import faceAnalysis from '../images/faceAnalysis.gif';
import faceAnalysis2 from '../images/faceAnalysis2.gif';
import finger from '../images/finger1.gif';
import finger1 from '../images/finger-golden-ratio.jpg';
import finger2 from '../images/finger-golden-spiral.png';
import arm from '../images/arm.gif';
import foot from '../images/foot-phi1.gif';

const Human=()=>{

    const [goldenRatio,setGoldenRatio] = useState("");
    const [submitted,isSubmitted]= useState(false);   

  
  const [image,setImage] = useState("");
  const [url,setUrl]=useState("");
  useEffect(()=>{
    if(url) {
      fetch("https://goldenratio.cognitiveservices.azure.com//face/v1.0/detect?returnFaceLandmarks=true",{
        method:"post",
        headers:{
          "Content-Type":"application/json",
          "Ocp-Apim-Subscription-Key":process.env.REACT_APP_SUB_KEY
        },
        body:JSON.stringify({
          url
        })
      })
      .then(res=>res.json())
      .then(result=>{
        console.log(result);
        if(result) {
          const pupLeft = result[0].faceLandmarks.pupilLeft.y;
          const pupRight = result[0].faceLandmarks.pupilRight.y;
          const pupil= (pupLeft+pupRight)/2;
          const chin= (result[0].faceRectangle.top)+(result[0].faceRectangle.height);
          const lip=(result[0].faceLandmarks.upperLipBottom.y+result[0].faceLandmarks.underLipTop.y)/2;
          const golden_Ratio=(chin-pupil)/(lip-pupil);
            
          setGoldenRatio(golden_Ratio);
        }
        
      })
      .catch(err=>{
        console.log(err);
      })
    }
  },[url])



  const postDetails = ()=>{                //Posting data to cloudinary server.

        isSubmitted(true);     
    
        const data = new FormData();
        data.append("file",image);
        data.append("upload_preset","insta-clone");
        data.append("cloud_name","posts")
        fetch("https://api.cloudinary.com/v1_1/posts/image/upload",{
        method:"post",
        body:data
        })
        .then(res=>res.json())
        .then(data=>{
            setUrl(data.url)                 //Updating url state with pic url recieved from cloudinary.
        })
        .catch(err=>{
            console.log(err);
        });
    }  

    return (
    <div>
        <div className="header" >
                <img style={{opacity:0.5}} className="header-img" src={humanface} alt="IMG"/>
        </div>
        <div className="face-beauty">
        <h3>So you think you are beautiful ?</h3>
        <h4 style={{textAlign:"center"}}>Let's see what phi thinks about you</h4>
        </div>
        <div className="upload">
        <h6>Upload your image (.jpg,.jpeg only)</h6>
        <div className="file-field input-field">
            <div className="waves-effect waves-light btn #2196f3 blue ">
                <span>Upload Image</span>
                <input type="file" onChange={(e)=>setImage(e.target.files[0])}  />
            </div>
            <div className="file-path-wrapper">
                <input className="file-path validate" type="text" value={image.name} />
            </div>
            <button style={{marginTop:"20px"}} className="btn waves-effect waves-light #2196f3 blue"
            onClick={()=>postDetails()}
            >
                Submit image
            </button>
        </div>
        <div style={{marginTop:"70px"}} className="result" >
        {(submitted&&!goldenRatio)&&<div className="loader"></div>}
        {(goldenRatio)&&<p style={{textAlign:"center", paddingTop:"10px", fontStyle:"italic"}}>Your beauty ratio is {goldenRatio}</p>}
        </div>
        </div>  
         <div >
          <h4>How it's calculated  ?</h4>
          <div style={{height:"200px"}} >
          <img style={{float:"left"}} src={faceAnalysis} alt="face"/>
          <p>The head forms a golden rectangle with the eyes at its midpoint. 
          The mouth and nose are each placed at golden sections of the distance between the eyes and the bottom of the chin.</p>
          </div>
          <div style={{height:"220px"}} >
          <img style={{float:"left"}} src={faceAnalysis2} alt="face" />
          <p>Even when viewed from the side, the human head illustrates the Divine Proportion.
          The first golden section (blue) from the front of the head defines the position of the ear opening.
           The successive golden sections define the neck (yellow), the back of the eye (green) and the front of the eye and back of the nose and mouth (magenta).  
           The dimensions of the face from top to bottom also exhibit the Divine Proportion, in the positions of the eye brow (blue), nose (yellow) and mouth (green and magenta).
          </p>
          </div>
        </div>
        <div className="handAndFoot">
        <h3>Human hand and foot</h3>
        <p>Let’s start with something simple. Take your hand off your keyboard or mouse and look at the proportions of your index finger.</p>
        <img src={finger} alt="finger" />
        <p>Here are other ways of expressing the same basic relationship in its connection to the golden ratio and golden spiral:</p>
        <img src={finger1} alt="finger" />
        <img src={finger2} alt="finger" />
        <h4>The ratio of the forearm to hand is Phi</h4>
        <img src={arm} alt="arm" />
        <p>
        Your hand creates a golden section in relation to your arm, as the ratio of your forearm to your hand is also 1.618, the Divine Proportion.
        </p>
        <h4>Even your feet show phi</h4>
        <p>The foot has several proportions based on phi lines, including:</p>
        <ol>
          <li>The middle of the arch of the foot</li>
          <li>The widest part of the foot</li>
          <li>The base of the toe line and big toe</li>
          <li>The top of the toe line and base of the “index” toe</li>
        </ol>
        <img src={foot} alt="foot" />
        </div>
    </div>
        
    )
};


export default Human;




  