import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";


const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (<Box m="20px">
        <Header title="FAQ" subtitle="FAQ Page" />
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={< ExpandMoreIcon />}>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                    An Important Qusetion
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ab blanditiis, ad maiores labore, ducimus vel aut repellat exercitationem, impedit debitis. Veniam, omnis accusamus. Quam sit eos esse minima laudantium.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary expandIcon={< ExpandMoreIcon />}>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                    2An Important Qusetion
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ab blanditiis, ad maiores labore, ducimus vel aut repellat exercitationem, impedit debitis. Veniam, omnis accusamus. Quam sit eos esse minima laudantium.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary expandIcon={< ExpandMoreIcon />}>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                   3 An Important Qusetion
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ab blanditiis, ad maiores labore, ducimus vel aut repellat exercitationem, impedit debitis. Veniam, omnis accusamus. Quam sit eos esse minima laudantium.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary expandIcon={< ExpandMoreIcon />}>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                   4 An Important Qusetion
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ab blanditiis, ad maiores labore, ducimus vel aut repellat exercitationem, impedit debitis. Veniam, omnis accusamus. Quam sit eos esse minima laudantium.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary expandIcon={< ExpandMoreIcon />}>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                   5 An Important Qusetion
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ab blanditiis, ad maiores labore, ducimus vel aut repellat exercitationem, impedit debitis. Veniam, omnis accusamus. Quam sit eos esse minima laudantium.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary expandIcon={< ExpandMoreIcon />}>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                   6 An Important Qusetion
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ab blanditiis, ad maiores labore, ducimus vel aut repellat exercitationem, impedit debitis. Veniam, omnis accusamus. Quam sit eos esse minima laudantium.
                </Typography>
            </AccordionDetails>
        </Accordion>
    </Box>);
}

export default FAQ;