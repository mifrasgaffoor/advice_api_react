import React,{useState,useEffect} from 'react'
import Card from './components/Card/Card'
import axios from 'axios'
import './App.css'


const App = () => {
const [advice, setAdvice] = useState("")

useEffect(()=>{
  fetchAdvice()
},[])


const fetchAdvice = async()=>{
try {
  const response = await axios.get("https://api.adviceslip.com/advice")
  setAdvice(response.data.slip.advice);
} catch (error) {
  console.log(error);
}

  }
  return (
    <div className="app">
      <Card  handleClick={fetchAdvice}  advice={advice}  />
      
    </div>
  )
}

export default App
