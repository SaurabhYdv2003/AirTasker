"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Button, Collapse, Grid, styled, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CollapseSection = () => {
  const [collapseData, setCollapseData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:1337/api/about-us?populate[block][populate]=*');
        setCollapseData(res.data.data.attributes.block);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };
    fetchData();
  }, []);

  const [openSections, setOpenSections] = useState({
    support: false,
    review: false,
    team: false,
    services: false,
    clientSupport: false,
  });

  const handleToggle = (section) => {
    setOpenSections((prevState) => {
      const newState = { ...prevState };
      Object.keys(newState).forEach((key) => {
        if (key !== section) {
          newState[key] = false;
        }
      });
      newState[section] = !prevState[section];
      return newState;
    });
  };

  return (
    <CollapseImg>
      {
        collapseData &&
        collapseData.map((block) =>
          block.__component === "section.collapse" ? (
            <Grid key={block.id} className='collapse' justifyContent='center' container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography style={{ fontWeight: 600, fontSize: '40px', color: '#28283c', margin: '0 0 15px', lineHeight: '1' }} variant='h2'>{block.heading}</Typography>
                <Typography style={{ fontWeight: 600, fontSize: '16px', color: '#74788d', paddingBottom: '25px' }} variant='h6'>{block.description}</Typography>

                {block.button && block.button.map((btn, index) => (
                  <Grid key={index} item xs={12} >
                    <Button className='collapse-button' onClick={() => handleToggle(btn.buttonHeading.toLowerCase().replace(/\s+/g, ''))} endIcon={<ExpandMoreIcon style={{ transform: openSections[btn.buttonHeading.toLowerCase().replace(/\s+/g, '')] ? 'rotate(180deg)' : 'rotate(0)' }} />}>
                      <Typography variant="h6">{btn.buttonHeading}</Typography>
                    </Button>
                    <Collapse in={openSections[btn.buttonHeading.toLowerCase().replace(/\s+/g, '')]}>
                      <Typography style={{ color: '#74788d', fontSize: '16px',marginRight:'20px' }}>
                        {btn.buttonDescription}
                      </Typography>
                    </Collapse>
                  </Grid>
                ))}
              </Grid>

              <Grid className='imgSection' item xs={12} md={6}>
              </Grid>

            </Grid>
          ) : null
        )
      }
    </CollapseImg>
  );
};

export default CollapseSection;

const CollapseImg = styled(Grid)`
  .collapse {
    padding-top: 90px;
    padding-bottom: 90px;
    /* margin-left: 50px; */
    /* margin-right: 50px; */
  }

  .imgSection {
    background: url('http://localhost:1337/uploads/about_01_43a1a6fef3.jpg') no-repeat;
    background-size: cover;
    width: 550px;
    border-radius: 10px;
    max-width: 550px;
    height: 500px;
    margin-top: 20px;
  }

  .collapse-button {
    background: #F4F7FF;
    border-radius: 10px;
    padding: 7px;
    font-weight: 700;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    color: #28283C;
    width: 90%;
    max-width: 90%;
    margin-top: 30px;
    text-transform: none;
  }
`;
