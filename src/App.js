import IntroVideo from './components/IntroVideo';
import Section from './components/Section';
import Footer from './components/Footer';
import Misc from './components/Misc';
import freshtopicsrc from './assests/academy.png'
import './styles/App.scss';
import './styles/intro.scss';
import './styles/section.scss';
import './styles/misc.scss';
import './styles/footer.scss';
import './styles/mediaquery.scss';
import data from './data/data.json';
import freshtopic2src from './assests/story.png';
import tedTalkssrc from './assests/in-the-news.gif';
import franchiseimg from './assests/franchise.gif';
import mapimg from './assests/locations.png';
import coursesimg from './assests/image2.png';
import albumimg from './assests/mba-cares.gif';
import baratimg from './assests/image1.png';
import chaiwalaimg from './assests/image3.png';
import { useEffect } from 'react';
const yellow="#fff100",pink="#ed1e79",white="#fff",brown="#6d3d0f",red="#d20120";
function App() {
  const { freshTopic ,freshTopic2, tedTalks ,franchise, map,courses,album,barat,chaiwala}=data;
  // const img3="40%";
const dotCursor=(e)=>{
  const cursor=document.querySelector(".cursor");
  cursor.style.top=`${e.pageY-14}px`;
  cursor.style.left=`${e.pageX-14}px`;
  const element=e.target;
  if(element.getAttribute("data-cursorpointer")){
    cursor.classList.add("cursorHover");
  }
  else if(element.getAttribute("data-cursorpointermini")){
    cursor.classList.add("cursorHoverMini");
  }
  else{
    cursor.classList.remove("cursorHover");
    cursor.classList.remove("cursorHoverMini");
  }
};
  useEffect(()=> {
  window.addEventListener("mousemove",dotCursor)
  return ()=>{
    window.removeEventListener("mousemove",dotCursor)
  }
},[])
  return (
  <>
  <IntroVideo/>
  
    <Section h3={freshTopic.heading} text={freshTopic.text} btntxt={freshTopic.btn} imgsrc={freshtopicsrc}
  backgroundColor={pink} headingColor={yellow} textColor={yellow} btnbgColor={yellow} btncolor={pink}
  />
  <Section h3={freshTopic2.heading} text={freshTopic2.text} btntxt={freshTopic2.btn} imgsrc={freshtopic2src}
  backgroundColor={pink} headingColor={yellow} textColor={yellow} btnbgColor={yellow} btncolor={pink}
  />
  
  <Section h3={tedTalks.heading} text={tedTalks.text} btntxt={tedTalks.btn} imgsrc={tedTalkssrc} 
  backgroundColor={yellow} headingColor={pink} textColor={pink} btnbgColor={pink} btncolor={yellow}
  /> 
  <Section h3={franchise.heading} text={franchise.text} btntxt={franchise.btn} imgsrc={franchiseimg} 
  backgroundColor={white} headingColor={pink} textColor={brown} btnbgColor={brown} btncolor={yellow}
  /> 
  <Section h3={map.heading} text={map.text}  imgsrc={mapimg}
  backgroundColor={pink} headingColor={yellow} textColor={yellow}  btncolor={yellow} hasbtn={false}
  /> 
  <Section h3={courses.heading} text={courses.text} btntxt={courses.text} imgsrc={coursesimg}
  imgSize={"30%"}
  backgroundColor={yellow} headingColor={pink} textColor={pink}  btnbgColor={pink} btncolor={yellow} 
  /> 
  <Section h3={album.heading} text={album.text} btntxt={album.text} imgsrc={albumimg}  backgroundColor={white} headingColor={pink} textColor={brown}  btnbgColor={brown} btncolor={yellow} 
  /> 
  <Section h3={barat.heading} text={barat.text} btntxt={barat.text} imgsrc={baratimg}  backgroundColor={pink} headingColor={yellow} textColor={yellow}  btnbgColor={yellow} btncolor={pink} 
  /> 
  <Section h3={chaiwala.heading} text={chaiwala.text} btntxt={chaiwala.text} imgsrc={chaiwalaimg}  backgroundColor={white} headingColor={pink} textColor={brown}  btnbgColor={brown} btncolor={yellow} 
  />
  <Footer/>
  <Misc/>  
  </>
  );
}

export default App;
