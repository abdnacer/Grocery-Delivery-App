import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import { useColorScheme } from 'react-native/Libraries/Utilities/Appearance'
import Gap from '../../components/atoms/Gap'
import BoxItemCategories from '../../components/molecules/BoxItemCategories'
import BoxItemTopProduct from '../../components/molecules/BoxItemTopProduct'
import Header from '../../components/molecules/Header'
import { colors, fonts } from '../../res'
import { IC_Bakery, IC_Bakery2, IC_Drinks, IC_Fruits, IC_Search, IC_Vegetables } from '../../res/images/icons'
import { IL_Cauliflawer_PNG, IL_Grapes_PNG, IL_Greentea_PNG, IL_Tomato_PNG } from '../../res/images/ilustrator'

const Home = ({ navigation }) => {

  const isDarkMode = useColorScheme === 'dark'

  const dataTopProducts = [
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

  return (
    <SafeAreaView style={styles.flex1}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.flex1}>
        {/* Header */}
        <Header drawer />
        {/* Search */}
        <ScrollView showsHorizontalScrollIndicator={false}>
          <View style={{ paddingHorizontal: 20 }}>
            <View style={styles.wrapperSearch}>
              <TextInput placeholder='Search' style={styles.textInputSearch} />
              <IC_Search />
            </View>
          </View>
          {/* Category */}
          <View>
            <Text style={styles.titleCategories}>Categories</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.scrollViewCategories}>
              <BoxItemCategories
                icon={<IC_Fruits />}
                color="rgba(169, 178, 169, 0.5)"
                text="Fruits"
                onPress={() => navigation.navigate('Categories', 'Fruits')}
              />
              <BoxItemCategories
                icon={<IC_Vegetables />}
                color="rgba(233, 255, 210, 0.5)"
                text="Vegetables"
                onPress={() => navigation.navigate('Categories', 'Vegetables')}
              />
              <BoxItemCategories
                icon={<IC_Drinks />}
                color="rgba(140, 175, 53, 0.5)"
                text="Drinks"
                onPress={() => navigation.navigate('Categories', 'Drinks')}
              />
              <BoxItemCategories
                icon={<IC_Bakery />}
                color="rgba(214, 255, 218, 0.5)"
                text="Bakery"
                onPress={() => navigation.navigate('Categories', 'Bakery')}
              />
              <BoxItemCategories
                icon={<IC_Bakery2 />}
                color="rgba(255, 250, 204, 0.5)"
                text="Bakery"
                onPress={() => navigation.navigate('Categories', 'Bakery')}
              />
            </ScrollView>
          </View>
          <Gap height={25} />
          {/* Product */}
          <View>
            <View style={styles.wrapperHeadTopProduct}>
              <Text style={styles.titleTopProduct}>Top Products</Text>
              <TouchableOpacity>
                <Text style={styles.textSeeAll}>See All</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.sectionBoxTopProduct}>
               {dataTopProducts.map((item, index) => {
                return (
                  <BoxItemTopProduct
                    key={index}
                    bgColor={item.bgColor}
                    icon={item.icon}
                    text={item.name}
                    price={item.price}
                    onPress={() => navigation.navigate('Details',)}
                  />
                );
              })} 
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  flex1: {
    flex: 1
  },
  wrapperSearch: {
    height: 40,
    backgroundColor: colors.lightgrey,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  titleCategories: {
    fontSize: 18,
    fontFamily: fonts.SemiBold,
    color: colors.primary,
    padding: 20,
  },
  scrollViewCategories: {
    paddingLeft: 20,
  },
  wrapperHeadTopProduct: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  titleTopProduct: {
    color: colors.primary,
    fontFamily: fonts.SemiBold,
    fontSize: 20,
  },
  textSeeAll: {
    color: colors.black_Fail,
    fontFamily: fonts.Medium,
    fontSize: 12
  },
  sectionBoxTopProduct: {
    flex:1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  }
})