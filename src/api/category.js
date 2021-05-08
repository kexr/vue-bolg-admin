import request from '@/utils/request'

export default {
    getList(query, current = 1, size = 20) {
        return request({
            url: '/article/category/search',
            method: 'post',
            data: {
                ...query,
                current,
                size
            }
        })
    }
}