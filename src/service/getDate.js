import {
    getLocalStorage
} from '../service/tool.js';
var token = getLocalStorage('token')
const headers = {
    token: token,
    app_version: '0.0.1',
    os: 'h5',
    station: '370000',
    version: 'v1.2'
};

const fetch = (type, h, url, p) => h.$http({
    method: type ? 'post' : 'get',
    url: url,
    headers: headers,
    params: p
});

const jsonp = (h, url, p, o) => h.$http.jsonp({
    url,
    p,
    o
});

var listIndex = (h) => fetch('get', h, '/manage/api/h5Index/listIndex');
var checkAppValidCode = (h) => fetch('get', h, '/passport/api/user/checkAppValidCode');
var slideshowPics = (h, p) => fetch('get', h, '/mall/api/mOrderMeeting/slideshowPics', p);
var register = (h, p) => fetch('get', h, '/passport/api/user/register', p);
var userLogin = function (h, p, o) {
    post(h, '/passport/api/user/userLogin', p, o)
};
var ycaptcha = (h, p) => fetch('jsonp', h, 'http://web-ycaptcha.111.com.cn/checkfrontjsonp?jsoncallback=jsonp1?', p);
var listIndexFloor = (h, p) => fetch(!0, h, '/manage/api/mobileIndex/listIndexFloor', p); //首页数据
var listIndexFloorNew = (h) => fetch(!0, h, '/manage/api/mobileIndex/listIndexFloorNew'); //首页3=>1数据
var applyChannelapi = (h, p, o) => fetch(!0, h, '/mall/api/applyChannelapi', p, o); // 加入渠道
var mainH5Province = (h) => fetch(!0, h, '/manage/api/mainH5Province'); // 城市列表
var listRecommendShop = (h, p) => fetch(!1, h, '/mall/api/shop/listRecommendShop', p); //首页推荐商业
var listRecommendIndexFloor = (h, p) => fetch(!1, h, '/manage/api/mobileIndex/listRecommendIndexFloor', p); //首页品类列表
var isCommonOrPilotSite = (h, p) => fetch(!1, h, '/manage/api/mobileIndex/isCommonOrPilotSite', p); //是否试点、通用
var queryDrugByPageForAll = (h, p) => fetch(!0, h, '/mall/api/experiment/queryDrugByPageForAll', p); //APP试点首页接口-查询满减、满赠促销商品列表

export {
    headers,
    userLogin,
    listIndex,
    checkAppValidCode,
    slideshowPics,
    ycaptcha,
    register,
    listIndexFloor,
    listIndexFloorNew,
    listRecommendShop,
    listRecommendIndexFloor,
    applyChannelapi,
    mainH5Province,
    isCommonOrPilotSite,
    queryDrugByPageForAll
}