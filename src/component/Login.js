import React, { useEffect ,useState , createContext } from 'react'
// import { createChart } from 'lightweight-charts';    
import axios from "axios";
import Modal from '../component/Modal';

const Login = () => {
  const [activePopup ,setActicePopup] =useState(false)
  // useEffect(() => {
  //   const chart = createChart(document.body, { width: 400, height: 300 });
  //   const lineSeries = chart.addLineSeries();
  // lineSeries.setData([
  //     { time: '2019-04-11', value: 80.01 },
  //     { time: '2019-04-12', value: 96.63 },
  //     { time: '2019-04-13', value: 76.64 },
  //     { time: '2019-04-14', value: 81.89 },
  //     { time: '2019-04-15', value: 74.43 },
  //     { time: '2019-04-16', value: 80.01 },
  //     { time: '2019-04-17', value: 96.63 },
  //     { time: '2019-04-18', value: 76.64 },
  //     { time: '2019-04-19', value: 81.89 },
  //     { time: '2019-04-20', value: 74.43 },
  // ]);
  // }, [])
  const [formValue , setformValue] = useState({
    email : '',
    password : ''
  })

  const Datachange = ((e) => {
    setformValue({...formValue , [e.target.name] : e.target.value})
  }) 

  const [res, setResponse] = useState([])
  // const [error , SetError ] = useState({
  //     emailError : '',
  //     passwordError : ''
  // }

  // )



  // update function
  
  const Dataupdated = (e) => {
    e.preventDefault();
      console.log("this is the form value" , formValue);
      let LocalData = localStorage.getItem('items');
      let LocalDataParse = LocalData ? JSON.parse(LocalData) : [];
      let newData = LocalDataParse;
      newData.push(formValue);
      console.log("123",newData);
      localStorage.setItem('items' ,JSON.stringify(newData));
      setResponse(newData)
  }

  // delte function
  const Deletetd = (selectedIndex) => { 
    let receivedData = res.filter((resdata, index) => index !== selectedIndex);
    localStorage.setItem('items' ,JSON.stringify(receivedData));
    setResponse(receivedData)
    setActicePopup(false)

    
  }

  const EditTable = (selectIndex) => {
    alert(selectIndex);
    let data = res.filter((val , index) => index === selectIndex) 
    if(data){
      setActicePopup(true)
    }

  }
  
  return (
    <div className='container mt-5'>
      <form onSubmit= {e => Dataupdated(e)} style={{marginBottom : "30px"}}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input 
            type="email" 
            className="form-control" 
            id="email"
            value={formValue.email } 
            name="email"
            onChange={e => Datachange(e)}
          /> 
          
          
          
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input 
            type="password" 
            className="form-control" 
            id="password"
            value={formValue.password} 
            name="password"
            onChange={e => Datachange(e)}
          />
        </div>
        <div className="mb-3 form-check">
          <input 
            type="checkbox" 
            className="form-check-input" 
            id="exampleCheck1" 
          />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    <table>
      <tr>
      <th style={{width : "50px"}}>S.No</th>

        <th style={{width : "200px"}}>Email</th>
        <th style={{width : "200px"}}>Password</th>
      </tr>

        {
          res.map((res, index) => (
              <tr key= {index}>
                <td>{index})</td>
                <td >
                  <span className='tabledata'>{res.email}</span> 
                </td>
                <td>
                <span className='tabledata'>{res.password}</span>
                </td>
                <td><button onClick={() => EditTable(index)}>Edit</button></td>
                <td><button onClick={() => Deletetd(index)}>Delete</button></td>

              </tr>
          ))
        }
      
    </table>
    <Modal
        activeProps  = {activePopup}  
    />
      
    </div>
  )
}

export default Login