import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Main from '../bottom/Main';
import Search from '../bottom/Search';
import Cart from '../bottom/Cart';
import Wishlist from '../bottom/Wishlist';
import Profile from '../bottom/Profile';
import { useSelector } from 'react-redux';

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const data = useSelector(state => state);
  console.log(data);

  const cartCount = data.ReducerCart.length;
  const wishlistCount = data.ReducerWishlist.length;

  return (
    <View style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
      {selectedTab === 0 ? <Main />
        : selectedTab === 1 ? <Search />
          : selectedTab === 2 ? <Cart />
            : selectedTab === 3 ? <Wishlist />
              : <Profile />
      }

      <View style={styles.bottomView}>
        <TouchableOpacity style={styles.bottomIcons} onPress={() => setSelectedTab(0)}>
          <Image source={require('../images/home.png')} style={styles.iconImg} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomIcons} onPress={() => setSelectedTab(1)}>
          <Image source={require('../images/search.png')} style={styles.iconImg} />
        </TouchableOpacity>

        <View style={styles.centerBag}>
          <TouchableOpacity style={styles.bagButton} onPress={() => setSelectedTab(2)}>
            <Image source={require('../images/bag.png')} style={styles.bagIcon} />
            <View style={styles.bagCount}>
              <Text style={styles.bagCountTxt}>{cartCount}</Text>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.bottomIcons} onPress={() => setSelectedTab(3)}>
          <View>
            <Image source={require('../images/heart.png')} style={styles.iconImg} />
            <View style={styles.bagCountWishlist}>
              <Text style={styles.bagCountTxt}>{wishlistCount}</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomIcons} onPress={() => setSelectedTab(4)}>
          <Image source={require('../images/user.png')} style={styles.iconImg} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  bagCountTxt: {
    color: "#fff",
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
  },
  bagCount: {
    position: 'absolute',
    backgroundColor: 'red',
    minWidth: 18,
    height: 18,
    borderRadius: 9,
    top: -4,
    right: -6,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  bagCountWishlist: {
    position: 'absolute',
    backgroundColor: 'red',
    minWidth: 18,
    height: 18,
    borderRadius: 9,
    top: -6,
    right: -6,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  bottomView: {
    width: '100%',
    height: 70,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#ff5a19',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  bottomIcons: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
  },
  iconImg: {
    width: 26,
    height: 26,
    resizeMode: 'contain',
  },
  centerBag: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    elevation: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  bagButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bagIcon: {
    width: 26,
    height: 26,
    tintColor: '#fff',
    resizeMode: 'contain',
  },
});
