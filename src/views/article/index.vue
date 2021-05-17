<template>
    <div>
        <el-table 
        :data="list" 
        border 
        highlight-current-row 
        style="width: 100%"
        > 
        <!-- type="index"获取索引值，从1开始 ，label显示标题，prop 数据字段名，width列宽 --> 
            <el-table-column align="center" type="index" label="序号" width="60"></el-table-column>
            <el-table-column align="center" prop="title" label="文章标题" > </el-table-column> 
            <el-table-column align="center" prop="viewCount" label="浏览量" > </el-table-column> 
            <el-table-column align="center" prop="thumhup" label="点赞数" > </el-table-column> 
            <el-table-column align="center" prop="ispublic" label="是否公开">
                <template slot-scope="scope"> 
                    <el-tag v-if="scope.row.ispublic === 0" type="danger">不公开</el-tag> 
                    <el-tag v-if="scope.row.ispublic === 1" type="warning">公开</el-tag> 
                </template> 
            </el-table-column> 
            <el-table-column align="center" prop="status" label="状态"> 
                <template slot-scope="scope"> 
                    <el-tag v-if="scope.row.status === 1" >未审核</el-tag> 
                    <el-tag v-if="scope.row.status === 2" type="success">审核通过</el-tag> 
                    <el-tag v-if="scope.row.status === 3" type="warning">审核未通过</el-tag> 
                    <el-tag v-if="scope.row.status === 0" type="danger">已删除</el-tag> 
                </template> 
            </el-table-column> 
            <el-table-column align="center" prop="updateDate" label="最后更新时间" > </el-table-column> 
            <el-table-column align="left" label="操作" width="220"> 
                <template slot-scope="scope" > 
                    <el-button 
                    size="mini" 
                    v-if="scope.row.status === 1" 
                    @click="openAudit(scope.row.id)" 
                    type="success">审核
                    </el-button> 
                    <el-button 
                    size="mini" 
                    v-if="scope.row.status !== 0" 
                    @click="handleDelete(scope.row.id)" 
                    type="danger">删除
                    </el-button> 
                </template> 
            </el-table-column> 
        </el-table>

        <el-pagination 
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange" 
        :current-page="page.current" 
        :page-sizes="[10, 20, 50]" 
        :page-size="page.size" 
        :total="page.total" 
        layout="total, sizes, prev, pager, next, jumper" > 
        </el-pagination>

        <el-form :inline="true" size="mini">
            <el-form-item label="文章标题">
                <el-input v-model="query.title"></el-input>
            </el-form-item>
            <el-form-item label="状态">
                
            </el-form-item>
            <el-form-item>
                <el-button icon='el-icon-search' type="primary">查询</el-button>
                <el-button icon='el-icon-refresh' class="filter-item">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
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
                // console.log(this.list)
            })
        },
        handleSizeChange(val) { 
            this.page.size = val; 
            this.fetchData(); 
        },
        handleCurrentChange(val) { 
            this.page.current = val; 
            this.fetchData(); 
        },
    }
}
</script>