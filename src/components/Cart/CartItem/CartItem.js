import Box from "@mui/material/Box";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

const CartItem = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              mx: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <IconButton>
              <AddIcon />
            </IconButton>
            <Typography variant="subtitle2" component="p">
              1
            </Typography>
            <IconButton>
              <RemoveIcon />
            </IconButton>
          </Box>
          <Box sx={{ mx: 1 }}>
            <img
              src="https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg"
              alt=""
              style={{ width: "60px" }}
            />
          </Box>
          <Box sx={{ mx: 1 }}>
            <Typography variant="subtitle2" component="p">
              Xevel 2020
            </Typography>
            <Typography variant="caption" component="p" sx={{ lineHeight: 1 }}>
              $300 &times; 1
            </Typography>
            <Typography variant="subtitle2" component="p" sx={{ mt: 0.75 }}>
              $300
            </Typography>
          </Box>
        </Box>
        <IconButton>
          <CloseRoundedIcon fontSize="small" />
        </IconButton>
      </Box>
      <Divider />
    </>
  );
};

export default CartItem;
