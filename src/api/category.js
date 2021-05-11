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
    },
    add(data) {        
        return request({            
            url: `/article/category`,            
            method: 'post',            
            data        
        })    
    },
    getByID(id) {
        return request({            
            url: `/article/category/${id}`,            
            method: 'get',                    
        })  
    },
    update(data) {
        return request({            
            url: `/article/category`,            
            method: 'put', 
            data                   
        })  
    },
    getNormalList(){
        return request({            
            url: `/article/category/list`,            
            method: 'get',                    
        }) 
    }
}