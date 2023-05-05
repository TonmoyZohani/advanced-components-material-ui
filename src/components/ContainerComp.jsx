import React from "react";
import { Container,Typography,Box } from "@mui/material";

const ContainerComp = () => {
  return (
    <Box>
      <Container sx={{ backgroundColor: "#23A3F1 " }} maxWidth="xs">
        <Typography
          variant="h6"
          align="center"
          sx={{ textDecoration: "underline" }}
        >
          Container Extra Small
        </Typography>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
        consectetur nam tenetur, ex, quisquam earum illum modi autem nihil
        eveniet porro voluptatem
      </Container>
      <br></br>
      <Container sx={{ backgroundColor: "green" }} maxWidth="sm">
        <Typography
          variant="h6"
          align="center"
          sx={{ textDecoration: "underline" }}
        >
          Container Small
        </Typography>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
        consectetur nam tenetur, ex, quisquam earum illum modi autem nihil
        eveniet porro voluptatem
      </Container>
      <br></br>
      <Container sx={{ backgroundColor: "tomato" }} maxWidth="md">
        <Typography
          variant="h6"
          align="center"
          sx={{ textDecoration: "underline" }}
        >
          Container Medium
        </Typography>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
        consectetur nam tenetur, ex, quisquam earum illum modi autem nihil
        eveniet porro voluptatemContainer Three
      </Container>
      <br></br>
      <Container sx={{ backgroundColor: "#E23AD3 " }} maxWidth="lg">
        <Typography
          variant="h6"
          align="center"
          sx={{ textDecoration: "underline" }}
        >
          Container Large
        </Typography>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
        consectetur nam tenetur, ex, quisquam earum illum modi autem nihil
        eveniet porro voluptatem
      </Container>
      <br></br>
      <Container sx={{ backgroundColor: "violet" }} maxWidth="xl">
        <Typography
          variant="h6"
          align="center"
          sx={{ textDecoration: "underline" }}
        >
          Container Extra Large
        </Typography>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
        consectetur nam tenetur, ex, quisquam earum illum modi autem nihil
        eveniet porro voluptatem.Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Minus consectetur nam tenetur, ex, quisquam earum
        illum modi autem nihil eveniet porro voluptatem
      </Container>
    </Box>
  );
};

export default ContainerComp;
