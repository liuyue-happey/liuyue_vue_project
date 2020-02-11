<template>
    <div id="organization">
        <el-row>
            <el-col :span="5">
                <el-button type="primary" size="mini">创建组织</el-button>
                <el-button type="primary" size="mini">编辑组织类型</el-button>
            </el-col>
            <el-col :span="13">
                <div class="grid-content bg-purple">
                    <el-select v-model="value" size="mini" style="width:150px" placeholder="所有组织">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select v-model="value" size="mini" style="width:150px" placeholder="所有位置">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple-light">
                    <el-input size="mini" style="width:300px" placeholder="组织名称" v-model="input3" class="input-with-select">
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </div>
            </el-col>
        </el-row>
        
        <el-table
            :data="tableData"
            style="width: 100%"
            :default-sort = "{prop: 'date', order: 'descending'}"
            height="450"
            >
            <el-table-column prop="date" label="组织头像" align="center"> </el-table-column>
            <el-table-column prop="date" label="组织昵称" align="center"> </el-table-column>
            <el-table-column prop="date" label="管理员头像"  align="center"> </el-table-column>
            <el-table-column prop="date" label="管理员昵称" align="center"> </el-table-column>
            <el-table-column prop="date" label="成员数量" align="center" sortable> </el-table-column>
            <el-table-column prop="date" label="组织类型" align="center"> </el-table-column>
            <el-table-column prop="date" label="组织位置" align="center"> </el-table-column>
            <el-table-column prop="date" label="奖励积分" align="center"> </el-table-column>
            <el-table-column prop="date" label="操作" align="center"> </el-table-column>
        </el-table>
        <el-row>
         <el-col :push="7" :span="17">
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
                value:'',
                input3:'',
                tableData:[{
                    date:'测试数据'
                }],
                currentPage4:0,
                options: [{
                value: '选项1',
                label: '黄金糕'
                }],
                }
            },
        methods: {
                handleSizeChange(val) {
                    console.log(`每页 ${val} 条`);
                },
                handleCurrentChange(val) {
                    console.log(`当前页: ${val}`);
                }
    },
}
</script>
<style lang="less" scoped>
    .el-table{
        margin-top: 20px;
    }
</style>