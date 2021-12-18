export default {
  pages: [
    "pages/course/index",
    "pages/calculator/history/index",
    "pages/calculator/monthly-payments/index",
    "pages/calculator/index"
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black"
  },
  tabBar: {
    "color": "#999",
        "selectedColor": "#3D98FF",
        "borderStyle": "white",
    "list": [
      {
        "selectedIconPath": "assets/images/main.png",
        "iconPath": "assets/images/main.png",
        "pagePath": "pages/course/index",
        "text": "首页"
      },
      {
        "selectedIconPath": "assets/images/course.png",
        "iconPath": "assets/images/course.png",
        "pagePath": "pages/course/index",
        "text": "课程表"
      },
      {
        "selectedIconPath": "assets/images/mine.png",
        "iconPath": "assets/images/mine.png",
        "pagePath": "pages/course/index",
        "text": "我的"
      }
    ]
  },
  rn: {
    screenOptions: {
      // 设置页面的options，参考https://reactnavigation.org/docs/stack-navigator/#options
      shadowOffset: { width: 0, height: 0 },
      borderWidth: 0,
      elevation: 0,
      shadowOpacity: 1,
      borderBottomWidth: 0
    }
  }
};
