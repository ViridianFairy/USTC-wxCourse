import Taro from '@tarojs/taro';
// React
import { View, Text , Button} from '@tarojs/components';
import { AtIcon, AtToast }  from 'taro-ui'
import React, { Component } from 'react'
import './index.scss'
interface PropsType {
  bubble:{
    icon: string,
    text: string
  } | undefined
  mainTitle:string
}
interface NavBar{
  state:{
    navBarHeight: number,
    isOpened: boolean
  },
  props:PropsType
}
class NavBar extends Component {

  constructor(props:PropsType){
    super(props)
    this.state={
      navBarHeight:0,
      isOpened:false,
    }
  }

  componentWillMount () { 
    this.getNavHeight()
  }

  getNavHeight(){
    let menuButtonObject = wx.getMenuButtonBoundingClientRect();
    // console.log('wx.getMenuButtonBoundingClientRect()',menuButtonObject)
    var sysinfo = wx.getSystemInfoSync();
    // console.log('wx.getSystemInfoSync()',sysinfo)
    let statusBarHeight = sysinfo.statusBarHeight;
    let menuBottonHeight =  menuButtonObject.height;
    let menuBottonTop =  menuButtonObject.top;
    let navBarHeight = statusBarHeight + menuBottonHeight + (menuBottonTop - statusBarHeight) * 2 ; 
    this.setState({
      ...this.state,
      navBarHeight,
    })
  }

  showBubble(){
    console.log('点击');
    
    this.setState({
      ...this.state,
      isOpened:true,
    })
  }

  render () {
    let { bubble=undefined, mainTitle='' } = this.props as PropsType
    return (
      <View className='nav_custom_bar' style={{height:` ${this.state.navBarHeight}px`}}>
       {bubble && 
       <AtIcon className={`nav_custom_bar_back ${bubble?'':'hidden'}`} value={bubble.icon} size='22' color='#ddd' onClick={()=>{this.showBubble()}}>
       </AtIcon>
       }
       {bubble &&<AtToast isOpened={this.state.isOpened} text={bubble.text} icon={bubble.icon}></AtToast>}
       <Text className='nav_custom_bar_title'>{mainTitle}</Text>
       <View></View>
      </View>
    )
  }
}
export default NavBar;


interface PropType{
  navBarHeight: number,
  isOpened:boolean
}