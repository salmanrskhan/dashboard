import { useState } from "react";
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/daygrid';
import dayGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { Box, List, Typography, useTheme, ListItem, ListItemText } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { formatDate } from "@fullcalendar/core";


const Calendar = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentEvents, setCurrentEvents] = useState([false]);

    const handleDateClick = (selected) => {
        const title = prompt("Please enter new title");
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();

        if (title) {
            calendarApi.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay
            });
        }
    };
    const handleEventClick = (selected) => {
        if (window.confirm(`Are you sure to delete event '${selected.event.title}'`)) {
            selected.event.remove();
        }
    }

    return (
        <Box m="20px " sx={{}}>
            <Header title="CALENDAR" subtitle="Full Calendar" />
            <Box display="flex" justifyContent="space-between">
                <Box flex="1 1 20%" backgroundColor={colors.primary[400]} p="15px" borderRadius="4px" >
                    <Typography variant="h5">Events</Typography>
                    <List>{currentEvents.map((event) => (
                        <ListItem key={event.id} sx={{
                            backgroundColor: colors.greenAccent[500],
                            margin: "10px 0",
                            borderRadius: "2px"
                        }}>
                            <ListItemText primary={event.title} secondary={
                                <Typography>
                                    {formatDate(event.start, {
                                        year: "numeric",
                                        month: "short",
                                        day: "numeric"
                                    })}
                                </Typography>
                            } />
                        </ListItem>
                    ))}</List>
                </Box>

                <Box flex="1 1 100%" ml="15px">
                    <FullCalendar height="75vh"
                        plugins={[
                            dayGridPlugin,
                            timeGridPlugin,
                            interactionPlugin,
                            listPlugin
                        ]}
                        headerToolbar= {{
                            left: "prev,next today",
                            center: "title",
                            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
                        }}
                        initialView= "dayGridMonth"
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        select={handleDateClick}
                        eventClick={handleEventClick}
                        eventsSet={(events) => setCurrentEvents(events)}
                        initialEvents={[
                            {id: "1234", title: "All-day event", date: "2023-10-14"},
                            {id: "2345", title: "All event", date: "2023-10-28"},
                        ]}
                    />
                </Box>
            </Box>
        </Box>
    );
}



export default Calendar;