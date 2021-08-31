import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import CategoryItem from '../components/todos/CategoryItem';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import defaultStyles from '../config/styles'
import NewCategoryButton from '../navigation/NewCategoryButton';
import navigationTheme from '../navigation/navigationTheme';

const categories = [
    {
        icon: {
            name: "home",
            backgroundColor: "#fc5c65"
        },
        label: "All", value: 1
    },
    {
        icon: {
            name: "shoe-heel",
            backgroundColor: "#2bcbba"
        },
        label: "Clothing", value: 2
    },
    {
        icon: {
            name: "format-list-bulleted",
            backgroundColor: "#0ab399"
        },
        label: "Projects", value: 3
    },
    {
        icon: {
            name: "camera",
            backgroundColor: "#fed330"
        },
        label: "camera", value: 3
    },
    {
        icon: {
            name: "car",
            backgroundColor: "#fd9644"
        }, label: "Cars", value: 4
    },
    {
        icon: {
            name: "cards",
            backgroundColor: "#26de81"
        }, label: "Routines", value: 5
    },
    {
        icon: {
            name: "basketball",
            backgroundColor: "#45aaf2"
        }, label: "Sports", value: 6
    },
    {
        icon: {
            name: "headphones",
            backgroundColor: "#4b7bec"
        }, label: "Movies & Musics", value: 7
    },
]

const TodoCategoriesScreen = ({ navigation }) => {
    return (
        <Screen style={styles.container}>
            <FlatList
                columnWrapperStyle={{ justifyContent: 'space-evenly', }}
                horizontal={false}
                numColumns={2}
                data={categories}
                keyExtractor={item => item.value.toString()}
                renderItem={({ item }) => (
                    <CategoryItem
                        item=
                        {
                            {
                                title: item.label,
                                subTitle: '23 tasks',
                                icon: { name: item.icon.name, iconColor: item.icon.backgroundColor }
                            }
                        } 
                        onPress={() => navigation.navigate("TodoList", {item:item})} />)}
            />
            <NewCategoryButton onPress={() => navigation.navigate("Todo")} />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginTop:20,
    },
    title: {
        marginBottom: 35,
        paddingLeft: 40,
        fontSize: 28,
        fontWeight: "700",
        color: defaultStyles.colors.dark
    }
})
export default TodoCategoriesScreen;