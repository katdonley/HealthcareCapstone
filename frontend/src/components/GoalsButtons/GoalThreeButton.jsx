import {useState} from 'react';
import "./GoalsButtons.css"



const GoalThreeButton = (props) => {

    const[buttonClass, setButtonClass] = useState('inactive');

    function handleClick(){
        if(buttonClass === 'inactive'){
            setButtonClass('active');
        }
        else {
            setButtonClass('inactive');
        }
    }

        return ( 
            <div>
                <button className={buttonClass} onClick={handleClick}>{props.message}</button>
            </div>
        )

}

export default GoalThreeButton

