export default {
  custom:true,
  pages: [
    "pages/course/course",
    "pages/user/user",
    "pages/main/main",
  ],
  window: {
    navigationStyle:"custom",
    backgroundTextStyle: "dark",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black"
  },
  tabBar: {
    custom:true,
    "color": "#999",
        "selectedColor": "#3D98FF",
        "borderStyle": "white",
    "list": [
      {
        "selectedIconPath": "assets/images/main.png",
        "iconPath": "assets/images/main_grey.png",
        "pagePath": "pages/main/main",
        "text": "首页"
      },
      {
        "selectedIconPath": "assets/images/course.png",
        "iconPath": "assets/images/course_grey.png",
        "pagePath": "pages/course/course",
        "text": "课程表"
      },
      {
        "selectedIconPath": "assets/images/user.png",
        "iconPath": "assets/images/user_grey.png",
        "pagePath": "pages/user/user",
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
