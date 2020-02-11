<template>
    <div id="active">
        <el-row>
            <el-col :span="2">
                <el-button type="warning">创建活动</el-button>
            </el-col>
            <el-col :span="22">
                <div class="grid-content bg-purple">
                    <el-select v-model="value" size="mini" style="width:100px" placeholder="活动限制">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select v-model="value" size="mini" style="width:100px" placeholder="活动类型">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select v-model="value" size="mini" style="width:100px" placeholder="活动状态">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select v-model="value" size="mini" style="width:100px" placeholder="请选择城市">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select v-model="value" size="mini" style="width:100px" placeholder="无数据">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select v-model="value" size="mini" style="width:100px" placeholder="无数据">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <el-input v-model="input" size="mini" placeholder="活动名称"></el-input>
                    <el-button size="mini" type="info">查询</el-button>
                    <el-button size="mini" type="danger">清空</el-button>
                </div>
            </el-col>
        </el-row>

        <el-table
        :data="tableData"
        style="width: 100%"
        :default-sort = "{prop: 'date', order: 'descending'}"
        height="450"
        margin-top:20px;
        >
        <el-table-column prop="date" label="活动名称" align="center"> </el-table-column>
        <el-table-column prop="date" label="活动时间" align="center"> </el-table-column>
        <el-table-column prop="date" label="参与人数"  align="center"> </el-table-column>
        <el-table-column prop="date" label="活动地点" align="center"> </el-table-column>
        <el-table-column prop="date" label="联系人" align="center"> </el-table-column>
        <el-table-column prop="date" label="活动组织" align="center"> </el-table-column>
        <el-table-column prop="date" label="联系电话" align="center"> </el-table-column>
        <el-table-column prop="date" label="活动类型" align="center"> </el-table-column>
        <el-table-column prop="date" label="活动状态" align="center"> </el-table-column>
        <el-table-column prop="date" label="活动限制" align="center"> </el-table-column>
        <el-table-column prop="date" label="活动二维码" align="center"> </el-table-column>
        <el-table-column prop="date" label="活动创建时间" align="center"  sortable> </el-table-column>
        <el-table-column prop="date" label="操作" align="center"> </el-table-column>
    </el-table>
    <el-row>
        <el-col :span="7">
            <el-button size="mini" type="warning" style="margin-top:20px">导出</el-button>
            </el-col>
         <el-col :span="17">
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

                }
            },
}
</script>
<style lang="less" scoped>

</style>