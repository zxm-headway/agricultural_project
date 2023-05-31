<template>
  <div class="box">
    <form @submit.prevent="register">
      <h3>注册</h3>
      <div class="inputBox">
        <input
          v-model="account"
          id="account"
          name="account"
          type="text"
          required
        />
        <span id="account-mess">accountMessage</span>
        <i></i>
      </div>
      <div class="inputBox">
        <input
          v-model="password"
          id="password"
          name="password"
          type="password"
          required
        />
        <span id="password-mess"> passwordMessage</span>
        <i></i>
      </div>
      <div class="inputBox">
        <input
          v-model="repeatPassword"
          id="repeatpassword"
          name="repeatpassword"
          type="password"
          required
        />
        <span id="repeatpassword-mess">repeatPasswordMessage </span>
        <i></i>
      </div>
      <div class="inputBox">
        <input
          v-model="realname"
          id="realname"
          name="realname"
          type="text"
          required
        />
        <span id="realname-mess">RealName</span>
        <i></i>
      </div>
      <div class="inputBox">
        <input v-model="phone" id="phone" name="phone" type="text" required />
        <span id="phone-mess">PhoneNumber</span>
        <i></i>
      </div>
      <div class="inputBox">
        <input
          v-model="address"
          id="address"
          name="address"
          type="text"
          required
        />
        <span id="address-mess">Address</span>
        <i></i>
      </div>
      <div class="links">
        <a href="#">忘记密码?</a>
        <a @click.prevent="navigator_login()">回到登陆</a>
      </div>
      <input type="submit" value="Register" />
    </form>
  </div>
</template>

<script>
import $ from "jquery";
import  {layer,layui} from '@/assets/js/layui/layui.js'

export default {
  name:'registerPages',
  data() {
    return {
      account: "",
      accountMessage: "",
      password: "",
      passwordMessage: "",
      repeatPassword: "",
      repeatPasswordMessage: "",
      realname: "",
      phone: "",
      address: "",
    };
  },
  methods: {
    register() {
      var userfalg = true;
      var pwdfalg = true;
      var repwdfalg = false;

      // 表单验证以及检测用户名是否存在
      if (this.account !== "") {
        var reg_username = /^\w{4,10}$/;
        let flag = reg_username.test(this.account);
        if (!flag) {
          this.accountMessage = "格式不正确！";
          alert("账号格式不正确！");
          userfalg = false;
        } else {
          $.get("user/checkuser?account=" + this.account, (data) => {
            if (data === "no") {
              this.accountMessage = "用户名已存在！";
              alert("账号已存在！");
              userfalg = false;
            } else {
              this.accountMessage = "";
              userfalg = true;
            }
          });
        }
      }

      if (this.password !== "") {
        var reg_password = /^\w{6,12}$/;
        let flag = reg_password.test(this.password);
        if (!flag) {
          this.passwordMessage = "密码格式不正确！";
          alert("密码格式不正确！");
          pwdfalg = false;
        } else {
          this.passwordMessage = "";
          pwdfalg = true;
        }
      }

      var repeatpassword = this.repeatPassword;
      var password = this.password;
      let flag = repeatpassword === password;
      if (!flag) {
        this.repeatPasswordMessage = "两次密码不一致！";
        repwdfalg = false;
        alert("两次密码不一致！");
      } else {
        this.repeatPasswordMessage = "";
        repwdfalg = true;
      }

      layui.use("form", () => {
        var form = layui.form;
        console.log(form);
        // 监听提交
        form.on("submit(register)", () => {
          layer.msg("请稍等...", () => {
            if (userfalg && pwdfalg && repwdfalg) {
              // 触发注册操作
              var param = {
                account: this.account,
                password: this.password,
                realname: this.realname,
                phone: this.phone,
                address: this.address,
              };
              console.log(param);
              $.post("user/regist", param, (data) => {
                if (data === 1) {
                  alert("恭喜你，注册成功！");
                  location.href = "login";
                } else {
                  layer.msg("哎呀出错了！请重试...", () => {
                    // 把账号密码清理掉
                    this.account = "";
                    this.password = "";
                  });
                }
              });
            } else {
              layer.msg("申请有误！请确认后再次提交！");
            }
          });
          return false;
        });
      });
    },
    navigator_login(){
      this.$router.push('/login')
    }
  },
  mounted() {
    $(() => {
      // 你的原始代码
    });
  },
};
</script>

<style scoped>
@import "@/assets/css/style1.css";
</style>
