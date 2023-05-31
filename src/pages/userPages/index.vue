<template>
  <div>
    <nav id="navbar">
      <dd v-if="user_role == 1">
        <ul class="navbar-items flexbox-col">
          <li class="navbar-logo flexbox-left">
            <span class="admin">{{ user_name }}</span
            ><span class="admin">,你好</span>
          </li>
          <li class="navbar-item flexbox-left">
            <a
              class="navbar-item-inner flexbox-left"
              @click="navigate_carbonMap()"
            >
              <div class="navbar-item-inner-icon-wrapper flexbox">
                <ion-icon name="search-outline"></ion-icon>
              </div>
              <span class="link-text">全国碳排放可视化</span>
            </a>
          </li>
          <li class="navbar-item flexbox-left">
            <a
              class="navbar-item-inner flexbox-left"
              @click="navigate_carbonSink()"
            >
              <div class="navbar-item-inner-icon-wrapper flexbox">
                <ion-icon name="home-outline"></ion-icon>
              </div>
              <span class="link-text">西南地区碳汇可视化</span>
            </a>
          </li>
          <li class="navbar-item flexbox-left">
            <a
              class="navbar-item-inner flexbox-left"
              @click="navigate_calculate()"
            >
              <div class="navbar-item-inner-icon-wrapper flexbox">
                <ion-icon name="folder-open-outline"></ion-icon>
              </div>
              <span class="link-text">碳汇计算</span>
            </a>
          </li>
          <li class="navbar-item flexbox-left">
            <a
              class="navbar-item-inner flexbox-left"
              @click="navigate_carbonGraph()"
            >
              <div class="navbar-item-inner-icon-wrapper flexbox">
                <ion-icon name="pie-chart-outline"></ion-icon>
              </div>
              <span class="link-text">碳汇查询</span>
            </a>
          </li>
          <li class="navbar-item flexbox-left">
            <a class="navbar-item-inner flexbox-left" @click="navigate_xtree()">
              <div class="navbar-item-inner-icon-wrapper flexbox">
                <ion-icon name="people-outline"></ion-icon>
              </div>
              <span class="link-text">农业目录</span>
            </a>
          </li>
          <li class="navbar-item flexbox-left">
            <a
              class="navbar-item-inner flexbox-left"
              @click="navigate_knowlegeGraph()"
            >
              <div class="navbar-item-inner-icon-wrapper flexbox">
                <ion-icon name="chatbubbles-outline"></ion-icon>
              </div>
              <span class="link-text">农作物分类查询</span>
            </a>
          </li>
          <li class="navbar-item flexbox-left">
            <a
              class="navbar-item-inner flexbox-left"
              @click="navigate_cropsGraph"
            >
              <div class="navbar-item-inner-icon-wrapper flexbox">
                <ion-icon name="settings-outline"></ion-icon>
              </div>
              <span class="link-text">农作物知识查询</span>
            </a>
          </li>
          <li class="navbar-item flexbox-left">
            <a class="navbar-item-inner flexbox-left" @click="navigate_login">
              <div class="navbar-item-inner-icon-wrapper flexbox">
                <ion-icon name="settings-outline"></ion-icon>
              </div>
              <span class="link-text">返回登录</span>
            </a>
          </li>
        </ul>
      </dd>

      <!-- //登陆角色为管理员 -->
      <dd v-if="user_role == 0">
        <ul class="navbar-items flexbox-col">
          <li class="navbar-logo flexbox-left">
            <span class="admin">{{ user_name }}</span
            ><span class="admin">,你好</span>
          </li>
          <li class="navbar-item flexbox-left">
            <a
              class="navbar-item-inner flexbox-left"
              @click="navigate_catalogue"
            >
              <div class="navbar-item-inner-icon-wrapper flexbox">
                <ion-icon name="settings-outline"></ion-icon>
              </div>
              <span class="link-text">农业目录管理</span>
            </a>
          </li>
          <li class="navbar-item flexbox-left">
            <a class="navbar-item-inner flexbox-left" @click="navigate_carbon">
              <div class="navbar-item-inner-icon-wrapper flexbox">
                <ion-icon name="settings-outline"></ion-icon>
              </div>
              <span class="link-text">碳汇数据管理</span>
            </a>
          </li>
          <li class="navbar-item flexbox-left">
            <a
              class="navbar-item-inner flexbox-left"
              @click="navigate_knowledege"
            >
              <div class="navbar-item-inner-icon-wrapper flexbox">
                <ion-icon name="settings-outline"></ion-icon>
              </div>
              <span class="link-text">农作物分类管理</span>
            </a>
          </li>
          <li class="navbar-item flexbox-left">
            <a class="navbar-item-inner flexbox-left" @click="navigate_carbon">
              <div class="navbar-item-inner-icon-wrapper flexbox">
                <ion-icon name="settings-outline"></ion-icon>
              </div>
              <span class="link-text">农作物知识管理</span>
            </a>
          </li>
          <li class="navbar-item flexbox-left">
            <a class="navbar-item-inner flexbox-left" @click="navigate_user">
              <div class="navbar-item-inner-icon-wrapper flexbox">
                <ion-icon name="settings-outline"></ion-icon>
              </div>
              <span class="link-text">用户管理</span>
            </a>
          </li>
          <li class="navbar-item flexbox-left">
            <a class="navbar-item-inner flexbox-left" @click="navigate_login">
              <div class="navbar-item-inner-icon-wrapper flexbox">
                <ion-icon name="settings-outline"></ion-icon>
              </div>
              <span class="link-text">返回登录</span>
            </a>
          </li>
        </ul>
      </dd>
      <ul class="navbar-items flexbox-col"></ul>
    </nav>

    <main id="mainFrame" name="mainFrame" width="100%" height="100%" class="flexbox-col">
      <!-- <h2 text-align="center">欢迎进入农作物碳汇分析及可视化系统!</h2> -->
      <router-view></router-view>
      <!-- <iframe src=""  id="mainFrame" name="mainFrame" width="100%" height="100%" frameBorder="0"></iframe> -->
    </main>
  </div>
</template>



<script>
// import "@/assets/css/bootstrap.min.css";
// import "@/assets/css/comon0.css";
import "@/assets/css/bootstrap.min.css";
import "@/assets/css/index.css";
import "@/assets/css/indextext.less";

import $ from "@/assets/js/jquery.min.js"

export default {
  name: "usersPages",
  components: {},
  data() {
    return {
      user: {},
      user_name: "user",
      user_role: sessionStorage.getItem("user_role"),
    };
  },

  computed: {
    // console.log(this.$route.params.account)
    // user_name(){
    //   return this.$route.params.account;
    // }
  },

  methods: {
    fedit(id) {
      // $.ajax({
      //   url: "user/detail?id=" + id,
      //   type: "GET",
      //   success: function (result) {
      //     console.log(result);
      //     if (result != null) {
      //       //向模态框中传值
      //       $("#m_id").val(id);
      //       $("#m_loginname").val(result.account);
      //       $("#m_password").val(result.password);
      //       this.user = result;
      //     }
      //   },
      // });

      // $("#modify").modal("show");

      console.log(id);
    },

    modify() {
      //获取模态框数据
      var id = $("#m_id").val();
      var password = $("#m_password").val();

      var param = { id: id, password: password };
      //alert(JSON.stringify(param));
      $.ajax({
        url: "user/updatepassword",
        type: "GET",
        contentType: "application/json",
        dataType: "json",
        data: param,
        success: function (data) {
          if (data == 1) {
            // 清空表单
            alert("修改成功");
            $("#modify").modal("hide");
          } else {
            alert("修改失败");
          }
        },
      });
    },

    //路由跳转
    navigate_carbonMap() {
      // navigate_carbonMap(this);
      console.log("进行了跳转");
      this.$router.push("/userhome/carbonMap");
      // this.$router.go(0);
      // window.location.reload();
    },

    navigate_carbonSink() {
      console.log("carbinsink页面跳转");
      this.$router.push("/userhome/carbonSink");
      // this.$router.go(0);
    },
    navigate_calculate() {
      console.log("calculate页面跳转");
      this.$router.push("/userhome/calculate");
    },
    navigate_carbonGraph() {
      console.log("carbinGraph页面跳转");
      this.$router.push("/userhome/carbonGraph");
    },
    navigate_xtree() {
      console.log("carbinGraph页面跳转");
      this.$router.push("/userhome/xtree");
    },
    navigate_knowlegeGraph() {
      console.log("knowlegeGraph");
      this.$router.push("/userhome/knowledgeGraph");
    },
    navigate_cropsGraph() {
      console.log("cropsGraph");
      this.$router.push("/userhome/cropsGraph");
    },
    navigate_login() {
      console.log("login");
      this.$router.push("/login");
    },
    navigate_catalogue() {
      console.log("catalogue");
      this.$router.push("/userhome/catalogue");
    },
    navigate_crops() {
      console.log("crops");
      this.$router.push("/userhome/crops");
    },
    navigate_knowledege() {
      console.log("knowlege");
      this.$router.push("/userhome/knowledege");
    },
    navigate_carbon() {
      console.log("carbon");
      this.$router.push("/userhome/carbon");
    },
    navigate_user() {
      console.log("user");
      this.$router.push("/userhome/user");
    },
  },

  mounted() {
    // console.log(this.$route.params.account)
  },
};
</script>


