import React from "react";
import SubjectList from "./subjectList";
import { Paper, Box } from '@mui/material';
import AppNavBar from "./appNavBar";

function HomePage() {
    return  (
        <Box>
            <AppNavBar/>
            <SubjectList/>
        </Box>
    )
}

export default HomePage