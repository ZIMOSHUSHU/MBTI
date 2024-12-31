import { Component, PropsWithChildren } from 'react'
import { View, Image } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'
import Taro from '@tarojs/taro'
import headerbg from "../../assets/images/header-bg.png"

/**
 * 主页
 */
export default () => {
  return (
    <View className="globalFooter">
      作者：zimo
    </View>
  );
};


