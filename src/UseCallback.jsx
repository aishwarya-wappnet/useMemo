import React, {useState, useCallback, useMemo} from 'react';
import List from './List';

const UseCallback = () => {
    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);
    // the getItems funciton is being recreated every single time we render our app component
    const getItems = useCallback((incrementor) => {
        return [number+incrementor, number+incrementor+1, number+incrementor+2];
    }, [number]);
    console.log(getItems)
    const theme = {
        backgroundColor: dark ? '#333' : '#FFF',
        color: dark ? '#FFF' : '#333'
    }
    return (
        <>
        <h1>UseCallback</h1>
        <div style={theme}>
            <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
            <button onClick={() => setDark(prevDark => !prevDark )}>Toggle Theme</button>
            <List getItems={getItems}/>
        </div>
        </>
    );
}

export default UseCallback;