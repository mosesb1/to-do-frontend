import Button from './Button';

export default function ListItem({title, completed, changeButtonPressed, id}){
    return <li>{title}
                <Button changeButtonPressed={changeButtonPressed} completed={completed} text={completed ? 'Remove' : 'Completed'} id={id}/>
                <Button text={'Delete'} id={id} changeButtonPressed={changeButtonPressed}/>
            </li>
}