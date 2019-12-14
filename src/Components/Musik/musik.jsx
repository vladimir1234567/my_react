import React from 'react';
import {addMusikActionCreator, updateMusikActionCreator} from '../../Redux/State';

const MusikItem = (props) => {
    return (
        <div>
            {props.composition}
        </div>
    )
}

const Musik = (props) => {
    let newCompName = props.newCompName;
    

    let MusikItems = props.MusikList.map(musitem =>
        <MusikItem composition={musitem.composition} /> );

    let addMusikName = () => {
        props.dispatch(addMusikActionCreator());
    }

    let updateMusikList = (event) => {
        let text = event.target.value;
        props.dispatch(updateMusikActionCreator(text));
    }



    return (
        <div>
            <div>
                {MusikItems}
            </div>
            <div>
                <textarea placeholder='add your composition' 
                          onChange={updateMusikList}
                          value={newCompName}  />
            </div>
            <div>
                <button onClick={addMusikName}>Send</button>
            </div>
        </div>
    )
}

export default Musik; 