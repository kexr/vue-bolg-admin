<template> 
    <el-dialog 
    :title="title" 
    :visible.sync="visible" 
    :before-close="handleClose" 
    width="70%"> 
        <el-form ref="formData" :model="formData" label-width="100px" label- position="right">
            <el-form-item label="标题">
                <el-input v-model="formData.title" readonly />
            </el-form-item>
            <el-form-item label="标签">

            </el-form-item>
            <el-form-item label="主图">
                <img :src="formData.imageUrl" class="avatar" style="width:178px; height:178px; display:block">
            </el-form-item>
            <el-form-item label="是否公开"> 
                <el-radio-group v-model="formData.ispublic" disabled> 
                    <el-radio :label="0" >不公开 </el-radio> 
                    <el-radio :label="1" >公开 </el-radio> 
                </el-radio-group>
            </el-form-item>
            <el-form-item label="简介">
                <el-input v-model="formData.summary" type="textarea" :autosize="{ minRows: 2 }" readonly/>
            </el-form-item>
            <el-form-item label="内容">

            </el-form-item>
            <el-form-item align="center" v-if="isAudit">
                <el-button type="primary" >审核通过</el-button> 
                <el-button type="danger">审核不通过</el-button>
            </el-form-item>
        </el-form>
    </el-dialog> 
</template>

<script> 
    import api from '@/api/article.js';

    export default {
        data(){
            return {
                formData: {}
            }
        },
        props: {
            id: null, // 文章id 
            isAudit: true, // 是否为审核页面，false 为详情页 
            visible: { //弹出隐藏 
                type: Boolean, 
                default: false 
            },
            title: { // 标题 
                type: String, 
                default: '' 
            },
            remoteClose: Function // 用于关闭窗口
        },
        watch: {
            visible(val){
                if(val === true){
                    this.getArticleById()
                }
            }
        },
        methods: { // 关闭弹窗 
            handleClose() { 
                // 因为 visible 是父组件的属性，所以要让父组件去改变值 
                this.remoteClose();
            },
            getArticleById(){
                api.getById(this.id).then((res)=>{
                    this.formData = res.data;
                    console.log(this.formData)
                });
            }
        }
    }
</script>
