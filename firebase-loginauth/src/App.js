import Home from "./components/home/Home";
import SignIn from "./components/login/SignIn";
import Signup from "./components/login/Signup";
import PageNotFound from "./components/pagenotfound/PageNotFound";
import {BrowserRouter,Route,Routes} from "react-router-dom";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
