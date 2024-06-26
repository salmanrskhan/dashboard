import { Typography, Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        { field: "id", headerName: "ID" },
        { field: "name", headerName: "Name", flex: 1, cellClassName: "name-columns--cell" },
        { field: "age", headerName: "Age", type: "number", headerAlign: "left", align: "left" },
        { field: "phone", headerName: "Phone", flex: 1 },
        { field: "email", headerName: "Email", flex: 1 },
        {
            field: "access", headerName: "Access Level", flex: 1,
            renderCell: ({ row: { access } }) => {
                return (
                    <Box width="60%" m="0 auto" padding="5px" display="flex" justifyContent="center" borderRadius="4px"
                        backgroundColor={access === "admin" ? colors.greenAccent[600] : colors.greenAccent[700]}>
                        {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
                        {access === "manager" && <SecurityOutlinedIcon />}
                        {access === "user" && <LockOpenOutlinedIcon />}
                        <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>{access}</Typography>
                    </Box>
                )
            }
        },
    ]


    return (
        <Box m="20px">
            <Header title="TEAM" subtitle="Managing the Team" />
            <Box m="40px 0 0" height="75vh"
                sx={{
                    overflowX: 'auto',
                    "&::-webkit-scrollbar": {
                        height: '8px',
                    }
                }}>
                <Box sx={{
                    minWidth: '900px',
                    "& .MuiDataGrid-root": { border: "none" },
                    "& .MuiDataGrid-cell": { borderBottom: "none" },
                    "& .name-column--cell": { color: colors.greenAccent[300] },
                    "& .MuiDataGrid-columHeader": { backgroundColor: colors.blueAccent[700], borderBottom: "none" },
                    "& .MuiDataGrid-virtualScroller": { backgroundColor: colors.primary[400] },
                    "& .MuiDataGrid-footerContainer": { backgroundColor: colors.blueAccent[700], borderTop: "none" },

                }}>
                    <DataGrid rows={mockDataTeam} columns={columns} />
                </Box>
            </Box>
        </Box>)
}

export default Team;