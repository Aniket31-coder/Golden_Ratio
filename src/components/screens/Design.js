import React from 'react';
import designHeaderImage from  '../images/designHeaderImg.png';
import webDesign from  '../images/national_geographic_web.png';
import BrandLogo from '../images/BrandLogo.png';
import googleLogo from '../images/Google_logo.png';
import cartoons from '../images/cartoons.jpg';
import cartoon1 from '../images/cartoon1.jpg';
import car from '../images/car.png';
import cartoon2 from '../images/cartoon.png';
import stamp1 from '../images/stamp1.jpg';
import stamp2 from '../images/stamp2.jpg';
import stamp3 from '../images/stamp3.gif';
import stamp4 from '../images/stamp4.gif';
import stamp5 from '../images/stamp5.jpg';


const Design = ()=>{
    return (
        <div>
           <div className="header" >
                <img className="header-img" src={designHeaderImage} alt="IMG"/>
            </div>

            <div className="logo-content">
                <h3>Ever wondered why these logos are so attractive ?</h3>
                <img className="brand-logo" src={BrandLogo} alt="BrandLogos"></img>
                <img className="google-logo" src={googleLogo} alt="BrandLogos"></img>
                <p>
                You can also use the golden ratio to add aesthetic appeal directly to a company’s branding. Even if the logo itself isn’t shaped like a golden rectangle or triangle, it can still employ elements that use golden proportions.
                When designing a logo, you can even imagine the Fibonacci sequence as a series of circles, then rearrange them to form a grid as the foundation for your logo design. This is the basis of many logos, including the Twitter bird.
                </p>
            </div>
            <div className="web-design">
                <h3>Why UX designers love it !</h3>
                <img src={webDesign} alt="webdesign" />
                <p>By using the golden ratio in web design, you become appealing to your viewers and unconsciously the layout of the website looks perfect for them as well as familiar.
                 That makes them much more likely to read on and view your website in depth. 
                 Golden Ratio in web design is also used to balance content that is text heavy, create hierarchy and draw users’ eyes to specific areas. This is one of the triggers you can use if you want to use neuroscience in your works and play with different parts of the brain.
                </p>
            </div>
            <div className="characters"> 
                <h3>Hey there! do you know what makes us special</h3>
                <img className="cartoons" src={cartoons} alt="cartoons" />
                <img className="cartoon1" src={cartoon1} alt="cartoons" />
                <img className="cartoon2" src={cartoon2} alt="cartoons" />
                <p>The golden ratio is flawless because it gives the “small, medium and large” that design is built upon.
                Initially a rough sketch is drawn and then refining of proportions is done using Golden ratio which makes these characters super cool !
                </p>
            </div>
            <div className="cars-design">
                <h3>The Secret behind design of Gorgeous Cars</h3>
                <img src={car} alt="car" />
                <p>The Golden Ratio is no stranger in the design circles of the auto industry. 
                Aston Martin gained some great press on its extensive application of the golden ratio in the design.
                The engineering follows the same principle. A near perfect weight distribution ensures the cars are balanced in form and in function.
                </p>
            </div>
            <div>
                <h3>Golden stamps !</h3>
                <img style={{marginLeft:"450px"}} src={stamp2} alt="stamp" />               
                <p>This was done with a golden rectangle spiral, with an arc connecting each 90 degree arc of its corners.</p>
                {/* <img src={stamp1} alt="stamp" /> */}
                <img className="stamp" style={{marginLeft:"75px"}} src={stamp4} alt="stamp" />
                <img className="stamp" src={stamp3} alt="stamp" />
                <img className="stamp" src={stamp5} alt="stamp" />
                <p>The center stem of the leaf in all three stamps is positioned at the golden ratio of the width of the stamp.
                 The point where the stem meets the leaf is also at a golden ratio of the height to the stamp.
                 The dimensions of the stamp itself are a golden rectangle.   
                </p>
            </div>
        </div>
    );
}


export default Design;