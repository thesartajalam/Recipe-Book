import { createContext, useState } from "react";

export const FavouritesContext = createContext({
  ids: [],
  addFavourite: (id) => {},
  removeFavourite: (id) => {},
});

function FavouritesContextProvider({ children }) {
  const [favouriteMealIds, setFavouriteMealIds] = useState([]);

  function addFavourite(id) {
    setFavouriteMealIds((currentFavIds) => [...currentFavIds, id]);
  }

  function removeFavourite(id) {
    setFavouriteMealIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );
  }

  const value = {
    ids: favouriteMealIds,
    addFavourite: addFavourite,
    removeFavourite: removeFavourite,
  };

  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesContextProvider;




// This can also be done

// Alternate method of Example using Context
// import { createContext, useState } from "react";

// export const FavouritesContext = createContext();

// export function useFavourites() {
//     const [favouriteMealIds, setFavouriteMealIds] = useState([]);

//     function addFavourite(id) {
//         setFavouriteMealIds((currentFavIds) => [...currentFavIds, id]);
//     }

//     function removeFavourite(id) {
//         setFavouriteMealIds((currentFavIds) =>
//             currentFavIds.filter((mealId) => mealId !== id)
//         );
//     }

//     return {
//         ids: favouriteMealIds,
//         addFavourite,
//         removeFavourite,
//     };
// }

// Using Alternate method
// import React from "react";
// import { FavouritesContext, useFavourites } from "./path-to-context-file";

// function App() {
//     const favouriteMeals = useFavourites();

//     return (
//         <FavouritesContext.Provider value={favouriteMeals}>
//             {/* Your app components here */}
//         </FavouritesContext.Provider>
//     );
// }
