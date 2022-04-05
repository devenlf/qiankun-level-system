<template>
  <div class="login">
    <div class="login_form">
      <div class="login_form_head">
        <h1>登录系统</h1>
      </div>
      <div class="login_form_body">
        <el-form :label-position="labelPosition" label-width="80px" :rules="rules" ref="ruleForm" :model="ruleForm">
            <el-form-item>
              <el-input v-model="ruleForm.name" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="ruleForm.pass" placeholder="请输入密码" show-password></el-input>
            </el-form-item>
              <el-button id="primary" type="primary" @click="submitForm()">登录</el-button>
      </el-form>
      <div class="foot">
        <span class="regist" >
          KOL系统登陆
          <!-- <router-link to="/home">KOL系统登陆</router-link> -->
        </span>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
 import { useRouter } from "vue-router"
export default {
  name: 'Login',
  props: {
    msg: String
  },
  data(){
    return{
        labelPosition: 'top',
        ruleForm: {
          name: '',
          pass: '',
        },
        rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 2, max: 10, message: '长度在 2到 10个字符', trigger: 'blur' }
          ],
          pass: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 10, message: '长度在 6 到20个字符', trigger: 'blur' }
          ],
        }
    }
  },
  setup(){
    const router = useRouter();
      const submitForm = () => {
        router.push("/home")
      }
      return {
        submitForm
      }
  },
  methods: {
      submitForm() {
        // router.push('./regist')
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../../assets/styles/index.scss';
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.login{
    background-color: #2d3a4b;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    &_form{
        width: 520px;
        height: 300px;
            &_head{
                color:#fff;
            }
            &_body{
            padding: 16px;
            font-size: 14px;
            .el-form-item{
                height: 50px;
                border: 1px solid hsla(0,0%,100%,.1);
                background: rgba(0,0,0,.1);
                border-radius: 5px;
                color: #454545;
                .el-form-item__content{
                    height: 50px;
                    line-height: 50px;
                }
                .el-input{
                    line-height: 36px;
                    position: relative;
                    font-size: 14px;
                    
                }
                // /deep/ .el-input__inner{
                //     height: 50px;
                //     line-height: 50px;
                //     background: transparent;
                //   }
            }
            #primary{
                width: 100%;
                border-color: rgba(27,31,36,0.15);
                background-color: #409eff;
                height: 35px;
                ;
            }
            .foot{
                text-align: left;
                margin-top: 15px;
                a{
                    text-decoration: none;
                    color:#fff;

                }
                .regist{
                    margin-right: 20px;
                }
            }
        }
    }

}
</style>
