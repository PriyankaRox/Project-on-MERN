import React ,{useState , useEffect} from 'react';
import axios from 'axios';

import ShowItems from './components/showItems';
import AddItem from './components/addItem';


function App() {
  
  const [data, setdata] = useState([])
  

  const addSuccessfulData = (newdata) => {
    setdata([...data,newdata])
  }

  const loadData = async() =>{ 
    try{
      const apiData = await axios.get('http://localhost:8000/test/check')
      console.log(apiData)
      if(apiData.status === 200) {
        setdata(apiData.data.data)
      }
    }
    catch(e){
      console.log(e)
    }
  }

  useEffect(()=>{
    loadData()
  },[] )

  return (
    <div className="App">
      <div style={{margin:10 , padding:10 , border: '1px solid grey'}}>
        <AddItem adddata ={addSuccessfulData}/>
      </div>
      <div style={{margin:10 , padding:10 , border: '1px solid grey'}}>
        <ShowItems data={data}/>
      </div>
     
      
    </div>
  );
}

export default App;
