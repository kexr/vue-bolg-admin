import request from '@/utils/request'
import store from '@/store'
console.log(store)

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
    },
    add(data) {        
        return request({            
            url: `/article/category`,            
            method: 'post',            
            data        
        })    
    }
}