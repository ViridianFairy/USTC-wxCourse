import { Component } from "react";
import "./app.scss";
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

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children;
  }
}

export default App;
