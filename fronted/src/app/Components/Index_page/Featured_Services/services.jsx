"use client";
import { Box, Button, Typography } from "@mui/material";
import styled from "styled-components";
import Block from "./serviceblock";
import { serviceBlock } from "@/utils";

export default function Services() {
  return (
    <Service>
      <Box className="container">
        <Box className="main-heading">
          <Typography className="heading">Featured Services</Typography>
          <Typography className="subheading">
            Explore the greates our services. You won &apos;t be disappointed
          </Typography>
        </Box>

        <Box className="card">
          {serviceBlock.map((service, index) => (
            <Block
              key={index}
              category={service.category}
              rating={service.rating}
              imageUrl={service.imageUrl}
              title={service.title}
              location={service.location}
              price={service.price}
            />
          ))}
        </Box>
      </Box>
    </Service>
  );
}

const Service = styled(Box)`
  padding-top: 90px;
  padding-bottom: 90px;
  margin: 0 70px;
  .container {
  }
  .main-heading {
    padding-bottom: 50px;
  }
  .heading {
    font-size: 40px;
    font-weight: 600;
  }
  .subheading {
    margin: 0 0 15px;
    font-weight: 520;
    color: #74788d;
  }
  .card{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
