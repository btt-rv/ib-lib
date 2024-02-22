import React from 'react';
import './App.css';
import SubjectListItem from './components/subjectListItem';
import { Paper } from '@mui/material';
import SubjectList from './components/subjectList';

function App() {
  const subjects:string[] = ["Maths AA", "Maths AI", "Chemistry", "Physics", "Biology"];

  return (
    <div>
      <Paper>
        <SubjectList subjects={subjects}/>
      </Paper>
    </div>
  ); 
}

// {
//   subjects.map((subject, i) =>
//     <ListItem subjectTitle={subject}/>
//   )
// }

export default App;
