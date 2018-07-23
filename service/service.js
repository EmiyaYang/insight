const domain = 'https://insight.service.com/';

/**
 * 获取应用的概览信息
 * @param success
 * @param fail
 */
const getOutline = (success, fail) => fetch('analysis', {}, success, fail);
/**
 * 获取收藏列表
 * @param success
 * @param fail
 */
const getCollectionList = (success, fail) => fetch('collect', {}, success, fail);
/**
 * 获取异常信息列表
 * @param success
 * @param fail
 * @param page 指定页码
 * @param size 指定单页信息项数
 */
const getExceptionList = (success, fail, page, size) => fetch('exception?page=' + page + '&size=' + size, {}, success, fail, 'GET', 'loading...');

/**
 * 获取历史异常信息
 * @param success
 * @param fail
 * @param page
 * @param size
 */
const getExceptionHistory = (success, fail, page, size) => fetch('exception/history?page=' + page + '&size=' + size, {}, success, fail, 'GET', 'loading...');

/**
 * 获取应用列表
 * @param success
 * @param fail
 */
const getAppList = (success, fail) => fetch('app', {}, success, fail, 'GET', 'loading...');

/**
 * 获取应用概览信息
 * @param success
 * @param fail
 * @param id 应用id
 */
const getAppInfo = (success, fail, id) => fetch('app/info?id=' + id, {}, success, fail, 'GET', 'loading...');

/**
 * 获取应用全部指标
 * @param success
 * @param fail
 * @param id 应用id
 */
const getAppQuotaList = (success, fail, id) => fetch('app/quota?id=' + id, {}, success, fail, 'GET', 'loading...');

/**
 * 变更图表的收藏状态
 * @param success
 * @param fail
 * @param id 图表id
 */
const collectItem = (success, fail, id) => fetch('app/diagram?id=' + id, {}, success, fail, 'GET', 'loading...');

/**
 * 向后端发送formid
 * @param formid
 * @param success
 * @param fail
 */
const sendFormId = (success, fail, formid) => fetch('formid', {formid}, success, fail, 'POST');

/**
 * 网络请求封装
 * @param url
 * @param data
 * @param success
 * @param fail
 * @param method
 * @param msg 定义loading框里的文本信息，空则不显示加载框
 */
function fetch (url, data, success, fail, method, msg) {
    wx.showNavigationBarLoading();

    if (msg) wx.showLoading({title: msg});

    wx.request({
        url: domain + url,
        data: data || {},
        header: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        method: method || 'GET',
        success: function (res) {
            if (res.statusCode === 200 ) success && success(res.data);
            else fail && fail();
        },
        fail: function (res) {
            fail && fail();
        },
        complete: function (res) {
            wx.hideNavigationBarLoading();
            if (msg) wx.hideLoading();
        }
    });
}

module.exports = {
    getOutline,
    getCollectionList,
    getExceptionList,
    getExceptionHistory,
    getAppList,
    getAppInfo,
    collectItem,
    getAppQuotaList,
    sendFormId
};