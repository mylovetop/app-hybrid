/*! p2p 2015-01-16 */
angular.module(Constant.DIRECTIVE).directive(Constant.D_NAV_BAR,function(){var a=function(a){a.goTo=function(c,d){switch(d){case 1:a.go(Constant.ROUTE_PROJECT_LIST);break;case 2:b();break;case 3:}};var b=function(){var b=Common.getLogin();a.go(null!=b&&b.length>0?Constant.ROUTE_MEMBER:Constant.ROUTE_LOGIN)}};return{restrict:"E",templateUrl:"view/directive/d-nav-bar.html",replace:!0,link:a}});
/*! p2p 最后修改于： 2015-01-16 */