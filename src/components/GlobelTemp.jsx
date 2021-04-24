import React, { useEffect, useState } from "react";
import "./css/style.css";
import Animation from "./Animation";
import DateAndTime from "./DateAndTime";


const GlobelTemp = () => {

    const [city,setCity] = useState("surat");
    const [search,setSearch] = useState("surat");
    const [js,setJS] = useState(city);
    const [more,setMore] = useState("nomore");
    
    useEffect( () => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=e106a83ca0cec4c2d2e72c1fb8ba8000`;
            const response = await fetch(url);
            //console.log(response);
            const resJson = await response.json();
            setCity(resJson.main);
            setJS(resJson);
            console.log(resJson);
        }
        fetchApi();
    },[search] )

    
    
    return(

        
        <>
        {
             more === "nomore" && (
                <div className="box">
                <div className="inputData">
                    <input 
                    type="search"
                    value={search} 
                    className="inputFeild"
                    onChange = { (event) => { setSearch(event.target.value) } 
                    
                    }
                    />
                </div>

                { 
            !city ? ( <h2 className="errorMsg">No data found</h2> ) : (

                <div>
                    <div className="info">
                        <h2 className="location">
                        <i className="fas fa-thumbtack"></i> {search}
                        </h2>
                        <h1 className="temp">{city.temp}°C</h1>
                        <h3 className="tempmin_max">Min: {city.temp_min}°C | max: {city.temp_max}°C</h3>
                        <DateAndTime />
                        <button className="btn123"  onClick={ ()=> setMore("more")}>More</button>
                    </div>

                </div>

            )
        }
        <Animation />
            </div>
        )
        }


        {
             more === "more" && (
                <div className="box1">
                
                
                { 
            !city ? ( <h2 className="errorMsg">No data found</h2> ) : (

                <div>
                    <div className="info">
                        <h2 className="location">
                        <i className="fas fa-thumbtack"></i> {search},({js.sys.country})
                        </h2>
                        <h1 className="temp1">{city.temp}°C</h1>
                        <h3 className="tempmin_max123">
                            <div>
                            <div className="left">
                                Min : {city.temp_min} °C <br /> 
                                Humidity : {city.humidity} %<br />
                                Visibility : {(js.visibility)/1000} km <br />
                            </div>
                            <div className="right">
                                Max : {city.temp_max} °C <br />
                                Air Pressure : {city.pressure} hPa <br />
                                Wind : {js.wind.speed} km/h <br />
                            </div>
                            </div>
                        </h3>
                        <DateAndTime />
                        <button className="btn123"  onClick={ ()=> setMore("nomore")}>Back</button>
                    </div>

                </div>
            )
        }
        <Animation />
            </div>
            )
        }

        </>
    );

}


export default GlobelTemp;
