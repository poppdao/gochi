import {useState} from 'react';
import axios from 'axios';

import './App.css';
import Main from './components/Main';
import Result from './components/Result';

const DEBUG = false
const baseURL = DEBUG ? 'http://localhost:8000' : 'https://near-pigeon-42.deno.dev'

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [scores, setScores] = useState({});
  const [loading, setLoading] = useState(false);

  const onChangeAddress = (e) => {
    console.log(e.target.value, e.target.value.length)
    setSearchTerm(e.target.value);
  }

  const onSubmit = async () => {
    if (searchTerm && (searchTerm.endsWith('eth') || searchTerm.length === 42)) {
      setLoading(true)
      // query address
      try {
        const response = await axios.get(`${baseURL}/score/${searchTerm}`);
        if (response.status === 200) {
          // console.log(response);
          setScores(response.data)
        }
      } catch(e) {
        console.error(e.message)
        setLoading(false)
      }
    } else {
      console.error('invalid address')
      setLoading(false)
    }
  }

  if (scores?.rank) {
    return (
      <Result scores={scores} />
    )
  }

  return (
    <Main onChangeAddress={onChangeAddress} onSubmit={onSubmit} loading={loading} />
  )
}

export default App;
