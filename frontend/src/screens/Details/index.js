import { React, useState } from 'react'
import { ScrollView, SafeAreaView, StyleSheet, Text, useColorScheme, StatusBar, View, Image } from 'react-native'
import Button from '../../components/atoms/Button'
import Gap from '../../components/atoms/Gap'
import BoxRelatedItems from '../../components/molecules/BoxRelatedItems'
import Counter from '../../components/molecules/Counter'
import Header from '../../components/molecules/Header'
import { colors, fonts } from '../../res'
import { IL_Cauliflawer_PNG, IL_Grapes_PNG, IL_Greentea_PNG, IL_Tomato_PNG } from '../../res/images/ilustrator'

const Details = ({ route, navigation }) => {

  const dataParams = route.params
  const bgColor = route.params.bgColor
  const isDarkMode = useColorScheme === 'dark'

  const [total, setTotal] = useState(1)

  const dataRelated = [
    {
      name: 'Grapes',
      icon: IL_Grapes_PNG,
      bgColor: 'rgba(277,206,243, 0.5)',
      price: 1.53,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      name: 'Tometo',
      icon: IL_Tomato_PNG,
      bgColor: 'rgba(140,250,145, 0.5)',
      price: 1.53,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      name: 'Drinks',
      icon: IL_Greentea_PNG,
      bgColor: 'rgba(187,208,136, 0.5)',
      price: 1.53,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      name: 'Cauliflower',
      icon: IL_Cauliflawer_PNG,
      bgColor: 'rgba(255,234,232, 1)',
      price: 1.53,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
  ]

  const onCounterChange = (value) => {
    setTotal(value)
  }

  return (
    <SafeAreaView style={styles.flex1(bgColor)}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View>
        {/* Header */}
        <Header onPress={() => navigation.goBack()} />
        {/* Image */}
        <View style={styles.wrapperImg}>
          <Image source={dataParams.icon} style={styles.image} />
        </View>
        {/* Content */}
        <View style={styles.content}>
          {/* Top Content */}
          <View style={styles.wrapperTopContent}>
            <View style={styles.rowTopContent}>
              <Text style={styles.name}>{dataParams.name}</Text>
              <Counter onValueChange={onCounterChange} />
            </View>
            <Text style={styles.price}>{dataParams.price} /kg</Text>
          </View>
          {/* Description */}
          <Text style={styles.description}>{dataParams.description}</Text>
          {/*  related items */}
          <View style={styles.wrapperRelatedItems}>
            <Text style={styles.titleRelated}>Related Items</Text>
            {/* ScrollView */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.wrapperBoxRelated}>
                {/* BoxRelatedItem */}
                {dataRelated.map((itemRelated, index) => (
                  <BoxRelatedItems
                    key={index}
                    image={itemRelated.icon}
                    name={itemRelated.name}
                    price={itemRelated.price}
                    bgColor={itemRelated.bgColor} />
                ))}
              </View>
            </ScrollView>
          </View>
          {/* Button Add To Cart */}
          <Gap height={5} />
          <Button text_Btn="Add To Cart" />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Details

const styles = StyleSheet.create({
  flex1: bgColor => ({
    flex: 1,
    backgroundColor: bgColor
  }),
  wrapperImg: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: 150,
    width: 150,
    resizeMode: 'contain'
  },
  content: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 30,
    paddingTop: 35,
  },
  wrapperTopContent: {
    marginBottom: 28,
    paddingHorizontal: 20
  },
  rowTopContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontFamily: fonts.SemiBold,
    fontSize: 20
  },
  price: {
    fontFamily: fonts.Regular,
    fontSize: 14,
    color: colors.black
  },
  description: {
    paddingHorizontal: 20,
  },
  wrapperRelatedItems: {
    marginTop: 25,
  },
  titleRelated: {
    fontFamily: fonts.SemiBold,
    fontSize: 14,
    color: colors.primary,
    paddingHorizontal: 20,
  },
  wrapperBoxRelated: {
    flexDirection: 'row',
    marginTop: 20,
    paddingLeft: 20
  }
})