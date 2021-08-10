import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetUpList from "../components/meetups/MeetUpList";

function FavoritesPage(){
    const favoritesCtx = useContext(FavoritesContext);

    let content;

    if (favoritesCtx.totalFavorites === 0) {
        content = <p>You don't have any favorites added at the moment.</p>
    } else {
        content = <MeetUpList meetups={favoritesCtx.favorites}/>;
    }


    return (<section>
        <h1>My Favorites</h1>
        {content}
    </section>)

}

export default FavoritesPage;