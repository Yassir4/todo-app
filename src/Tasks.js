import React from 'react'
import TaskItem from './TaskItem'
import update from 'immutability-helper';

class Tasks extends React.Component {
    constructor() {
        super()
        this.newTask = React.createRef()
        this.state = {
            tasks: [{
                text: 'Create a Task',
                key: Date.now()
            }],
            updatetask: [],
            btnText: 'Add',
            btnClick: this.handleSubmit
        }
    }
    addUpdatedItem = (e) => {

        e.preventDefault()
        if (this.newTask.value !== "") {
            var index = this.state.tasks.findIndex(i => i.text === this.state.updatetask[0])

            var updatedItem = {
                text: this.newTask.value,
                key: Date.now()
            }
            this.state.tasks[index] = updatedItem
            this.forceUpdate()
            

            this.setState({
                btnText: 'Add'
            })
            this.setState({
                btnClick: this.handleSubmit
            })
            this.newTask.value = '';
        }
    }
    updateItem = item => {
        this.newTask.value = item.text;
        var prevItem = item.text
        this.setState({
            btnClick: this.addUpdatedItem
        });
        this.setState({
            btnText: 'Update'
        });
        this.setState(prevState => ({
            updatetask: [prevItem]
        }))
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

    removeItem = key => {
        // this.setState({
        //     tasks: this.state.tasks.filter(item => item.key !== key)
        // })
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
                        <button type="submit" onClick={this.state.btnClick}>
                            {this.state.btnText}
                        </button>
                    </div>
                </form>
                <TaskItem items={this.state.tasks} updateItem={this.updateItem}
                    removeItem={this.removeItem} />
            </div>
        )
    }
}

export default Tasks 