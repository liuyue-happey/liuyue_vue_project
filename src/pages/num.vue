<template>
    <div id="num">
        <el-tabs type="border-card">
        <el-tab-pane label="阳光积分"><numone></numone></el-tab-pane>
        <el-tab-pane label="志愿者积分">配置管理</el-tab-pane>
        <el-tab-pane label="积分等级">角色管理</el-tab-pane>
        <el-tab-pane label="发布奖励积分">定时任务补偿</el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
    export default {
        data(){
            return{

                }
            },
        components:{
            numone:require("../components/numone").default
        }
}
</script>
<style lang="less" scoped>

</style>