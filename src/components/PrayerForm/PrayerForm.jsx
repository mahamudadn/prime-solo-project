import { useDispatch, useSelector } from "react-redux";
import  {useState} from 'react';


function prayerForm() {

    const dispatch = useDispatch();
    // const [user_id, setUser_Id] = useState("");
    const [prayer_id, setPrayer_Id] = useState(0);
    const [mosque, setMosque] = useState(true);
    const [ fajr, setFajr] = useState('')
    const[dhuhr, setDhuhr] = useState('false')
    const[asr, setAsr] = useState('false')
    const[magrib, setMagrib] = useState('false')
    const[isha, setIsha] = useState('false')
    
    const handleChange = (e) =>{

        console.log(e);

    }

    
    // const addPrayer = (event)
    //     event.preventDefault();
    //   
    //     console.log(user_id, prayer_id,mosque,);
    //     console.log(history);
    //     dispatch({ type: "POST_PRAYER", payload:history})
 const date = new Date().toJSON();
    const addPrayer = (event) => {
        event.preventDefault();
        const history = {
            prayer_id,
            fajr,
            dhuhr,
            asr, 
            magrib,
            isha,
            date
        }
        dispatch({
            type: 'POST_PRAYER',
            payload: history
        });

    }
console.log(fajr);
return (
        <>
        <form onSubmit={addPrayer}>

{/* <label>
    <p>Fajr</p>
    <input  type="checkbox" onChange={handleChange}/>
</label>
<label>
    <p>Dhuhr</p>
    <input  type="checkbox" onChange={handleChange}/>
</label>
<label>
    <p>Asr</p>
    <input  type="checkbox" onChange={handleChange}/>
</label>
<label>
    <p>Magrib</p>
    <input  type="checkbox" onChange={handleChange}/>
</label>
<label>
    <p>Isha</p>
   
</label> */}


    
            
                <select onChange={(event)=>setPrayer_Id(event.target.value)} name="prayers" id="prayer_id">
                <option value="1">Fajr</option>
                <option value="2">Dhuhr</option>
                <option value="3">Asr</option>
                <option value="4">Magrib</option>
                <option value="5">isha</option>
                </select>

                {/* <input name="fajr" onChange={(event)=>setFajr(event.target.value)}/> */}
                {/* <select  onChange={(event)=>setFajr(event.target.value)} name="fajr" id="fajr"></select>
                <select  onChange={(event)=>setDhuhr(event.target.value)} name="Dhuhr" id="dhuhr"></select>
                <select  onChange={(event)=>setAsr(event.target.value)} name="Asr" id="Asr"></select>
                <select  onChange={(event)=>setMagrib(event.target.value)} name="Magrib" id="magrib"></select>
                <select  onChange={(event)=>setIsha(event.target.value)} name="Isha" id="isha"></select> */}

                <label htmlFor="mosque"> Prayed at Mosque
                
                    <input value={mosque} type="checkbox" onClick={()=> setMosque(!mosque)} onChange={(e) => handleChange(e.target.value)}/>
                </label>
                {/* <select onChange={(event)=>setFajr(event.target.value)}  name="fajr" id="">

                    <option value='true'>true</option>
                    <option value='false'>false</option>
                </select> */}

                
            <input type="submit" value={"Add Prayer"}/> 
        </form>
        
        
        
        
        </>
    )




}

export default prayerForm;
