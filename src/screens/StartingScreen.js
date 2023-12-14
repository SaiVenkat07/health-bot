import React from 'react'
import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet, useWindowDimensions } from 'react-native'

const CustomText = ({ children, style }) => {
  const windowWidth = useWindowDimensions().width;

  let fontSize = 18;

  if (windowWidth < 360) {
    fontSize = 14;
  } else if (windowWidth >= 360 && windowWidth < 768) {
    fontSize = 25;
  } else {
    fontSize = 30;
  }

  return (
    <Text style={[{ fontSize }, style]}>
      {children}
    </Text>
  );
};

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <CustomText style={styles.textOne}>Hello</CustomText>
      <CustomText style={styles.textTwo}>I am your 
        <Text style={{color: 'red'}}> Health Partner</Text>
      </CustomText>
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/health-bot.png')} 
        style={styles.image}/>
      </View>  
    <CustomText style={styles.text}>How Can I help you?</CustomText>
    <TouchableOpacity style={styles.button} 
         onPress={()=>navigation.navigate('chat')}>
        <CustomText style={styles.buttonText}>Let's Chat</CustomText>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 70,
    backgroundColor: '#fff',
    flex: 1,
  },
  textOne: {
    //fontSize: 36,
    color:'#34c0f7',
    fontWeight:'bold',
  },
  textTwo: {
    //fontSize: 25,
    color:'#34c0f7',
  },
  imageContainer: {
    height: Dimensions.get('screen').height*0.5,
    width: Dimensions.get('screen').width*0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: Dimensions.get('screen').height*0.4,
    width: Dimensions.get('screen').width*0.54,
  },
  text: {
    //fontSize: 25,
    color:'#34c0f7'
  },
  button: {
    backgroundColor: '#3af734',
    marginTop: 30,
    padding: 16,
    width: Dimensions.get('screen').width*0.5,
    borderRadius: 100,
    alignItems: 'center',
  },
  buttonText: {
    //fontSize: 21,
    color: '#fff',
    fontWeight:'bold',
  },
})