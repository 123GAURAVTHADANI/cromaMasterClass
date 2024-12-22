import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
function Header() {
  const cartValue = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const openCartComponent = () => {
    navigate("/cart");
  };
  return (
    <header>
      <img
        src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1637759004/Croma%20Assets/CMS/Category%20icon/Final%20icon/Croma_Logo_acrkvn.svg"
        alt="logo"
      />
      <input type="text" placeholder="What are you looking for?" />
      <div className="flex gap-10">
        <span className="flex">
          <LocationOnIcon />
          Mumbai, 450001
        </span>
        <span>
          <PersonIcon />
        </span>
        <span id="icon">
          <IconButton color="primary" onClick={openCartComponent} color="white">
            <ShoppingCartIcon />
          </IconButton>
          <span id="counter">{cartValue.length}</span>
        </span>
      </div>
    </header>
  );
}
export default Header;
