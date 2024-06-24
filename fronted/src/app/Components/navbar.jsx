"use client";
import * as React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { Box, Button, List, ListItem, Typography } from "@mui/material";
import { FaRegUserCircle } from "react-icons/fa";
import { pages } from "@/utils";
import * as IMAGES from "@/utils/IMAGES";

export default function Navbar() {
  return (
    <Nav>
      <Box className="navigation">
        <Box>
          <img
            src={IMAGES.LOGO}
            height="40px"
            width="200px"
            alt="img"
            className="mainlogo"
          />
        </Box>
        <List className="navitems">
          {pages.map((page) => (
            <ListItem key={page} className="navitem-items">
              <Link href="#" underline="none" className="link">
                <Typography variant="body1" className="navitems-name">
                  {page}
                </Typography>
              </Link>
            </ListItem>
          ))}
        </List>

        <Box className="loginandregister">
          <Button className="register" href="register" size="medium">
            Register
          </Button>
          <Button className="login" href="login" variant="contained" size="medium">
            <FaRegUserCircle className="user" />
            Login
          </Button>
        </Box>
      </Box>
    </Nav>
  );
}

const Nav = styled(Box)`
  .navigation {
    display: flex !important;
    align-items: center;
    padding: 5px 0px;
    justify-content: space-around;
    background-color: white;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1001; 
    width: 100%;

    .navitems {
      display: flex;
      margin-left: 25px;
      font-weight: bolder;
    }
    .link :hover {
      color: #4c40ed;
    }
    .link {
      text-decoration: none;
      display: block;
      padding: 10px 0;
      color: #28283c;
    }
    .navitem-items {
      width: auto;
    }
    .navitems-name {
      font-weight: 700;
    }
    .loginandregister {
      display: flex;
    }
    .login {
      background-color: #4c40ed;
      color: white;
      align-items: center;
      font-weight: bolder;
      font-size: 15px;
      padding: 10px;
      text-transform: none;
    }
    .login:hover {
      background-color: #28283c;
    }
    .register {
      color: black;
      align-content: center;
      font-weight: bolder;
      padding: 10px;
      background-color: white;
      padding-right: 20px;
      font-size: 15px;
      text-transform: none;
    }
    .user {
      padding-right: 5px;
      align-items: center;
      font-size: x-large;
    }
  }
`;
