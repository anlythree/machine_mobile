<!--
 * @Description:首页，所有电脑横机的列表+详情视图
 * @Autor: anlythree
 * @Date: 2020-11-21 13:34:24
 * @LastEditors: anlythree
 * @LastEditTime: 2020-12-01 19:46:48
-->


<template>

  <div id="app">
      
        <van-nav-bar class="bar_sty"
        title="电脑横机列表"
        @click-left="onClickLeft"
        @click-right="onClickRight"
        safe-area-inset-top=true
        />
    
    <van-pull-refresh v-model="isLoading" success-text="刷新成功" @refresh="refreshList" >
        
    <div>

        <van-cell-group v-for="(item,index) in machineList" :key="index" >
            <van-cell :title="item.machineName" :value="item.machineStatus" label="已运行3小时9分钟" :class="item.machineColorStatus" />
        </van-cell-group>
        
    </div>
    </van-pull-refresh>
    
  </div>
  

</template>


<script>

import Vue from 'vue';
import { NavBar } from 'vant';
import { Toast } from 'vant';


Vue.use(NavBar);

export default {
  name:'machine_list',
  data(){
      return{
          msg:'电脑横机列表视图',
          isLoading: false,
          machineList: []
      }
  },
  mounted:function () {
      this.refreshList();
      
      setInterval(() => {
            this.refreshList() // 刷新列表
        }, 10000);
  },
  methods: {
    
  refreshList(data) {
    let _this = this;
    _this.$axios.post('/api/machine/machine/queryMachineInfo').then(response =>{
        let d = response.data;
        if(d.code == 0){
            // 接口请求成功
            let records = d.data;
            if (records.length == 0) {
                        Toast.fail("暂无横机列表");
                        return;
            }
            // 赋值横机列表machineList
            records.map(item => {
                
                _this.machineList = [];
                records.map(item =>{
                    let machineStatus = "";
                    let colorClass = "";
                    if(item.machineStatus == "4" ){
                        machineStatus = "离线";
                        colorClass = "statusTypeNotOnline";
                    }else if(item.machineStatus == "0"){
                        machineStatus = "关机";
                        colorClass = "statusTypeShutDown";
                    }else if(item.machineStatus == "1"){
                        machineStatus = "运行中...";
                        colorClass = "statusTypeRunning";
                    }else if(item.machineStatus == "2"){
                        machineStatus = "暂停中...";
                        colorClass = "statusTypePending";
                    }else if(item.machineStatus == "3"){
                        machineStatus = "报警中...";
                        colorClass = "statusTypeError";
                    }
                    _this.machineList.push(
                        {
                        "machineName":item.machineName,
                        "machineStatus":machineStatus,
                        "machineOpenTime":item.machineOpenTime,
                        "machineColorStatus":colorClass
                        }
                    )
                });
            });
            Toast.success('刷新成功');
        }else{
            // 接口请求失败
            Toast.fail('未连接');
        }
    });
    // 返回刷新成功
      this.isLoading = false;
  }
  },

}
</script>

<style scoped>
    .bar_sty{
    background: #0bada8;
    }
    
    .van-nav-bar__title{
    font-size: .35rem;
    color:rgb(255, 255, 255);
    }
    /* 修改导航栏字体颜色为白色 */
    /deep/ .van-ellipsis{
	color: #fff !important;
    }
    
    /* 配置单元格样式 */
    .custom-title {
    margin-right: 4px;
    vertical-align: middle;
    }

    .search-icon {
    font-size: 16px;
    line-height: inherit;
    }

    /* 运行状态 */
    .statusTypeRunning{
        background-color:#e9fae1;
    }

    /* 报警状态 */
    .statusTypeError{
        background-color:#ffdbdb;
    }
    /* 暂停状态 */
    .statusTypePending{
        background-color:#fdf3e4;
    }
    /* 关机状态 */
    .statusTypeShutDown{
        background-color: darkgrey;
    }

    /* 离线状态 */
    .statusTypeNotOnline{
        background-color: ;
    }
    
    
</style>

