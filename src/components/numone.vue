<template>
    <div id="app">
        <el-form ref="form" :model="form" label-width="80px" size="mini">
        <el-form-item label="用户姓名">
            <el-input style="width:200px" v-model="form.name" ></el-input>
        </el-form-item>
        </el-form>

        <el-table
        :data="tableData"
        style="width: 100%"
        :default-sort = "{prop: 'date', order: 'descending'}"
        height="450"
        >
        <el-table-column prop="date" label="用户姓名" align="center"> </el-table-column>
        <el-table-column prop="date" label="联系电话" align="center"> </el-table-column>
        <el-table-column prop="date" label="所属街道"  align="center"> </el-table-column>
        <el-table-column prop="date" label="身份证号码" align="center"> </el-table-column>
        <el-table-column prop="date" label="阳光积分" align="center"> </el-table-column>
        <el-table-column prop="date" label="操作" align="center"> </el-table-column>
    </el-table>
    <el-row >
        <el-col :span="10" :push="6" >
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400"
                style="margin-top:20px">
            </el-pagination>        
        </el-col>
    </el-row>
    </div>
</template>
<script>
export default {
    data(){
        return{
            form:{
                name:'',
                },
        tableData:[],
        currentPage4:0,
        }
    },
    methods:{
        handleSizeChange(){

        },
        handleCurrentChange(){

        },

    }
}
</script>
<style lang="less" scoped>

</style>