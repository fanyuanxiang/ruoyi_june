import request from '@/utils/request'

// 查询图片文件列表
export function listImg(query) {
  return request({
    url: '/fileimg/img/list',
    method: 'get',
    params: query
  })
}

// 查询图片文件详细
export function getImg(imgId) {
  return request({
    url: '/fileimg/img/' + imgId,
    method: 'get'
  })
}

// 新增图片文件
export function addImg(data) {
  return request({
    url: '/fileimg/img',
    method: 'post',
    data: data
  })
}

// 修改图片文件
export function updateImg(data) {
  return request({
    url: '/fileimg/img',
    method: 'put',
    data: data
  })
}

// 删除图片文件
export function delImg(imgId) {
  return request({
    url: '/fileimg/img/' + imgId,
    method: 'delete'
  })
}

// 导出图片文件
export function exportImg(query) {
  return request({
    url: '/fileimg/img/export',
    method: 'get',
    params: query
  })
}