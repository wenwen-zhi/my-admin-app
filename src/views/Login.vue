<template>
  <el-form
    lable-with="70px"
    class="login-container"
    ref="form"
    :rules="rules"
    :model="form"
    label-width="80px"
  >
    <h3 class="login_title">系统登录</h3>
    <el-form-item label="用户名" prop="username">
      <el-input v-model="form.username" placeholder="请输入账号"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        type="password"
        v-model="form.password"
        placeholder="请输入密码"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button
        style="margin-left: 20px; margin-top: 10px"
        type="primary"
        @click="submit"
        >登录</el-button
      >
    </el-form-item>
    <div class="hint">
      <p>用户名：admin 密码：admin</p>
    </div>
  </el-form>
</template>
<script>
import Mock from "mockjs";
import Cookie from "js-cookie";
import { getMenu } from "../api";
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
          },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    submit() {
      //   // token信息
      //   const token = Mock.Random.guid();
      //   Cookie.set("token", token);
      this.$refs.form.validate((valid) => {
        if (valid) {
          getMenu(this.form).then(({ data }) => {
            console.log(data);
            if (data.code === 20000) {
              Cookie.set("token", data.data.token);
              //   获取菜单的数据，存入store
              this.$store.commit("setMenu", data.data.menu);
              this.$store.commit("addMenu", this.$router);
              this.$router.push("/home");
            } else {
              this.$message.error(data.data.message);
            }
          });
        }
      });
    },
  },
};
</script>
<style lang="less" scoped>
.login-container {
  width: 350px;
  border: 1px solid #eaeaea;
  margin: 180px auto;
  padding: 35px 35px 15px 35px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 25px #cac6c6;
  box-sizing: border-box;
  .login_title {
    text-align: center;
    margin: 0 auto 40px auto;
    color: #505458;
  }

  .el-input {
    width: 198px;
  }

  .hint {
    opacity: 0.5;
    text-align: center;
  }
}
</style>