import request from '@/utils/request'

export default {
    getList(current = 1, size = 20) {
        return request({
            url: '/article/category/search',
            method: 'post',
        })
    }
}