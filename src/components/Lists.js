import ListItem from './ListItem';
import {useState, useEffect} from 'react';
import axios from 'axios';

export default function Lists({setInput, submitted}) {
    const [items, setItems] = useState([]);
    const [buttonPressed, setButtonPressed] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get('https://moses-to-do-list.herokuapp.com/items');
                setItems(response.data);
                setInput('');
            } catch (err){
                console.error(err);
            }
        })()
    },[buttonPressed, submitted])

    const getItems = () => {
        const todo = [], complete = [];
        items.forEach((item,idx) => {
            if(item.completed) {
                complete.push(<ListItem key={idx} changeButtonPressed={changeButtonPressed} id={item._id} title={item.title} completed={item.completed}/>)
            } else {
                todo.push(<ListItem key={idx} changeButtonPressed={changeButtonPressed} id={item._id} title={item.title} completed={item.completed}/>)
            }
        })
        return (
            <>
                <h2>To Do:</h2>
                <ul>
                {todo}
                </ul>
                <h2>Completed:</h2>
                <ul>
                {complete}
                </ul>
            </>
        )
    }

    const changeButtonPressed = () => {
        setButtonPressed(!buttonPressed)
    }

    const loaded = () => {
        return getItems();
    }

    const loading = () => {
        return <h1>Loading ...</h1>
    }

    return items ? loaded() : loading();
}