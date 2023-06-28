import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  InputAdornment,
  InputLabel,
  Input,
  Avatar,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, register } from "../../../redux/actions/userAction";
import { toast } from "react-toastify";
import ImageResizer from "react-image-file-resizer";
import Cookies from "js-cookie";

import "./user.css";
import ImgIcon from "./ImgIcon";
import GoogleImg from "../../../data/images/google.svg";
import FacebookImg from "../../../data/images/facebook.svg";
import GithubImg from "../../../data/images/Github.svg";
import MicrosoftImg from "../../../data/images/microsoft.svg";
import AppleImg from "../../../data/images/apple.svg";
import Profile from "../../../data/images/profile.png";
import SocialButton from "./ImgIcon";
import Loader from "../../Layout/Loader/Loader";

const HandleSignup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  // All Form Data
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = userData;

  const [avatar, setAvatar] = useState();
  const [avatarPreview, setAvatarPreview] = useState(
    "src/data/images/profile.png"
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, loading, isAuthenticated, user } = useSelector(
    (state) => state.user
  );

  const registerSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", name);
    myForm.set("avatar", avatar);
    dispatch(register(myForm));
  };

  const registerDataChange = async (e) => {
    if (e.target.name === "avatar") {
      // const reader = new FileReader();
      // reader.onload = () => {
      //   if (reader.readyState === 2) {
      //     setAvatarPreview(reader.result);
      //     setAvatar(reader.result);
      //   }
      // };

      // reader.readAsDataURL(e.target.files[0]);

      try {
        ImageResizer.imageFileResizer(
          e.target.files[0],
          200,
          200,
          "JPEG",
          100,
          0,
          (uri) => {
            setAvatar(uri);
            setAvatarPreview(uri);
          },
          "base64",
          400,
          50
        );
      } catch (error) {
        throw new Error(error);
      }
    } else {
      setUserData({ ...userData, [e.target.name]: e.target.value });
    }
  };

  // useEffect Data uses
  useEffect(() => {
    if (error) {
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
    if (user) {
      console.log(user);
      toast.success(`Welcome Back ${typeof user}!`, {
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
      Cookies.set("token", user, { expires: 7 });

      navigate("/account");
    }
  }, [dispatch, error, isAuthenticated, navigate]);

  return (
    <div>
      <div className=" mt-[20px]">
        <h2 className="text-[32px] font-[700] my-[5px] text-center m-auto w-[95%]">
          Create your Account
        </h2>
        <p className="m-auto text-center text-[14px] mb-[10px] text-[#2d333a] w-[316px] leading-[1.5rem]">
          Please note that phone verification is required for signup. Your
          number will only be used to verify your identity for security
          purposes.
        </p>
      </div>
      <form onSubmit={registerSubmit}>
        <TextField
          name="name"
          label="First and Last Name"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          onChange={registerDataChange}
        />
        <TextField
          name="email"
          label="Email or Phone"
          type="email"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          onChange={registerDataChange}
        />
        <TextField
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          variant="outlined"
          margin="normal"
          fullWidth
          required
          onChange={registerDataChange}
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
        <div className="flex justify-between items-center justify-center">
          <Avatar
            alt="Remy Sharp"
            src={avatarPreview}
            style={{ marginLeft: "5px" }}
          />
          <TextField
            style={{ marginTop: "15px", marginBottom: "10px" }}
            size="large"
            name="avatar"
            label="Upload File"
            type="file"
            onChange={registerDataChange}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              style: { height: "38px", width: "250px", textAlign: "right" },
              accept: "image/*", // Specify the accepted file types
            }}
            // onChange={handleFileChange}
          />
        </div>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          onChange={registerDataChange}
          size="large"
          margin="normal"
          style={{ marginTop: "15px" }}
        >
          Continue
        </Button>
        <div className="text-center text-[14px] font-[400] mt-[16px]">
          <p className="">
            Already have an account?
            <Link
              to="/login"
              className="p-[4px] text-blue-700 ml-[5px]"
              aria-label=""
            >
              Log in
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
  );
};

export default HandleSignup;
