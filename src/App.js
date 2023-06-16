import { useState } from "react";
import summer from "./images/summer2.jpg";
import winter from "./images/winter.jpg";
 let arr = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function App() {
  let [latitude,setLatitude]=useState("");
  let [longitude,setLongitude]=useState("");
  let [Hemishpere,setHemishpere]=useState("");
  let [month, setMonth] = useState("");
  function getLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
        (location)=>{
          console.log(location)

          setLatitude(location.coords.latitude)
          setLongitude(location.coords.longitude)

          if(location.coords.latitude > 0){
            setHemishpere("Northen Hemishpere");
          }else if(location.coords.latitude < 0){
            setHemishpere("Southern Hemishpere");
          }
          else{
            setHemishpere("Equator");
          }

        }
      )
    }
    let month = new Date().getMonth() // 0-11
    setMonth(month);
  }
  return (
    <div className="App">
      <button className="btn" onClick={getLocation}>Get Location</button>
      {/* <p>Latatitude : {latitude}</p>
      <p>Longitude : {longitude}</p>
      <p>Hemishpere : {Hemishpere}</p> */}

      {
             (month!=="" && Hemishpere) && (
                   (Hemishpere=="Northen Hemishpere" && month>=2 &&  month<=9) || (Hemishpere=="Southern Hemishpere" && month<2 ||  month>9)? (
                      <div>
                          <h1 style={{textAlign:'center'}}>Summer Season</h1>
                          <img src={summer} className="season-image" alt="Summer Season" />
                      </div>
                    ): (
                      <div>
                        <h1 style={{textAlign:'center'}}>Winter Season</h1>
                        <img src={winter} className="season-image" alt="Winter Season" />
                    </div>
                    )
             )
        }

    </div>
  );
}

export default App;
