<template>
    <div class="login">
        <p class="loginT">欢迎使用</p> 
        <div class="input">
            <el-input v-model="userName" placeholder="账号" style="margin-bottom:30px"></el-input>
            <el-input v-model="passWord" placeholder="密码" style="margin-bottom:30px"></el-input>
            <el-button type="warning" style="width:250px" @click="login">登录</el-button>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                userName:'',
                passWord:'',

            };
        },
        methods:{
            login(){
                this.$router.push({path:'/index'})
            }
        }
        
        }
</script>
<style>
    .login{
        width:600px;
        height: 500px;
        background-color: rgb(251, 251, 251);
        border-radius: 20px;
        box-shadow: 0 0 10px 1px gray;
        margin: 0 auto;
        margin-top: 120px;
        padding-top: 15px;
    }
    .loginT{
        color: rgb(254, 131, 20);
        text-align: center;
        font-size: 45px;
    }
    .input{
        width: 250px;
        height: 200px;
        margin: 0 auto;
    }
</style>