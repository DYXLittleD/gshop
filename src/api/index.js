/*
与后台交互模块
*/
import ajax from './ajax'
/**
* 获取地址信息(根据经纬度串) */
export const reqAddress = geohash => ajax('/api/position/' + geohash)

/**
* 获取 msite 页面食品分类列表 */
export const reqCategorys = () => ajax('/api/index_category')

/**
* 获取 msite 商铺列表(根据经纬度) */
export const reqShops = ({latitude, longitude}) => ajax('/api/shops', {latitude, longitude})

/**
* 账号密码登录 */
export const reqPwdLogin = params => ajax('/api/login_pwd', params, 'POST')

/**
* 获取短信验证码 */
export const reqSendCode = phone => ajax('/api/sendcode', {phone})

/**
* 手机号验证码登录 */
export const reqSmsLogin = data => ajax('/api/login_sms', data, 'POST')

/**
* 获取用户信息(根据会话) */
export const reqUser = () => ajax('/api/userinfo')

/**
* 请求登出
*/
export const reqLogout = () => ajax('/api/logout')
