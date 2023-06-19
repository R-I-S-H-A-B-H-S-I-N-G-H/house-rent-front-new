import { AntDesign, Entypo, FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import React, { useEffect, useRef, useState } from 'react'
import { View, StyleSheet, Dimensions, Image, TouchableOpacity, Animated, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { SharedElement } from 'react-navigation-shared-element'
import { colors } from '../utils/Styles'

const { height, width } = Dimensions.get('screen')

const HEIGHT_IMAGE = height * 0.38
const WIDTH_IMAGE = width

const IMAGE_BOX = 60
const MARGIN = 18

const DetailScreen = props => {
  const insets = useSafeAreaInsets()
  const { item } = props.route.params ?? {}
  const flatlistRef = useRef()
  const thumbRef = useRef()

  //   const [indexImg, setIndexImg] = useState(0)

  const [isFavorite, setIsFavorite] = useState(false)
  const [isActiveIndex, setIsActiveIndex] = useState(0)

  const opacity = useRef(new Animated.Value(0)).current
  const scrollX = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 750,
      delay: 350,
      useNativeDriver: true
    }).start()
  }, [])

  const scrollToIndex = (index) => {
    setIsActiveIndex(index)
    flatlistRef?.current?.scrollToIndex({ animated: true, index: index })
    if (index * (IMAGE_BOX + (MARGIN * 2) - (IMAGE_BOX / 2)) > width / 2) {
      thumbRef?.current?.scrollTo({
        x: index * (IMAGE_BOX + (MARGIN * 2) - (IMAGE_BOX / 2)),
        animated: true
      })
    } else {
      thumbRef?.current?.scrollTo({
        x: 0,
        animated: true
      })
    }
  }

  return (
    <View style={styles.container}>
      {/* Image */}
      <SharedElement id={`${item.id}.img`}>
        <Animated.FlatList
          ref={flatlistRef}
          data={item.images}
          keyExtractor={(_, index) => index.toString()}
          horizontal
          bounces={false}
          decelerationRate='fast'
          onMomentumScrollEnd={ev => scrollToIndex(Math.floor(ev.nativeEvent.contentOffset.x / width))}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: true })}
          pagingEnabled
          getItemLayout={(_, index) => ({
            length: WIDTH_IMAGE,
            offset: WIDTH_IMAGE * index,
            index
          })}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, _ }) => {
            return (
              <View style={{ width: WIDTH_IMAGE, height: HEIGHT_IMAGE }}>
                <Image style={{ width: '100%', height: '100%' }} source={{ uri: item }} />
              </View>
            )
          }}
        />
      </SharedElement>
      {/* List Image */}
      <View style={{ position: 'absolute', top: (HEIGHT_IMAGE - (HEIGHT_IMAGE * 0.25)), paddingHorizontal: 12 }}>
        <Animated.ScrollView ref={thumbRef} horizontal showsHorizontalScrollIndicator={false}>
          {item.images.map((item, index) => {
            return (
              <TouchableOpacity onPress={() => scrollToIndex(index)} key={index.toString()} style={{ width: IMAGE_BOX, height: IMAGE_BOX, marginRight: MARGIN, borderColor: 'white', borderWidth: isActiveIndex === index ? 2 : 0 }}>
                <Image source={{ uri: item }} style={{ width: '100%', height: '100%' }} />
              </TouchableOpacity>
            )
          })}
        </Animated.ScrollView>
      </View>
      {/* Header */}
      <Animated.View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', top: Math.round(insets.top + 10), left: 18, right: 18, justifyContent: 'space-between', opacity: opacity }}>
        <TouchableOpacity onPress={() => { props.navigation.goBack() }} activeOpacity={0.8} style={{ width: 45, height: 45, borderRadius: 45 / 2, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
          <Ionicons name='arrow-back-outline' size={20} color={colors.greyDark} />
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 45, height: 45, borderRadius: 45 / 2, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
          <Entypo name='dots-three-horizontal' size={20} color={colors.greyDark} />
        </TouchableOpacity>
      </Animated.View>
      {/* Content */}
      <View style={{ padding: 16 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <SharedElement id={`${item.id}.category`}>
            <Text style={{ fontFamily: 'Sofia-Medium', color: colors.redDark, fontSize: 14 }}>{item.category}</Text>
          </SharedElement>
          <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
            <AntDesign size={18} name={isFavorite ? 'heart' : 'hearto'} color={colors.redDark} />
          </TouchableOpacity>
        </View>
        <SharedElement id={`${item.id}.name`}>
          <Text style={{ fontFamily: 'Sofia-Bold', fontSize: 16, color: colors.black, marginTop: 5 }}>{item.houseName}</Text>
        </SharedElement>
        <SharedElement id={`${item.id}.address`}>
          <Text style={{ fontFamily: 'Sofia-Bold', fontSize: 16, color: colors.greyDark, marginTop: 5 }}>{item.address}</Text>
        </SharedElement>
        {/* Information House */}
        <Animated.View style={{ flexDirection: 'column', marginTop: 18, opacity }}>
          {/* First */}
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '50%' }}>
              <FontAwesome size={14} name='bed' color={colors.redDark} />
              <Text style={{ marginLeft: 5, fontSize: 14, fontFamily: 'Sofia-Medium', color: colors.greyDark }}>{item.info.bed} Bedrooms</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '50%' }}>
              <FontAwesome size={14} name='bath' color={colors.redDark} />
              <Text style={{ marginLeft: 5, fontSize: 14, fontFamily: 'Sofia-Medium', color: colors.greyDark }}>{item.info.bathroom} Bathrooms</Text>
            </View>
          </View>
          {/* Second */}
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 6 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '50%' }}>
              <MaterialIcons size={14} name='square-foot' color={colors.redDark} />
              <Text style={{ marginLeft: 5, fontSize: 14, fontFamily: 'Sofia-Medium', color: colors.greyDark }}>{item.buildingArea} SQFT</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '50%' }}>
              <MaterialCommunityIcons size={14} name='garage' color={colors.redDark} />
              <Text style={{ marginLeft: 5, fontSize: 14, fontFamily: 'Sofia-Medium', color: colors.greyDark }}>{item.info.garages} Garages</Text>
            </View>
          </View>
          <View />
        </Animated.View>
        {/* Description */}
        <Animated.View style={{ marginTop: 18, opacity }}>
          <Text style={{ fontFamily: 'Sofia-Bold', fontSize: 18, color: colors.black }}>Description</Text>
          <Text style={{ fontFamily: 'Sofia-Regular', color: colors.greyDark, marginTop: 8 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget erat accumsan, porta leo ac, sollicitudin arcu. Sed non cursus purus. Integer commodo diam et nulla egestas consectetur. Ut eu aliquet nisl, ut placerat dui. Etiam ut eleifend lectus. Praesent tincidunt lobortis urna pulvinar pellentesque. Suspendisse at sapien vitae nisi rutrum efficitur. Vivamus fringilla, purus eget iaculis pharetra, felis felis malesuada libero, a elementum enim leo pretium quam. Nam lobortis magna enim, non blandit nulla consectetur dapibus. Vivamus fringilla augue nulla, scelerisque ultricies enim posuere nec. Nulla laoreet ligula nunc, sed hendrerit tortor consectetur id. Aenean efficitur nulla vitae arcu sagittis cursus. Curabitur ut rhoncus risus. Quisque facilisis, orci ac elementum mollis, erat ante malesuada metus, a volutpat est urna vel ipsum.</Text>
        </Animated.View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})

export default DetailScreen
