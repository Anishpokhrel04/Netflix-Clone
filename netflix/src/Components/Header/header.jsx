import './header.scss';

//import icons
import{BsSearch} from 'react-icons/bs';
import img1 from '../../assets/img1.png';

const Header = () => {
  return (
    <nav className="header">
      <div className='logoDiv'>
      <img src={img1} alt="img1" />
      </div>
      <ul className="navLists">
        <li className="navItems">
          <a href="">Tv Shows</a>
        </li>

        <li className="navItems">
          <a href="">Movies</a>
        </li>

        <li className="navItems">
          <a href="">Recently added</a>
        </li>

        <li className="navItems">
          <a href="">My list</a>
        </li>
       
      </ul>
      <div className="iconDiv">
<BsSearch className='icon'/>   
     </div>
      
      

    </nav>
  )
}

export default Header
