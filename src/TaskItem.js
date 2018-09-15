import React from 'react'

function TaskItem(props) {
    var entries = props.items;
    var deleteItem = (key) => {
       return props.removeItem(key);
    };
    var listItems = entries.map((item) =>
        <li key={item.id} onClick={() => {deleteItem(item.key)}}>
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