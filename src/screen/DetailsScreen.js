import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import faker from 'faker';
import * as Animatable from 'react-native-animatable';

export const DetailsScreen = ({ freeze }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const randomDetails = {
      name: faker.name.findName(),
      email: faker.internet.email(),
      address: faker.address.streetAddress(),
    };
    setDetails(randomDetails);
  }, []);

  return (
    <View style={styles.container}>
      {details ? (
        <Animatable.View
          animation={freeze ? 'pulse' : ''}
          iterationCount="infinite"
          style={styles.card}
        >
          <Text style={styles.title}>{details.name}</Text>
          <Text>{details.email}</Text>
          <Text>{details.address}</Text>
        </Animatable.View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 300,
    padding: 20,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
