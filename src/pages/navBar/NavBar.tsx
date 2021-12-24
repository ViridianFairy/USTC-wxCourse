import Taro from '@tarojs/taro';
// React
import { View, Text , Button} from '@tarojs/components';
import { AtIcon }  from 'taro-ui'
import React, { Component } from 'react'
import './index.scss'
interface PropsType {
  needBackIcon:boolean,
  mainTitle:string
}
class NavBar extends Component {

  constructor(props:PropsType){
    super(props)
    this.state={
      navBarHeight:0,
    }
  }

  componentWillMount () { 
    this.getNavHeight()
  }

  getNavHeight(){
    let menuButtonObject = wx.getMenuButtonBoundingClientRect();
    console.log('wx.getMenuButtonBoundingClientRect()',menuButtonObject)
    var sysinfo = wx.getSystemInfoSync();
    console.log('wx.getSystemInfoSync()',sysinfo)
    let statusBarHeight = sysinfo.statusBarHeight;
    let menuBottonHeight =  menuButtonObject.height;
    let menuBottonTop =  menuButtonObject.top;
    let navBarHeight = statusBarHeight + menuBottonHeight + (menuBottonTop - statusBarHeight) * 2 ; 
    this.setState({
      navBarHeight,
    })
  }

  goBackPage(){
    Taro.navigateBack({
      delta: 1
    })
  }

  render () {
    let { needBackIcon=true, mainTitle='' } = this.props as PropsType
    return (
      <View className='nav_custom_bar' style={{height:` ${this.state.navBarHeight}px`}}>
       <AtIcon className={`nav_custom_bar_back ${needBackIcon?'':'hidden'}`} value='chevron-left' size='22' color='#fff' onClick={()=>{this.goBackPage()}}></AtIcon>
       <Text className='nav_custom_bar_title'>{mainTitle}</Text>
       <View></View>
      </View>
    )
  }
}
export default NavBar;
