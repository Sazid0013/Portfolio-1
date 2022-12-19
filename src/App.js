import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import HomeBanner from './Components/Home/HomeBanner/HomeBanner';
import Header from "./Components/Header/Header";
import Results from "./Components/Pages/Results/Results/Results";
import PackageDetails from "./Components/Pages/Services/PackageDetails/PackageDetails";
import Packages from "./Components/Pages/Services/Packages/Packages";
import RequireAuth from './Components/Auth/RequireAuth/RequireAuth';
import Error from './Components/Pages/Error/Error';
import UserAuth from './Components/Auth/UserAuth/UserAuth';
import Article from "./Components/Home/Article/Article";
import JoinUs from './Components/Pages/JoinUs/JoinUs';
import Blogs from './Components/Blogs/Blogs';
import About from "./Components/Pages/About/About";






function App() {

  return (
    <div>

      <Header />
      <Routes>

        <Route path='/' element={<><HomeBanner /><Article /> <Packages /><Article /> <Results /><Footer /> </>}></Route>
        <Route path='/home' element={<><HomeBanner />  <Packages /><Article />  <Results /><Footer /> </>}></Route>

        <Route path='/package' element={<><Packages /> <Footer /></>} />
        <Route path='/package/:id' element={
          <RequireAuth>
            <PackageDetails></PackageDetails>
            <Footer />
          </RequireAuth>
        } ></Route>

        <Route path="/result" element={<><Results /> <Footer /></>} />

        <Route path='/join' element={
          <UserAuth>
            <JoinUs />
          </UserAuth>
        } />
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path='/join' element={<JoinUs />} />
        <Route path='*' element={<Error />} />
      </Routes>




    </div>
  );
}

export default App;
