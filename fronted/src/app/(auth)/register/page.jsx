"use client";
import React, { useState } from 'react';
import {
  Box, Button, CssBaseline, RadioGroup, Radio, TextField, FormControl,
  FormControlLabel, IconButton, InputAdornment, Link, Typography, styled, Stack, Grid
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import CustomBreadcrumbs from '../../Components/breadcrumbs.jsx';
import { validateForm } from '@/utils/Validator';
import TickIcon from '../../Components/tickIcon.jsx';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [isRoleSelected, setIsRoleSelected] = useState(false);
  const [message, setMessage] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  

  const handleSubmit = async(e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    setValidationErrors(errors);
    if (Object.keys(errors).length === 0) {
      console.log('Form submitted successfully', formData);
    }

    const reqOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    };

    const req = await fetch('http://127.0.0.1:1337/api/auth/local/register', reqOptions);
    const res = await req.json();

    if (res.error) {
      setMessage(res.error.message);
      return;
    }

    if (res.jwt && res.user) {
      setMessage('Successfull registration.');
    }
  };

  return (
    <GridBox>
      <CssBaseline />
      <CustomBreadcrumbs pageTitle="Register" currentPage="Register" />
      <Grid container justifyContent="center" className='Form'>
        <form onSubmit={handleSubmit}>
          <Grid item xs={12}>
            <FormControl className='Checkboxes'>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value }) }
              >
                <FormControlLabel value="Provider" control={<Radio checkedIcon={<TickIcon />} />} label="Provider" />
                <FormControlLabel value="Customer" control={<Radio checkedIcon={<TickIcon />} />} label="Customer" />
              </RadioGroup>
              {validationErrors.role && (
                <Typography variant="body2" color="error">{validationErrors.role}</Typography>
              )}
            </FormControl>
          </Grid>

          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography className='TypoFirstName'>First Name</Typography>
              <TextField
                autoComplete="given-name"
                placeholder="Enter First Name"
                fullWidth
                margin="normal"
                type="text"
                name="firstName"
                value={formData.firstName}
                error={!!validationErrors.firstName}
                helperText={validationErrors.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className='formInput'
              />
            </Grid>

            <Grid item xs={12}>
              <Typography className='TypoLastName'>Last Name</Typography>
              <TextField
                placeholder="Enter Last Name"
                variant="outlined"
                fullWidth
                margin="normal"
                type="text"
                name="lastName"
                value={formData.lastName}
                error={!!validationErrors.lastName}
                helperText={validationErrors.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className='formInput'
              />
            </Grid>

            <Grid item xs={12}>
              <Typography className='TypoEmail'>Email</Typography>
              <TextField
                placeholder="Enter Email"
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
              <Typography className='TypoPassword'>Password</Typography>
              <TextField
                placeholder="Enter Password"
                fullWidth
                margin="normal"
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                error={!!validationErrors.password}
                helperText={validationErrors.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleTogglePasswordVisibility}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                className='formInput'
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                className='SubmitButton'
                sx={{ mt: 2 }}
              >
                SignUp
              </Button>
            </Grid>
          </Grid>
        </form>

        <Grid item xs={12}>
          <Link className='link' href="/login">
            <Typography className='loginText' variant="body2" sx={{ color: '#74788D', fontSize: 14 }}>
              Don&apos;t have an account? <span style={{ color: '#4c40ed', textDecoration: 'underline', fontWeight: '600', fontSize: 14 }}>Login</span>
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </GridBox>
  );
};

export default RegisterPage;

const GridBox = styled(Grid)`
  .container {
    background-color: #ffffff;
    color: #74788D;
    font-size: 16px;
    margin: 0 auto;
  }

  .Form {
    max-width: 390px;
    margin: 0 auto;
    padding: 15px 16px;
  }
  .formInput .MuiTextField-root {
  height: 50px;
  font-size: 16px;
  color: #74788d;
  background-color: #fff;
  border-radius: 6px;
  border: 1px solid #dfdfdf;
  padding: 0px 16px;
  margin-bottom: 25px;
}

.formInput .MuiInputBase-input {
  padding: 14px 14px; 
}

.formInput .Mui-focused:not(.Mui-error) .MuiOutlinedInput-notchedOutline {
  border-color: #dfdfdf; 
}

.formInput .Mui-focused .MuiOutlinedInput-notchedOutline {
  border-color: #4c40ed;
}

  .Checkboxes {
    padding-top: 30px;
    padding-bottom: 30px;
  }
  


  .SubmitButton {
    background-color: #4c40ed;
    border: solid 1px #4c40ed;
    border-radius: 6px;
    height: 46px;
    color: #fff;
    font-family: Roboto, sans-serif;
    font-size: 16px;
    font-weight: 500;
    display: inline-block;
    margin-top: 16px;
  }

  .SubmitButton:hover {
    background-color: #28283C;
  }

  .link {
    margin-top:30px;
    margin-bottom: 30px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
}
`;
