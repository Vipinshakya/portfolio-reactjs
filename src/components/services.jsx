import React from 'react'
import Card from '../components/card/card'
import HeartEmoji from '../components/img/heartemoji.png'
import GlassesEmoji from '../components/img/glasses.png'
import Resume from "../components/img/vipin shakya__resum.pdf"



const services = () => {
  return (
    <div style={{background:"var()"}} className='services'>
      <div className="awesome">
        <span><h1 style={{color:"blue"}}>My Awesome</h1></span>

        <span><h1 style={{color:"blue"}}>Services</h1></span>
        <br />
        <span style={{color:'var(--yellow)'   , padding:"2px" , fontSize:"20px"}}>
        A Front-End Developer is someone who creates websites and web applications. <br></br>The difference between Front-End and Back-End is that Front-End refers to how a web page looks, while back-end refers to how it works. You can think of Front-End as client-side and Back-End as server-side.<br/> The basic languages for Front-End Develop…
        </span>
<br />


        <br />


        <span className='font'>
        Front-end web development is the development of the graphical user interface of a website, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that website.
        </span>
        <br />
        <br />
        <a href={Resume} download>
        <button style={{width:"150px" ,height:"50px"}} 
        
        className="button s-button"> Downlod CV</button>
       </a>
      </div>
      <div>


      </div>
      <div  className="cards">
        <div className='style1'style={{right:"-20rem"}}>
            <Card
            emoji={HeartEmoji}
            heading={'Design'}
            details={'Figma , Photoshop,'}
            
            />

        </div>
        <div className='style2' style={{top:"22rem",left:"-24rem"}}>
          <Card
          emoji={GlassesEmoji}
            heading={'Developer'}
            details={'HTML, Javascript , CSS, Reactjs'}
            />
            
        </div>
        <div className='style3'style={{top:"29rem", right:"-39rem"}}>
          <Card
          
          
          emoji={GlassesEmoji}
          heading={'UI/UX'}
          details={'fully responsive'}
          
          
          />
        </div>
       
      <div style={{background:"url()"}} className="background-blur">
        <img  src='https://images.unsplash.com/photo-1664436341001-b02974ae7524?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' width='100%' alt="" srcset="" />
      </div>
     

     
     
      

      </div>
      
       <div ></div>
    </div> 
   
  
  )
}

export default services
