// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import MainPage from './Main';

// function App() {

//   return(
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<MainPage/>} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import BoardMain from './routes/board/BoardMain';
import BoardView from './routes/board/BoardView';
import Home from './routes/Home';
import Detail from './routes/Detail';
import Search from './routes/Search';
import Navigation from './components/Navigation';
import SearchOne from './routes/SearchOne';
// import Chart from './routes/Chart';

function App() {
  return (
    <HashRouter>
      {/* <Chart></Chart> */}
      <Navigation />
      <Routes>
        <Route path="/" exact={true} element={<Home />}></Route>
        <Route path="/board" element={<BoardMain />}></Route>
        <Route path="/board/view/:id" element={<BoardView />}></Route>
        <Route path="/movie/detail/:id" element={<Detail />}></Route>
        <Route path="/search" exact={true} element={<Search />}></Route>
        <Route path="/search2" exact={true} element={<SearchOne />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
