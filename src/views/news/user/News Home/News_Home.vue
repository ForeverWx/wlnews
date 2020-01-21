<template>
    <v-app style="margin: 0px;padding: 0px;">
        <v-content id="webpage_content">
            <!--网页内容-->
            <v-content id="web_control">
                <!--导入网页头部-->
                <HEAD/>
                <!--网页 中部 内容 控制-->
                <v-content id="central_control_control">
                    <!--导入 中部 动态判断 展示 类型内容-->
                    <router-view>

                    </router-view>

                    <!--综合 新闻
                          <SYNTHESIZE v-if="middle_show=='Synthesize'"/>
                          &lt;!&ndash;国内新闻&ndash;&gt;
                          <INLAND v-if="middle_show=='Inland'"/>
                          &lt;!&ndash;国际新闻 &ndash;&gt;
                          <INTERNATIONAL v-if="middle_show=='International'"/>
                          &lt;!&ndash;体育 新闻&ndash;&gt;
                          <SPORTS v-if="middle_show=='Sports'"/>
                          &lt;!&ndash;军事 新闻&ndash;&gt;
                          <MILITARY v-if="middle_show=='Military'"/>
                          &lt;!&ndash;娱乐 新闻&ndash;&gt;
                          <RECREATION v-if="middle_show=='Recreation'"/>
                          &lt;!&ndash;科技 新闻&ndash;&gt;
                          <SCIENCE v-if="middle_show=='Science'"/>
                          &lt;!&ndash;历史 新闻&ndash;&gt;
                          <HISTORY v-if="middle_show=='History'"/>
                          &lt;!&ndash;图片 新闻&ndash;&gt;
                          <PICTURE v-if="middle_show=='Picture'"/>
                          &lt;!&ndash;导图底部组件 综合显示&ndash;&gt;
                          <BOTTOM v-if="middle_show=='Synthesize'"/>-->
                </v-content>
            </v-content><!--网页内容控制结束-->
        </v-content><!--网页控制结束-->
    </v-app>
</template>
<style scoped>
    @import "../../../../static/css/News/User/News Home/wl_news_home.scss";
</style>
<script>
    import "../../../../static/js/News/User/News Home/News Home.js";
    /*导入页面 组件 头部 中部 底部*/
    const Head = resolve => require(['@/components/News/User/News/Public/Head.vue'], resolve);
    /* /!*首页综合 组件*!/
     const Synthesize = resolve => require(["@/components/News/User/News/Types/Synthesize"], resolve);
     /!*国内 组件*!/
     const Inland = resolve => require(["@/components/News/User/News/Types/Inland"], resolve);
     /!*国际 组件*!/
     const International = resolve => require(["@/components/News/User/News/Types/International"], resolve);
     /!*体育 组件*!/
     const Sports = resolve => require(["@/components/News/User/News/Types/Sports"], resolve);
     /!*军事 组件*!/
     const Military = resolve => require(["@/components/News/User/News/Types/Military"], resolve);
     /!*娱乐 组件*!/
     const Recreation = resolve => require(["@/components/News/User/News/Types/Recreation"], resolve);
     /!*科技 组件*!/
     const Science = resolve => require(["@/components/News/User/News/Types/Science"], resolve);
     /!*历史 组件*!/
     const History = resolve => require(["@/components/News/User/News/Types/History"], resolve);
     /!*图片 组件*!/
     const Picture = resolve => require(["@/components/News/User/News/Types/Picture"], resolve);*/
    /*底部 组件*/
    const Bottom =  resolve => require(['@/components/News/User/News/Public/Bottom.vue'], resolve);

    export default {
        name: "News_Home",
        data() {
            return {
                /*中间展示 Synthesize*/
                middle_show: 'Synthesize',
                //百度搜索
                myData: [],
                keyword: '',
                now: -1,
                //底部图标
                icons: [
                    'fab fa-facebook',
                    'fab fa-twitter',
                    'fab fa-google-plus',
                    'fab fa-linkedin',
                    'fab fa-instagram',
                ],
                items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
                tables: ['评论排行', '点击排行']
            }
        },
        methods: {
            async get(event) {
                if (event.keyCode == 38 || event.keyCode == 40) return;
                if (event.keyCode == 13) {
                    window.open('https://www.baidu.com/s?wd=' + this.keyword);
                    this.keyword = ''
                }
                /*  var result = await this.hgetp("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su", {wd: this.keyword});
                  this.myData = result.data.s;
                  console.log(this.myData);
                  console.log(result);*/
            },
            selectDown: function () {
                this.now++;
                if (this.now == this.myData.length) this.now = -1;
                this.keyword = this.myData[this.now];
            },
            selectUp: function () {
                this.now--;
                if (this.now == -2) this.now = this.myData.length - 1;
                this.keyword = this.myData[this.now];
            }, bensearch() {
                if (this.keyword.trim()) {
                    window.open('https://www.baidu.com/s?wd=' + this.keyword);
                    this.keyword = ''
                }
            },
            changetab(id) {
                let tag = document.getElementById(id);
                tag.click();
            }, getword() {
                var jm = this.$aes.Encrypt("admin");
                console.log("加密");
                console.log(jm);
                console.log("解密");
                console.log(this.$aes.Decrypt(jm));
            }
        },
        mounted() {
            this.getword();
            if (this.$route.params.middle_show) {
                this.middle_show = this.$route.params.middle_show;
            }
        },
        components: {
            HEAD: Head,
            /* SYNTHESIZE: Synthesize,
             INLAND: Inland,
             INTERNATIONAL: International,
             SPORTS: Sports,
             MILITARY: Military,
             RECREATION: Recreation,
             SCIENCE: Science,
             HISTORY: History,
             PICTURE: Picture,*/
            BOTTOM: Bottom
        }
    }
</script>
