<template>
    <div>文章管理</div>
</template>    

<script>
import api from '@/api/article.js'

export default {
    name: 'Article',
    data(){
        return {
            list: [], 
            page: { // 分页相关 
                total: 0, // 总记录数 
                current: 1, // 当前页码 
                size: 20, // 每页显示20条数据, 
            },
            query: {} // 查询条件
        }
    },
    created(){
        this.fetchData();
    },
    methods: {
        fetchData(){
            api.getList(this.query,this.page.current,this.page.size).then((res) => {
                this.list = res.data.records;
                this.page.total = res.data.total;
                console.log(this.list)
            })
        }
    }
}
</script>