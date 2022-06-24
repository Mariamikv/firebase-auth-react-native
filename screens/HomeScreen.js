import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/core';

const HomeScreen = () => {

  const navigation = useNavigation();

  const handleSignOut = () => {
    auth.signOut()
      .then(() => {navigation.replace("Login")})
      .catch(error => alert(error.message));
  }

  return (
    <View style={styles.container}>
      <Image
        source={{
        uri: 'https://i.pinimg.com/564x/ae/5a/5a/ae5a5a8b1b338839c391c0aad4a0442b.jpg',
        cache: 'only-if-cached'
        }}
        style={styles.image}
      />
      <Text> Email: { auth.currentUser?.email }</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={handleSignOut}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 16
  },
  image: {
    width: '50%',
    height: '30%',
    marginBottom: 50,
    borderRadius: 10
  }
})