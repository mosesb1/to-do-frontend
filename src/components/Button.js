import axios from 'axios';

export default function Button({completed, id, changeButtonPressed, text}){

    const updateItem = async (status, id) => {
        try{
            const response = await axios.put(`https://moses-to-do-list.herokuapp.com/items/${id}`, {completed: status});
            if(response.status === 200){
                changeButtonPressed();
            } else {
                console.log('something is wrong')
            }
        } catch (err) {
            console.error(err)
        }
    }
    
    const handleClick = (evt) => {
        if(completed){
            updateItem(false, id);
        } else {
            updateItem(true,id);
        }
    }

    const handleDelete = async (evt) => {
        try {
            const response = await axios.delete(`https://moses-to-do-list.herokuapp.com/items/${id}`);
            if(response.status === 200){
                changeButtonPressed();
            } else {
                console.log('something is wrong')
            }
        } catch (error) {
            console.error(error);
        }
    }

    return <button onClick={(text !== 'Delete') ? handleClick : handleDelete}>{text}</button>
}