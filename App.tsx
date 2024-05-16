// import React from 'react'
// import { StyleSheet, View, Text } from 'react-native'
//
//
// const styles = StyleSheet.create({
//   container: {
//     position: 'absolute',
//     top: '40%',
//   },
//   dummyText: {
//     color: 'red',
//     fontWeight: 'bold',
//     fontSize: 30,
//     textAlign: 'center'
//   }
// });
//
//
//
//
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.dummyText}>Create your first React Native App</Text>
//     </View>
//   )
// }

import React from 'react';
import {Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
    center: {
        clear: 'both',
        content: '""',
        display: 'table',
    },
    square: {
        color: 'red',
        borderWidth: 5,
        width:'33%',
        height:40,
        justifyContent:'space-evenly',

    },
      row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
      },

})
// {backgroundColor: '#737373', borderWidth: 5, borderColor: 'blue', height:40, margin:10}
type GreetingProps = {
    name: string;
}

const Square = () => {
    return (

        <TouchableOpacity key='1' style={[styles.square]}>
            <Text style={{textAlign: 'center', fontSize:20, fontWeight: 900}}>My button</Text>
        </TouchableOpacity>

    )
}

const Squares = () => {
    return (
        <Button color="red" title="text">
            <Text>My button</Text>
        </Button>
    )
}

const LotsOfGreetings = () => {
    return (
        <View>
            <View style={[styles.center]}>
                <View style={{padding: 10, flex: 1}}>
                    <View style={[styles.row]}>
                        <Square style={{padding: 10,}}/>
                        <Square style={{padding: 10,}}/>
                        <Square style={{padding: 10,}}/>
                    </View>
                </View>
            </View>
        </View>
    );
};




export default LotsOfGreetings