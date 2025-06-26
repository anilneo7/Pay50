import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Image } from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const Navigation = useNavigation();
  const [name, setName] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        const storedName = await AsyncStorage.getItem('NAME');
        if (storedName) {
          setName(storedName);
        }
      } catch (e) {
        console.error('Failed to load name:', e);
      }
    };

    getData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#ff5a19" barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>👤 Profile</Text>
          <TouchableOpacity>
            <Image
              source={require('../images/settings.png')}
              style={styles.imgSetting}
            />
          </TouchableOpacity>
        </View>

        {/* Profile Card */}
        <View style={styles.profileCard}>
          <Image
            source={require('../images/profile.png')}
            style={styles.profileImg}
          />
          <Text style={styles.userName}>
            {name ? `Welcome, ${name}` : 'Welcome'}
          </Text>
        </View>

        {/* Menu Items */}
        <View style={styles.menu}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => Navigation.navigate('MyAddress')}
          >
            <Image
              source={require('../images/location.png')}
              style={styles.menuIcon}
            />
            <Text style={styles.menuText}>My Address</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Image
              source={require('../images/order.png')}
              style={styles.menuIcon}
            />
            <Text style={styles.menuText}>My Orders</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Image
              source={require('../images/giftbox.png')}
              style={styles.menuIcon}
            />
            <Text style={styles.menuText}>Special Offers 🎁</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
  },
  scrollView: {
    paddingBottom: 50,
  },
  header: {
    height: 60,
    paddingHorizontal: 20,
    backgroundColor: '#ff5a19',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 3,
  },
  headerText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  imgSetting: {
    height: 28,
    width: 28,
    tintColor: '#fff',
  },
  profileCard: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  profileImg: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#ff5a19',
  },
  userName: {
    marginTop: 12,
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  menu: {
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuIcon: {
    width: 22,
    height: 22,
    marginRight: 12,
    tintColor: '#ff5a19',
  },
  menuText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
});
