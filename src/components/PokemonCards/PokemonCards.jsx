import Navbar from "../Navbar/Navbar";
import css from './PokemonCards.module.css';
import Card from "./Card/Card";
import React, {useState, useEffect} from 'react';
import {authApi} from "../../api/api";

const PokemonCards = (props) => {
    const [pokemons, setPokemons] = useState('');
    // authApi.getPortionCards().then(response => {
    //     console.log(response);
    // });
    return (
        <>
            <Navbar />
            <div className={css.wrapper}>
                <div className={css.sidebar}>
                    <div className={css.sidebarBx}>
                        <select name="" id="">
                            <option value="Первое">Первое</option>
                            <option value="Второе">Второе</option>
                        </select>
                    </div>
                    <div className={css.sidebarBx}>
                        <select name="" id="">
                            <option value="Первое">Первое</option>
                            <option value="Второе">Второе</option>
                        </select>
                    </div>
                </div>
                <div className={css.boxCards}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </>
    );
}
export default PokemonCards;