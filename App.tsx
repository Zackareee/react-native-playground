import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

class App extends Component {
  state = {
    count: 0,
  };

  onPress = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
    <>

      <View style={styles.container2} >
          <View style={{ flexDirection: 'row', display: 'tableRow' }}>
                <TouchableOpacity style={styles.square}>
                          <Text>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.square}>
                    <Text>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.square}>
                    <Text>1</Text>
                </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', display: 'tableRow' }}>
                <TouchableOpacity style={styles.square}>
                          <Text>Click me</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.square}>
                    <Text>Click me</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.square}>
                    <Text>Click me</Text>
                </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', display: 'tableRow' }}>
                <TouchableOpacity style={styles.square}>
                          <Text>Click me</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.square}>
                    <Text>Click me</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.square}>
                    <Text>Click me</Text>
                </TouchableOpacity>
          </View>
      </View>
    </>
    );
  }
}

//     return
//     <div style="display: flex; flex-wrap: wrap">
//         <div className="board-row">
//             <button onClick={onSquareClick} className="square">0</button>
//             <button onClick={onSquareClick} className="square">1</button>
//             <button onClick={onSquareClick} className="square">2</button>
//         </div>
//         <div className="board-row">
//             <button onClick={onSquareClick} className="square">3</button>
//             <button onClick={onSquareClick} className="square">4</button>
//             <button onClick={onSquareClick} className="square">5</button>
//         </div>
//         <div className="board-row">
//             <button onClick={onSquareClick} className="square">6<button>
//             <button onClick={onSquareClick} className="square">7</button>
//             <button onClick={onSquareClick} className="square">8</button>
//         </div>
//     </div>



const styles = StyleSheet.create({
  container: {

    justifyContent: 'center',
    alignItems: 'center',
  },
   container2: {
    display:'table',
    width:'33%',
    position: 'relative',

  },
  square: {
    borderWidth:1,
    margin:1,
    width:'30%',
    height:'30%',
    aspectRatio: 1,
    backgroundColor:'blue',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#64D9',
    padding: 10,
    marginBottom: 10,
  },
});

export default App;