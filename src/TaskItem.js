import React from 'react'
import FlipMove from 'react-flip-move';

function TaskItem(props) {
    var entries = props.items;
    var deleteItem = (key) => {
        props.removeItem(key);
    };
    var updateItem = (item) => {
        props.updateItem(item);
    }
    var listItems = entries.map((item) =>

        <li key={item.id}>
            <p>{item.text}</p>
            <div id='icons'>
                <i class="far fa-edit" onClick={() => { updateItem(item) }} ></i>
                <i class="far fa-trash-alt" onClick={() => { deleteItem(item.key) }}></i>
            </div>
        </li>


    );
    return (
        <div className='taskItem'>
            <ul>
                <FlipMove easing='ease-out'>
                    {listItems}
                </FlipMove>
            </ul>
        </div>
    );

}


export default TaskItem;