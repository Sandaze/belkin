import css from "../PokemonCards.module.css";

const Card = (props) => {
    return (
        <div className={css.boxItem}><img src="https://www.prikol.ru/wp-content/gallery/october-2019/prikol-25102019-001.jpg" alt="" className={css.boxItemImg}/>
            <h1 className={css.boxItemName}>Pokemon</h1>
            <p className={css.boxItemSubName}>Artist</p>
        </div>
    );
}
export default Card;