import $ from "@/assets/chinaMap/js/jquery.js";
import echarts from  "@/assets/chinaMap/js/echarts.min.js";
// import '@/assets/chinaMap/js/china.js'

$(function () {
  map();
  function map() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("map_1"));
    var data = [
      { name: "西藏", value: 15.33 },
      { name: "上海", value: 28.21 },
      { name: "福建", value: 227.54 },
      { name: "广西", value: 371.83 },
      { name: "广东", value: 373.65 },
      { name: "山西", value: 196.94 },
      { name: "云南", value: 348.06 },
      { name: "海南", value: 44 },
      { name: "辽宁", value: 295.6 },
      { name: "吉林", value: 355.46 },
      { name: "宁夏", value: 72.69 },
      { name: "江西", value: 243.03 },
      { name: "青海", value: 20.86 },
      { name: "内蒙古", value: 404.35 },
      { name: "四川", value: 409.5 },
      { name: "陕西", value: 307.66 },
      { name: "重庆", value: 148.69 },
      { name: "江苏", value: 538.51 },
      { name: "贵州", value: 148.81 },
      { name: "北京", value: 14.74 },
      { name: "新疆", value: 576.88 },
      { name: "浙江", value: 214.1 },
      { name: "山东", value: 793.84 },
      { name: "甘肃", value: 237.27 },
      { name: "天津", value: 29.93 },
      { name: "河南", value: 955.54 },
      { name: "黑龙江", value: 540.42 },
      { name: "河北", value: 454.06 },
      { name: "湖南", value: 86.08 },
      { name: "安徽", value: 546.22 },
      { name: "湖北", value: 273 },
    ];
    var geoCoordMap = {
      西藏: [91.11, 29.97],
      上海: [121.48, 31.22],
      福建: [119.3, 26.08],
      广西: [108.33, 22.84],
      广东: [113.23, 23.16],
      山西: [112.53, 37.87],
      云南: [102.73, 25.04],
      海南: [110.35, 20.02],
      辽宁: [123.38, 41.8],
      吉林: [125.35, 43.88],
      宁夏: [106.27, 38.47],
      江西: [115.89, 28.68],
      青海: [101.74, 36.56],
      内蒙古: [111.65, 40.82],
      四川: [104.06, 30.67],
      陕西: [108.95, 34.27],
      重庆: [106.54, 29.59],
      江苏: [118.78, 32.04],
      贵州: [106.71, 26.57],
      北京: [116.46, 39.92],
      新疆: [87.68, 43.77],
      浙江: [120.19, 30.26],
      山东: [117, 36.65],
      甘肃: [103.73, 36.03],
      天津: [117.2, 39.13],
      河南: [113.65, 34.76],
      黑龙江: [126.63, 45.75],
      河北: [114.48, 38.03],
      湖南: [113, 28.21],
      安徽: [117.27, 31.86],
      湖北: [114.31, 30.52],
    };
    var convertData = function (data) {
      var res = [];
      for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value),
          });
        }
      }
      return res;
    };
    const option = {
      // backgroundColor: '#404a59',
      title: {
        text: "2019年各省农作物碳排放量(万吨)",
        subtext: "",
        sublink: "",
        left: "center",
        textStyle: {
          color: "#fff",
        },
      },
      tooltip: {
        trigger: "item",
        formatter: function (params) {
          if (typeof params.value[2] == "undefined") {
            return params.name + " : " + params.value;
          } else {
            return params.name + " : " + params.value[2];
          }
        },
      },

      geo: {
        map: "china",
        label: {
          emphasis: {
            show: false,
          },
        },
        roam: false, //禁止其放大缩小
        itemStyle: {
          normal: {
            areaColor: "#4c60ff",
            borderColor: "#002097",
          },
          emphasis: {
            areaColor: "#293fff",
          },
        },
      },
      series: [
        {
          name: "消费金额",
          type: "scatter",
          coordinateSystem: "geo",
          data: convertData(data),
          symbolSize: function (val) {
            // return val[2] / 15;
            return 10;
          },
          label: {
            normal: {
              formatter: "{b}",
              position: "right",
              show: false,
            },
            emphasis: {
              show: true,
            },
          },
          itemStyle: {
            normal: {
              color: "#ffeb7b",
            },
          },
        },
      ],
    };

    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
});
