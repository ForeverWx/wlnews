<template>
    <v-content class="ma-0 pa-0">
        <v-content id="head_content_control">
            <!--            头部开始-->
            <v-row align-content class="d-flex flex-row ma-0 pa-0 mt-6">
                <!--                中间左边 占空 列 1 -->
                <!--                    <v-col cols="1" class="ma-0 pa-0 grey" style="visibility: hidden;">1</v-col>-->
                <v-col cols="4">
                    LOGO
                </v-col>
                <v-col cols="4">
                    <!--百度搜索调用-->
                    <v-card
                            flat
                            height="50px"
                            tile
                    >
                        <v-toolbar dense>
                            <v-row class="ma-0 pa-0 d-flex flex-row mb-1" style="height: 50px;">
                                <v-col cols="2">
                                    <v-select
                                            :items="items"
                                            label="类型"
                                            style="height: 38px;"
                                    >
                                    </v-select>
                                </v-col>
                                <v-col class="col-9">
                                    <v-text-field
                                            label="News"
                                            required
                                            v-model="keyword"
                                            @keyup="get($event)" @keydown.down.prevent="selectDown"
                                            @keydown.up.prevent="selectUp">
                                        >
                                    </v-text-field>

                                    <!--                                <input type="text" placeholder=" 请输入内容" style="width: 425px;height: 46px;">-->

                                </v-col>
                                <v-col class="col-1">
                                    <v-btn icon style="position: relative;top:-7px;"
                                           @click="bensearch">
                                        <v-icon>mdi-magnify
                                        </v-icon>
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-toolbar>
                    </v-card>
                </v-col>
                <!--                头部右面-->
                <v-col cols="4" class="d-flex flex-row" style="height: 70px">
                    <!--                        用户信息栏-->
                    <v-row class="d-flex flex-row ma-0 pa-0 align-center">
                        <!--用户多余控件-->
                        <v-col cols="8" class="d-flex flex-row" style="margin-top: -23px;visibility: hidden;">
                            8
                        </v-col>
                        <!--用户菜单-->
                        <v-col cols="2" class="ma-0 pa-0">
                            <!--  &lt;!&ndash;用户菜单&ndash;&gt;
                              <v-menu
                                      transition="scale-transition"
                                      :open-on-hover="true"
                                      :close-on-click="true"
                                      :close-on-content-click="true"
                                      :offset-y="true"
                              >
                                  <template v-slot:activator="{ on }">
  &lt;!&ndash;                                    <v-btn&ndash;&gt;
  &lt;!&ndash;                                            v-on="on"&ndash;&gt;
  &lt;!&ndash;                                            style="width: 10px;"&ndash;&gt;
  &lt;!&ndash;                                    >&ndash;&gt;
                                          &lt;!&ndash;                                        更多操作&ndash;&gt;
  &lt;!&ndash;                                        <v-badge>&ndash;&gt;
  &lt;!&ndash;                                            <template v-slot:badge>0</template>&ndash;&gt;
                                      <v-btn  class="mdi-bell-outline"></v-btn>
  &lt;!&ndash;                                        </v-badge>&ndash;&gt;
  &lt;!&ndash;                                    </v-btn>&ndash;&gt;
                                  </template>
                                  <v-list>
                                      <v-list-item>a</v-list-item>
                                      <v-list-item>a</v-list-item>
                                      <v-list-item>a</v-list-item>
                                      <v-list-item>a</v-list-item>
                                  </v-list>
                              </v-menu>-->
                        </v-col>
                        <!--用户头像-->
                        <v-col cols="2" class="ma-0 pa-0">
                            <v-menu
                                    transition="scale-transition"
                                    :open-on-hover="true"
                                    :close-on-click="true"
                                    :close-on-content-click="true"
                                    :offset-y="true"
                            >
                                <template v-slot:activator="{ on }">
                                    <v-avatar v-on="on">
                                        <img
                                                src="https://cdn.vuetifyjs.com/images/john.jpg"
                                                alt="John"
                                        >
                                    </v-avatar>
                                </template>
                                <v-list>
                                    <v-list-item>a</v-list-item>
                                    <v-list-item>a</v-list-item>
                                    <v-list-item>a</v-list-item>
                                    <v-list-item>退出</v-list-item>
                                </v-list>
                            </v-menu>
                        </v-col>
                    </v-row>
                </v-col>
                <!--右侧占空位-->
                <!--                    <v-col cols="1" class="ma-0 pa-0 red" style="visibility: hidden;">1</v-col>-->
            </v-row>
        </v-content>
        <v-content id="menu_content_control">
            <!--菜单栏-->
            <v-row class="menu_row d-flex flex-row  pa-0">
                <!--                中间左边-->
                <v-col cols="1" style=" visibility: hidden;" class="grey">1</v-col>
                <!--margin: 0; padding: 0;-->
                <v-col cols="10" class="d-flex flex-row pa-0 ma-0">
                    <ul class="menu_ul d-flex flex-row pa-0">
                        <router-link @click.native="flushCom('Synthesize')"
                                     :to="{name:'Synthesize',query:{title:'Synthesize'}}">
                            <li class="menu_ul_li">首页</li>
                        </router-link>
                        <router-link @click.native="flushCom('Inland')" :to="{name:'Inland',query:{title:'Inland'}}">
                            <li class="menu_ul_li">国内</li>
                        </router-link>
                        <router-link @click.native="flushCom('International')"
                                     :to="{name:'International',query:{title:'International'}}">
                            <li class="menu_ul_li">国际</li>
                        </router-link>
                        <router-link @click.native="flushCom('Sports')" :to="{name:'Sports',query:{title:'Sports'}}">
                            <li class="menu_ul_li">体育</li>
                        </router-link>
                        <router-link @click.native="flushCom('Military')"
                                     :to="{name:'Military',query:{title:'Military'}}">
                            <li class="menu_ul_li">军事</li>
                        </router-link>
                        <router-link @click.native="flushCom('Recreation')"
                                     :to="{name:'Recreation',query:{title:'Recreation'}}">
                            <li class="menu_ul_li">娱乐</li>
                        </router-link>
                        <router-link @click.native="flushCom('Science')" :to="{name:'Science',query:{title:'Science'}}">
                            <li class="menu_ul_li">科技</li>
                        </router-link>
                        <router-link @click.native="flushCom('History')" :to="{name:'History',query:{title:'History'}}">
                            <li class="menu_ul_li">历史</li>
                        </router-link>
                        <router-link @click.native="flushCom('Picture')" :to="{name:'Picture',query:{title:'Picture'}}">
                            <li class="menu_ul_li">图片</li>
                        </router-link>
                    </ul>
                </v-col>
                <v-col cols="1" class="yellow" style="visibility: hidden">1</v-col>
            </v-row>
        </v-content>
    </v-content>
</template>
<script>
    export default {
        name: "Head",
        data() {
            return {
                title: null,
                count: 0
            }
        },
        methods: {
            flushCom: function (title) {
                //router是路由实例,例如:var router = new Router({})
                //router.go(n)是路由的一个方法，意思是在history记录中前进或者后退多少步，0就表示还是当前，类似window.history.go(n)
                // this.$router.go(0);
                //判断是否重复点击
                console.clear();
                // console.log("当前点击" + this.$route.query.title);
                console.log("当前点击" + title);
                this.count++;
                if (this.count == 1) {
                    //页面加载完第一次点击 判断是否是首页
                    if (title == 'Synthesize') {
                        console.log("第" + this.count + "次，点击首页");
                        this.title = title;
                        this.$router.go(0);
                    } else {
                        //用户点击其他分类
                        console.log("用户点击其他分类");
                        this.title = title;
                        // console.log("获取结果" + this.title);
                        console.log("刷新");
                    }
                } else {
                    if (this.title == title) {
                        console.log("点击相同分类" + this.count + "次 获取分类" + title);
                        this.title = title;
                        console.log("获取结果" + this.title);
                        this.$router.go(0);
                    } else {
                        console.log("用户点击其他分类");
                        this.title = title;
                        console.log("获取结果" + this.title);
                    }
                }
                //延迟 结果
                /* if (this.count == 1) {
                    //页面加载完第一次点击 判断是否是首页
                    if (this.$route.query.title == 'Synthesize') {
                        console.log("第" + this.count + "次，点击首页");
                        this.title = this.$route.query.title;
                        // this.$router.go(0);
                        console.log("刷新");
                    } else {
                        //用户点击其他分类
                        console.log("用户点击其他分类");
                        this.title = this.$route.query.title;
                        // console.log("获取结果" + this.title);
                        console.log("刷新");
                    }
                } else {
                    if (this.title == this.$route.query.title) {
                        console.log("点击相同分类" + this.count + "次 获取分类" + this.$route.query.title);
                        this.title = this.$route.query.title;
                        console.log("获取结果" + this.title);
                        // this.$router.go(0);
                        console.log("刷新");
                    } else {
                        console.log("用户点击其他分类");
                        this.title = this.$route.query.title;
                        console.log("获取结果" + this.title);
                    }
                }*/
            }
        }
    }
</script>
