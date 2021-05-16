import request from "@/utils/request"

export default {    // 列表分页接口    
    getList(query, current = 1, size = 20) {        
        return request({            
            url: `/article/label/search`,            
            method: 'post',            
            data: { ...query, current, size } // 合并成一个对象        
        })    
    },
    add(data) {        
        return request({            
        url: `/article/label`,            
        method: 'post',            
        data
        })
    },
    update(data) { 
        return request({ url: `/article/label`, method: 'put', data})
    },
    getById(id) { 
        return request({ url: `/article/label/${id}`, method: 'get'})
    }
}     
