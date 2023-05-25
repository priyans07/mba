import React from 'react'
import '../styles/colors.scss'
const Footer = () => {
    const footerLinks=(element)=>{
        const allFooterLinks=document.querySelectorAll(".footerLink");
        switch(element){
            case 0:
                allFooterLinks.forEach((item,index)=>
                index===0 ? (item.style.opacity =1) : (item.style.opacity=0.2)
                );
                break;
            case 1:
                allFooterLinks.forEach((item,index)=>
                index===1 ? (item.style.opacity =1) : (item.style.opacity=0.2)
                );
                break;
            case 2:
                allFooterLinks.forEach((item,index)=>
                index===2 ? (item.style.opacity =1) : (item.style.opacity=0.2)
                );
                break;
            case 3:
                allFooterLinks.forEach((item,index)=>
                index===3 ? (item.style.opacity =1) : (item.style.opacity=0.2)
                );
                break;
            case 4:
                allFooterLinks.forEach((item,index)=>
                index===4 ? (item.style.opacity =1) : (item.style.opacity=0.2)
                );
                break;
            case 5:
                allFooterLinks.forEach((item,index)=>
                index===5 ? (item.style.opacity =1) : (item.style.opacity=0.2)
                );
                break;
                default:
                    allFooterLinks.forEach((item,index)=>
                item.style.opacity=1
                );
                break;
        }
    };
    const linksBackToNormal=() =>{
        const allFooterLinks=document.querySelectorAll(".footerLink");
        allFooterLinks.forEach((item)=>(item.style.opacity=1));};
  return (
    <>
    <footer>
        <h1>Let's
            <br />
            #ConnectingCutting?
        </h1>
        <aside onMouseLeave={linksBackToNormal}>
            
            <a href="/" className="footerLink" onMouseOver={()=>footerLinks(0) }data-cursorpointermini={true}>Home</a>
            {/* a.footer */}
            <a href="/story" className="footerLink" onMouseOver={()=>footerLinks(1) }data-cursorpointermini={true}>Story</a>
            {/* a.footer */}
            <a href="/media" className="footerLink" onMouseOver={()=>footerLinks(2) }data-cursorpointermini={true}>Media</a>
            <a href="/franchise" className="footerLink" onMouseOver={()=>footerLinks(3) }data-cursorpointermini={true}>Franchise</a>
            <a href="/events" className="footerLink" onMouseOver={()=>footerLinks(4) }data-cursorpointermini={true}>Events</a>
            <a href="/chaiwalacares" className="footerLink" onMouseOver={()=>footerLinks(5) }data-cursorpointermini={true}>Chai Wala Cares</a>
        </aside>
        <div>
            <h5>Email</h5>
            <a href="mailto: priyanshusrivastva49@gmail.com">info@mbachjaiwala.com</a>
            <a href="mailto: priyanshusrivastva49@gmail.com">info@mbachjaiwala.com</a>
        </div>
        <div>
            <h5>Phone</h5>
            <a href="tel:+919852228172">+9162762627</a>
        </div>
 <p >© COPYRIGHT 2023 MBA CHAIWALA , MADE BY</p>
    </footer>
    <div className="footer"></div>
    </>
  )
}

export default Footer