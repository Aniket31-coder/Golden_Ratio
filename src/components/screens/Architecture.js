import React from 'react';
import Sphinx from "../images/Sphinx.jpg";
import pyramid from '../images/great-pyramid.jpg'
import goldenTriangle from '../images/Golden-Triangle-Pythagorus.gif';
import parthenon from '../images/Parthenon2.gif'
import parthenon1 from '../images/Parthenon3.gif'
import Carousels from "../Carousel";



const Architecture = ()=>{
    return (
        <div>
           <div className="header" >
                <img className="header-img" src={Sphinx} alt="IMG"/>
                <h2 className="header-text">Golden Ratio in Architecture</h2>
            </div>
            <div className="Pyramids"> 
                <h3>The Great Pyramid</h3>
                <img src={pyramid} alt="pyramid" />
                <h5>The Great Pyramid of Egypt closely embodies Golden Ratio proportions.</h5>
                <p>Phi is the only number which has the mathematical property of its square being one more than itself:</p>
                <p style={{textAlign:"center"}}> Φ + 1 = Φ²</p>
                <p>By applying the above Pythagorean equation to this, we can construct a right triangle, of sides a, b and c, or in this case a Golden Triangle of sides √Φ, 1 and Φ, which looks like this:</p>
                <img src={goldenTriangle} alt="goldenTriangle" />
                <p>This creates a pyramid with a base width of 2 (i.e., two triangles above placed back-to-back) and a height of the square root of Phi, 1.272.  The ratio of the height to the base is 0.636.</p>
                <p>According to Wikipedia, the Great Pyramid has a base of 230.4 meters (755.9 feet) and an estimated original height of 146.5 meters (480.6 feet).  This also creates a height to base ratio of 0.636, which indicates it is indeed a Golden Triangles</p>
            </div>
            <div className="The Parthenon">
                <h3>The Parthenon</h3>
                <img src={parthenon} alt="parthenon" />
                <p>The photo above shows a Golden Rectangles with a Golden Spiral overlay to the entire face of the Parthenon.  This illustrates that the height and width of the Parthenon conform closely to Golden Ratio proportions.
                  This construction requires a assumption though, that the bottom of the golden rectangle should align with the bottom of the second step into the structure and that the top should align with a peak of the roof that is projected by the remaining sections.
                </p>
                <img src={parthenon1} alt="parthenon" />
                <p>
                The animated photo above provides a closer look yet at the quite precise golden ratio rectangle that appear in the design work above the columns.
                This, probably more than any other single feature of the Parthenon, provides rather compelling evidence that the Greeks knew of, and applied, the golden ratio in the construction of the Parthenon.
                </p>
            </div>
            
            <Carousels />
            
        </div>
    );
}


export default Architecture;