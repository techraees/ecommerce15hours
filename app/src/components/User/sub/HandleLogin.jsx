import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login } from "../../../redux/actions/userAction";
import { toast } from "react-toastify";

import ImgIcon from "./ImgIcon";
import GoogleImg from "../../../fdata/images/google.svg";
import FacebookImg from "../../../fdata/images/facebook.svg";
import GithubImg from "../../../fdata/images/Github.svg";
import MicrosoftImg from "../../../fdata/images/microsoft.svg";
import AppleImg from "../../../fdata/images/apple.svg";
import Loader from "../../Layout/Loader/Loader";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  // Form Submission Data and its related

  // Getting Backend Data
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, loading, user, isAuthenticated } = useSelector(
    (state) => state.user
  );
  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(login(loginEmail, loginPassword));
    setLoginEmail("");
    setLoginPassword("");
  };

  useEffect(() => {
    console.log(error, "frontend");
    if (error) {
      console.log(error);
      toast.error(error, {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 3000,
        hideProgressBar: false,
        pauseOnHover: true,
        progress: undefined,
        style: {
          zIndex: 10000000000000, // Custom z-index value
          backgroundColor: "black",
          color: "white",
          width: "80%",
          fontSize: "13px",
          borderRadius: "none",
          fontWeight: "700",
        },
      });
      dispatch(clearErrors());
    }
    if (user && Object.keys(user).length > 0) {
      console.log(user);
      const name = user.name;
      toast.success(`Welcome Back ${name}!`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        hideProgressBar: true,
        pauseOnHover: true,
        progress: undefined,
        style: {
          zIndex: 10000, // Custom z-index value
          backgroundColor: "dodgerGreen",
          borderRadius: "0",
        },
      });
    }
    if (isAuthenticated) {
      navigate("/account");
    }
  }, [dispatch, error, isAuthenticated, navigate]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="">
          <div className=" mt-[20px]">
            <h2 className="text-[32px] font-[700] my-[5px] text-center m-auto w-[95%]">
              Welcome back
            </h2>
          </div>
          <form onSubmit={handleFormSubmit}>
            <TextField
              name="email"
              label="Email or Phone"
              type="email"
              value={loginEmail}
              variant="outlined"
              margin="normal"
              fullWidth
              required
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <TextField
              name="password"
              label="Password"
              value={loginPassword}
              type={showPassword ? "text" : "password"}
              variant="outlined"
              margin="normal"
              fullWidth
              required
              onChange={(e) => setLoginPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button onClick={handleTogglePassword} size="small">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
            <Link
              to="/login"
              className="p-[4px] text-blue-700 mr-[10px] duration-200 text-[14px] float-right hover:text-gray-500"
              aria-label=""
            >
              Forgot Password
            </Link>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              margin="normal"
              style={{
                marginTop: "15px",
                padding: "10px",
                fontWeight: "500",
              }}
            >
              Continue
            </Button>
            <div className="text-center text-[14px] font-[400] mt-[16px]">
              <p className="">
                Don't have an Account
                <Link
                  to="/signup"
                  className="p-[4px] text-blue-700 ml-[5px]"
                  aria-label=""
                >
                  Sign up
                </Link>
              </p>
            </div>
            <div className="relative flex justify-center items-center text-[12px] font-[400] text-[#2d333a] pt-[20px]">
              <span className="absolute bootom-0 left-0 w-[42.5%]  border-solid border-[0.2px] border-[#c2c8d0]"></span>
              <button className="text-center w-[15%]">OR</button>
              <span className="absolute bootom-0 right-0 w-[42.5%] border-solid border-[0.2px] border-[#c2c8d0]"></span>
            </div>

            <div className="mt-[20px] text-center">
              <h3 className="mb-[32px] text-[24px] font-[700] text-[#787878] border-b-[1px] border-b-[#2d333a] inline pb-[7px] border-b-solid">
                Sign-up with Social Icons
              </h3>
              <div className="flex justify-between mt-[24px]">
                <ImgIcon title="Google" img={GoogleImg} />
                <ImgIcon title="Microsoft" img={MicrosoftImg} />
                <ImgIcon title="Apple" img={AppleImg} />
                <ImgIcon title="Github" img={GithubImg} />
                <ImgIcon title="Facebook" img={FacebookImg} />
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
