import { useEffect } from 'react';
import './App.scss'

import List from './components/list/List';
import Form from './components/form/Form';
import Filters from './components/filter/Filters';
import { fetchTodos } from './store/actions/todos';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function App() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTodos());
    }, []);

    const [theme, setTheme] = useState('theme1')

    const toggleTheme = () => {
        setTheme(theme === 'theme1' ? 'theme2' : 'theme1')
    }

    useEffect(() => {
        const backgroundColor = `var(--background-color-${theme})`
        const backgroundColorCard = `var(--background--color-card-${theme})`
        const backgroundColorDone = `var(--background-color-done-${theme})`
        const fontColor = `var(--font-color-${theme})`
        document.body.style.setProperty('--background-color', backgroundColor)
        document.body.style.setProperty('--font-color', fontColor)
        document.body.style.setProperty('--background--color-card', backgroundColorCard)
        document.body.style.setProperty('--background--color-done', backgroundColorDone)
    }, [theme])

    return (
        <>
            <div className="switch">
                <input className="switch__onOff" type="checkbox" onClick={toggleTheme} id="demo" />
                <label htmlFor="demo" className='switch__lable'> </label>
            </div>
            <div className="container">
                <Filters />
                <List />
                <Form />
            </div>
        </>
    );
}

export default App;