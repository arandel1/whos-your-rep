export default function YourReps( {reps} ) {
 
  const officesArray = reps.offices;

  const officialsArray = reps.officials;
  const namesOfOfficials = officialsArray.map(officials => officials.name);
  
  const officialsURLs = officialsArray.map(officials => officials.urls);
  
  const firstOfficialsURLs = officialsURLs.map(subArray => subArray[0]);
  
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
                  <a href={firstOfficialsURLs[index]} target="_blank" rel="noopener noreferrer">{title} </a>
                </li>
              ))}          
            </ul>

            </div>
        </div>

        <button className="new-address-button" type="button" onClick={handleReload}>Try Another Address</button>

      </>
    )
  }
    