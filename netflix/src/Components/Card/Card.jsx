import './card.scss';


import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.jpg';
import img6 from '../../assets/img6.jpg';

const Data =[

  {
    id:2,
    imgSrc:img2,
  },

  {
    id:3,
    imgSrc:img3,
  },

  {
    id:4,
    imgSrc:img4,
  },

  {
    id:5,
    imgSrc:img5,
  },

  {
    id:1,
    imgSrc:img6,
  },


]

const Card = () => {
  return (
    <div className="Card">
    <h3>Popular on Netflix</h3>
    {Data.map((item)=>{
return(
  <div className="secDest" key={item.id}>
    <div className="destImage">
      <img src={item.imgSrc} alt="destination" />
    </div>
  </div>
)
    })}
    </div>
  )
}

export default Card
