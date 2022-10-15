import Banner from "./component/banner";
import Blog from "./component/blog";
import Client from "./component/client";
import Company from "./component/conpany";
import Footer from "./component/footer";
import FooterLast from "./component/footerLast";
import Header from "./component/header/Header";
import Member from "./component/member";
import Navber from "./component/navber";
import Service from "./component/service";
import Suplier from "./component/suplier";
import Map from "./component/map";

function App() {
  return (
   <>
      <Header></Header>
      <Navber></Navber>
      <Banner></Banner>
      <Suplier></Suplier>
      <Service></Service>
      <Company></Company>
      <Client></Client>
      <Blog></Blog>
      <Map></Map>
      <Member></Member>
      <Footer></Footer>
      <FooterLast></FooterLast>
   </>
  );
}

export default App;
