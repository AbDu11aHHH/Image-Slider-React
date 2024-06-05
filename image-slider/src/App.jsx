import { useState } from 'react'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import img1 from "./imgs/img1.jpg";
import img2 from "./imgs/img2.jpg";
import img3 from "./imgs/img3.jpg";
import img4 from "./imgs/img4.jpg";
import img5 from "./imgs/img5.jpg";

function App() {

  const imgs = [img1,img2,img3,img4,img5];
  const [index, setIndex] = useState(0);

  const handleClickForward = () => {
    index==4?setIndex(0):setIndex(index+1)
  };

  const handleClickBack = () => {
    index==0?setIndex(4):setIndex(index-1)
  }

  const handleIdxClick = (i) =>{
    setIndex(i)
  }

  return (
  <>
  <h1>IMAGE SLIDER</h1>
  <div className="imgBox">
    <div className="sliders" id="sld1"> <button onClick={handleClickBack}><FontAwesomeIcon icon={faAngleLeft } /></button> </div>
          {/* <img src={imgs[index]} alt="" className='images' /> */}
          <div className="img-container">
            {imgs.map(url => (
              <img key={url} src={url} alt="images" style={{translate: `${-100*index}%`}}/>
            ))}
          </div>
          <div className="buttons">
          {imgs.map((_, i) => (
          <button key={i} className="image-button" onClick={() => handleIdxClick(i)}>{i + 1}</button>))}
          </div>
    <div className="sliders" id="sld2"> <button onClick={handleClickForward}><FontAwesomeIcon icon={faAngleRight} /></button></div>
  </div>
  </>
  )
}

export default App
