<template>
    <el-dialog
    :title="title"
    :visible.sync="dialogVisible"
    width="500px"
    :before-close="handleClose">
        <!-- <span>绘制表单</span> -->

        <el-form 
        status-icon
        :model="formData"
        style="width: 400px;"
        label-width="100px"
        label-position="right" 
        :rules="rules"  
        ref="formData"        
        >
            <el-form-item label="标签名称:" prop="name" >
                <el-input v-model="formData.name" />
            </el-form-item>
            <el-form-item label="分类名称:" prop="categoryId" >
                <el-select v-model="formData.categoryId" clearable filterable style="width: 85px">
                    <el-option v-for="item in categoryList" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button @click="handleClose" size='mini'>取 消</el-button>
                <el-button type="primary" @click="submitForm('formData')" size='mini'>确 定</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>

<script>
import api from '@/api/label.js'

export default {
    name: 'Edit',
    props: {
        dialogVisible: {
            type: Boolean,
            default: false
        },
        formData: {
            type: Object,
            default: {}
        },
        title: {
            type: String,
            default: ''
        },
        categoryList: {
            type: Array,
            default: []            
        }
    },
    data(){
        return {
            rules: {
                name: [{required: true, message: '请输入名称', trigger: 'blur' }],
                categoryId: [{required: true, message: '请选择分类名称', trigger: 'change' }]
            }
        }
    },
    methods: {
        handleClose(done){
            this.$emit("remote");
        },
        submitForm(formName){
            this.$refs[formName].validate((valid) => {
                if(valid){
                    this.submitData();
                }else {
                    return false;
                }
            })
        },
        async submitData(){
            let res = null;
            if(this.formData.id){
                res = await api.getByID(this.formData.id);
            }else {
                res = await api.add(this.formData);
            }
            if(res.code === 20000){
                this.$message({
                    message: '保存成功',
                    type: 'success'
                });
                 this.handleClose();
            }else {
                this.$message({
                    message: '保存失败',
                    type: 'error'
                });
             }
        }
    }
}
</script>
