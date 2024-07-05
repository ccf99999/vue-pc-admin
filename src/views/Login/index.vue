<template>
  <div class="login_body">
    <div class="bg" />
    <div class="box">
      <div class="title">数据可视化-登录</div>
      <el-form ref="form" :model="formData" :rules="rules">
        <el-form-item label="账号" prop="username">
          <el-input v-model="formData.username" />
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input v-model="formData.password" />
        </el-form-item>

        <el-form-item prop="remember">
          <el-checkbox v-model="formData.remember">记住我</el-checkbox>
        </el-form-item>

        <el-form-item>
          <el-button
            type="primary"
            class="login_btn"
            @click="login"
          >登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// 需求：记住我的功能实现
// 需求1：勾选记住我的时候，把账号密码保存起来
// 需求2：不勾选记住我的时候，不保存账号密码
// 需求3：下次进到登录页面，判断是否该回显
export default {
  name: 'login-page',
  data() {
    return {
      formData: {
        username: '',
        password: '',
        remember: false
      },
      rules: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    const userPassObj = JSON.parse(localStorage.getItem('userpass'))
    if (userPassObj) {
      this.formData = userPassObj
    }
  },
  methods: {
    // 登录
    async login() {
      await this.$refs.form.validate()


      // 确保登录流程ok后，并且账号密码正确的
      if (this.formData.remember) {
        localStorage.setItem('userpass', JSON.stringify(this.formData))
      } else {
        localStorage.removeItem('userpass')
      }

      // push() 会产生历史记录，浏览器回退按钮可以回到上一页
      // replace() 替换当前路由路径，浏览器无法回退到上一页
      // 主动退出登录时正在浏览器的页面那么就回去，否则第一次登录就去echarts页面
      this.$router.replace(this.$route.query.redirect || '/echarts')
    }
  }
}

</script>

<style scoped lang="scss">
.login_body {
  display: flex;
}
.bg {
  width: 60vw;
  height: 100vh;
  background: url("~@/assets/login-bg.svg") no-repeat;
  background-position: right top;
  background-size: cover;
}
.box {
  margin: 200px 10% 0;
  flex: 1;
  .title {
    padding-bottom: 76px;
    font-size: 26px;
    font-weight: 500;
    color: #1e2023;
  }
  ::v-deep() {
    .ant-form-item {
      display: flex;
      margin-bottom: 62px;
      flex-direction: column;
    }
    .ant-form-item-label label {
      font-size: 16px;
      color: #8b929d;
    }
    .ant-input,
    .ant-input-password {
      border-radius: 8px;
    }
  }
}
.login_btn {
  width: 100%;
}
</style>
