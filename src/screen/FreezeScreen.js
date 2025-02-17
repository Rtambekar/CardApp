import React, {useState} from 'react';
import faker from 'faker';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {SafeAreaView} from 'react-native-safe-area-context';
import Paybutton from '../assets/Paybutton';
import Cardbutton from '../assets/Cardbutton';
import Snowbutton from '../assets/Snowbutton';
import Bottomslice from '../assets/Bottomslice';
import Homeicon from '../assets/Homeicon';
import Qrbutton from '../assets/Qrbutton';
import Qrshadow from '../assets/Qrshadow';
import Qrring from '../assets/Qrring';
import Cardbackground from '../assets/Cardbackground';
import Geniebutton from '../assets/Giniebutton';
import {useNavigation} from '@react-navigation/native';
import { useEffect } from 'react';

export const FreezeScreen = () => {
  const [freeze, setFreeze] = useState(false);
  const navigation = useNavigation();
  const [details, setDetails] = useState(null);

   useEffect(() => {
      const randomDetails = {
        name: faker.name.findName(),
        email: faker.internet.email(),
        address: faker.address.streetAddress(),
      };
      setDetails(randomDetails);
    }, []);

  const handleAnimation = () => {
    setFreeze(true);
    setTimeout(() => {
      // navigation.navigate('');
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Text style={styles.headerText}>select payment mode</Text>
          <Text style={styles.subText}>
            choose your preferred payment method to make payment.
          </Text>
        </View>

        <View style={styles.paymentOptions}>
          <TouchableOpacity style={styles.payButton}>
            <Paybutton />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardButton}>
            <Cardbutton />
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <Text style={styles.cardLabel}>YOUR DIGITAL DEBIT CARD</Text>
          <View style={styles.cardWrapper}>
            <Animatable.Image
              animation={freeze ? 'fadeOut' : undefined}
              duration={1000}
              source={require('../assets/Animation.png')}
              style={styles.cardImage}
              resizeMode="contain"
            />
            <TouchableOpacity
              onPress={handleAnimation}
              style={styles.freezeButton}>
              <Snowbutton />
              <Text style={styles.freezeText}>unfreeze</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bottomNavContainer}>
          <Bottomslice style={styles.bottomSlice} />
          <View style={styles.navButtons}>
            <TouchableOpacity
              style={styles.navButton}
              onPress={() => navigation.navigate('Details')}>
              <View style={styles.iconContainer}>
                <Homeicon />
              </View>
              <Text style={styles.navLabel}>home</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.qrButton}>
              <View style={styles.qrWrapper}>
                <Qrring style={styles.qrRing} />
                <Qrshadow style={styles.qrShadow} />
                <Qrbutton style={styles.qrButtonIcon} />
              </View>
              <Text style={[styles.navLabel]}>yolo pay</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navButton}>
              <View style={styles.iconContainer}>
                <Geniebutton />
              </View>
              <Text style={styles.navLabel}>ginie</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    marginTop: 10,
  },
  headerText: {
    color: '#FFFFFF',
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: 26,
    lineHeight: 36,
  },
  subText: {
    marginTop: 8,
    color: '#8c8c8c',
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 20,
  },
  paymentOptions: {
    flexDirection: 'row',
    marginTop: 25,
    gap: 10,
  },
  payButton: {
    // Adjust as needed based on the actual button
  },
  cardButton: {
    // Adjust as needed based on the actual button
  },
  cardContainer: {
    marginTop: 25,
    alignItems: 'center',
  },
  cardLabel: {
    color: '#8c8c8c',
    fontFamily: 'Poppins',
    fontSize: 12,
    marginBottom: 10,
    textTransform: 'uppercase',
    alignSelf: 'flex-start',
  },
  cardWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginRight:70
  },
  cardImage: {
    height: 450,
    width: '85%',
    borderRadius: 16,
  },
  freezeButton: {
    alignItems: 'center',
  },
  freezeText: {
    color: '#FF3B30',
    marginTop: 8,
    fontFamily: 'Poppins',
    fontSize: 14,
    
  },
  bottomNavContainer: {

    position: 'absolute',
    bottom: -18,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  bottomSlice: {
    width: '100%',
  },
  navButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 35,
    position: 'relative',
    bottom: 25,
  },
  navButton: {
    alignItems: 'center',
    width: 70,
  },
  iconContainer: {
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    paddingTop: 40
  },
  qrButton: {
    paddingTop:10,
    alignItems: 'center',
    width: 70,
    position: 'relative',
    bottom: 20,
   // Raises the QR button above the others
  },
  qrWrapper: {
    position: 'relative',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrRing: {
    position: 'absolute',
    zIndex: 1,
  },
  qrShadow: {
    position: 'absolute',
    zIndex: 2,
  },
  qrButtonIcon: {
    position: 'absolute',
    zIndex: 3,
  },
  navLabel: {
    color: '#8c8c8c',
    fontSize: 12,
    marginTop: 5,
    fontFamily: 'Poppins',
    fontWeight: '400',
    textAlign: 'center',
  },
  qrLabel: {
    position: 'relative',
    top: 5, // Adjusts the "yolo pay" text position
  },
});