import React from 'react';
import './App.css';
import ListItem from './components/listItem';

function App() {
  const subjects:string[] = ["Maths AA", "Maths AI", "Chemistry", "Physics", "Biology"];

  return (
    <div>
      {
        subjects.map((subject, i) =>
          <ListItem subjectTitle={subject}/>
        )
      }
    </div>
  ); 
}

export default App;
