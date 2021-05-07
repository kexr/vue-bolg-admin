<template>
    <div>分类管理</div>
</template>    

<script>
import api from '@/api/category.js'

export default {
    name: 'Category',
    data(){
        return{
            query: {} // 查询条件
        }
    },
    created(){
        this.fetchData();
    },
    methods: {
        fetchData(){
            api.getList().then(response => {          
                console.log(response)             
            })
        }
    }
}
</script>