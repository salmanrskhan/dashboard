import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
// import 'react-pro-sidebar/dist/css/styles.css';  // Not Found
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme, useMediaQuery } from "@mui/material";
import { Link } from 'react-router-dom';
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import avtar from '../../assets/img/mf-avatar.svg'
import CloseIcon from '@mui/icons-material/Close';

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (<MenuItem active={selected === title} style={{ color: colors.grey[100] }} onClick={() => setSelected(title)} icon={icon}>
        <Typography>{title}</Typography>
        <Link to={to} />
    </MenuItem>)
}


const Sidebar = ({ isSidebarVisible, isSmallScreen }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");
    const [closeSideBar, setCloseSideBar] = useState(false);

    return (
        <Box sx={{
            "& .pro-sidebar-inner": {
                background: `${colors.primary[400]} !important`
            },
            "& .pro-icon-wrapper": {
                backgroundColor: "transparent !important"
            },
            "& .pro-inner-item": {
                padding: "5px 35px 5px 20px !important"
            },
            "& .pro-menu-item.active": {
                color: "#6870fa !important"
            },
            // display: isSidebarVisible || closeSideBar ? 'block' : 'none',
            display: closeSideBar ? 'none' : (isSidebarVisible ? 'block' : 'none'),
            // display: closeSideBar || !isSidebarVisible ? 'none' : 'block',
            position: isSmallScreen ? 'absolute' : 'relative',
            top: isSmallScreen ? 0 : 'initial',
            left: isSmallScreen ? 0 : 'initial',
            zIndex: 1000,
        }}>


            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    <MenuItem onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{ margin: "10px 0 20px 0", color: colors.grey[100] }}
                    >
                        {!isCollapsed && (
                            <Box display="flex" justifyContent="space-between" alignItems="center" ml="15px">
                                <Typography variant="h3" color={colors.grey[100]}>ADMINS</Typography>
                                {isSmallScreen ? <IconButton onClick={() => setCloseSideBar(!closeSideBar) }>
                                    <CloseIcon />
                                </IconButton> :
                                    <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                        <MenuOutlinedIcon />
                                    </IconButton>}
                            </Box>
                        )}
                    </MenuItem>
                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <img width="100px" height="100px"
                                    // src={`../../assets/user.png`}
                                    src={avtar}
                                    style={{ cursor: "pointer", borderRadius: "50%" }}
                                />
                            </Box>
                            <Box textAlign="center">
                                <Typography variant="h2" color={colors.grey[100]} fontWeight="Bold" sx={{ m: "10px 0 0" }}>ABC</Typography>
                                <Typography variant="h5" color={colors.grey[100]}>Admin</Typography>
                            </Box>
                        </Box>
                    )}

                    {/* Menu items */}
                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                        <Item title="Dashboard" to="/" icon={<HomeOutlinedIcon />} selected={selected} setSelected={setSelected} />
                        <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}>Data</Typography>

                        <Item title="Manage Team" to="/team" icon={<PeopleOutlinedIcon />} selected={selected} setSelected={setSelected} />
                        <Item title="Contacts Information" to="/contacts" icon={<ContactsOutlinedIcon />} selected={selected} setSelected={setSelected} />
                        <Item title="Invoices Balance" to="/invoices" icon={<ReceiptOutlinedIcon />} selected={selected} setSelected={setSelected} />
                        <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}>Pages</Typography>

                        <Item title="Profile From" to="/form" icon={<PersonOutlinedIcon />} selected={selected} setSelected={setSelected} />
                        <Item title="Calendar" to="/calendar" icon={<CalendarTodayOutlinedIcon />} selected={selected} setSelected={setSelected} />
                        <Item title="FAQ Page" to="/faq" icon={<HelpOutlinedIcon />} selected={selected} setSelected={setSelected} />
                        <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}>Chats</Typography>

                        <Item title="Bar Chart" to="/bar" icon={<BarChartOutlinedIcon />} selected={selected} setSelected={setSelected} />
                        <Item title="Pie Chart" to="/pie" icon={<PieChartOutlinedIcon />} selected={selected} setSelected={setSelected} />
                        <Item title="Line Chart" to="/line" icon={<TimelineOutlinedIcon />} selected={selected} setSelected={setSelected} />
                        <Item title="Geogrpahy Chart" to="/geography" icon={<MapOutlinedIcon />} selected={selected} setSelected={setSelected} />

                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
}

export default Sidebar;