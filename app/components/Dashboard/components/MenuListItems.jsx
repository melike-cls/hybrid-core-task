 "use client"
import DashboardIcon from "@mui/icons-material/Dashboard";
import StoreIcon from "@mui/icons-material/Store";
import StarsIcon from "@mui/icons-material/Stars";
import InventoryIcon from "@mui/icons-material/Inventory";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography, 
} from "@mui/material";
import Link from "next/link"; 

const icons = [
  {
    icon: <DashboardIcon />,
    title: "Components",
    url: "/admin",
  },
  {
    title: "Document Upload",
    icon: <StoreIcon />,
    url: "/documentUpload",
  },
  {
    title: "Text Input",
    icon: <StoreIcon />,
    url: "/textInput",
  },
  {
    title: "Photo Upload",
    icon: <StarsIcon />,
    url: "/photoUpload",
  },
  {
    title: "Video Upload",
    icon: <InventoryIcon />,
    url: "/videoUpload",
  },
];

const iconStyle = {
  color: "#eee",
  "& .MuiSvgIcon-root": { color: "#eee" },
  "&:hover": { color: "red" },
  "&:hover .MuiSvgIcon-root": { color: "red" },
};

const MenuListItems = () => {
  return (
    <div>
      <List>
        {icons?.map((item, index) => (
          <ListItem key={index} disablePadding>
            <Link href={item.url} passHref>
              <ListItemButton sx={iconStyle}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                
                <ListItemText>
                  <Typography noWrap sx={{ textDecoration: "none" }}>
                    {item.title}
                  </Typography>
                </ListItemText>
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default MenuListItems;
