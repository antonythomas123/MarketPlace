import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 280, maxHeight: 380 }} onClick={()=> navigate('/product',{
      state: {
        brand: product.brand,
        category: product.category,
        description: product.description,
        discountPercentage: product.discountPercentage,
        id: product.id,
        images: product.images,
        price: product.price,
        rating: product.rating,
        stock: product.stock,
        title: product.title
      }
    })}>
      <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            sx={{ objectFit: "contain" }}
            image={product.thumbnail}
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
