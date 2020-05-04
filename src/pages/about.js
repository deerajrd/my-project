import React from 'react'
import Aboutimg from '../images/fest1.jpg'
import Title from '../components/Title'
export default function about() {
    return (
        <>
        
        {/* <div className='defaultHero'>
            <div className="containers">
            <h1>ABOUT US</h1>
           
            <div>
                <img className="aboutimg" src={Aboutimg} alt="img"></img>
            </div>
            
            <article>
                <p>This is the the website for the students as well as colleges to interact about the events happening in the different colleges</p>
            </article>
            </div>
            </div>
          
        </section> */}
        <section className='about-events'>
        <Title title="ABOUT US"></Title>
        {/* <div class="aboutcontainer"> */}
  <div class="aboutrow">
    <div class="column-66">
      {/* <h1 class="xlarge-font"><b>ABOUT US</b></h1> */}
      {/* <h1 class="large-font" style={{color:"MediumSeaGreen"}}><b>Why buy it?</b></h1> */}
      <p><span >Industries don’t get required labors on the right time.</span>
      costing them lot of money since the project gets delayed. These are skilled labor who work on daily wages These could be any field like construction, manufacturing industries , road - pwd , agriculture For the workers, since they work on daily wages , even a day of missed job can impact their daily meal . A platform where they can put their availability and for industries to hire these labors would create a bridge for the gap.</p>
      {/* <button class="aboutbutton">Download Application</button> */}
    </div>
    <div class="column-33">
        <img className='aboutimg' src={Aboutimg}/>
    </div>
  </div>
{/* // </div> */}
</section>
</>
        
        
    )
}
