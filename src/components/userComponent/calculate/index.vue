<template>
  <div class="contentBox" style="overflow-x: hidden">
    <div class="cal">
      <p>碳排放大于碳吸收的系统为碳源，反之则为碳汇。</p>
      <p>碳排放计算公式：Et=Gf*a+Am+b+Wm*c+Gs*d+Gi*e+Ge*f+Gp*g</p>
      <p>
        Gf:化肥使用量;Am:农作物种植面积;Wm:农业机械总动力;Gs:农用柴油;Gi:农业灌溉面积;Ge:农膜使用面积;Gp:农药使用量
      </p>
      <p>
        a、b、c、d、e、f、g：转换系数，数值分别为0.8956kg/kg、16.47kg/ℎ𝑚<sup>2</sup>、0.18kg/kW、0.5927kg/kg、266.48kg/ℎ𝑚<sup>2</sup>、5.18kg/kg、4.9341kg/kg
      </p>
      <p>农作物大气固碳计算公式：Ct=&sum;Cf*Yw/Hi</p>
      <p>Cf:i类农作物碳吸收率;Yw:i类农作物经济产量;Hi:i类农作物经济系数</p>
      <div class="boxall" style="height: calc(33.333% - 0.15rem)">
        <div class="alltitle">农作物碳吸收率与经济系数表(单位:万吨)</div>
        <div class="boxnav" id="">
          <table border="3" cellspacing="1">
            <tbody>
              <tr style="border: 2px">
                <th style="border: 2px"></th>
                <th style="border: 2px">蔬菜</th>
                <th style="border: 2px">水稻</th>
                <th style="border: 2px">小麦</th>
                <th style="border: 2px">玉米</th>
                <th style="border: 2px">薯类</th>
                <th style="border: 2px">大豆</th>
                <th style="border: 2px">花生</th>
                <th style="border: 2px">油菜</th>
              </tr>
              <tr>
                <th>经济系数</th>
                <td>0.600</td>
                <td>0.450</td>
                <td>0.400</td>
                <td>0.400</td>
                <td>0.700</td>
                <td>0.340</td>
                <td>0.430</td>
                <td>0.250</td>
              </tr>
              <tr>
                <th>碳吸收率</th>
                <td>0.450</td>
                <td>0.414</td>
                <td>0.485</td>
                <td>0.471</td>
                <td>0.423</td>
                <td>0.450</td>
                <td>0.450</td>
                <td>0.450</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p>净碳汇计算公式：Nt=Ct-Et</p>
      <p>Nt:农田生态系统的净碳汇;Ct:碳吸收量;Et:碳排放量</p>
      <p>
        碳排放强度、碳吸收强度及净碳汇强度的值分别等于碳排放量、碳吸收量及净碳汇量除以耕地面积。
      </p>
    </div>

    <div id="app">
      <div
        style="
          width: 30%;
          text-align: center;
          margin-top: 10px;
          margin-bottom: 60px;
        "
      >
        <div style="width: 20%; float: right">
          <el-button
            slot="append"
            style="color: #0b5ed7"
            @click="dialogFormVisible1 = true"
            >碳汇计算</el-button
          >
        </div>
        <div style="float: left; width: 80%">
          <el-input v-model="input" placeholder="请输入农作物名称">
            <el-button
              size="mini"
              slot="append"
              style="color: #0b5ed7"
              @click="mohuSearch"
              >查询</el-button
            >
          </el-input>
        </div>
      </div>

      <el-table
        :data="listData"
        style="
          width: 100%;
          margin-top: 10px;
          margin-left: 5px;
          border-radius: 5px;
        "
        max-height="80%"
      >
        <el-table-column fixed label="#" width="80" prop="cropId">
        </el-table-column>
        <el-table-column label="农作物名" width="120" prop="cropName">
        </el-table-column>
        <el-table-column label="月份" width="80" prop="month">
        </el-table-column>
        <el-table-column
          label="碳排放强度(千克/公顷)"
          width="120"
          prop="emissionIntensity"
        >
        </el-table-column>
        <el-table-column
          label="碳吸收强度(千克/公顷)"
          width="120"
          prop="absorptionIntensity"
        >
        </el-table-column>
        <el-table-column
          label="净碳汇强度(千克/公顷)"
          width="120"
          prop="carbonSink"
        >
        </el-table-column>
        <!--------------------------------------编辑删除按钮------------------------------------------------>
        <el-table-column fixed="right" label="操作" width="400">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="
                (dialogFormVisible = true), handleEdit(scope.$index, scope.row)
              "
              >新数据分析</el-button
            >
            <el-button
              size="mini"
              type="danger"
              plain
              @click="deletes(scope.row)"
              icon="el-icon-delete"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <div
        style="
          width: 100%;
          margin-top: 10px;
          margin-left: 35%;
          border-radius: 3px;
        "
      >
        <el-button size="mini" @click="upt()">上一页</el-button>

        <el-button size="mini" @click="next()">下一页</el-button>
      </div>
      <!--------------------------------------编辑菜品------------------------------------------------>
      <el-dialog title="更新碳汇数据" :visible.sync="dialogFormVisible">
        <el-form :model="up">
          <el-form-item label=" " :label-width="formLabelWidth">
            <el-input
              v-model="up.cropId"
              autocomplete="off"
              disabled="true"
            ></el-input>
          </el-form-item>
          <el-form-item label="农作物名称" :label-width="formLabelWidth">
            <el-input v-model="up.cropName" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="月份" :label-width="formLabelWidth">
            <el-input v-model="up.month" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="化肥使用量(千克)" :label-width="formLabelWidth">
            <el-input v-model="up.fertilizer" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="农药使用量(千克)" :label-width="formLabelWidth">
            <el-input v-model="up.pesticide" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item
            label="农作物种植面积(公顷)"
            :label-width="formLabelWidth"
          >
            <el-input v-model="up.area" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item
            label="农业灌溉面积(公顷)"
            :label-width="formLabelWidth"
          >
            <el-input v-model="up.irrigate" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item
            label="农膜使用面积(公顷)"
            :label-width="formLabelWidth"
          >
            <el-input v-model="up.film" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item
            label="农业机械总动力(千瓦)"
            :label-width="formLabelWidth"
          >
            <el-input v-model="up.Wm" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item
            label="农用柴油使用量(千瓦)"
            :label-width="formLabelWidth"
          >
            <el-input v-model="up.Gs" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="农作物经济系数" :label-width="formLabelWidth">
            <el-input v-model="up.coefficient" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="农作物碳吸收率" :label-width="formLabelWidth">
            <el-input v-model="up.absorption" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item
            label="农作物经济产量(千克)"
            :label-width="formLabelWidth"
          >
            <el-input v-model="up.output" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" v-on:click="updates()">提交</el-button>
        </div>
        <!--------------------------------------添加菜品------------------------------------------------>
      </el-dialog>
      <el-dialog title="输入计算参数" :visible.sync="dialogFormVisible1">
        <el-form :model="add">
          <el-form-item label="农作物名称" :label-width="formLabelWidth">
            <el-input v-model="add.cropName" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="月份" :label-width="formLabelWidth">
            <el-input v-model="add.month" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="化肥使用量(kg)" :label-width="formLabelWidth">
            <el-input v-model="add.fertilizer" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="农药使用量(kg)" :label-width="formLabelWidth">
            <el-input v-model="add.pesticide" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="种植面积(hm2)" :label-width="formLabelWidth">
            <el-input v-model="add.area" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="灌溉面积(kg)" :label-width="formLabelWidth">
            <el-input v-model="add.irrigate" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="农膜面积(kg)" :label-width="formLabelWidth">
            <el-input v-model="add.film" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="机械总动力(kw)" :label-width="formLabelWidth">
            <el-input v-model="add.Wm" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="柴油使用量(kw)" :label-width="formLabelWidth">
            <el-input v-model="add.Gs" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="农作物经济系数" :label-width="formLabelWidth">
            <el-input v-model="add.coefficient" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="农作物碳吸收率" :label-width="formLabelWidth">
            <el-input v-model="add.absorption" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item
            label="农作物经济产量(kg)"
            :label-width="formLabelWidth"
          >
            <el-input v-model="add.output" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button
            @click="
              dialogFormVisible1 = false;
              resetForm('add');
            "
            >取 消</el-button
          >
          <el-button type="primary" @click="submitf">提交</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

import "@/assets/css/login.css";
import "@/assets/css/goods.css";
export default {
  name: "calculatePages",
  data() {
                return {
                    info:[],
                    a:0.8956,
                    b:16.47,
                    c:266.48,
                    d:5.18,
                    e:4.9341,
                    f:0.18,
                    g:0.5927,
                    add:{
                        cropName:'小麦',
                        month:'3月份' ,
                        fertilizer:'',
                        pesticide:'',
                        area:'',
                        irrigate:'',
                        film:'',
                        Wm:'',
                        Gs:'',
                        coefficient:'0.400',
                        absorption:'0.485',
                        output:'',
                    },
                    up:{
                        cropName:'小麦',
                        month:'4月份' ,
                        fertilizer:'',
                        pesticide:'',
                        area:'',
                        irrigate:'',
                        film:'',
                        Wm:'',
                        Gs:'',
                        coefficient:'0.400',
                        absorption:'0.485',
                        output:'',
                    },
                    listData:[],
                    calData:{
                        cropName:'',
                        month:'' ,
                        emissionIntensity:0,
                        absorptionIntensity:0,
                        carbonSink:0
                    },
                    emiAdd:0,
                    absAdd:0,
                    carAdd:0,
                    updata:'',
                    input:'',
                    cropId:'',
                    tableData:{},
                    dialogFormTitle: "",
                    dialogFormVisible: false,
                    dialogFormVisible1: false,
                    formLabelWidth: '120px',
                    tableDatas: {
                        // listdata:[],
                        formdata:{},
                        num:0,
                        total:'',
                        size:6,
                        page:0
                    },
                    result:{
                        cropName:'',
                        month:'' ,
                        emissionIntensity:0,
                        absorptionIntensity:0,
                        carbonSink:0
                    },
                }
            },
            created(){
                // this.getAll();
            },
            methods: {
                resetForm(formName){
                    this.$refs[formName].resetFields();
                },
                getAll(){
                this.tableDatas.page =(this.tableDatas.num)*(this.tableDatas.size),
                    console.log(this.tableDatas.num);
                axios.get("http://localhost:8888/crop/pages?num="+this.tableDatas.page+"&size="+this.tableDatas.size).then(res=>{
                    console.log(res.data.records);
                    this.listData=res.data.records;
                    this.tableDatas.total=res.data.total;

                    });
                },
                next(){
                    if(this.tableDatas.num<this.tableDatas.total-1){
                        this.tableDatas.num++;
                    }else
                        alert("已经是最后一页了")
                    this.getAll();
                },
                upt(){
                    if(this.tableDatas.page>0){
                        this.tableDatas.num--;
                    }else{
                        alert("已经是第一页了")
                    }
                    this.getAll();
                },
                handleEdit(index, row) {
                    axios.get("http://localhost:8888/crop/selectId?id="+row.cropId).then(rel => {
                        this.up=rel.data;
                    })
                },
                submitf() {
                    this.result.cropName=this.add.cropName;
                    this.result.month=this.add.month;
                    this.result.emissionIntensity=(this.add.fertilizer*this.a+this.add.pesticide*this.e+this.add.area*
                        this.b+this.add.irrigate*this.c+this.add.film*this.d+this.add.Wm*this.f+this.add.Gs*this.g);
                    this.result.absorptionIntensity=this.add.output*this.add.absorption/this.add.coefficient;
                    this.result.carbonSink=this.result.absorptionIntensity-this.result.emissionIntensity;
                    console.log(this.add);
                    console.log(this.result);
                    axios.post("http://localhost:8888/crop/save", this.result).then(rel => {
                        alert("the process is: Et=Gf*a+Am*b+Gi*e+Ge*f+Gp*g+Wm*f+Gs*g="+this.add.fertilizer+"*"+this.a+"+"+
                            this.add.area+"*"+this.b+"+"+this.add.pesticide+"*"+this.e+"+"+ this.add.irrigate+"*"+
                            this.c+"+"+this.add.film+"*"+this.d+"+"+this.add.Wm+"*"+this.f+"+"+this.add.Gs+"*"+this.g
                            +"="+this.result.emissionIntensity+";Ct=∑Cf*Yw/Hi="+ this.add.output+"*"+this.add.absorption
                            +"/"+this.add.coefficient+"="+this.result.absorptionIntensity +";Nt=Ct-Et="+
                            this.result.absorptionIntensity+"-"+this.result.emissionIntensity+"="+this.result.carbonSink);
                        this.dialogFormVisible1=false;
                        this.getAll();
                        this.resetForm('result');
                        this.resetForm('add');
                    })
                },
                updates() {
                    this.result.cropName=this.up.cropName;
                    this.result.month=this.up.month;
                    this.result.emissionIntensity=(this.up.fertilizer*this.a+this.up.pesticide*this.e+this.up.area*
                        this.b+this.up.irrigate*this.c+this.up.film*this.d+this.up.Wm*this.f+this.up.Gs*this.g);
                    this.result.absorptionIntensity=this.up.output*this.up.absorption/this.up.coefficient;
                    this.result.carbonSink=this.result.absorptionIntensity-this.result.emissionIntensity;
                    console.log(this.up);
                    console.log(this.result);
                    axios.get("http://localhost:8888/crop/selectId?id="+this.up.cropId).then(rel=> {
                        console.log("back...")
                        console.log(this.calData);
                        console.log(rel.data);
                        this.calData=rel.data;
                        console.log("calData.data is:"+this.calData);
                        this.emiAdd=this.result.emissionIntensity-this.calData.emissionIntensity;
                        this.absAdd=this.result.absorptionIntensity-this.calData.absorptionIntensity;
                        this.carAdd=this.result.carbonSink-this.calData.carbonSink;
                        alert(this.calData.cropName+"农田生态系统"+this.up.month+"的碳排放比"+this.calData.month+"增加了"+this.emiAdd+"t，"+
                            "碳吸收增加了"+this.absAdd+"t，"+"碳汇增加了"+this.absAdd+"t，");
                        this.dialogFormVisible=false;
                        this.getAll();
                        this.resetForm('result');
                        this.resetForm('up');
                    })
                },
                deletes(row){
                    axios.delete("http://localhost:8888/crop/"+row.cropId).then(res=>{
                        alert(res.data);
                        this.getAll();
                    })
                },
                mohuSearch(){
                    axios.get("http://localhost:8888/crop/like?cropName="+this.input).then(res=>{
                        // this.searchdata.listData=res.data;
                        this.listData=res.data;
                        console.log(this.listData)
                    });
                },


            }
};
</script>

<style lang="less" scoped>

* {
  margin: 0;
  padding: 0;
}
#app {
  position: absolute;
  height: 100%;
  width: 100%;
}
.contentBox {
  height: 100%;
  width: 100%;
  /*background-color: white;*/
  border-radius: 60px 20px;
  padding-top: 6px;
  padding-left: 20px;
}
.cal {
  font-family: "Lucida Calligraphy", cursive, serif, sans-serif;
  font-size: 18px;
}
.boxall {
  padding: 0 0.2rem 0.2rem 0.2rem;
  position: relative;
  margin-bottom: 0.15rem;
  // z-index: 10;
}
</style>