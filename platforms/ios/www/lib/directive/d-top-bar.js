/*! p2p 2015-01-16 */
angular.module(Constant.DIRECTIVE).directive(Constant.D_TOP_BAR,function(){var a=function(a){a.backTopBar=function(){a.back(Constant.DATA_ROUT_TOP_BAR_BACK)},a.topBarRightClick=function(){a.topBar.route==Constant.ROUTE_MEMBER&&(a.titleRight==Constant.KEY_LOGIN_FAIL?a.logout():a.go(Constant.ROUTE_LOGIN))},a.titleLeft=a.topBar.titleLeft,a.titleRight=a.topBar.titleRight,a.$watch("topBar.titleRight",function(){a.titleRight=a.topBar.titleRight}),Common.ios7()?(a.cssViewTopBarContainer="view-top-bar-container ios7",a.cssViewTopBar="view-top-bar row ios7",a.cssListIscroll="list view-top-bar-has ios7 iscroll",a.cssList="list view-top-bar-has ios7",a.idWrapper="wrapper",a.idScroller="scroller",a.cssTabBarHas="wrapper-tab-bar-has-ios7",a.cssListTabBar="list view-top-bar-has ios7"):(Common.isIos()?(a.idWrapper="wrapper",a.idScroller="scroller",a.cssListIscroll="list",a.cssList="list view-top-bar-has",a.cssTabBarHas="wrapper-tab-bar-has",a.cssListTabBar="list view-top-bar-has"):Common.hasIScroll()?(a.idWrapper="wrapper",a.idScroller="scroller",a.cssListIscroll="list",a.cssList="list view-top-bar-has",a.cssListTabBar="list view-top-bar-has",a.cssTabBarHas="wrapper-tab-bar-has"):(a.idWrapper="wrapper1",a.idScroller="scroller1",a.cssListIscroll="list view-top-bar-has",a.cssList="list view-top-bar-has",a.cssListTabBar="list view-top-bar-has"),a.cssViewTopBarContainer="view-top-bar-container",a.cssViewTopBar="view-top-bar row"),Common.checkOnLine(a),Common.initFastClick(),Common.clearHistory()};return{restrict:"E",templateUrl:"view/directive/d-top-bar.html",replace:!0,link:a}});
/*! p2p 最后修改于： 2015-01-16 */