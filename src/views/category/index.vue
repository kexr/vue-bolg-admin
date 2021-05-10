<template>
    <div>
        <el-form :inline="true" :model="query" class="demo-form-inline" size="mini">
            <el-form-item label="分类名称">
                <el-input v-model="query.name"></el-input>
            </el-form-item>
            <el-form-item label="状态">
                <el-select v-model="query.status" clearable filterable style="width: 85px">
                    <el-option v-for="item in statusOptions" :key="item.code" :label="item.name" :value="item.code"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button icon='el-icon-search' type="primary" @click="queryData">查询</el-button>    
                <el-button icon='el-icon-refresh' @click="reload">重置</el-button>    
                <el-button type="primary" icon="el-icon-circle-plus-outline" @click="openAdd()">新增</el-button>
            </el-form-item>
        </el-form>

        <el-table
            :data="list"
            border
            style="width: 100%">
            <el-table-column
                align="center"
                type="index"
                label="序号"
                width="60">
            </el-table-column>
            <el-table-column
                align="center"
                prop="name"
                label="分类名称"
            >
            </el-table-column>
            <el-table-column
                align="center"
                prop="sort"
                label="排序"
            >
            </el-table-column>
            <el-table-column
                align="center"
                prop="remark"
                label="备注"
            >
            </el-table-column>
            <el-table-column
                align="center"
                prop="status"
                label="状态"
                width="160">
                <template slot-scope="scope">
                    <el-tag :type="scope.row.status | statusFilter">
                        {{scope.row.status ? '正常':'禁用' }}
                    </el-tag>
                </template>
            </el-table-column>
            <el-table-column
                align="center"
                label="操作"
            >
                <template slot-scope="scope">
                    <el-button @click="handleEdit(scope.row.id)" size="mini">编辑</el-button> 
                    <el-button type="danger" size="mini">删除</el-button> 
                </template>
            </el-table-column>
        </el-table>

        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="page.current"
            :page-sizes="[10, 20, 50]"
            :page-size="page.size"
            layout="total, sizes, prev, pager, next, jumper"
            :total="page.total">
        </el-pagination>

        <edit 
        :title="edit.title" 
        :dialogVisible="edit.visible"           
        :formData="edit.formData"
        @remote="remoteClose"
        >
        </edit>
    </div>
</template>    

<script>
import api from '@/api/category.js'
import Edit from './edit.vue'

const statusOptions = [    
    {code: 0, name: '禁用'},    
    {code: 1, name: '正常'}
]

export default {
    name: 'Category',
    components: { Edit },
    data() {    
        return {      
            list: [],      
            page: { // 分页相关          
                total: 0, // 总记录数          
                current: 1, // 当前页码          
                size: 20, // 每页显示20条数据,      
            },      
            query: {}, // 查询条件
            statusOptions,
            edit: {
                title: '',
                visible: false,
                formData: {
                    'name': '',
                    status: '',
                    sort: '',
                    remart: ''
                },
            }     
        }  
    },
    created(){
        this.fetchData();
    },
    methods: {
        fetchData(){
            api.getList(this.query, this.page.current, this.page.size).then(response => {          
                console.log(response); 
                this.list = response.data.records;
                this.page.total = response.data.total;            
            })
        },
        handleSizeChange(val){
            this.page.size = val;
            this.fetchData();
        },
        handleCurrentChange(val){
            this.page.current = val;
            this.fetchData();
        },
        queryData() {      
	        // 将页码变为第1页      
	        this.page.current = 1;      
	        this.fetchData();    
        },
        reload() {      
 	        this.query = {};      
 	        this.fetchData();    
        },
        openAdd(){
            this.edit.visible = true;
            this.edit.title = '新增';
        },
        remoteClose(){
            this.formData = {
                'name': '',
                status: '',
                sort: '',
                remart: ''
            };
            this.edit.visible = false;
            this.fetchData();
        },
        handleEdit(id){
            api.getByID(id).then(res => {
                if(res.code === 20000){
                    this.edit.formData = res.data;
                    this.edit.title = '编辑';
                    this.edit.visible = true;
                }
            })
        }
    },
    filters: {
        statusFilter(status) {
            const statusMap = {0: 'danger', 1: 'success'}      
            // status等于0返回danger, 1返回success      
            return statusMap[status]
        }
    }
}
</script>