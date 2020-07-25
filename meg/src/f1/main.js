import React, { useState, useEffect } from 'react';
import './main.css';

function Main() {
    const [standings, changeStandings] = useState({
        'MRData': {
            'StandingsTable': {
                'StandingsLists' : [
                    {
                        'DriverStandings': [{'Driver': {
                            'givenName': '',
                            'familyName': ''
                        }}]
                    }
                ]
            }
        }
    });

    const getCurrentStanding = async () => {
        let date = new Date()
        let response = await fetch("https://ergast.com/api/f1/"+ date.getFullYear() +"/driverStandings.json", {
            method: 'GET',
        })
        let data = await response.json()

        changeStandings(data);
    }

    function getNormalizedNameForLink (g, l){
        return g.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") + "-" + l.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    }
    useEffect(() => {
        getCurrentStanding()
    }, [])

    return(
        <div class={"standings"}>
         {standings['MRData']['StandingsTable']['StandingsLists'][0]['DriverStandings'].map(function(d, i){
             return <>
                        <img width="250px" src={"https://www.formula1.com/content/fom-website/en/drivers/"+ getNormalizedNameForLink(d.Driver.givenName, d.Driver.familyName)
                                                + "/_jcr_content/image.img.1920.medium.jpg"} alt="Driver"/>
                         <p>{i+1 + ": " + d.Driver.familyName + ", Points: " + d.points}</p>
                    </>
         })}
        </div>
    )
}

export default Main;