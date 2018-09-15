import React from 'react'

function TaskItem(props) {
    var entries = props.items;
    var listItems = entries.map((item) =>
        <li key={item.id}>
            {item.text}
        </li>
    );
    return (
        <div className='taskItem'>
            <ul>
                {listItems}
            </ul>
        </div>
    );

}


export default TaskItem;