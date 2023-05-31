<template>
  <div>

    <!-- <div class="loading">
      <div class="loadbox">
        <img src="../../../assets/chinaMap/picture/loading.gif" /> 页面加载中...
      </div>
    </div> -->

    <div class="head">
      <h1><a style="color: white ;font-size: medium;">中国各省农作物碳排放可视化</a></h1>
      <div class="time" id="showTime">{{ currentTime }}</div>
    </div>

    <div class="mainbox">
      <ul class="clearfix">
        <li>
          <div class="boxall" style="height: 3.2rem">
            <div class="alltitle">西南地区农田生态系统的碳排放(万吨)</div>
            <div class="allnav" id="echart1"></div>
            <div class="boxfoot"></div>
          </div>
          <div class="boxall" style="height: 3.2rem">
            <div class="alltitle">西南地区化肥使用的碳排放(万吨)</div>
            <div class="allnav" id="echart2"></div>
            <div class="boxfoot"></div>
          </div>
          <div class="boxall" style="height: 3.2rem">
            <div style="height: 100%; width: 100%">
              <div class="sy" id="fb1"></div>
              <div class="sy" id="fb2"></div>
              <div class="sy" id="fb3"></div>
            </div>
            <div class="boxfoot"></div>
          </div>
        </li>
        <li>
          <div class="bar">
            <div class="barbox">
              <ul class="clearfix">
                <li class="pulll_left counter">9982.96</li>
                <li class="pulll_left counter">21938.67</li>
              </ul>
            </div>
            <div class="barbox2">
              <ul class="clearfix">
                <li class="pulll_left">2019年农作物碳排放总量(万吨)</li>
                <li class="pulll_left">2019年农作物碳排放强度(千克/公顷)</li>
              </ul>
            </div>
          </div>
          <div class="map">
            <div class="map1">
              <img src="../../../assets/chinaMap/picture/lbx.png" />
            </div>
            <div class="map2">
              <img src="../../../assets/chinaMap/picture/jt.png" />
            </div>
            <div class="map3">
              <img src="../../../assets/chinaMap/picture/map.png" />
            </div>
            <div class="map4" id="map_1"></div>
          </div>
        </li>
        <li>
          <div class="boxall" style="height: 3.4rem">
            <div class="alltitle">西南地区碳排放强度(吨/公顷)</div>
            <div class="allnav" id="echart4"></div>
            <div class="boxfoot"></div>
          </div>
          <div class="boxall" style="height: 3.2rem">
            <div class="alltitle">西南地区农药使用的碳排放(万吨)</div>
            <div class="allnav" id="echart5"></div>
            <div class="boxfoot"></div>
          </div>
          <div class="boxall" style="height: 3rem">
            <div class="alltitle">西南地区农业灌溉产生的碳排放(万吨)</div>
            <div class="allnav" id="echart6"></div>
            <div class="boxfoot"></div>
          </div>
        </li>
      </ul>
    </div>
    
    <div class="back"></div>
  </div>
</template>

<script>
// import "@/assets/css/bootstrap.min.css"
import "@/assets/css/comon0.css"
import "@/assets/js/initRem.js"
import '@/assets/js/js.js'
import "@/assets/js/js2.js"
// import "@/assets/js/area_echarts";


// import '@/assets/chinaMap/js/china.js'
export default {
  name: "carbonMap",
  data() {
    return {
      currentTime: "",
    };
  },

  methods: {
    getCurrentTime() {
      setInterval(() => {
        const dt = new Date();
        const y = dt.getFullYear();
        const mt = dt.getMonth() + 1;
        const day = dt.getDate();
        const h = dt.getHours();
        const m = dt.getMinutes();
        const s = dt.getSeconds();
        this.currentTime = `${y}/${this.AppendZero(mt)}/${this.AppendZero(
          day
        )} ${this.AppendZero(h)}:${this.AppendZero(m)}:${this.AppendZero(s)}`;
      }, 1000);
    },
    AppendZero(obj) {
      if (obj < 10) return "0" + obj;
      else return obj;
    },
  },
  mounted() {
    this.getCurrentTime();
  },
};
</script>

<style scoped>
  html {
  font-size: 16px; /* 使用固定的字体大小，例如16px */
}

</style>
<!-- <style   src="../../../assets/css/comon0.css" scoped>

</style> -->