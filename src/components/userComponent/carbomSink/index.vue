<template>
  <div>
    <!-- <div class="loading">
      <div class="loadbox">
        <img src="@/assets/dataVisual/images/loading.gif" /> 页面加载中...
      </div>
      </div> -->
    
      <div class="head">
        <h1>2019年西南地区碳汇可视化</h1>
        <div class="time" id="showTime">{{currentTime}}</div>
      </div>

      <div class="mainbox">
        <ul class="clearfix">
          <li>
            <div class="boxall" style="height: calc(58% - 0.15rem)">
              <div class="alltitle">常见农作物碳吸收率</div>
              <div class="boxnav" id="echarts4"></div>
            </div>
            <div class="boxall" style="height: calc(42% - 0.15rem)">
              <div class="alltitle">常见农作物经济产量(单位:万吨)</div>
              <div class="boxnav" id="echarts3"></div>
            </div>
          </li>
          <li>
            <div class="boxall" style="height: calc(20% - 0.15rem)">
              <ul class="row h100 clearfix">
                <li class="col-6">
                  <div class="sqzs h100">
                    <p>2019年西南地区总碳汇量</p>
                    <h1><span>15654.2</span>万吨</h1>
                  </div>
                </li>
                <li class="col-6">
                  <ul class="row h100 clearfix">
                    <li class="col-4">
                      <div class="tit01">重庆碳汇占比</div>
                      <div class="piebox" id="pe01"></div>
                    </li>
                    <li class="col-4">
                      <div class="tit01">四川碳汇占比</div>
                      <div class="piebox" id="pe02"></div>
                    </li>
                    <li class="col-4">
                      <div class="tit01">贵州碳汇占比</div>
                      <div class="piebox" id="pe03"></div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="boxall" style="height: calc(38% - 0.15rem)">
              <div class="alltitle">西南地区碳吸收及碳汇量。(单位:万吨)</div>
              <div class="boxnav" id="echarts1"></div>
            </div>
            <div class="boxall" style="height: calc(42% - 0.15rem)">
              <div class="alltitle">常见农作物经济系数</div>
              <div class="boxnav" id="echarts2"></div>
            </div>
          </li>
          <li>
            <div class="boxall" style="height: calc(33.333% - 0.15rem)">
              <div class="alltitle">
                西南地区碳排放强度、碳吸收强度。(单位:千克/公顷)
              </div>
              <div class="boxnav" id="echarts5"></div>
            </div>
            <div class="boxall" style="height: calc(33.333% - 0.15rem)">
              <div class="alltitle">常见农作物生物产量(单位:万吨)</div>
              <div class="boxnav" id="">
                <table border="0" cellspacing="0">
                  <tbody>
                    <tr>
                      <th></th>
                      <th>蔬菜</th>
                      <th>水稻</th>
                      <th>小麦</th>
                      <th>玉米</th>
                      <th>薯类</th>
                      <th>大豆</th>
                      <th>花生</th>
                      <th>油菜</th>
                    </tr>
                    <tr>
                      <th>重庆</th>
                      <td>3347.9</td>
                      <td>1082.2</td>
                      <td>17.3</td>
                      <td>624.0</td>
                      <td>405.2</td>
                      <td>58.7</td>
                      <td>31.8</td>
                      <td>199.6</td>
                    </tr>
                    <tr>
                      <th>四川</th>
                      <td>7731.9</td>
                      <td>3266.3</td>
                      <td>615.5</td>
                      <td>2655.4</td>
                      <td>776.0</td>
                      <td>278.4</td>
                      <td>159.0</td>
                      <td>1185.8</td>
                    </tr>
                    <tr>
                      <th>贵州</th>
                      <td>4558.1</td>
                      <td>941.8</td>
                      <td>82.5</td>
                      <td>580.8</td>
                      <td>432.6</td>
                      <td>54.3</td>
                      <td>27.0</td>
                      <td>309.0</td>
                    </tr>
                    <tr>
                      <th>云南</th>
                      <td>3840.2</td>
                      <td>1186.6</td>
                      <td>179.8</td>
                      <td>2300.0</td>
                      <td>240.4</td>
                      <td>135.3</td>
                      <td>15.7</td>
                      <td>216.4</td>
                    </tr>
                    <tr>
                      <th>西藏</th>
                      <td>129.1</td>
                      <td>48.0</td>
                      <td>10</td>
                      <td>6.5</td>
                      <td>0.3</td>
                      <td>0.1</td>
                      <td>0.1</td>
                      <td>22.8</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="boxall" style="height: calc(33.333% - 0.15rem)">
              <div class="alltitle">西南地区碳汇强度(单位:千克/公顷)</div>
              <div
                class="boxnav"
                id="echarts6"
                style="height: calc(100% - 0.3rem)"
              ></div>
            </div>
          </li>
        </ul>
      </div>


    </div>
 
</template>

<script>
import "@/assets/css/comon2.css";
// import "@/assets/js/initRem.js"
import '@/assets/js/js2.js';
export default {
  name: "carbonSink",

  data() {
    return {
      currentTime: "",
      timer: null,
    };
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        const dt = new Date();
        const y = dt.getFullYear();
        const mt = dt.getMonth() + 1;
        const day = dt.getDate();
        const h = dt.getHours();
        const m = dt.getMinutes();
        const s = dt.getSeconds();

        this.currentTime = `${y}/${this.appendZero(mt)}/${this.appendZero(
          day
        )} ${this.appendZero(h)}:${this.appendZero(m)}:${this.appendZero(s)}`;
      }, 1000);
    },
    clearTimer() {
      clearInterval(this.timer);
    },
    appendZero(obj) {
      if (obj < 10) return "0" + "" + obj;
      else return obj;
    },
  },

  mounted() {
    this.startTimer();
  },
  beforeDestroy() {
    this.clearTimer();
  },
};
</script>

<style lang="less" scoped>
// @import "@/assets/css/comon2.css";
html {
  font-size: 16px; /* 使用固定的字体大小，例如16px */
}


</style>