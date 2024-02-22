import React from "react";
import SubjectList from "./subjectList";
import { Paper } from '@mui/material';

type HomePageProps = {
    subjects:string[]
}

function HomePage(props:HomePageProps) {
    return  (
        <Paper>
            <SubjectList subjects={props.subjects}/>
        </Paper>
    )
}

export default HomePage