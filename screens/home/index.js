import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDatabase } from '../../database/useDatabse';

export const HomeScreen = function({navigation}) {
    const {getUser} = useDatabase();
    getUser();
    const [userName, setUserName] = useState('');
    useEffect(() => {
        const fetchData = async function(){
            let user = await getUser();
            setUserName(user.firstName + " " + user.lastName);
        }
        fetchData();
    }, [getUser])
    return(
        <View>
            <Text>Hello there {userName}</Text>
        </View>
    )
}