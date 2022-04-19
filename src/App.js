import './App.css';
import Form from './components/Form';
import Lists from './components/Lists';
import {useState} from 'react';

export default function App(){
    const [submitted, setSubmitted] = useState(false);
    const [input, setInput] = useState('');

    return (
        <main>
            <h1>To Do List</h1>
            <h3>New Item</h3>
            <Form submitted={submitted} setSubmitted={setSubmitted} input={input} setInput={setInput}/>
            <Lists submitted={submitted} setInput={setInput}/>
        </main>
    )
}