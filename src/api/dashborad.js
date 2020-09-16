import request from '@/utils/request'


export function chartInfo(data) {
  return request({
    url: '/api/chartInfo',
    method: 'post',
    data
  })
}
