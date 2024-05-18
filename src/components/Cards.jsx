import { Box, CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function ActionAreaCard() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px", gap: "30px" }}>
      <Card sx={{ maxWidth: 345, padding: "50px", height: "465px" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="auto"
            sx={{ borderRadius: "5%" }}
            image="/src/assets/IMAGE (9).jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              House cleaning
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345, padding: "50px", height: "465px" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="auto"
            sx={{ borderRadius: "5%" }}
            image="/src/assets/IMAGE (10).jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Office cleaning
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345, padding: "50px", height: "465px" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="auto"
            sx={{ borderRadius: "5%" }}
            image="/src/assets/IMAGE (11).jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Industrial cleaning
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
