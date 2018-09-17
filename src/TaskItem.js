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

        <li key={item.id} onClick={() => { deleteItem(item.key) }}>
            {item.text}
            <i class="far fa-edit" onClick={() => {updateItem(item)}} ></i>
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