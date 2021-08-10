import classes from './MeetUpItem.module.css' ;
import Card from '../ui/Card';
import FavoritesContext from '../../store/favorites-context';

import { useContext } from 'react';

function MeetUpItem(props){
    const favoritesCtx = useContext(FavoritesContext);
    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

    function toggleFavoritesStatusHandler() {
        if (itemIsFavorite) {
            favoritesCtx.removeFavorite(props.id);
        } else {
            favoritesCtx.addFavorite({
                id: props.id,
                title: props.title,
                address: props.address,
                description: props.description,
                image: props.image
            })
        }
    }

    return (
    <li className={classes.item}>
        <Card>
            <div className={classes.image}>
            <img src={props.image} alt={props.title}></img>
            </div>
            <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button onClick={toggleFavoritesStatusHandler}>{itemIsFavorite ? 'Remove From Favorites' : 'Add to Favorites'}</button>
            </div>
        </Card>
    </li>
    )
}

export default MeetUpItem;