import React from 'react'


class TasksHeader extends React.Component {
    constructor() {
        super();

        var event = new Date();
        var day = { day: 'numeric' };
        var month = { month: 'long' };
        var weekday = { weekday: 'long' };

        day = event.toLocaleDateString('en-US', day);
        month = event.toLocaleDateString('en-US', month);
        weekday = event.toLocaleDateString('en-US', weekday);


        this.state = {
            day: day,
            month: month,
            weekday: weekday,
        };
    }

    render() {
        return (
            <div id='tasksHeader'>
                {/* <img src={background} width="200" height="100"/> */}
                <p id='day'>{this.state.day}</p>
                <p id='month'>{this.state.month}</p>
                <p id='weekday'>{this.state.weekday}</p>
            </div>
        )
    }
}


export default TasksHeader ;