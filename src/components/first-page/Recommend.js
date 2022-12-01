import '../../css/first-page/buttom.css';

const Recommend = () => {
  const title = '데드풀';
  const open = 'Deadpool, 2016';
  const poster =
    'https://www.themoviedb.org/t/p/original/bzpAD4rd40zZYoh6Lqzrz1O1xh4.jpg';
  const summary =
    '정의감 제로, 책임감 제로, 정신은 인터스텔라급 마블 역사상 가장 매력 터지는 히어로 ‘데드풀’이 온다!';
  const text =
    '전직 특수부대 출신의 용병 ‘웨이드 윌슨(라이언 레놀즈)’은 암 치료를 위한 비밀 실험에 참여 후, 강력한 힐링팩터를 지닌 슈퍼히어로 ‘데드풀’로 거듭난다. 탁월한 무술실력과 거침없는 유머감각을 지녔지만 흉측하게 일그러진 얼굴을 갖게 된 데드풀은 자신의 삶을…';
  return (
    <div className="recomWrapper buttomBox">
      <div className="innerWrapper">
        <span className="recommend">Recommend</span>
        <div className="recomBox">
          <img className="recomPoster" src={poster} />
          <div className="recomTextBox">
            <div className="recomTitle">{title}</div>
            <div className="recomOpen">{open}</div>
            <div className="recomSummary">{summary}</div>
            <div className="recomText">{text}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommend;
