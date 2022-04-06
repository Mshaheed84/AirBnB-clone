import Header from "./components/Header"
import Hero from "./components/Hero"
import Card from "./components/Card"
import imageCarda from "../src/images/image.png"
var card = {
  img: imageCarda,
  title: "Life lessons with Katie Zaferes",
  ratings: 5.0,
  reviewCount: 6,
  country: "USA",
  price: 136
}
function App() {
 
  return (
    <div className="App">
      <Header />
      {/* <Hero /> */}
      <Card 
        img= {imageCarda}
        title= "Life lessons with Katie Zaferes"
        ratings= {5.0}
        reviewCount= {6}
        country= "USA"
        price= {136}
      />
    </div>
  );
}
 // img src={imageCarda} className="card--img"/>
  //           <div className="card--stats">
  //               <img src={star} className="card--star"/>
  //               <span>5.0</span>
  //               <span className="gray">(6) •</span>
  //               <span className="gray">USA</span>
  //           </div>
  //           <p>Life lessons with Katie Zaferes</p>
  //           <p><span className="bold">From $136</span> / person</p>
export default App;
