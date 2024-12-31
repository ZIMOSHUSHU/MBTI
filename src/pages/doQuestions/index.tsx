import { Component, PropsWithChildren, useEffect, useState } from "react";
import { View, Image } from "@tarojs/components";
import { AtButton, AtRadio } from "taro-ui";

import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.scss";
import Taro from "@tarojs/taro";
import headerbg from "../../assets/headerbg.png";
import GlobalFooter from "../../components/GlobalFooter";
import questions from "../../data/questions.json";

/**
 * 主页
 */
/**
 * 答题页面
 */
export default () => {
  // 当前题目序号（从 1 开始）
  const [current, setCurrent] = useState<number>(1);
  // 当前题目
  // 初始化当前问题状态，初始值为问题列表中的第一个问题
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);

  // 根据当前问题的选项生成radio按钮的配置项
  // 这样做是为了动态地渲染radio按钮，并且保持代码的可维护性和可读性
  const radioOptions = currentQuestion.options.map(optionsss => {
    // 为每个选项生成一个包含label和value的对象
    // label用于显示选项的文本，value用于标识选项
    return {
      label: `${optionsss.key}. ${optionsss.value}`,
      value: optionsss.key
    };
  });
  // 当前回答
  const [currentAnswer, setCurrentAnswer] = useState<string>();
  // 回答列表
  const [answerList] = useState<string[]>([]);

  // 序号变化时，切换当前题目和当前回答
  useEffect(() => {
    setCurrentQuestion(questions[current - 1]);
    setCurrentAnswer(answerList[current - 1]);
  }, [current]);

  return (
    <View className="doQuestionPage">
      <View className="at-article__h2 title">
        {current}、{currentQuestion.title}
      </View>
      <View className="options-wrapper">
        <AtRadio
          options={radioOptions}
          value={currentAnswer}
          onClick={value11 => {
            setCurrentAnswer(value11);
            // 记录回答
            console.log("当前答案：", currentAnswer);
            answerList[current - 1] = value11;
          }}
        />
      </View>
      <View>
        <div>当前选择的答案是：{currentAnswer}</div>
      </View>
      {current < questions.length && (
        <AtButton
          type="primary"
          size="normal"
          className="controlBtn"
          circle
          disabled={!currentAnswer}
          onClick={() => {
            setCurrent(current + 1);
          }}
        >
          下一题
        </AtButton>
      )}
      {current >= questions.length && (
        <AtButton
          type="primary"
          size="normal"
          className="controlBtn"
          circle
          disabled={!currentAnswer}
          onClick={() => {
            Taro.setStorageSync("answerList", answerList);
            Taro.navigateTo({
              url: "/pages/result/index"
            });
          }}
        >
          查看结果
        </AtButton>
      )}
      {current > 1 && (
        <AtButton
          size="normal"
          className="controlBtn"
          circle
          onClick={() => {
            setCurrent(current - 1);
          }}
        >
          上一题
        </AtButton>
      )}
      <GlobalFooter />
    </View>
  );
};
