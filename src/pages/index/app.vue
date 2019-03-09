<template>
  <div id="app">
    <el-container style="min-height: 800px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>固定导航
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">2</el-menu-item>
              <el-menu-item index="1-2">3</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>动态导航
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!--<el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>导航三</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="3-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-4">
              <template slot="title">选项4</template>
              <el-menu-item index="3-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>-->
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <span style="margin-right: 15px">
            <i class="el-icon-setting" @click="handleShow"></i>
          </span>
          <span style="margin-right: 15px">测试账号</span>
          <el-dropdown style="margin-right: 15px">
            <i class="el-icon-setting"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <span @click="handleRouter">修改密码</span>
              </el-dropdown-item>
              <el-dropdown-item>
                <span @click="logout">退出1</span>
              </el-dropdown-item>
              <el-dropdown-item>
                <span @click="test">代码测试</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>

        <el-main></el-main>
      </el-container>
    </el-container>

    <div class="dialog"  :class="show?'divcc divShow':'divcc divHidd'">
      <div style="width:600px;padding: 15px 8px;">
        <div>数据来自后端</div>

        <div style="margin:15px 0">
          <el-tag type="info" v-for="(item, index) in items" style="margin-right:15px">
            <span>{{ item.name }}</span>
          </el-tag>
        </div>
        <br>
        <el-button :plain="true">提交</el-button>
        <el-button :plain="true">取消</el-button>
      </div>
    </div>
  </div>
</template>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.divcc {
  position: absolute;
  top: 50%;
  left: 50%;
  background: #ccc;
  border: 1px solid #fff;
  transform: translate(-50%, -50%);
}

.divHidd {
  display: none;
}

.divShow {
  display: block;
}

.el-aside {
  color: #333;
}
</style>

<script>
const doMenu = require('../../../servers/menu.js')

export default {
  data() {
    return {
      show: false,
      items: []
    }
  },
  created() {
    //debugger;
  },
  methods: {
    handleShow() {
      var items = doMenu.GetMenus()
      //console.log(items);
      this.show = !this.show
      this.items = items
    },
    logout() {
      location.assign('../user/login.html')
    },
    handleRouter() {
      //this.$router.push("/about")

      this.$router.push({
        //核心语句
        path: '/about', //跳转的路径
        query: {
          //路由传参时push和query搭配使用 ，作用时传递参数
          id: 1
        }
      })
    },
    test() {
      location.assign('../test.html')
    }
  }
}
</script>