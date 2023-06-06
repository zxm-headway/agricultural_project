<template>
  <div class="container">
    <hr />
    <div class="search" style="line-height: 30px; float: left; width: 49%">
      <a style="padding: 0px">@农作物知识查询</a>
      <hr />
      <div
        class="input-group col-md-12"
        style="float: left; width: 500px; padding-right: 50px"
      >
        <form class="input-group-btn">
          <input
            class="form-control"
            type="text"
            id="keyword"
            name="keyword"
            placeholder="请输入节点关键字，按回车键"
          />
          <button class="btn btn-primary" type="button" id="search">
            查询
          </button>
        </form>
      </div>
      <br />
      <br />
      <div
        class="input-group col-md-12"
        style="float: left; width: 350px; padding-right: 50px"
      >
        <table border="1" style="width: 350px; text-align: center">
          <thead>
            <td>实体1</td>
            <td>关系</td>
            <td>实体2</td>
            <td>说明</td>
          </thead>
          <tbody id="result"></tbody>
        </table>
      </div>
    </div>
    <div class="" style="text-align: center; float: left; width: 49%">
      <iframe
        src=""
        id="mainFrame"
        name="mainFrame"
        width="100%"
        height="800px"
        frameBorder="0"
        >请先输入关键字查询...</iframe
      >
    </div>
  </div>
</template>

<script>
import '@/assets/css/bootstrap.min.css'
export default {
  name: "carbonGraph",
  data() {
    return {
      keyword: "",
      result: [],
      iframeSrc: "",
    };
  },
  methods: {
    search() {
      if (this.keyword === "") {
        alert("查询条件不能为空");
        return;
      }
      this.$http
        .post("/carbon/listByKeyWord", { keyword: this.keyword })
        .then((response) => {
          const result = response.data;
          if (result === "") {
            alert("查无相关信息");
            return;
          }
          this.result = result;
          this.iframeSrc = `http://localhost:8081/neo4j/queryNodeAByKeyWord?keyword=${this.keyword}`;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style lang="less" scoped>
th {
  text-align: center;
}
.container {
  background-color: rgba(155, 155, 155, 0.1);
}
</style>
