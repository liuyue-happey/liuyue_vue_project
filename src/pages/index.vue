<template>
    <div id="app">
        <el-container>
        <el-header id="header">
            <el-row>
            <el-col :span="19">
                <div class="grid-content bg-purple">阳光好帮手</div>
            </el-col>
            <el-col :span="5">
                <div class="grid-content bg-purple-light">
                    admin
                     <el-button type="primary" size="mini" plain>退出</el-button>
                     <el-button type="primary" size="mini" plain>修改密码</el-button>
                </div>
            </el-col>
            </el-row>
        </el-header>
        <el-container id="container">
        <el-aside width="200px">
            <el-row class="tac">
                <el-col :span="24">
                    <el-menu
                    default-active="/index/user"
                    class="el-menu-vertical-demo"
                    :router="true">
                   
                    <el-menu-item index="/index/user">
                        <i class="el-icon-menu"></i>
                        <span slot="title">用户管理</span>
                    </el-menu-item>
                    <el-menu-item index="/index/organization" >
                        <i class="el-icon-document"></i>
                        <span slot="title">组织管理</span>
                    </el-menu-item>
                    <el-menu-item index="/index/active">
                        <i class="el-icon-setting"></i>
                        <span slot="title">活动管理</span>
                    </el-menu-item>
                    <el-menu-item index="/index/shop">
                        <i class="el-icon-menu"></i>
                        <span slot="title">商品管理</span>
                    </el-menu-item>
                    <el-menu-item index="/index/change">
                        <i class="el-icon-menu"></i>
                        <span slot="title">兑换管理</span>
                    </el-menu-item>
                    <el-menu-item index="/index/check">
                        <i class="el-icon-menu"></i>
                        <span slot="title">审核管理</span>
                    </el-menu-item>
                    <el-menu-item index="/index/num">
                        <i class="el-icon-menu"></i>
                        <span slot="title">积分管理</span>
                    </el-menu-item>
                    <el-menu-item index="/index/message">
                        <i class="el-icon-menu"></i>
                        <span slot="title">留言反馈</span>
                    </el-menu-item>
                    <el-menu-item index="/index/system">
                        <i class="el-icon-menu"></i>
                        <span slot="title">系统设置</span>
                    </el-menu-item>
                    <el-menu-item index="/index/older">
                        <i class="el-icon-menu"></i>
                        <span slot="title">老人信息管理</span>
                    </el-menu-item>
                    <el-menu-item index="/index/volunteers">
                        <i class="el-icon-menu"></i>
                        <span slot="title">志愿者信息管理</span>
                    </el-menu-item>
                    </el-menu>
                </el-col>
            </el-row>
        </el-aside>
        <el-main><router-view></router-view></el-main>
        </el-container>
        </el-container>
    </div>
</template>
<script>
    export default{
        data(){
            return{

            }
        },
        mounted(){
            let header = document.getElementById('header');
            let container = document.getElementById('container');
            container.style.height = innerHeight - header.offsetHeight + 'px';
        }
    }
</script>
<style>
    .el-header{
    background-color:rgb(255, 131, 20);
    color:white;
    line-height: 60px;
  }
  
  .el-aside {
    background-color:white;
    color: #333;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .el-menu-item{
      border-bottom:solid 1px rgb(241,241,241);
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
</style>