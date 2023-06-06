<template>
  <div style="overflow-x: hidden; overflow-y: hidden" class="bod">
    <div id="treediv" style="width: 25%; border-color: #eee; float: left"></div>
    <div style="width: 74%; float: left">
      <iframe
        :src="iframeSrc"
        style="overflow-x: hidden; overflow-y: auto"
        id="mainFrame"
        name="mainFrame"
        width="100%"
        height="900px"
        frameborder="0"
      ></iframe>
    </div>
  </div>
</template>

<script>
import tree from '@/assets/js/tree.js'
export default {
  name: 'xtree',
  mounted() {
    const data = [
      {
        title: "江西",
        id: 1,
        children: [
          {
            title: "南昌",
            id: 1000,
            children: [
              {
                title:
                  "<a @click=\"openWin('https://baike.baidu.com/item/233/18862861')\">青山湖区</a>",
                id: 10001,
              },
              {
                title: "高新区",
                id: 10002,
              },
            ],
          },
          {
            title: "九江",
            id: 1001,
          },
          {
            title: "赣州",
            id: 1002,
          },
        ],
      },
      {
        title: "广西",
        id: 2,
        children: [
          {
            title: "南宁",
            id: 2000,
          },
          {
            title: "桂林",
            id: 2001,
          },
        ],
      },
      {
        title: "陕西",
        id: 3,
        children: [
          {
            title: "西安",
            id: 3000,
          },
          {
            title: "延安",
            id: 3001,
          },
        ],
      },
    ];

    // Simulate the Ajax response
    // Replace this part with your actual Ajax call
    // Remove the following code if you are using real data from the server
    // $.ajax({
    //   type: 'get',
    //   url: 'loaddata',
    //   dataType: 'json',
    //   async: false,
    //   success: function (response) {
    //     data = response;
    //     console.log(data);
    //   }
    // });

    tree({
      data: data,
      title: "title",
      id: "id",
      elem: "#treediv",
      children: "children",
      iconfont: "iconfont|icon-add_circle|icon-iconset0187|icon-file",
      callBack: function (con) {
        console.log("===" + con);
      },
    });
  },
  methods: {
    openWin(url) {
      console.log(url);
      // window.open(url);
      this.iframeSrc = url;
    },
  },
  data() {
    return {
      iframeSrc: "",
    };
  },
};
</script>

<style lang="less" scoped>
// @import '@/assets/css/iconfont.css';
@import '@/assets/css/tree.css';


</style>
