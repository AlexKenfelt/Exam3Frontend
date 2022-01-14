import {useEffect, useState } from 'react';

function Trip({ facade, setErrorMessage}) {

    const init = { tripName: "", tripDate: "", tripLocation: "", tripDuration: "", tripPackingList: ""};
    const [tripInfo,setTripInfo] = useState(init);
    const [allTrips,setAllTrips] = useState([]);

    const handleClick = (evt) =>{
        evt.preventDefault();
        facade.fetchData('trip/alltrips', updateAllTrips, setErrorMessage);
    }

    const updateAllTrips = (data) => {
        console.log(data)
        setAllTrips(data.getAllTrips)
    }

    const performCreateTrip = (evt) =>{
        evt.preventDefault();
        facade.createTrip(tripInfo.tripName, tripInfo.tripDate, tripInfo.tripTime, tripInfo.tripLocation, tripInfo.tripDuration, tripInfo.tripPackingList, setErrorMessage)
    }

    const addUserToTrip = (evt) => {
        evt.preventDefault();
        alert("You are added to the trip!");
        facade.addUserToTrip('/'+facade.getUserName() + '/' + 1, setErrorMessage)
    }

    const onChange = (evt) =>
    {
        setTripInfo({ ...tripInfo, [evt.target.id]: evt.target.value })
    }


return (

    <div>

<form onChange={onChange}>
        <h2>Enter the infomation for your trip</h2>
        <input style={{textAlign:"center"}} placeholder="tripName" id="tripName" />
        <input style={{textAlign:"center"}} placeholder="tripDate" id="tripDate" />
        <input style={{textAlign:"center"}} placeholder="tripTime" id="tripTime" />
        <input style={{textAlign:"center"}} placeholder="tripLocation" id="tripLocation" />
        <input style={{textAlign:"center"}} placeholder="tripDuration" id="tripDuration" />
        <input style={{textAlign:"center"}} placeholder="tripPackingList" id="tripPackingList" />
        <button onClick={performCreateTrip}>Create A Trip!</button>

    </form>

    <h1>All trips</h1>

    <div>
        <table class="styled-table">
            <thead>
                <tr>
                <th scope="col">name</th>
                <th scope="col">date</th>
                <th scope="col">time</th>
                <th scope="col">location</th>
                <th scope="col">duration</th>
                <th scope="col">packingList</th>
                </tr>
            </thead>
        <tbody>
        {allTrips.map((t =><tr class="active-row"> <td key={t.id}>{t.name}</td><td key={t.id}>{t.date}</td><td key={t.id}>{t.time}{t.id}{t.location}</td><td key={t.id}>{t.duration}</td><td key={t.id}>{t.packingList}</td></tr>))}
        </tbody>
        </table>
    </div>

    <button onClick={handleClick}>Get Trip</button>
    <button onClick={addUserToTrip}>Add User To Trip</button>

</div>
  );
}
export default Trip;