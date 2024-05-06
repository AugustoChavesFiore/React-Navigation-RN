import React from 'react'
import { ScrollView, FlatList, Image, View} from 'react-native'
import { Button, Text, Card } from 'react-native-paper'
import { ScaledSheet } from 'react-native-size-matters';


export const HomeScreen = () => {
  const [data, setData] = React.useState([])

  const getData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products')
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()
      setData(data)
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button style={styles.btn} mode='contained' onPress={getData}>Get Data</Button>

      {data.length > 0 && (
        <ScrollView>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => (
            <View>
              <Card style={styles.card}>
                <Card.Title style={styles.textCardTitle} title={item.title} />
                <Card.Content>
                  <Image source={{uri: item.image}} style={{width: 100, height: 100}} />
                  <Text >{item.description}</Text>
                  <Text style={styles.textCardTitle}>{`$ ${item.price}`}</Text>
                </Card.Content>
                <Card.Actions>
                  <Button mode='contained'>Buy</Button>
                </Card.Actions>
              </Card>
            </View>
          )}
        />
      </ScrollView>
      )}

    </View>
  )
};


const styles = ScaledSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    btn:{
      marginTop: 10
    },

    card: {
      margin: 10,
      padding: 10,
      width: '90%',
      backgroundColor: 'white',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    textCardTitle: {
      fontSize: 20,
      fontWeight: 'bold',
    },


  });
  