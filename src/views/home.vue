<!--
 * @Description:首页，所有电脑横机的列表+详情视图
 * @Autor: anlythree
 * @Date: 2020-11-21 13:34:24
 * @LastEditors: anlythree
 * @LastEditTime: 2020-11-30 17:43:55
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

        <van-cell-group>
            <van-cell title="haha" value="hah" label="已运行3小时9分钟" />
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
          machineList: [{}]
      }
  },
  methods: {
    
  refreshList() {
    let _this = this;
    _this.$axios.post('/api/machine/machine/queryMachineInfo').then(response =>{
        let d = response.data;
        if(d.code == 0){
            // 接口请求成功
            alert("接口请求成功");
        }else{
            // 接口请求失败
            alert("接口请求失败");
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
    
</style>

