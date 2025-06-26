import {
  Image,
  StyleSheet,
  Text,
  View,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React, {useState, useRef} from 'react';
import CustomTextInput from '../common/CustomTextInput';
import CommonButton from '../common/CommonButton';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../common/Loader';
import * as Animatable from 'react-native-animatable';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [badEmail, setBadEmail] = useState(false);
  const [badPassword, setBadPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handleLogin2 = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailValid = emailRegex.test(email.trim());
    const passwordValid = password.trim() !== '';

    setBadEmail(!emailValid);
    setBadPassword(!passwordValid);

    if (!emailValid || !passwordValid) {
      return;
    }

    setModalVisible(true);

    try {
      const storedEmail = await AsyncStorage.getItem('EMAIL');
      const storedPassword = await AsyncStorage.getItem('PASSWORD');

      if (email === storedEmail && password === storedPassword) {
        navigation.navigate('Home');
      } else {
        Alert.alert('Wrong Email or Password!');
      }
    } catch {
      Alert.alert('Login failed, please try again!');
    } finally {
      setModalVisible(false);
    }
  };

  const animateButton = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start(() => handleLogin2());
  };

  const renderError = (condition, message) =>
    condition && <Text style={styles.errorText}>{message}</Text>;

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={{paddingBottom: 40}}>
        <Animatable.Image
          animation="bounceIn"
          delay={200}
          source={require('../images/eCommerceLogo.png')}
          style={styles.logo}
        />

        <Animatable.Text animation="fadeInUp" delay={400} style={styles.title}>
          Welcome Back 👋
        </Animatable.Text>
        <Text style={styles.subTitle}>Login to your account</Text>

        <CustomTextInput
          placeholder="Enter Email"
          icon={require('../images/mail.png')}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        {renderError(badEmail, 'Please enter a valid Email')}

        <View>
          <CustomTextInput
            placeholder="Enter Password"
            type={showPassword ? 'text' : 'password'}
            icon={require('../images/lock.png')}
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setShowPassword(!showPassword)}>
            {/* <Ionicons
              name={showPassword ? 'eye-off' : 'eye'}
              size={24}
              color="#555"
            /> */}
          </TouchableOpacity>
        </View>
        {renderError(badPassword, 'Please enter a valid Password')}

        <Animated.View style={{transform: [{scale: scaleAnim}]}}>
          <CommonButton
            bgColor="#ff5a19"
            title="Login"
            textColor="#fff"
            fontWeight="800"
            fontSize={20}
            onPress={animateButton}
          />
        </Animated.View>

        <Text
          style={styles.linkText}
          onPress={() => navigation.navigate('SignUp')}>
          Don’t have an account? <Text style={styles.link}>Create One</Text>
        </Text>

        <View style={styles.socialContainer}>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => Alert.alert('Google Login')}>
            <Ionicons name="logo-google" size={22} color="#de5246" />
            <Text style={styles.socialText}>Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => Alert.alert('Apple Login')}>
            <Ionicons name="logo-apple" size={22} color="#000" />
            <Text style={styles.socialText}>Continue with Apple</Text>
          </TouchableOpacity>
        </View>

        <Loader modalVisible={modalVisible} setModalVisible={setModalVisible} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffefb',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  logo: {
    height: 140,
    width: 140,
    borderRadius: 20,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#380438',
    alignSelf: 'center',
  },
  subTitle: {
    fontSize: 16,
    color: '#666',
    alignSelf: 'center',
    marginBottom: 30,
  },
  errorText: {
    color: '#ff5a19',
    fontSize: 14,
    marginTop: 6,
    marginBottom: 10,
    marginLeft: 10,
  },
  linkText: {
    alignSelf: 'center',
    marginTop: 30,
    fontSize: 16,
    color: '#333',
  },
  link: {
    color: '#ff5a19',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  eyeIcon: {
    position: 'absolute',
    right: 20,
    top: 15,
  },
  socialContainer: {
    marginTop: 30,
    gap: 15,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 12,
    borderRadius: 10,
    justifyContent: 'center',
    gap: 10,
  },
  socialText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
});
