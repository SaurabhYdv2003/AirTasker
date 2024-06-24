"use client"
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { Box, Button, Typography, TextField, styled, Grid, CssBaseline, Link, TextareaAutosize } from '@mui/material';
import CustomBreadcrumbs from '../../Components/breadcrumbs';
import { validateForm } from '@/utils/Validator';
import Map from '@/app/Components/Map';

const ContactPage = (pageProps) => {
  const [formData, setFormData] = useState({
    Name: '',
    email: '',
    phoneNo: '',
    message: ''
  });

  const [validationErrors, setValidationErrors] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    setValidationErrors(errors);
    if (Object.keys(errors).length === 0) {
      console.log('Form submitted successfully', formData);
    }
  };

  return (
    <>
    <MainBox>
      <CssBaseline />
      <CustomBreadcrumbs pageTitle="Contact Us" currentPage="Contact Us" />

     <Box className='mainComponents'>

     <Grid className='contactCardParent' container spacing={2} justifyContent="center">
        <Grid className='contactCard' >
          <Box className="parentBox">
            <Box className='iconTagcard'>
              <Image
                src="/assets/phone-icon.svg"
                alt="Phone icon"
                width={40}
                height={40}
              />
            </Box>
            <Box className="contactBox">
              <Typography className='contactType' variant='h6'>Phone </Typography>
              <Typography className='contactInfo'>
                <Link style={{ textDecoration: 'none', color: '#74788d', fontWeight: '400' }} href='#'>(888) 888-8888</Link>
                <Link style={{ textDecoration: 'none', color: '#74788d', fontWeight: '400' }} href="#"> (123) 456-7890</Link>
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid className='contactCard' >
          <Box className="parentBox">
            <Box className='iconTagcard'>
              <Image
                src="/assets/email-icon.svg"
                alt="Phone icon"
                width={40}
                height={40}
              />
            </Box>
            <Box className="contactBox">
              <Typography className='contactType' variant='h6'>Email Address</Typography>
              <Typography className='contactInfo'>
                <Link style={{ textDecoration: 'none', color: '#74788d', fontWeight: '400' }} href='#'>truelysell@example.com</Link>
                <Link style={{ textDecoration: 'none', color: '#74788d', fontWeight: '400' }} href="#">johnsmith@example.com</Link>
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid className='contactCard' >
          <Box className="parentBox">
            <Box className='iconTagcard'>
              <Image
                src="/assets/location-icon.svg"
                alt="Phone icon"
                width={40}
                height={40}
              />
            </Box>
            <Box className="contactBox">
              <Typography className='contactType' variant='h6'>Address</Typography>
              <Typography className='contactInfo'>
                <Link style={{ textDecoration: 'none', color: '#74788d', fontWeight: '400' }} href='#'>367 Hillcrest Lane, Irvine,</Link>
                <Link style={{ textDecoration: 'none', color: '#74788d', fontWeight: '400' }} href="#">California, United States</Link>
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Grid className='img-Content' container spacing={2} justifyContent="center">
        <Grid className='GetinImg' item xs={12} md={6}>
          <Image
            className='img'
            src='/assets/contact-us.png'
            alt='getInTouchimg'
            width={300}
            height={300}
            style={{ width: '90%',height: 'auto', objectFit: 'cover' }}
          />
        </Grid>

        <Grid className='getinTouchForm' item xs={12} md={6}>
          <Box>
            <Typography style={{ fontSize: '40px', color: '#212529', fontWeight: '600' }} variant='h2'> Get In Touch</Typography>
            <Typography style={{ fontSize: '16px', color: '#74788D', fontWeight: '600' }}>Aliquam lorem ante, dapibus in, viverra quis</Typography>
          </Box>

          <Grid container justifyContent="center" className='Form' sx={{ mt: '40px' }}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography className='TypoFirstName'>Name</Typography>
                  <TextField
                    autoComplete="given-name"
                    placeholder="Enter Your FullName"
                    fullWidth
                    margin="normal"
                    type="text"
                    name="Name"
                    value={formData.Name}
                    error={!!validationErrors.Name}
                    helperText={validationErrors.Name}
                    onChange={(e) => setFormData({ ...formData, Name: e.target.value })}
                    className='formInput'
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Typography className='TypoEmail'>Email</Typography>
                  <TextField
                    placeholder="Enter your Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    type="email"
                    name="email"
                    value={formData.email}
                    error={!!validationErrors.email}
                    helperText={validationErrors.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className='formInput'
                  />
                </Grid>

                <Grid item xs={12}>
                  <Typography className='TypoLastName'>PhoneNo</Typography>
                  <TextField
                    placeholder="Enter your PhoneNo"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    type="text"
                    name="PhoneNo"
                    value={formData.phoneNo}
                    error={!!validationErrors.phoneNo}
                    helperText={validationErrors.phoneNo}
                    onChange={(e) => setFormData({ ...formData, phoneNo: e.target.value })}
                    className='formInput'
                  />
                </Grid>

                <Grid item xs={12}>
                  <Typography className='TypoLastName'>Message</Typography>
                  <TextareaAutosize
                    aria-label="message"
                    minRows={3}
                    
                    placeholder="Enter your message"
                    style={{ width: '100%', padding: '16.5px 14px', fontSize: '16px', borderRadius: '4px', borderColor: '#c4c4c4' }}
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className='formInputT'
                  />
                  {validationErrors.message && <Typography color="error">{validationErrors.message}</Typography>}
                </Grid>

                <Grid item xs={12} sm={4}>
                  <Button
                    type="submit"
                    variant="contained"e
                    color="primary"
                    fullWidth
                    className='SubmitButton'
                    sx={{ mt: 2 }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>

      </Grid>
     </Box>
    </MainBox>
    <Map />
    </>
  );
};

export default ContactPage;

const MainBox = styled(Grid)`

.mainComponents{
  padding-top:60px;
  padding-left:80px;
  padding-right:80px;

}
@media (max-width: 600px) {
    .mainComponents {
        padding: 10px;
        display:inline-block;
        justify-content:center;
    }}
  .contactCardParent {
    max-width: 100%;
    / margin: 0 auto; /
  }

  .contactCard {
    background-color: #fff;
    border: 2px solid #F5F5F5;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
     margin-bottom: 24px;
    / padding:15px; /
    overflow: hidden;
    transition: all .3s ease 0s; 
    width: 360px;
    margin:15px;
  
  }
  
  .contactInfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    
    
  }

  .contactType {
    /* display: flex;
    text-align: center;
    justify-content: center;
    align-items: center; */
    font-weight: 600;
    font-size: 20px;
    color: #28283c;
    margin: 0 0 10px;
  }

  .parentBox {
    display: flex;
    justify-content: space-around;
    padding: 5px;
    / margin-bottom:10px; /
  }

  .iconTagcard {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #f7f7ff;
    margin-right: 16px;
   
  }

  .img-Content {
   padding-top:80px;
   padding-bottom:80PX;
  }

  .formInput .MuiTextField-root {
    height: 45px;
    line-height: 50px;
    font-size: 16px;
    color: #74788d;
    background: #fff;
    border-radius: 6px;
    border: 1px solid #dfdfdf;
    outline: none;
    max-width:90%;
  }

  .formInput .MuiInputBase-input {
    padding: 14px 16px;
  }
  .formInputT{
    resize:none;
  }
  
  .SubmitButton {
    text-align: center;
    padding: 0px 15px;
    background-color: #4c40ed;
    border: solid 1px #4c40ed;
    border-radius: 6px;
    height: 46px;
    line-height: 46px;
    color: #fff;
    outline: none;
    font-size: 16px;
    font-weight: 500;
    display: inline-block;
    text-transform: none;
  }
`;