/*! p2p 2015-01-16 */
angular.module(Constant.CONTROLLER).controller(Constant.CTRL_INVEST,["$scope","$rootScope",Constant.SERVICE_PROJECT,function(a,b,c){Common.setRouteTopBarBack(Constant.ROUTE_MEMBER);var d,e=0;a.topBar={titleLeft:"我的投资",route:Constant.ROUTE_LOGIN,titleRight:""};var f="detail-header-tab-disable",g="detail-header-tab-enable";a.cssTabTender=g,a.cssTabRepayment=f,a.cssTabRepaymentFinish=f;var h=function(b){a.type=b},i=function(b){0==b||"a"==b?(a.cssTabTender=g,a.cssTabRepayment=f,a.cssTabRepaymentFinish=f,j(0)):1==b||10==b?(a.cssTabTender=f,a.cssTabRepayment=g,a.cssTabRepaymentFinish=f,j(1)):(2==b||20==b)&&(a.cssTabTender=f,a.cssTabRepayment=f,a.cssTabRepaymentFinish=g,j(2))},j=function(b){0==b?(a.showTenderList=!0,a.showRepaymentList=!1,a.showRepaymentFinishList=!1):1==b?(a.showTenderList=!1,a.showRepaymentList=!0,a.showRepaymentFinishList=!1):2==b&&(a.showTenderList=!1,a.showRepaymentList=!1,a.showRepaymentFinishList=!0)};a.showRepaymentFinishListClick=function(){return a.showRepaymentFinishList},a.showTenderListClick=function(){return a.showTenderList},a.showRepaymentListClick=function(){return a.showRepaymentList},h(0),i(0),a.tenderList=[],a.goTender=function(){k()};var k=function(){h(0),i(0),n(!0),c.tender().success(function(b){n(!1);try{var c=JSON.parse(JSON.parse(b)).projectList;0==c.length&&(h("a"),i("a")),a.tenderList=c}catch(f){h("a"),i("a"),a.tenderList=[]}Common.hasIScroll()&&setTimeout(function(){0==e?(d=Common.initIScroll(),e++):d.refresh()},300)}).error(function(){h("a"),i("a"),n(!1)})};a.repaymentList=[],a.goRepayment=function(){h(1),i(1),n(!0),l()};var l=function(){c.repayment().success(function(b){n(!1);try{var c=JSON.parse(JSON.parse(b)).projectList;0==c.length&&(h(10),i(10)),a.repaymentList=c}catch(f){h(10),i(10),a.repaymentList=[]}Common.hasIScroll()&&setTimeout(function(){0==e?(d=Common.initIScroll(),e++):d.refresh()},300)}).error(function(){h(10),i(10),n(!1)})};a.repaymentFinishList=[],a.goRepaymentFinish=function(){h(2),i(2),n(!0),a.pageIndex=0,m()};var m=function(){c.repaymentFinish({dataNumOld:a.dataNumOld,dataNumNew:a.dataNumNew,pageIndex:a.pageIndex}).success(function(b){n(!1);try{var c=JSON.parse(JSON.parse(b));a.dataNumOld=c.dataNumOld,a.dataNumNew=c.dataNumNew,a.pageIndex=c.pageIndex,a.anchor=c.anchor;var f=c.projectList;0==f.length&&(h(20),i(20)),0==a.pageIndex&&(a.repaymentFinishList=[]),a.repaymentFinishList=a.repaymentFinishList.concat(f)}catch(g){h(20),i(20),a.dataNumOld=1,a.dataNumNew=1,a.pageIndex=1,a.anchor=0,a.repaymentFinishList=[]}Common.hasIScroll()&&setTimeout(function(){0==e?(d=Common.initIScroll(o),e++):d.refresh()},300)}).error(function(){n(!1),h(20),i(20)})};a.goDetail=function(a){var c=Common.getParamsFromProject(JSON.parse(a),Constant.ROUTE_INVEST);b.go(Constant.ROUTE_PROJECT_DETAIL+c)};var n=function(b){a.isLoading=b};window.onscroll=function(){if(2==a.type&&Common.getScrollTop()+Common.getWindowHeight()==Common.getScrollHeight()){var b=a.dataNumNew,c=a.dataNumOld;if(c!=b){var d=a.pageIndex;a.pageIndex=d+1,a.dataNumOld=a.dataNumNew,m()}}},window.onload=function(){var b=a.anchor;0!=b&&(location.hash=b)};var o=function(){if(this.y-this.maxScrollY<300){var b=a.dataNumNew,c=a.dataNumOld;if(c!=b){var d=a.pageIndex;a.pageIndex=d+1,a.dataNumOld=a.dataNumNew,m()}}},p=function(){k()};p()}]);
/*! p2p 最后修改于： 2015-01-16 */