import { Component, PropsWithChildren } from "react";
import { View, Image } from "@tarojs/components";
import { AtButton } from "taro-ui";

import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.scss";
import Taro from "@tarojs/taro";
import headerbg from "../../assets/headerbg.png";
import GlobalFooter from "../../components/GlobalFooter";

import questionResults from "../../data/question_results.json";
import { getBestQuestionResult } from "../../utils/bizutils";
import questions from "../../data/questions.json";

/**
 * 主页
 */
/**
 * 查看结果页面
 */
export default () => {
  const answerList = Taro.getStorageSync("answerList");
  if (!answerList || answerList.length < 1) {
    Taro.showToast({
      title: "答案为空",
      icon: "error",
      duration: 3000
    });
  }

  const result = getBestQuestionResult(answerList, questions, questionResults);

  return (
    <View className="resultPage">
      <View className="at-article__h1 title">{result.resultName}</View>
      <View className="at-article__h3 subTitle">{result.resultDesc}</View>
      <AtButton
        type="primary"
        size="normal"
        className="enterBtn"
        circle
        onClick={() => {
          Taro.reLaunch({
            url: "/pages/index/index"
          });
        }}
      >
        返回主页
      </AtButton>
      <Image src={headerbg} style={{ width: "100%" }} mode="aspectFill" />
      <GlobalFooter />
    </View>
  );
};
