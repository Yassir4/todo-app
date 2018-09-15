import React from 'react'
import TaskItem from './TaskItem'

class Tasks extends React.Component {
    constructor() {
        super()
        this.newTask = React.createRef()
        this.state = {
            tasks: [{
                text: 'Create a Task',
                key: Date.now()
            }]
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        if (this.newTask.value !== "") {
            var newTask = {
                text: this.newTask.value,
                key: Date.now(),
            }
            this.setState((state) => ({
                tasks: [...state.tasks, newTask]
            }))
            this.newTask.value = '';
        }
    }

    removeItem = key =>{
        this.setState({
            tasks: this.state.tasks.filter(item => item.key !== key )
        })
    }
    
    render() {
        return (
            <div className='tasksBoby'>
                <h4>Your Tasks</h4>
                <form>
                    <div className="container">
                        <input className="input-task" type='text'
                            ref={input => { this.newTask = input }}
                            placeholder="Enter your task" />
                        <button type="submit" onClick={this.handleSubmit}>Add</button>
                    </div>
                </form>
                <TaskItem items={this.state.tasks} removeItem={this.removeItem}/>
            </div>
        )
    }
}

export default Tasks 