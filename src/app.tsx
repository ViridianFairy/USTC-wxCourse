import { View } from "@tarojs/components";
import React, { Component } from "react";
import "./app.scss";
import NavBar from "./pages/navBar/NavBar";
import { setGlobalData } from "./utils";
/**
 * nowDay
 * nowMonth
 * courseBlockWidth
 * courseBlockHeight
 */
class App extends Component {
  componentDidMount() {
    let date = new Date()
    setGlobalData('nowDay',date.getDate())
    setGlobalData('nowMonth',date.getMonth()+1)
    setGlobalData('courseBlockWidth','')
		setGlobalData('courseBlockHeight','')
  }

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 是将要会渲染的页面
  render() {
    return (
      <View className="123">
      <View>123</View>
      {this.props.children}
      </View>
    )
  }
}
export default App