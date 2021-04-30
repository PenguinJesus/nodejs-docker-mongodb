import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from 'react-bootstrap';
import { useState } from 'react';




function App() {
  const [data1,setData1] = useState('');
  const [data2,setData2] = useState('');

  const container1 = 'http://localhost:8080/data';
  
  const container1Event = () => {
    axios.get(container1)
    .then(resp => {
      console.log(resp);
      setData1(resp.data.body);
    })
    .catch(err=>console.log(err))
  }



  return (
    <div className="App">
      <Container>
        <div>
          <div>
            <Button variant='primary' onClick={container1Event}>Container 1</Button> {' '}
          </div>
        </div>
        <div>
          <div>
            {data1}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
