import React, {useState, useEffect} from 'react';
import faker from 'faker';
import {View, Text, StyleSheet, TouchableOpacity,Image} from 'react-native';
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
import Geniebutton from '../assets/Giniebutton';
import {useNavigation} from '@react-navigation/native';
import Cardbackground from '../assets/Cardbackground';
import Yolo from '../assets/Yolo';

export const FreezeScreen = () => {
  const [freeze, setFreeze] = useState(false);
  const navigation = useNavigation();
  const [details, setDetails] = useState(null);

  // Function to generate random card details
  const generateCardDetails = () => {
    const randomCardDetails = {
      cardNumber: faker.finance.creditCardNumber('#### #### #### ####'),
      expiryDate: `${faker.datatype.number({
        min: 1,
        max: 12,
      })}/${faker.datatype.number({min: 24, max: 30})}`,
      cvv: faker.finance.creditCardCVV(),
    };
    console.log('Generated Card Details:', randomCardDetails); // Debugging log
    setDetails(randomCardDetails);
  };

  // Generate initial card details on component mount
  // useEffect(() => {
  //   generateCardDetails();
  // }, []);

  // Regenerate card details when freeze is set to true
  useEffect(() => {
    if (freeze) {
      setTimeout(() => {
        generateCardDetails(); // Generate details after 1 sec
      }, 1000);
    } else {
      setDetails(null); // Hide details immediately when unfreezing
    }
  }, [freeze]);

  // Handle button click
  const handleAnimation = () => {
    setFreeze(prevState => !prevState);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Select Payment Mode</Text>
          <Text style={styles.subText}>
            Choose your preferred payment method to make a payment.
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
              style={[styles.freezeButton]}>
              <Snowbutton />
              <Text style={styles.freezeText}>
                {freeze ? 'Freeze' : 'Unfreeze'}
              </Text>
            </TouchableOpacity>

            {details && (
              <View style={styles.cardContainer2}>
                <View style={styles.cardHeader}>
                  <Yolo style={styles.cardBrand}/>
                  <View style={styles.bankLogo}>
                    <Text style={styles.bankName}>YES BANK</Text>
                  </View>
                </View>

                <Text style={[styles.cardNumber, styles.cardText]}>
                  {details.cardNumber}
                </Text>

                <View style={styles.cardDetails}>
                  <Text style={[styles.cardExpiry, styles.cardText]}>
                    expiry{'\n'}
                    {details.expiryDate}
                  </Text>

                  <Text style={[styles.cardCvv, styles.cardText]}>
                    cvv{'\n'}
                    ***
                  </Text>
                </View>

                <View style={styles.cardFooter}>
                  <TouchableOpacity style={styles.copyButton}>
                    <Text style={styles.copyText}>copy details</Text>
                  </TouchableOpacity>

                 <Image
                    source={require('../assets/rupay-logo.png')}
                    style={styles.paymentLogo}
                  />
                </View>
              </View>
            )}
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
  cardContainer: {
    marginTop: 28,
    alignItems: 'center',
    
  },
  cardLabel: {
    color: '#8c8c8c',
    fontFamily: 'Poppins',
    fontSize: 12,
    textTransform: 'uppercase',
    alignSelf: 'flex-start',
  },
  cardWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '95%',
    marginRight: 80,
  },
  cardImage: {
    height: 550,
    width: '100%',
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
    paddingTop: 40,
  },
  qrButton: {
    paddingTop: 10,
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
  cardContainer2: {
    backgroundColor: '#000000',
    borderRadius:16,
    position: 'absolute',
    top: 60,
    left: 25,
    width: '70%',
    height: 400,
    padding: 20,
    justifyContent: 'space-between',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  cardBrand: {
    color: '#FF3B30',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bankLogo: {
    backgroundColor: '#0066CC',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 4,
  },
  bankName: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  cardNumber: {
    fontSize: 18,
    color: '#FFFFFF',
    fontFamily: 'monospace',
    fontWeight: '500',
    marginTop: 80,
  },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 50,
  },
  cardExpiry: {
    fontSize: 14,
    color: '#9a9a9a',
    paddingLeft:2
  },
  cardCvv: {
    fontSize: 14,
    color: '#9a9a9a',
    marginLeft: 80,
    paddingRight:10
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  copyButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  copyText: {
    color: '#FF3B30',
    fontSize: 14,
    fontFamily: 'monospace',
  },
  paymentLogo: {
    width: 80,
    height: 30,
    resizeMode: 'contain',
  }
  
});
