import React from 'react';
import ReactDOM from 'react-dom';
import TasksHeader from './TasksHeader'
import './index.css';
import Tasks from './Tasks'
function App() {
    return (
        <div id='tasks-container'>
            <div className="wrapper">
                <TasksHeader />
                <Tasks />
            </div>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

