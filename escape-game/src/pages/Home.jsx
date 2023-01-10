import { useState, useEffect } from "react";
import axios from "axios"
import "./App.css";

function App() {
  const [roomsList, setRoomsList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/roomslist")
        setRoomsList(response.data)
      } catch (error) {
        console.log(error.response)
      }
    }

    fetchData()
  }, [])

  return (<div>Hello World</div>)
}

export default App;
