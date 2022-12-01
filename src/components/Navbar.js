import './Navbar.css';
import { FaBell, FaSearch, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const Img1 =
    'https://post-phinf.pstatic.net/MjAyMDAyMjlfMjY4/MDAxNTgyOTU0Nzg3MjQ4.PBMFV4WrSJmeSUJ56c4C7Vkz_SsQlJ1SByKU18kkJh0g.T7mQnadCWVtEZ448AGk_9kG1HFBAzdztXZcBjvSbduwg.JPEG/%EA%B3%A0%EC%96%91%EC%9D%B4_%EB%82%98%EC%9D%B41.jpg?type=w1200';

  return (
    <div className="barWrapper">
      <button className="leftBox">
        <Link to="/">
          <FaHome className="barHome" />
        </Link>
        <Link to="/search">
          <FaSearch className="barSearch" />
        </Link>
      </button>
      <div className="barText">My Page</div>
      <button className="barProfileBox">
        <button>
          <FaBell className="barBell" />
        </button>
        <img className="barProfile" src={Img1}></img>
      </button>
    </div>
  );
};

export default Navbar;
