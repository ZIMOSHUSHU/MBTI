import { Component, PropsWithChildren } from "react";
import { View, Image } from "@tarojs/components";
import { AtButton } from "taro-ui";

import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.scss";
import Taro from "@tarojs/taro";
import headerbg from "../../assets/headerbg.png";
import GlobalFooter from "../../components/GlobalFooter";

/**
 * 主页
 */
export default () => {
  return (
    <View className="indexPage">
      <View className="at-article__h1 title">MBTI 性格测试</View>
      <View className="at-article__h3 subTitle">
        只需 2 分钟，就能非常准确地描述出你是谁，以及你的性格特点
      </View>
      <AtButton
        type="primary"
        size="normal"
        className="enterBtn"
        circle
        onClick={() => {
          Taro.navigateTo({
            url: "/pages/doQuestions/index"
          });
        }}
      >
        开始测试
      </AtButton>
      <Image src={headerbg} style={{ width: "100%" }} mode="aspectFill" />
      <GlobalFooter />
    </View>
  );
};
