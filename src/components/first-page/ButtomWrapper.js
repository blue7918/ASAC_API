import Recommend from './Recommend';
// import BookMark from './BookMark';
import '../../css/first-page/buttom.css';

const ButtomWrapper = () => {
  return (
    <div className="buttomWrapper">
      <Recommend />
      <Recommend />
      {/* <BookMark /> */}
    </div>
  );
};
export default ButtomWrapper;
