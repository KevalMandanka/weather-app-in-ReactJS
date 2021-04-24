import React, { useEffect, useState } from "react";
import "./css/style.css";
import Animation from "./Animation";
import DateAndTime from "./DateAndTime";
import firebase from "firebase";
import firebaseConfig from "./FirebaseConfig";


export default function Local()  {

    const [humList,setHumList] = useState();
    const [tempList,setTempList] = useState();

    useEffect(()=>{
        const database = firebase.database().ref().child('hum');
        database.on("value", datasnap1=>{
            const hum = datasnap1.val();
            const humList = [];
            for(let id1 in hum){
                humList.push(hum[id1]);
            }
            console.log(humList);
            setHumList(humList);
            
        });

        const database1 = firebase.database().ref().child('temp');
        database1.on("value", datasnap2=>{
            const temp = datasnap2.val();
            const tempList = [];
            for(let id2 in temp){
                tempList.push(temp[id2]);
            }
            console.log(tempList);
            setTempList(tempList);
        });
    },[]) ;
    
        return(
            <>
                <div className="box">
                    <div className="info">
                        <h2 className="location123">Local Temp</h2>
                        <div className="localdiv">
                            <h1 className="localtemp">temp: {tempList}°C</h1><br/>
                            <h1 className="localtemp">humidity: {humList}%</h1>
                        </div>
                        <DateAndTime/>
                    </div>
                    <Animation />
                </div>
            </>
        );
    
}


