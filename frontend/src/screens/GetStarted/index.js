import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { colors } from '../../res'
import { GetStartedImg_PNG } from '../../res/images'

const GetStarted = () => {
  return (
    <View style={styles.container_IMG}>
      <Image source={GetStartedImg_PNG} style={styles.img} />
      <View style={styles.wrapperStarted}>
        <Text style={styles.titleStarted}>
          Gets things done with todo
        </Text>
        <Text style={styles.textStarted}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
          numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
          optio, eaque rerum! Provident similique accusantium nemo autem.
        </Text>
      </View>
    </View>
  )
}

export default GetStarted

const styles = StyleSheet.create({
  container_IMG: {
    flex: 1,
  },
  img: {
    height: 300,
    width: '100%',
    marginTop: 20,
    resizeMode: 'stretch'
  },
  wrapperStarted: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleStarted:{
    fontSize: 28,
    color: colors.black_Fail,
    textAlign: 'center'
  },
  textStarted: {
    fontSize: 14,
    marginTop: 15,
    marginHorizontal: 28,
    color: colors.grey,
    textAlign: 'center'
  }
})