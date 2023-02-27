// 封装baseUrl
const baseUrl = "http://localhost:8080"
export const getBaseUrl = () => {
  return baseUrl
}
/**
 * 后端请求工具类
 * @param {*} params 
 */
export const requestUtil = (params) => {
  return new Promise((resolve, reject)=>{
    wx.request({
      ...params,
      url:baseUrl + params.url,
      success:((res)=>{
        resolve(res.data)
      }),
      fail:((err)=>{
        reject(err)
      })
    })
  })
}