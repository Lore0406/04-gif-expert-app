import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState(''); // el inputValue sera un string vacio sino da error

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories(categories => [ inputValue, ...categories]);
            setInputValue('');
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
            <p> Busqueda realizada: {inputValue}</p>
        </form>
    )
}

// definimos las proptypes que hay que pedir en el componente
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
