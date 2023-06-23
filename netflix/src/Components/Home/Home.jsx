import "./home.scss";

//importing react icons

import { BsFillPlayFill } from "react-icons/bs";
import { GrFormAdd } from "react-icons/gr";

//import images
import N from "../../assets/N.webp";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";

const Data = [
  {
    id: 2,
    imgSrc: img2,
    imgLog: N,
  },

  {
    id: 3,
    imgSrc: img3,
    imgLog: N,
  },

  {
    id: 4,
    imgSrc: img4,
    imgLog: N,
  },

  {
    id: 5,
    imgSrc: img5,
    imgLog: N,
  },

  {
    id: 6,
    imgSrc: img6,
    imgLog: N,
  },

  {
    id: 7,
    imgSrc: img6,
    imgLog: N,
  },

  {
    id: 8,
    imgSrc: img6,
    imgLog: N,
  },

  
];

const Home = () => {
  return (
    <div className="home">
      <div className="secHome">
        <div className="letterImg">
          <img src={N} alt="net" className="logo" />
          <h6>SERIES</h6>
        </div>

        <div className="title">
          <h1>
            STRANGER <br />
            THINGS
          </h1>
          <p>
            When a young boy vanishes, a small town uncovers a mistery involving
            secret experiments, terrifying supernatural forces and a strange
            little girl.
          </p>
        </div>

        <div className="btnDiv">
          <button className="leftBtn">
            <BsFillPlayFill className="icon " />
            <h5>Play</h5>
          </button>
          <button className="rightBtn">
            <GrFormAdd className="rightIcon" />
            <h5>My List</h5>
          </button>
        </div>
      </div>
      <div className="card">
        <h3>Popular on Netflix</h3>

< div className="map">

        {Data.map((item) => {
          return (
            <div className="secDest" key={item.id}>
              <div className="destImage">
                <img className="logoImg"src={item.imgLog} alt="" />
                 <img src={item.imgSrc} alt="destination" /> 
              </div>
            </div>
           );
         })} 
        </div>


{/* this cod is used if we donot use mapping function */}
        {/* <div className="secDest">
        
          <div className="destImage">
          <img src={N} className="limg" alt="" />
            <img src={img2} alt="destination2" />
            
            
          </div>

          <div className="destImage">
          <img src={N} className="limg" alt="" />
            <img src={img3} alt="destination3" />

            
          </div>

          <div className="destImage">
          <img src={N} className="limg" alt="" />
            <img src={img4} alt="destination4" />
            
          </div>

          <div className="destImage">
          <img src={N} className="limg" alt="" />
            <img src={img5} alt="destination5" />
            
          </div>

          <div className="destImage">
          <img src={N} className="limg" alt="" />
            <img src={img6} alt="destination6" />
            
          </div>

          <div className="destImage">
          <img src={N} className="limg" alt="" />
            <img src={img6} alt="destination6" />
            
          </div>

          <div className="destImage">
          <img src={N} className="limg" alt="" />
            <img src={img6} alt="destination6" />
            
          </div>

          <div className="destImage">
          <img src={N} className="limg" alt="" />
            <img src={img6} alt="destination6" />
            
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
