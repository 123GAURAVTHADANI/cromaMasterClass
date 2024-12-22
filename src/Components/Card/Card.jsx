import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addtoCart } from "../Actions/action";

function CardComponent({ item }) {
  const dispatch = useDispatch();
  //   const selector = useState((state) => state.cart);
  const handleAddToCart = (event, item) => {
    dispatch(addtoCart(item));
  };
  return (
    <Card className="card">
      <CardActionArea>
        <CardMedia
          component="img"
          height="200px"
          image={item.image}
          alt={item.title}
          className="card-img"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {item.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={(event) => handleAddToCart(event, item)}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}
export default CardComponent;
