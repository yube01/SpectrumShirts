// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import SlideshowOutlinedIcon from "@mui/icons-material/SlideshowOutlined";
// import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
// import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
// import LockResetOutlinedIcon from "@mui/icons-material/LockResetOutlined";

const main = [
  {
    display: "home",
    path: "/",
    icon: "Home outline",
    state: "home"
  },
  {
    display: "movies",
    path: "/movie",
    icon: "Slide show outline",
    state: "movie"
  },
  {
    display: "tv series",
    path: "/tv",
    icon: "Live tv outline",
    state: "tv"
  },
  {
    display: "search",
    path: "/search",
    icon: "Search outline",
    state: "search"
  }
];

const user = [
  {
    display: "favorites",
    path: "/favorites",
    icon: "Fav outline",
    state: "favorite"
  },
  {
    display: "reviews",
    path: "/reviews",
    icon: "Rate outline",
    state: "reviews"
  },
  {
    display: "password update",
    path: "/password-update",
    icon: "Lock outline",
    state: "password.update"
  }
];

const menuConfigs = { main, user };

export default menuConfigs;