import React from "react";
import SubjectList from "./subjectList";
import { Paper } from '@mui/material';
import AppNavBar from "./appNavBar";

function HomePage() {
    return  (
        <Paper>
            <AppNavBar/>
            <SubjectList/>
        </Paper>
    )
}

export default HomePage