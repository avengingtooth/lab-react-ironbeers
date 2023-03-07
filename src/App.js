// import './App.css';
// import Home from './components/Home';

// import { Route, Routes } from "react-router";

// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/" element={<Home />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;



import "./App.css";
import { Route, Routes } from "react-router";

import Home from "./components/Home";
import SingleBeer from "./components/SingleBeer";
import AllBeers from "./components/AllBeers";
import NewBeer from "./components/NewBeer";
import Header from "./components/Header";
import RandomBeer from "./components/RandomBeer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route element={<Header />}>
          <Route path='/random' element={<RandomBeer />}/>
          <Route path="/allBeers" element={<AllBeers/>}/>
          <Route path="/new" element={<NewBeer/>}/>
          <Route path="/:id" element={<SingleBeer />}/>
        /</Route>
      </Routes>
    </div>
  );
}

export default App;
