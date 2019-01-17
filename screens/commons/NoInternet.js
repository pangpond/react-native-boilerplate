import React from 'react'
import { ImageBackground, Image } from 'react-native'
import ScalableText from 'react-native-text'

import Colors from '../../constants/Colors'
import LookAndFeel from '../../constants/LookAndFeel'

import backgroundImage from '../../assets/images/background/blank/Default-667h.png'
import noInternetImage from '../../assets/images/common/no-internet.png'

const NoInternet = () => (
  <ImageBackground
    style={{
      overflow: 'visible',
      backgroundColor: 'transparent',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    source={backgroundImage}
  >
    <Image
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0)',
        width: 150,
        height: 150,
      }}
      source={noInternetImage}
    />
    <ScalableText
      style={[
        LookAndFeel.Styles.textTitle,
        { marginTop: 0, backgroundColor: 'rgba(0, 0, 0, 0)', color: Colors.defaultTextColor },
      ]}
    >
      ไม่พบการเชื่อมต่อ Internet
    </ScalableText>
    <ScalableText
      style={[
        LookAndFeel.Styles.text,
        { marginTop: 0, backgroundColor: 'rgba(0, 0, 0, 0)', color: Colors.defaultTextColor },
      ]}
    >
      กรุณาตรวจสอบและลองใหม่อีกครั้ง
    </ScalableText>
  </ImageBackground>
)

export default NoInternet
