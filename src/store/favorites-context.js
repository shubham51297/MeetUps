import { createContext,useState } from "react";

const FavoritesContext=createContext({
    favorites: [],
    totalFavorites:0,
    addFavorite: (favMeetupId) =>{},
    removeFavorite: (favMeetupId)=>{},
    itemIsFavorite: (favMeetupId)=>{}
});

export function FavoritesContextProvider(props){
    const [userFavorites,setUserFavorites]=useState([]);
    function addFavoriteHandler(favMeetup){
       setUserFavorites((prevUserFav)=>{
           return prevUserFav.concat(favMeetup);
       }) 
    }
    function removeFavoriteHandler(favMeetupId){
        setUserFavorites((prevUserFav)=>{
            return prevUserFav.filter( meetups => meetups.id!==favMeetupId);
        })
    }
    function itemIsFavoriteHandler(favMeetupId){
        return userFavorites.some( meetup => meetup.id === favMeetupId);
    }
    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };
    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;