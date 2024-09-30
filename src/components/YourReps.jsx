import { useEffect, useState } from "react";

export default function YourReps( {reps} ) {
 
  const officesArray = reps.offices;
  const officeTitles = officesArray.map(office => office.name);

  // console.log("List of Office Names:", officesArray);

  // console.log("List of Office Titles:", officeTitles);

  // console.log("officesArray:", officesArray);
  
  const officialsArray = reps.officials;
  const namesOfOfficials = officialsArray.map(officials => officials.name);

  // console.log("namesOfOfficials:", namesOfOfficials);
  // console.log("officialsArray: ", officialsArray);
  
  const officialsURLs = officialsArray.map(officials => officials.urls);
  // console.log("Array of Officials' Urls:", officialsURLs);
  // I isolated the Urls, now I have an array of arrays. Now I need to split the arrays and extract just the first url if there are two, and the single url if there's just one.
  
  const firstOfficialsURLs = officialsURLs.map(subArray => subArray[0]);
  // console.log("Array of First URL for each official:", firstOfficialsURLs);
  
  const countOfReps = officialsArray.length;
    
  const handleReload = () => {
    window.location.reload();
  }
    return(
      <>
        <div className="Representatives-Container">
        
        <button className="new-address-button" type="button" onClick={handleReload}>Try Another Address</button>

          <h2>You have <span style ={{ color: "#a796f5" }}> {countOfReps}</span> people representing you!</h2>
          <p>Click on a name to learn more about them and how they represent you</p>
          <div className="reps-list">
            <ul>
              {namesOfOfficials.map((title, index) => ( 
                <li key={title}>
                  <a href={firstOfficialsURLs[index]} target="_blank" rel="noopener noreferrer">{title}, </a>
                </li>
              ))}          
            </ul>

            </div>
        </div>
  
        {/* <div className="Offices-Container">
          <h2>Offices That Represent You</h2>
            <ul>
  
              {officeTitles.map(title =>( 
                <li key={title}>{title}</li>
              ))}
  
              </ul> 
          </div> */}

        <button className="new-address-button" type="button" onClick={handleReload}>Try Another Address</button>

      </>
    )
  }
    