"use client";
import React, { useState } from "react";
import { signIn } from 'next-auth/react';
import {
  Box,
  Button,
  CssBaseline,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import CustomBreadcrumbs from "../../Components/breadcrumbs.jsx";
import { validateForm } from "@/utils/Validator";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [isEnable, setIsEnable] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsEnable(true);
    const errors = validateForm(formData);
    setValidationErrors(errors);
    if (Object.keys(errors).length === 0) {
      try {
        const res = await signIn('credentials', {
          redirect: false,
          identifier: formData.identifier,
          password: formData.password,
        });

        if (res?.error) {
          if (res.error.includes("email is not confirmed")) {
            toast.error("Your account email is not confirmed. Please check your email to confirm your account.");
          } else {
            toast.error("Invalid credentials or user does not exist");
          }
        } else {
          toast.success("Login successful.");
        }
      } catch (err) {
        toast.error("An error occurred. Please try again.");
      } finally {
        setIsEnable(false);
      }
    } else {
      setIsEnable(false);
    }
  };

  return (
    <GridBox>
      <CssBaseline />
      <CustomBreadcrumbs pageTitle="Login" currentPage="Login" />
      <Grid container justifyContent="center" className="Form">
        <form onSubmit={handleSubmit}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography className="TypoEmail">Email</Typography>
              <TextField
                placeholder="Enter Email"
                variant="outlined"
                fullWidth
                margin="normal"
                type="email"
                name="email"
                value={formData.identifier}
                error={!!validationErrors.identifier}
                helperText={validationErrors.identifier}
                onChange={(e) =>
                  setFormData({ ...formData, identifier: e.target.value })
                }
                className="formInput"
              />
            </Grid>

            <Grid item xs={12}>
              <Typography className="TypoPassword">Password</Typography>
              <TextField
                placeholder="Enter Password"
                fullWidth
                margin="normal"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                error={!!validationErrors.password}
                helperText={validationErrors.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
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
                className="formInput"
              />
            </Grid>

            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "12px",
                marginTop: "25px",
                marginBottom: "10px",
              }}
            >
              <Typography
                style={{
                  fontSize: "12px",
                  color: "#74788D",
                  fontWeight: "400",
                  marginLeft: "10px",
                }}
                variant="h6"
              >
                Must be 6 Characters at Least
              </Typography>
              <Link
                style={{ color: "#4c40ed", marginLeft: "100px" }}
                href="./forgot"
              >
                Forgot password?
              </Link>
            </Box>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={isEnable}
                className="SubmitButton"
              >
                {isEnable ? "Logging in..." : "Login"}
              </Button>
            </Grid>
          </Grid>
        </form>

        <Grid item xs={12}>
          <Link className="link" href="/register">
            <Typography
              className="loginText"
              variant="body2"
              sx={{ color: "#74788D", fontSize: 14 }}
            >
              Don&apos;t have an account?{" "}
              <span
                style={{
                  color: "#4c40ed",
                  textDecoration: "underline",
                  fontWeight: "600",
                  fontSize: 14,
                }}
              >
                Register
              </span>
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
    color: #74788d;
    font-size: 16px;
    margin: 0 auto;
  }

  .Form {
    max-width: 390px;
    margin: 0 auto;
    padding-top: 60px;
    padding-bottom: 60px;
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
    text-transform: none;
  }

  .SubmitButton:hover {
    background-color: #28283c;
  }

  .link {
    margin-top: 30px;
    margin-bottom: 30px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
