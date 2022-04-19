import axios from 'axios';

export default function Form({submitted, setSubmitted, input, setInput}){
    
    const handleChange = (evt) => {
        setInput(evt.target.value);
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const response = await axios.post('https://moses-to-do-list.herokuapp.com/items', {title: input, completed: false});
            if(response.status === 200){
                setSubmitted(!submitted);
            }
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={input} placeholder="new item" onChange={handleChange} />
        </form>
    )
}