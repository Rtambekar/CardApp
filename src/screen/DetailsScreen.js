import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import faker from 'faker';
import * as Animatable from 'react-native-animatable';

export const DetailsScreen = ({ freeze }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const randomDetails = {
    cardNumber: faker.finance.creditCardNumber('#### #### #### ####'),
          expiryDate: `${faker.datatype.number({ min: 1, max: 12 })}/${faker.datatype.number({ min: 24, max: 30 })}`,
          cvv: faker.finance.creditCardCVV(),
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
          <Text style={styles.cardText}>Card Number: {details.cardNumber}</Text>
                          <Text style={styles.cardText}>Expiry Date: {details.expiryDate}</Text>
                          <Text style={styles.cardText}>CVV: {details.cvv}</Text>
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
