import React, {useState} from "react";
import Button from "../Button/Button";
import './SearchBar.css'
import {useDispatch} from "react-redux";
import {searchRecipes} from "../../redux/actions";

export default function SearchBar() {

    const dispatch = useDispatch();

    const [search, setSearch] = useState('');

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searchRecipes(search));
        setSearch('')
    }

    return(
        <div className={'SearchBarContainer'}>
            <form onSubmit={(e) => handleSubmit(e)} className={'SearchBarInputContainer'}>
                <input
                    name={'search'}
                    value={search}
                    onChange={(e)=> handleChange(e)}

                    className={'SearchBarInput'}
                    type={'search'}
                    placeholder={'Keyword'}
                />
                <Button btnType={'submit'} btnName={'Search'} btnStyle={'Search'}/>
            </form>
            <div className={'SearchBarButtonContainer'} >
                <Button btnType={'button'} btnName={'Add A New Recipe +'} btnStyle={'Create'}/>
            </div>
        </div>
    )
}