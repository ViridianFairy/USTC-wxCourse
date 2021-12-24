import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import classNames from 'classnames'
import './index.scss'
 
export default class TabBar extends Taro.Component {
    // 默认参数配置
    static defaultProps = {
        current: 0,
        background: '#fff',
        color: '#999',
        tintColor: '#6190e8',
        fixed: false,
        onClick: () => {},
        tabList: []
    }
    constructor(props) {
        super(props)
        this.state = {
            updateCurrent: props.current
        }
    }
    render() {
        const { background, color, tintColor, fixed } = this.props
        const { updateCurrent } = this.state
        
        return (
            <View className={classNames('taro__tabbar', fixed && 'taro__tabbar--fixed')}>
                <View className={classNames('taro__tabbar-list', fixed && 'taro__tabbar-list--fixed')} style={{backgroundColor: background}}>
                    {this.props.tabList.map((item, index) => (
                        <View className="taro__tabbar-item taro__tabbar-item--active" key={index} onClick={this.updateTabbar.bind(this, index)}>
                            <View className="taro__tabbar-icon">
                                <Text className="iconfont taro__tabbar-iconfont" style={{color: updateCurrent == index ? tintColor : color}}>{item.icon}</Text>
                                {/* 圆点 */}
                                {!!item.badge && <Text className="taro__badge taro__tabbar-badge">{item.badge}</Text>}
                                {!!item.dot && <Text className="taro__badge-dot taro__tabbar-badge--dot"></Text>}
                            </View>
                            <Text className="taro__tabbar-title" style={{color: updateCurrent == index ? tintColor : color}}>{item.title}</Text>
                        </View>
                    ))}
                </View>
            </View>
        );
    }
}