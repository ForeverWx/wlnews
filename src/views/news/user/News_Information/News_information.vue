<template>
    <v-app class="ma-0 pa-0">
        <v-content class="light-green lighten-5">
            <!--新闻详情头部-->
            <v-card>
                <v-row class="ma-0 pa-0 d-flex flex-row" style="height:52px;">
                    <v-col cols="2" class="ma-0 pa-0">
                        Logo
                    </v-col>
                    <v-col cols="7" class=" ma-0 pa-0">

                    </v-col>
                    <v-col cols="3" class="ma-0 pa-0">
                        <div class="ma-0 pa-0">
                            <ul class="header_ul d-flex flex-row pa-0 ">
                                <li class="header_ul_li title font-weight-light " onclick="location.href='/News_Home'">
                                    首页
                                </li>
                                <li class="header_ul_li title font-weight-light">登录</li>
                            </ul>
                        </div>
                    </v-col>
                </v-row>
            </v-card>
            <!--中间控制-->
            <!--新闻标题-->
            <v-card class="ma-0 pa-0">
                <v-row class="ma-0 pa-0">
                    <v-col cols="2" class="ma-0 pa-0" style="visibility: hidden"></v-col>
                    <v-col cols="7" class=" ma-0 pa-0">
                        <div class="news_title ms-auto text-left">
                            教育部回应“延长学教育部回应“延长学科评估周期”教育部回应“延长学教育部回应“延长学科评估周期”：将按照规律重新论证评估
                        </div>
                    </v-col>
                    <v-col cols="3" class="ma-0 pa-0" style="visibility: hidden;"></v-col>
                </v-row>
            </v-card>
            <!--              中间 控制 文章内容 -->
            <v-card class="ma-0 pa-0">
                <v-row class="ma-0 pa-0 pt-6">
                    <v-col cols="2" class="ma-0 pa-0" style="visibility: hidden;"></v-col>
                    <v-col cols="1" class="ma-0 pa-0">回复</v-col>
                    <v-col cols="6" class="ma-0 pa-0">
                        <!--新闻文章内容-->
                        <div class="article_content ma-0 pa-0">
                            <p class="article_content_text">新华社北京12月15日电
                                12月16日出版的第24期《求是》杂志将发表中共中央总书记、国家主席、中央军委主席习近平的重要文章《推动形成优势互补高质量发展的区域经济布局》。
                                文章强调，要根据各地区的条件，走合理分工、优化发展的路子，落实主体功能区战略，完善空间治理，形成优势互补、高质量发展的区域经济布局。
                                文章指出，要正确认识当前区域经济发展新形势。经济发展的空间结构正在发生深刻变化，中心城市和城市群正在成为承载发展要素的主要空间形式。我们必须适应新形势，谋划区域协调发展新思路。
                            </p>
                            <p class="article_content_img">
                                <img src="https://inews.gtimg.com/newsapp_bt/0/10979432072/1000"/>
                            </p>
                        </div>
                    </v-col>
                    <!--新闻右侧-->
                    <div class="article_author_div ma-0 pa-0">
                        <!--<&#45;&#45;新闻作者&ndash;&gt;-->
                        <div class="author_div">
                            <v-card class="ma-0 pa-0 pink lighten-5">
                                <div class="article_author_content ma-0 pa-0">
                                    <ul class="article_author_content_ul ma-0 pa-0 ms-auto d-flex flex-row">
                                        <!--作者头像-->
                                        <li class="article_author_content_ul_li_Head_Portraits ml-2 mt-2 d-flex flex-row">
                                            <p class="article_author_content_ul_li_Head_Portraits_p ma-0 pa-0 mt-2">
                                                <v-avatar size="67"><img
                                                        src="https://inews.gtimg.com/newsapp_bt/0/10979432072/1000"/>
                                                </v-avatar>
                                            </p>
                                        </li>

                                        <li class="mt-1 d-flex flex-column">
                                            <p class="article_author_content_ul_li_name mt-4">
                                                新浪新浪客户端
                                            </p>
                                            <!--关注作者-->
                                            <p class="article_author_content_ul_li_fllower red lighten-3 ml-5">
                                                关 注
                                            </p>
                                        </li>
                                    </ul>
                                </div>


                            </v-card>
                            <!--最新发布文章-->
                            <v-card class="ma-0 pa-0 pb-3">
                                <div class="article_author_laster_content ma-0 pa-0">
                                    <ul class="article_author_laster_article_ul ma-0 pa-0">
                                        <li>新西兰火山喷发致16人死 警方陆续公布遇难者身份</li>
                                        <li>新西兰火山喷发致16人死 警方陆续公布遇难者身份</li>
                                        <li>新西兰火山喷发致16人死 警方陆续公布遇难者身份</li>
                                        <li>新西兰火山喷发致16人死 警方陆续公布遇难者身份</li>
                                        <li>新西兰火山喷发致16人死 警方陆续公布遇难者身份</li>
                                    </ul>
                                </div>
                            </v-card>
                        </div>

                        <!--相关文章推荐-->
                        <v-card class="Related_Articles  pa-0 pb-3">
                            <div><p class="Related_Articles_title text-left text-left font-weight-bold ml-2">相关文章</p>
                            </div>
                            <div class=" ma-0 pa-0">
                                <ul class="Related_Articles_title_ul d-flex flex-row ma-0 pa-0 mt-3">
                                    <li class="Related_Articles_title_ul_img ml-2">
                                        <v-img src="https://inews.gtimg.com/newsapp_bt/0/10968824505/1000" width="160"/>
                                    </li>
                                    <li class="Related_Articles_title_ul_text ml-2 mr-2">
                                        新西兰火山喷发从“稳中求进”到“长期向好”，再到“积极进取”，习近平总书记始终亲力亲为，年复一年为中国经济绘制路线图。致16人死 警方陆续公布遇难者身份
                                    </li>
                                </ul>
                                <ul class="Related_Articles_title_ul d-flex flex-row ma-0 pa-0 mt-3">
                                    <li class="Related_Articles_title_ul_img ml-2">
                                        <v-img src="https://inews.gtimg.com/newsapp_bt/0/10968824505/1000" width="160"/>
                                    </li>
                                    <li class="Related_Articles_title_ul_text ml-2 mr-2">
                                        新西兰火山喷发从“稳中求进”到“长期向好”，再到“积极进取”，习近平总书记始终亲力亲为，年复一年为中国经济绘制路线图。致16人死 警方陆续公布遇难者身份
                                    </li>
                                </ul>
                                <ul class="Related_Articles_title_ul d-flex flex-row ma-0 pa-0 mt-3">
                                    <li class="Related_Articles_title_ul_img ml-2">
                                        <v-img src="https://inews.gtimg.com/newsapp_bt/0/10968824505/1000" width="160"/>
                                    </li>
                                    <li class="Related_Articles_title_ul_text ml-2 mr-2">
                                        新西兰火山喷发从“稳中求进”到“长期向好”，再到“积极进取”，习近平总书记始终亲力亲为，年复一年为中国经济绘制路线图。致16人死 警方陆续公布遇难者身份
                                    </li>
                                </ul>
                                <ul class="Related_Articles_title_ul d-flex flex-row ma-0 pa-0 mt-3">
                                    <li class="Related_Articles_title_ul_img ml-2">
                                        <v-img src="https://inews.gtimg.com/newsapp_bt/0/10968824505/1000" width="160"/>
                                    </li>
                                    <li class="Related_Articles_title_ul_text ml-2 mr-2">
                                        新西兰火山喷发从“稳中求进”到“长期向好”，再到“积极进取”，习近平总书记始终亲力亲为，年复一年为中国经济绘制路线图。致16人死 警方陆续公布遇难者身份
                                    </li>
                                </ul>
                                <ul class="Related_Articles_title_ul d-flex flex-row ma-0 pa-0 mt-3">
                                    <li class="Related_Articles_title_ul_img ml-2">
                                        <v-img src="https://inews.gtimg.com/newsapp_bt/0/10968824505/1000" width="160"/>
                                    </li>
                                    <li class="Related_Articles_title_ul_text ml-2 mr-2">
                                        新西兰火山喷发从“稳中求进”到“长期向好”，再到“积极进取”，习近平总书记始终亲力亲为，年复一年为中国经济绘制路线图。致16人死 警方陆续公布遇难者身份
                                    </li>
                                </ul>
                            </div>
                        </v-card>
                    </div>
                </v-row>
            </v-card>

            <!--展位 调间距 区域-->
            <v-card class="ma-0 pa-0 control_zone" style="width: 100%"></v-card>
            <!--底部评论-->
            <v-card class="ma-0 pa-0">
                <v-row class="ma-0 pa-0">
                    <v-col cols="3" class="ma-0 pa-0" style="visibility: hidden">

                    </v-col>
                    <v-col cols="6" class="ma-0 pa-0">
                        <div class="ma-0 pa-0"><p class="title text-left  latest_comments_title">最新评论</p></div>

                        <!--评论内容 -->

                        <v-card class="ma-0 pa-0 mb-1">
                            <div class="ma-0 pa-0">
                                <!--评论 信息-->
                                <ul class="latest_comments_content_ul d-flex flex-row ma-0 pa-0">
                                    <!--用户头像-->
                                    <li class="latest_comments_content_ul_li_heard_img ml-6">
                                        <v-avatar size="50" class="mt-4">
                                            <v-img src="https://inews.gtimg.com/newsapp_bt/0/10979432072/1000"/>
                                        </v-avatar>
                                    </li>
                                    <v-card class="latest_comments_card ma-0 pa-0 ml-5">
                                        <!--评论内容-->
                                        <li class="latest_comments_card_li mt-1 d-flex flex-column ma-0 pa-0">
                                            <!--用户昵称 评论点赞 -->
                                            <div class="ma-0 pa-0 ml-4">
                                                <!--评论用户名称 举报-->
                                                <!--评论顶部-->
                                                <div class="ma-0 pa-0 mt-2 d-flex flex-row">
                                                    <p class="latest_comments_name font-weight-bold text-left subtitle-1">
                                                        王五</p>
                                                    <!--展位 空 小准位置-->
                                                    <p class="latest_comments_reply_report">举报</p>
                                                </div>
                                                <!--评论用户内容-->
                                                <p class="ma-0 pa-0 latest_comments_content">
                                                <p class="text-left ml-2 mr-3">
                                                    经济社会持续健康发展，三大攻坚战取得关键进展，精准脱贫成效显著，金融风险有效防控
                                                    ，生态环境质量总体改善，改革开放迈出重要步伐，供给侧结构性改革继续深化，科技创新取得新突破，人民群众获得感、
                                                    幸福感、安全感提升……👍👍
                                                </p>
                                                <!--回复列表-->
                                                <p class="ma-0 pa-0 ">
                                                    <v-card class="latest_comments_reply_list ma-0 pa-0 theme--light  mt-5 text-left ml-1 mr-3"
                                                            style="background-color: rgb(247,247,247)">
                                                        <!--回复列表显示两条 回复楼主-->
                                                        <div class="ma-0 pa-0 pt-5">
                                                            <div class="ml-5 mr-4">
                                                                <!--用户昵称-->
                                                                <span class="latest_comments_reply_list_nick">张三:</span>
                                                                <span class="ml-2 latest_comments_content">中国经济发展前景一定会更加光明，也必然更加光明！一个更加开放的中国，将同世界形成更加良性的互动，带来更加进步和繁荣的中国和世界。</span>
                                                <p class="latest_comments_reply_list_operate mt-2">火 19赞 9小时前
                                                    <span class="latest_comments_reply_people_report">举报</span>
                                                </p>
                                            </div>
                            </div>
                        </v-card>
                        </p>
                        <p class="ma-0 pa-0 ">
                            <v-card class="latest_comments_reply_list ma-0 pa-0 theme--light  mt-5 text-left ml-1 mr-3"
                                    style="background-color: rgb(247,247,247)">
                                <!--回复列表显示两条 回复楼主-->
                                <div class="ma-0 pa-0 pt-5">
                                    <div class="ml-5 mr-4">
                                        <!--用户昵称-->
                                        <span class="latest_comments_reply_list_nick">张三:</span>
                                        <span class="ml-2 latest_comments_content">中国经济发展前景一定会更加光明，也必然更加光明！一个更加开放的中国，将同世界形成更加良性的互动，带来更加进步和繁荣的中国和世界。</span>
                        <p class="latest_comments_reply_list_operate mt-2">火 19赞 9小时前
                            <span class="latest_comments_reply_people_report">举报</span>
                        </p>
                        </div>
                        </div>

            </v-card>
            </p>
            <!--如果有更多回复 回复文章评论者显示查看全部-->

            <!--有回复屏幕中其他评论者显示 更多回复-->
            </div>

            <div>
                <p class="text-left ma-0 pa-0 mt-5">
                                                <span
                                                        class="latest_comments_reply_praize mr-3 ml-4">点赞
                                                </span>
                    <span class="latest_comments_reply font-weight-bold ma-0 pa-0"
                          @click="reply_or_submit">{{textarea.reply_or_submit_text}}
                                                </span>
                </p>
            </div>
            <!--评论内容控制-->
            <v-row class="d-flex flex-row ma-0 pa-0">
                <v-col cols="11">
                    <v-textarea v-show="textarea.show"
                                class="latest_comments_textarea ma-0 pa-0" counter="300"
                                label="回复" rows="3" full-width filled solo no-resize>
                        clearable>
                    </v-textarea>
                </v-col>
                <v-col cols="1" v-show="textarea.show" class="ma-0 pa-0">
                    <div class="latest_comments_textarea_submit_div">
                        <p class="latest_comments_textarea_submit_p font-weight-bold">
                            提交</p>
                    </div>
                </v-col>
            </v-row>
            </li>
            </v-card>
            </ul>
            </div>
            </v-card>

            <!--            <v-card class="ma-0 pa-0 mb-1">-->
            <!--                <div class="ma-0 pa-0">-->
            <!--                    &lt;!&ndash;评论 信息&ndash;&gt;-->
            <!--                    <ul class="latest_comments_content_ul d-flex flex-row ma-0 pa-0">-->
            <!--                        &lt;!&ndash;用户头像&ndash;&gt;-->
            <!--                        <li class="latest_comments_content_ul_li_heard_img ml-6">-->
            <!--                            <v-avatar size="50" class="mt-4">-->
            <!--                                <v-img src="https://inews.gtimg.com/newsapp_bt/0/10979432072/1000"/>-->
            <!--                            </v-avatar>-->
            <!--                        </li>-->
            <!--                        <v-card class="ma-0 pa-0 ml-5">-->
            <!--                            &lt;!&ndash;评论内容&ndash;&gt;-->
            <!--                            <li class="mt-4 ml-4 d-flex flex-column ">-->
            <!--                                &lt;!&ndash;评论用户名称&ndash;&gt;-->
            <!--                                <p class="latest_comments_name font-weight-bold text-left subtitle-1">王五</p>-->
            <!--                                <p class="latest_comments_content text-left mr-2 ml-2">-->
            <!--                                    经济社会持续健康发展，三大攻坚战取得关键进展，精准脱贫成效显著，金融风险有效防控-->
            <!--                                    ，生态环境质量总体改善，改革开放迈出重要步伐，供给侧结构性改革继续深化，科技创新取得新突破，人民群众获得感、-->
            <!--                                    幸福感、安全感提升……👍👍</p>-->
            <!--                                <p><span-->
            <!--                                        class="latest_comments_reply font-weight-bold float-left ml-4">回复</span><span-->
            <!--                                        class="float-right mr-5">点赞 举报</span></p>-->
            <!--                            </li>-->
            <!--                        </v-card>-->

            <!--                    </ul>-->
            <!--                </div>-->
            <!--            </v-card>-->
            </v-col>
            <v-col cols="3" class="ma-0 pa-0" style="visibility: hidden">

            </v-col>
            </v-row>
            </v-card>
        </v-content>
    </v-app>
</template>

<script>
    export default {
        name: "News_information",
        data() {
            return {
                /*评论框*/
                textarea: {
                    show: false,
                    reply_or_submit_text: "回复",
                }
            }
        }, methods: {
            reply_or_submit() {
                if (this.textarea.show) {
                    this.textarea.show = false;
                    this.textarea.reply_or_submit_text = "回复";
                } else {
                    this.textarea.show = true;
                    this.textarea.reply_or_submit_text = "收起";
                }
            }
        }, watch() {
            this.data()
        }
    }
</script>

<style scoped>
    @import "../../../../static/css/News/User/News Information/wl_news_information.scss";
</style>
