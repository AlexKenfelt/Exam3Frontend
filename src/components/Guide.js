import {useEffect, useState } from 'react';

function Guide ({ facade, setErrorMessage}) {
    
    const init = { guideName: "", guideGender: ""};
    const [guideInfo,setGuideInfo] = useState(init);
    console.log(guideInfo);
    
    const performCreateGuide = (evt) =>{
        evt.preventDefault();
        facade.createGuide(guideInfo.guideName, guideInfo.guideGender, setErrorMessage)
        console.log(guideInfo);
    }
    
    const onChange = (evt) =>
    {
        console.log(evt)
        setGuideInfo({ ...guideInfo, [evt.target.id]: evt.target.value })

    }
    
    return (  
        <div>
            
            <form onChange={onChange}>
                <h2>Enter the infomation for your trip</h2>
                <input style={{textAlign:"center"}} placeholder="guideName" id="guideName" />
                <input style={{textAlign:"center"}} placeholder="guideGender" id="guideGender" />
                <button onClick={performCreateGuide}>Create A Guide!</button>
        
            </form>
        </div>

    );
}

export default Guide;