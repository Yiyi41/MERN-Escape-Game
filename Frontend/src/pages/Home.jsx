import { useState, useEffect } from "react";
import axios from "axios";

// import "../App.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function App() {
  const [roomslist, setRoomslist] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDate = async () => {
      try {
        const response = await axios.get("http://localhost:3000/roomslist");
        // console.log(response.data);
        setRoomslist(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchDate();
  }, []);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="roomslist-container">
      {roomslist.map((room) => (
        <Card sx={{ maxWidth: 345 }} key={room._id}>
          <CardMedia sx={{ height: 140 }} image={room.img} title={room.name} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {room.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {room.description}
            </Typography>
          </CardContent>
          <CardActions>
            {/* <Button size="small">Détail</Button> */}
            <Button size="small">Réserver</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

export default App;
