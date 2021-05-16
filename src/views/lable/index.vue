<template>
    <div>
        <el-form :inline="true" :model="query" class="demo-form-inline" size="mini">
            <el-form-item label="分类名称">
                <el-input v-model="query.name"></el-input>
            </el-form-item>
            <el-form-item label="状态">
                <el-select v-model="query.status" clearable filterable style="width: 85px">
                    <el-option v-for="item in categoryList" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button icon='el-icon-search' type="primary" @click="queryData">查询</el-button>    
                <el-button icon='el-icon-refresh' @click="reload">重置</el-button>    
                <el-button type="primary" icon="el-icon-circle-plus-outline"  @click="openAdd()">新增</el-button>
            </el-form-item>
        </el-form>

        <el-table
            :data="list"
            border
            style="100%"
        >
            <el-table-column
                align="center"
                type="index"
                label="序号"
                width="60">
            </el-table-column>
            <el-table-column
                align="center"
                prop="name"
                label="标签名称"
            >
            </el-table-column>
            <el-table-column
                align="center"
                prop="categoryName"
                label="分类名称"
            >
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
            :categoryList="categoryList"
            @remote="remoteClose"
        >
        </edit>   
    </div>
</template>    

<script>
import api from '@/api/label.js'
import apiCategory from '@/api/category.js'
import Edit from './edit.vue'

export default {
    name: 'Label',
    components: {
        Edit
    },
    data(){
        return {
            list: [],      
            page: { // 分页相关          
                total: 0, // 总记录数          
                current: 1, // 当前页码          
                size: 20, // 每页显示20条数据,      
            },      
            query: {}, // 查询条件
            categoryList: [],
            edit: {
                title: '',
                visible: false,
                formData: {
                    'name': '',
                    categoryId: '',
                },
            } 
        }
    },
    created(){
        this.fetchData();
        this.getCategoryList();
    },
    methods: {
        fetchData(){
            api.getList(this.query, this.page.current, this.page.size).then((res)=>{
                console.log(res)
                this.list = res.data.records;
                this.page.total = res.data.total;
            })
        },
        handleEdit(id){
            // console.log('编辑', id) 
            api.getById(id).then(response => { 
                if(response.code === 20000) { 
                    this.edit.formData = response.data //弹出窗口 
                    this.edit.visible = true; 
                    this.edit.title = '编辑' 
                } 
            }) 
        },
        handleCurrentChange(val){
            this.page.current = val;
            this.fetchData();
        },
        handleSizeChange(val){
            this.page.size = val;
            this.fetchData();
        },
        getCategoryList(){
            apiCategory.getNormalList().then((res) => {
                this.categoryList = res.data;
            })
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
        openAdd() {
            this.edit.visible = true;
            this.edit.title = '新增';
        },
        remoteClose(){
            this.formData = {
                'name': '',
                categoryId: '',
            };
            this.edit.visible = false;
            this.fetchData();
        }
    }
}
</script>