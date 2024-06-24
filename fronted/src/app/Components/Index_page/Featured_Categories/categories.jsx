"use client";
import { Box, Button, Typography } from "@mui/material";
import Block from "./categoryblock";
import styled from "styled-components";
import { categoryImg } from "@/utils";

export default function Categories() {
  return (
    <Category>
      <Box className="container">
        <Box className="main-heading">
          <Typography className="heading">Featured Categories</Typography>
          <Typography className="subheading">
            What do you need to find?
          </Typography>
        </Box>

        <Box className="blocks">
          {categoryImg.map((category, index) => (
            <Block
              key={index}
              imageUrlsvg1={category.imageUrlsvg}
              imageAltsvg1={category.imageAltsvg}
              text={category.heading}
              imageUrl={category.img}
              imageAlt={category.imgalttext}
            />
          ))}
        </Box>

        <Box className="Button">
          <Button variant="contained" className="view-all">
            View All
          </Button>
        </Box>
      </Box>
    </Category>
  );
}

const Category = styled(Box)`
  padding: 90px 0;
  background: url(/assets/feature-bg1.png), url(/assets/feature-bg2.png),
    #f7f7ff;
  background-repeat: no-repeat;
  background-position: left center, right center;

  .container {
    margin: 0 70px;
  }
  .main-heading {
    padding-bottom: 60px;
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
  .blocks {
    display: flex;
    flex-wrap: wrap;
    column-gap: 30px;
    justify-content: space-between;
  }
  .Button {
    text-align: center;
    margin: 10px 0;
  }
  .view-all {
    background-color: #4c40ed;
    color: white;
    padding: 10px;
    font-weight: 600;
  }
  .view-all:hover {
    background-color: #28283c;
  }
`;
