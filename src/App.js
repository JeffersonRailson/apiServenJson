
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import api from './service/api'


export default class App extends Component {
  state = {
    data:[]
  }
  componentDidMount = async () => {
    const resp = await api.get('/');
    this.setState({ data: resp.data });
  }
  render() {
    const {data} = this.state
    return (
      <View style={styles.container}>
        
          <View style={styles.containerRepo}>
            {data.map(dados => (
              <Text key={dados.id} style={styles.text}>
                nome:{dados.nome}
                Idade{dados.idade}
              </Text>
            ))}
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00fcff',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
