import { useEffect, useLayoutEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { MEALS, CATEGORIES } from '../data/dummy-data';
// import { useRoute } from '@react-navigation/native'; // alternative can be used for using route prop in 
// // nested component which is not registered as screen
// import MealItem from '../components/MealItem';
import MealsList from '../components/MealsList/MealsList';

function MealsOverviewScreen({ route, navigation }) {
    // const route = useRoute();
    // const cattId= route.params.categoryId;
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    function mealItemPressHandler({id}) { // this function is made to use in MealItem onPress prop if we want to navigate through the use of this screen
        navigation.navigate('MealDetail', {
            mealId: id
        });
    }

    // useEffect(() => {
    // Do work same as useEffect, but is helpful in cases where you want your effect to render or invoke before the component function in rendered
    useLayoutEffect(() => { // can use this hook instead of useEffect for smooth transition when navigating
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;
    
        navigation.setOptions({
            title: categoryTitle,
        });
    }, [ catId, navigation]);

    return <MealsList items={displayedMeals}/>    
}

export default MealsOverviewScreen;

