import React from 'react'
import { StyleSheet, Text } from 'react-native'
import CategoryItem from '../components/CategoryItem';
import Screen from '../components/Screen';
import defaultStyles from '../config/styles'

const TodoListScreen = () => {
    return (
        <Screen style={styles.container}>
            <CategoryItem
                item={
                    {
                        title: 'All',
                        subTitle: '23 tasks',
                        icon: { name: 'home', iconColor: defaultStyles.colors.secondary }
                    }
                } onPress={() => console.log('test')} />
            <CategoryItem
                item={
                    {
                        title: 'All',
                        subTitle: '23 tasks',
                        icon: { name: 'home', iconColor: defaultStyles.colors.secondary }
                    }
                } onPress={() => console.log('test')} />
            <CategoryItem
                item={
                    {
                        title: 'All',
                        subTitle: '23 tasks',
                        icon: { name: 'home', iconColor: defaultStyles.colors.secondary }
                    }
                } onPress={() => console.log('test')} />
            <CategoryItem
                item={
                    {
                        title: 'All',
                        subTitle: '23 tasks',
                        icon: { name: 'home', iconColor: defaultStyles.colors.secondary }
                    }
                } onPress={() => console.log('test')} />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {}
})
export default TodoListScreen;