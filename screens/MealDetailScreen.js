import { useContext, useLayoutEffect } from "react";
import { Text, View, Image, StyleSheet, ScrollView, Button } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/Meal Detail/Subtitle";
import List from "../components/Meal Detail/List";
import IconButton from "../components/IconButton";
import { FavouritesContext } from "../store/context/favourites-context";

function MealDetailScreen({ route, navigation }) {
    const favouriteMealsContext = useContext(FavouritesContext);

    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    const mealIsFavourite = favouriteMealsContext.ids.includes(mealId);

    function changeFavouritesStatusHandler() {
        if(mealIsFavourite){
            favouriteMealsContext.removeFavourite(mealId);
        }
        else{
            favouriteMealsContext.addFavourite(mealId);
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon={mealIsFavourite ? "star" : "star-outline"} color='white' onPress={changeFavouritesStatusHandler}>Tap Me</IconButton>
            }
        });
    }, [navigation, changeFavouritesStatusHandler]);

    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <Subtitle>Steps to make the meal</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: "center",
        color: 'white'
    },
    detailText: {
        color: 'white'
    },
    listOuterContainer: {
        alignItems: "center"
    },
    listContainer: {
        width: '80%'
    }
});