import { Box, Button, IconButton, Typography, useTheme, useMediaQuery } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import GeographyChart from "../../components/GeographyChart";
import StatBox from "../../components/StatBox"
import ProgressCircle from "../../components/ProgressCircle"
import { Download } from "@mui/icons-material";


const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    // const isMediumScreen = useMediaQuery('(max-width: 991px)');
    // const isSmallScreen = useMediaQuery('(max-width: 767px)');

    // const getGridColumnSpan = () => {
    //     if (isSmallScreen) return 'span 12';
    //     if (isMediumScreen) return 'span 6';
    //     return 'span 3';
    // };

    const isLargeScreen = useMediaQuery('(max-width: 1200px)');
    const isMediumScreen = useMediaQuery('(max-width: 991px)');
    const isSmallScreen = useMediaQuery('(max-width: 767px)');

    let gridColumnTop = 'span 3';
    let gridColumnRevenu= 'span 8';
    let gridColumnTrans= 'span 4';
    let gridColumncam = 'span 4';
    let gridColumnSales= 'span 4';
    let gridColumnTraffic= 'span 4';
    if (isSmallScreen) {
        gridColumnTop = 'span 12';
        gridColumnRevenu = 'span 12';
        gridColumnTrans = 'span 12';
        gridColumncam = 'span 12';
        gridColumnSales= 'span 12';
        gridColumnTraffic= 'span 12';
    } else if (isMediumScreen) {
        gridColumnTop = 'span 6';
        gridColumnRevenu = 'span 12';
        gridColumnTrans = 'span 12';
        gridColumncam = 'span 5';
        gridColumnSales= 'span 7';
        gridColumnTraffic= 'span 12';
    } else if (isLargeScreen) {
        gridColumnRevenu = 'span 12';
        gridColumnTrans = 'span 12';
        // gridColumncam = 'span 4';
        // gridColumnSales= 'span 4';
        // gridColumnTraffic= 'span 4';
    }


    return (
        <Box m="20px" paddingBottom="30px">
            <Box display="flex" justifyContent="space-between" alignItems="center" flexDirection={isSmallScreen ? 'column' : 'row'} paddingBottom="30px">
                <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

                <Box>
                    <Button sx={{ color: colors.grey[100], backgroundColor: colors.blueAccent[700], fontSize: "14px", fontWeight: "bold", padding: "10px 20px" }}>
                        <DownloadOutlinedIcon sx={{ mr: "10px" }} />
                        Download Reports
                    </Button>
                </Box>
            </Box>

            {/* Grid & charts */}
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="140px" gap="15px">
                <Box gridColumn={gridColumnTop} backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
                    <StatBox title="12.361" subtitle="Email Send " progress="0.75" increase="+14%"
                        icon={<EmailIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />} />
                </Box>
                <Box gridColumn={gridColumnTop} backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
                    <StatBox
                        title="54654"
                        subtitle="Sales"
                        increase="+14%"
                        progress="0.7"

                        icon={
                            <PointOfSaleIcon
                                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                            />
                        }
                    />
                </Box>
                <Box gridColumn={gridColumnTop} backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
                    <StatBox title="56434" subtitle="Clients" progress="0.5" increase="+4%"
                        icon={<PersonAddIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />} />
                </Box>
                <Box gridColumn={gridColumnTop} backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
                    <StatBox title="44554" subtitle="Traffic" progress="0.75" increase="+1%"
                        icon={<TrafficIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />
                        }
                    />
                </Box>

                <Box gridColumn={gridColumnRevenu} gridRow="span 2" backgroundColor={colors.primary[400]}>
                    <Box mt="25px" p="0 30px" display="flex" justifyContent="space-between" alignItems="center">
                        <Box>
                            <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>Revenu</Typography>
                            <Typography variant="h3" fontWeight="bold" color={colors.greenAccent[500]}>$653</Typography>
                        </Box>
                        <Box>
                            <IconButton>
                                <DownloadOutlinedIcon sx={{ fontSize: "26px", color: colors.greenAccent[500] }} />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box height="250px" mt="-20px">
                        <LineChart isDashboard={true} />
                    </Box>
                </Box>
                <Box gridColumn={gridColumnTrans} gridRow="span 2" backgroundColor={colors.primary[400]} overflow="auto">
                    <Box display="flex" justifyContent="space-between" alignItems="center" borderBottom={`4px solid ${colors.primary[500]}`} colors={colors.grey[100]} p="15px">
                        <Typography variant="h5" fontWeight="600">Recent Transaction</Typography>
                    </Box>
                    {mockTransactions.map((transaction, i) => (
                        <Box key={`${transaction.txId}-${i}`} display="flex" justifyContent="space-between" alignItems="center" borderBottom={`4px solid ${colors.primary[500]}`} p="15px">
                            <Box>
                                <Typography color={colors.greenAccent[500]} variant="h5" fontWeight="600">{transaction.txId}</Typography>
                                <Typography color={colors.grey[100]}>{transaction.user}</Typography>
                            </Box>
                            <Box color={colors.grey[100]}>
                                {transaction.date}
                            </Box>
                            <Box backgroundColor={colors.greenAccent[500]} p="5px 10px" borderRadius="4px">
                                {transaction.cost}
                            </Box>
                        </Box>
                    ))}
                </Box>

                {/* Charrts */}
                <Box gridColumn={gridColumncam} gridRow="span 2" backgroundColor={colors.primary[400]} p="30px">
                    <Typography variant="h5" fontWeight="600">Campaign</Typography>
                    <Box display="flex" flexDirection="column" alignItems="center" mt="25px">
                        <ProgressCircle size="125" />
                        <Typography variant="h5" color={colors.greenAccent[500]} sx={{ mt: "15px" }}>$656 revenue generated</Typography>
                        <Typography variant="h5" fontWeight="600">All includes</Typography>
                    </Box>
                </Box>

                <Box gridColumn={gridColumnSales} gridRow="span 2" backgroundColor={colors.primary[400]}>
                    <Typography variant="h5" fontWeight="600" sx={{ p: "30px 30px 0 30px" }}>Sales</Typography>
                    <Box height="250px" mt="-20px">
                        <BarChart isDashboard={true} />
                    </Box>
                </Box>

                <Box gridColumn={gridColumnTraffic} gridRow="span 2" backgroundColor={colors.primary[400]} p="30px">
                    <Typography variant="h5" fontWeight="600" sx={{ mb: "15px" }}>Traffic</Typography>
                    <Box height="200px">
                        <GeographyChart isDashboard={true} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Dashboard;