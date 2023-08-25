import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ProductCard({ product }) {
  console.log(product);
  return (
    <Card sx={{ maxWidth: 280, maxHeight: 380 }}>
      <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            sx={{ objectFit: "contain" }}
            image={product.images[0]}
            alt="green iguana"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.brand}
          </Typography>
          <Typography>${product.price}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
