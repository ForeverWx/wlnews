<template>
    <v-app style="margin: 0px;padding: 0px;">
        <v-content class="light-green lighten-5">
            <!--            头部开始-->
            <v-row align-content class="d-flex flex-row">
                <v-col cols="4">
                    LOGO
                </v-col>
                <v-col cols="4">
                    <v-card
                            color="grey lighten-4"
                            flat
                            height="50px"
                            tile
                    >
                        <v-toolbar dense class="d-flex flex-row">
                            <v-col class="col-2 mt-3" style="margin-left:-17px;">
                                <v-select
                                        class="mt-3"
                                        :items="items"
                                        label="name"
                                        style="width: 100px;"
                                >
                                </v-select>
                            </v-col>
                            <v-col class="col-8">
                                <v-text-field
                                        label="News"
                                        required
                                        height="30"
                                        class="mt-7"
                                        style="width: 480px;"
                                ></v-text-field>

                                <!--                                <input type="text" placeholder=" 请输入内容" style="width: 425px;height: 46px;">-->

                            </v-col>
                            <v-col class="col-1  pa-2">
                                <v-btn icon>
                                    <v-icon>mdi-magnify</v-icon>
                                </v-btn>
                            </v-col>
                        </v-toolbar>
                    </v-card>
                </v-col>
                <!--                头部右面-->
                <v-col cols="4" class="d-flex flex-row" style="height: 70px">
                    <!--                        用户信息栏-->
                    <v-row class="d-flex flex-row">
                        <!--                        头像 消息-->
                        <v-col cols="8" class="d-flex flex-row" style="margin-top: -23px">
                            <v-col class="col-10 d-flex flex-row">
                                <v-col class="cols-1">
                                    <v-badge>
                                        <template v-slot:badge>0</template>
                                        <v-icon>mdi-email</v-icon>
                                    </v-badge>
                                </v-col>
                                <v-col class="cols-2">2</v-col>
                                <v-col class="cols-3">3</v-col>
                                <v-col class="cols-3">3</v-col>
                                <v-col class="cols-3">3</v-col>
                            </v-col>
                            <v-col class="col-2 blue-grey">
                                <v-avatar>
                                    <!--                                    <img-->
                                    <!--                                            src="https://cdn.vuetifyjs.com/images/john.jpg"-->
                                    <!--                                            alt="John"-->
                                    <!--                                    >-->
                                </v-avatar>
                            </v-col>
                        </v-col>
                        <v-col cols="4" class="pa-2 d-flex flex-row">
                            <!--菜单-->
                            <v-menu
                                    transition="scale-transition"
                                    :open-on-hover="true"
                                    :close-on-click="true"
                                    :close-on-content-click="true"
                                    :offset-y="true"
                            >
                                <template v-slot:activator="{ on }">
                                    <v-btn
                                            color="primary"
                                            dark
                                            v-on="on"
                                    >更多操作
                                    </v-btn>
                                </template>
                                <v-list>
                                    <v-list-item>a</v-list-item>
                                    <v-list-item>a</v-list-item>
                                    <v-list-item>a</v-list-item>
                                    <v-list-item>a</v-list-item>
                                </v-list>
                            </v-menu>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>

            <!--菜单栏-->
            <v-row class="d-flex flex-row ma-0 pa-0 mt-2">
                <!--                中间左边-->
                <v-col cols="1" style="visibility: hidden;">1</v-col>
                <!--                margin: 0; padding: 0;-->
                <v-col cols="10" class="menu d-flex flex-row pa-0 ma-0">
                    <ul class="menu_ul d-flex flex-row pa-0 ma-2 mt-3 mb-3" style="list-style: none;">
                        <li class="menu_ul_li title font-regular ml-1">新闻</li>
                        <li class="menu_ul_li title font-regular ml-1">新闻</li>
                        <li class="menu_ul_li title font-regular ml-1">新闻</li>
                        <li class="menu_ul_li title font-regular ml-1">新闻</li>
                        <li class="menu_ul_li title font-regular ml-1">新闻</li>
                        <li class="menu_ul_li title font-regular ml-1">新闻</li>
                        <li class="menu_ul_li title font-regular ml-1">新闻</li>
                        <li class="menu_ul_li title font-regular ml-1">新闻</li>
                        <li class="menu_ul_li title font-regular ml-1">新闻</li>
                        <li class="menu_ul_li title font-regular ml-1">新闻</li>
                        <li class="menu_ul_li title font-regular ml-1">新闻</li>
                        <li class="menu_ul_li title font-regular ml-1">新闻</li>
                        <li class="menu_ul_li title font-regular ml-1">新闻</li>
                        <li class="menu_ul_li title font-regular ml-1">新闻</li>
                        <li class="menu_ul_li title font-regular ml-1">新闻</li>
                        <li class="menu_ul_li title font-regular ml-1">新闻</li>
                    </ul>
                </v-col>
                <v-col cols="1" class="yellow" style="visibility: hidden">1</v-col>
            </v-row>
            <!--                        中部 新闻-->
            <v-row class="mt-3 d-flex flex-row mt-6 ma-0 pa-0">
                <!--                中间左边 占空 列 1-->
                <v-col cols="1" class="ma-0 pa-0" style="visibility: hidden;">1</v-col>
                <!--                margin: 0; padding: 0;-->
                <v-col cols="10" class="ma-0 pa-0 d-flex flex-row pl-1 mt-3">
                    <!--                    右侧 地方新闻-->
                    <div style="width:30%;height: 1200px;" class="mr-1 ma-0 pa-0">
                        <div class=" text-left  ma-0 pa-0"><p class="location_news_title ma-0 pa-0 title">地方新闻</p></div>
                        <!--                    地方新闻内容-->
                        <div class="left_article ma-0 pa-0 mt-5">
                            <ul class="location_news_ul ma-0 pa-0 subtitle-1 text-left">
                                <li class="location_news_ul_li  ma-0 pa-0">
                                    栅格可以被嵌套，类似于其它框架，以实现非常自定义的布局，以实现非常自定义的布局。
                                </li>
                                <li class="location_news_ul_li  ma-0 pa-0">
                                    栅格可以被嵌套，类似于其它框架，以实现非常自定义的布局，以实现非常自定义的布局。
                                </li>
                                <li class="location_news_ul_li  ma-0 pa-0">
                                    栅格可以被嵌套，类似于其它框架，以实现非常自定义的布局，以实现非常自定义的布局。
                                </li>
                                <li class="location_news_ul_li  ma-0 pa-0">
                                    栅格可以被嵌套，类似于其它框架，以实现非常自定义的布局，以实现非常自定义的布局。
                                </li>
                                <li class="location_news_ul_li  ma-0 pa-0">
                                    栅格可以被嵌套，类似于其它框架，以实现非常自定义的布局，以实现非常自定义的布局。
                                </li>
                                <li class="location_news_ul_li  ma-0 pa-0">
                                    栅格可以被嵌套，类似于其它框架，以实现非常自定义的布局，以实现非常自定义的布局。
                                </li>
                                <li class="location_news_ul_li  ma-0 pa-0">
                                    栅格可以被嵌套，类似于其它框架，以实现非常自定义的布局，以实现非常自定义的布局。
                                </li>
                                <li class="location_news_ul_li  ma-0 pa-0">
                                    栅格可以被嵌套，类似于其它框架，以实现非常自定义的布局，以实现非常自定义的布局。
                                </li>
                            </ul>
                        </div>
                        <!--                    地方新闻优秀文章-->
                        <div>

                            <div class="location_news_imagearticle mt-5 d-flex flex-row"
                                 style="height: 124px; overflow: hidden;">
                                <!--        左面图片-->
                                <ul class=" ma-0 pa-0 d-flex flex-row text-left"
                                    style="list-style: none">
                                    <li class="location_news_imagearticle_img">
                                        <v-img src="http://file02.16sucai.com/d/file/2015/0408/779334da99e40adb587d0ba715eca102.jpg"
                                               width="200"/>
                                    </li>                               <!--                            右面文字-->
                                    <li class="location_news_imagearticle_li ma-0 pa-0 ml-4  mr-5 body-1">
                                        <p class="location_news_imagearticle_li_p ma-0 pa-0 mr-1">
                                            栅格可以被嵌套，类似于其它框架，以实现非常自定义的布局
                                            栅格可以被嵌套，类似于其它框架，
                                            栅格可以被嵌套，类似于其它框架，
                                            以实现非常自定义的布局类似于其它框架，类似于其它框架，
                                            以实现非常自定义的布局类似于其它框架，
                                        </p>
                                    </li>
                                </ul>
                            </div>

                            <div class="left_article ma-0 pa-0 mt-5">
                                <ul class="location_news_ul ma-0 pa-0 subtitle-1 text-left">
                                    <li class="location_news_ul_li  ma-0 pa-0">
                                        栅格可以被嵌套，类似于其它框架，以实现非常自定义的布局，以实现非常自定义的布局。
                                    </li>
                                    <li class="location_news_ul_li  ma-0 pa-0">
                                        栅格可以被嵌套，类似于其它框架，以实现非常自定义的布局，以实现非常自定义的布局。
                                    </li>
                                    <li class="location_news_ul_li  ma-0 pa-0">
                                        栅格可以被嵌套，类似于其它框架，以实现非常自定义的布局，以实现非常自定义的布局。
                                    </li>
                                    <li class="location_news_ul_li  ma-0 pa-0">
                                        栅格可以被嵌套，类似于其它框架，以实现非常自定义的布局，以实现非常自定义的布局。
                                    </li>
                                    <li class="location_news_ul_li  ma-0 pa-0">
                                        栅格可以被嵌套，类似于其它框架，以实现非常自定义的布局，以实现非常自定义的布局。
                                    </li>
                                    <li class="location_news_ul_li  ma-0 pa-0">
                                        栅格可以被嵌套，类似于其它框架，以实现非常自定义的布局，以实现非常自定义的布局。
                                    </li>
                                </ul>
                            </div>

                            <div class="location_news_imagearticle mt-5 d-flex flex-row"
                                 style="height: 124px; overflow: hidden;">
                                <!--        左面图片-->
                                <ul class=" ma-0 pa-0 d-flex flex-row text-left"
                                    style="list-style: none">
                                    <li class="location_news_imagearticle_img">
                                        <v-img src="http://file02.16sucai.com/d/file/2015/0408/779334da99e40adb587d0ba715eca102.jpg"
                                               width="200"/>
                                    </li>                                      <!--                            右面文字-->
                                    <li class="location_news_imagearticle_li ma-0 pa-0 ml-4  mr-5 body-1">
                                        <p class="location_news_imagearticle_li_p ma-0 pa-0 mr-1">
                                            栅格可以被嵌套，类似于其它框架，以实现非常自定义的布局
                                            栅格可以被嵌套，类似于其它框架，
                                            栅格可以被嵌套，类似于其它框架，
                                            以实现非常自定义的布局类似于其它框架，类似于其它框架，
                                            以实现非常自定义的布局类似于其它框架，
                                        </p>
                                    </li>
                                </ul>
                            </div>

                            <div class="left_article ma-0 pa-0 mt-5">
                                <ul class="location_news_ul ma-0 pa-0 subtitle-1 text-left">
                                    <li class="location_news_ul_li  ma-0 pa-0">
                                        栅格可以被嵌套，类似于其它框架，以实现非常自定义的布局，以实现非常自定义的布局。
                                    </li>
                                    <li class="location_news_ul_li  ma-0 pa-0">
                                        栅格可以被嵌套，类似于其它框架，以实现非常自定义的布局，以实现非常自定义的布局。
                                    </li>
                                    <li class="location_news_ul_li  ma-0 pa-0">
                                        栅格可以被嵌套，类似于其它框架，以实现非常自定义的布局，以实现非常自定义的布局。
                                    </li>
                                    <li class="location_news_ul_li  ma-0 pa-0">
                                        栅格可以被嵌套，类似于其它框架，以实现非常自定义的布局，以实现非常自定义的布局。
                                    </li>
                                    <li class="location_news_ul_li  ma-0 pa-0">
                                        栅格可以被嵌套，类似于其它框架，以实现非常自定义的布局，以实现非常自定义的布局。
                                    </li>
                                    <li class="location_news_ul_li  ma-0 pa-0">
                                        栅格可以被嵌套，类似于其它框架，以实现非常自定义的布局，以实现非常自定义的布局。
                                    </li>
                                </ul>
                            </div>


                            <div class="location_news_imagearticle mt-5 d-flex flex-row"
                                 style="height: 124px; overflow: hidden;">
                                <!--        左面图片-->
                                <ul class=" ma-0 pa-0 d-flex flex-row text-left"
                                    style="list-style: none">
                                    <li class="location_news_imagearticle_img">
                                        <v-img src="http://file02.16sucai.com/d/file/2015/0408/779334da99e40adb587d0ba715eca102.jpg"
                                               width="200"/>
                                    </li>                                     <!--                            右面文字-->
                                    <li class="location_news_imagearticle_li ma-0 pa-0 ml-4  mr-5 body-1">
                                        <p class="location_news_imagearticle_li_p ma-0 pa-0 mr-1">
                                            栅格可以被嵌套，类似于其它框架，以实现非常自定义的布局
                                            栅格可以被嵌套，类似于其它框架，
                                            栅格可以被嵌套，类似于其它框架，
                                            以实现非常自定义的布局类似于其它框架，类似于其它框架，
                                            以实现非常自定义的布局类似于其它框架，
                                        </p>
                                    </li>
                                </ul>
                            </div>


                        </div>
                    </div>


                    <!--                   中间 控制-->
                    <div style="width: 46%" class="today_news">
                        <!--                    中间 今日要闻-->
                        <div class="ms-auto" style="height: 38%">
                            <div class="today_news_div text-left ma-0 pa-0"><p
                                    class="today_news_title title ma-0 pa-0 ml-5">今日要闻</p>
                            </div>
                            <!--                                今日要闻内容-->
                            <div class="today_news_div text-left mt-7 ml-1">
                                <ul class="today_news_ul d-flex flex-row today_news_content ">
                                    <li class="today_news_ul_li_title mr-3 font-weight-bold mt-1">人民日报</li>
                                    <span class="mt-1">|</span>
                                    <li class="today_news_ul_li_content ma-0 pa-0 ml-4"><p class="ma-0 pa-0">教授兼职被控贪污
                                        莫教授兼职被控贪污 莫教授兼职被控贪污 莫教授兼职被控贪污 莫让法律成打压科研人员工具</p></li>
                                </ul>
                                <ul class="today_news_ul d-flex flex-row today_news_content ">
                                    <li class="today_news_ul_li_title mr-3 font-weight-bold mt-1">人民日报</li>
                                    <span class="mt-1">|</span>
                                    <li class="today_news_ul_li_content ma-0 pa-0 ml-4"><p class="ma-0 pa-0">教授兼职被控贪污
                                        莫教授兼职被控贪污 莫教授兼职被控贪污 莫教授兼职被控贪污 莫让法律成打压科研人员工具</p></li>
                                </ul>
                                <ul class="today_news_ul d-flex flex-row today_news_content ">
                                    <li class="today_news_ul_li_title mr-3 font-weight-bold mt-1">人民日报</li>
                                    <span class="mt-1">|</span>
                                    <li class="today_news_ul_li_content ma-0 pa-0 ml-4"><p class="ma-0 pa-0">教授兼职被控贪污
                                        莫教授兼职被控贪污 莫教授兼职被控贪污 莫教授兼职被控贪污 莫让法律成打压科研人员工具</p></li>
                                </ul>
                                <ul class="today_news_ul d-flex flex-row today_news_content ">
                                    <li class="today_news_ul_li_title mr-3 font-weight-bold mt-1">人民日报</li>
                                    <span class="mt-1">|</span>
                                    <li class="today_news_ul_li_content ma-0 pa-0 ml-4"><p class="ma-0 pa-0">教授兼职被控贪污
                                        莫教授兼职被控贪污 莫教授兼职被控贪污 莫教授兼职被控贪污 莫让法律成打压科研人员工具</p></li>
                                </ul>
                                <ul class="today_news_ul d-flex flex-row today_news_content ">
                                    <li class="today_news_ul_li_title mr-3 font-weight-bold mt-1">人民日报</li>
                                    <span class="mt-1">|</span>
                                    <li class="today_news_ul_li_content ma-0 pa-0 ml-4"><p class="ma-0 pa-0">教授兼职被控贪污
                                        莫教授兼职被控贪污 莫教授兼职被控贪污 莫教授兼职被控贪污 莫让法律成打压科研人员工具</p></li>
                                </ul>
                                <ul class="today_news_ul d-flex flex-row today_news_content ">
                                    <li class="today_news_ul_li_title mr-3 font-weight-bold mt-1">人民日报</li>
                                    <span class="mt-1">|</span>
                                    <li class="today_news_ul_li_content ma-0 pa-0 ml-4"><p class="ma-0 pa-0">教授兼职被控贪污
                                        莫教授兼职被控贪污 莫教授兼职被控贪污 莫教授兼职被控贪污 莫让法律成打压科研人员工具</p></li>
                                </ul>
                                <ul class="today_news_ul d-flex flex-row today_news_content ">
                                    <li class="today_news_ul_li_title mr-3 font-weight-bold mt-1">人民日报</li>
                                    <span class="mt-1">|</span>
                                    <li class="today_news_ul_li_content ma-0 pa-0 ml-4"><p class="ma-0 pa-0">教授兼职被控贪污
                                        莫教授兼职被控贪污 莫教授兼职被控贪污 莫教授兼职被控贪污 莫让法律成打压科研人员工具</p></li>
                                </ul>
                                <ul class="today_news_ul d-flex flex-row today_news_content ">
                                    <li class="today_news_ul_li_title mr-3 font-weight-bold mt-1">人民日报</li>
                                    <span class="mt-1">|</span>
                                    <li class="today_news_ul_li_content ma-0 pa-0 ml-4"><p class="ma-0 pa-0">教授兼职被控贪污
                                        莫教授兼职被控贪污 莫教授兼职被控贪污 莫教授兼职被控贪污 莫让法律成打压科研人员工具</p></li>
                                </ul>
                                <ul class="today_news_ul d-flex flex-row today_news_content ">
                                    <li class="today_news_ul_li_title mr-3 font-weight-bold mt-1">人民日报</li>
                                    <span class="mt-1">|</span>
                                    <li class="today_news_ul_li_content ma-0 pa-0 ml-4"><p class="ma-0 pa-0">教授兼职被控贪污
                                        莫教授兼职被控贪污 莫教授兼职被控贪污 莫教授兼职被控贪污 莫让法律成打压科研人员工具</p></li>
                                </ul>


                            </div>
                            <!--                        中间最新新闻 -->
                            <!--                        最新新闻-->
                            <div class="hot_news ms-auto mt-3" style="height: 62%">
                                <!--                           最新新闻-->
                                <div class="ma-0 pa-0 mt-7">
                                    <!--                                最新新闻-->
                                    <div class="text-left pa-0 ma-0">
                                        <p class="hot_news_title title ma-0 pa-0 ml-5">最新新闻</p>
                                    </div>
                                    <!--                                最新新闻 标题+内容-->
                                    <div class="hot_news_article mt-5 ml-6 pa-0 ma-0 pa-0 ml-4">
                                        <!--                                   文章 标题 原标题-->
                                        <ul class="hot_news_article_ul text-left  pa-0 ma-0">
                                            <li class="hot_news_ul_li_title font-weight-black">
                                                制造业转型升级 辽宁高端制造正当时 广东闯出发展高质量
                                            </li>
                                            <li class="hot_news_ul_li_title_content">
                                                教授兼职被控贪污
                                                莫让法律成打压科研人员工具莫让法律成打压科研人员工具莫让法律成打压科研人员工具莫让法律成打压科研人员工具
                                                莫让法律成打压科研人员工具莫让法律成打压科研人员工具莫让法律成打压科研人员工具莫让法律成打压科研人员工具
                                                人员工具莫让法律成打压人员工具莫让法律成打压人员工具莫让法律成打压
                                            </li>
                                        </ul>
                                        <ul class="hot_news_article_ul text-left  pa-0 ma-0">
                                            <li class="hot_news_ul_li_title font-weight-black">
                                                制造业转型升级 辽宁高端制造正当时 广东闯出发展高质量
                                            </li>
                                            <li class="hot_news_ul_li_title_content">
                                                教授兼职被控贪污
                                                莫让法律成打压科研人员工具莫让法律成打压科研人员工具莫让法律成打压科研人员工具莫让法律成打压科研人员工具
                                                莫让法律成打压科研人员工具莫让法律成打压科研人员工具莫让法律成打压科研人员工具莫让法律成打压科研人员工具
                                                人员工具莫让法律成打压人员工具莫让法律成打压人员工具莫让法律成打压
                                            </li>
                                        </ul>
                                        <ul class="hot_news_article_ul text-left  pa-0 ma-0">
                                            <li class="hot_news_ul_li_title font-weight-black">
                                                制造业转型升级 辽宁高端制造正当时 广东闯出发展高质量
                                            </li>
                                            <li class="hot_news_ul_li_title_content">
                                                教授兼职被控贪污
                                                莫让法律成打压科研人员工具莫让法律成打压科研人员工具莫让法律成打压科研人员工具莫让法律成打压科研人员工具
                                                莫让法律成打压科研人员工具莫让法律成打压科研人员工具莫让法律成打压科研人员工具莫让法律成打压科研人员工具
                                                人员工具莫让法律成打压人员工具莫让法律成打压人员工具莫让法律成打压
                                            </li>
                                        </ul>
                                        <ul class="hot_news_article_ul text-left  pa-0 ma-0">
                                            <li class="hot_news_ul_li_title font-weight-black">
                                                制造业转型升级 辽宁高端制造正当时 广东闯出发展高质量
                                            </li>
                                            <li class="hot_news_ul_li_title_content">
                                                教授兼职被控贪污
                                                莫让法律成打压科研人员工具莫让法律成打压科研人员工具莫让法律成打压科研人员工具莫让法律成打压科研人员工具
                                                莫让法律成打压科研人员工具莫让法律成打压科研人员工具莫让法律成打压科研人员工具莫让法律成打压科研人员工具
                                                人员工具莫让法律成打压人员工具莫让法律成打压人员工具莫让法律成打压
                                            </li>
                                        </ul>
                                        <ul class="hot_news_article_ul text-left  pa-0 ma-0">
                                            <li class="hot_news_ul_li_title font-weight-black">
                                                制造业转型升级 辽宁高端制造正当时 广东闯出发展高质量
                                            </li>
                                            <li class="hot_news_ul_li_title_content">
                                                教授兼职被控贪污
                                                莫让法律成打压科研人员工具莫让法律成打压科研人员工具莫让法律成打压科研人员工具莫让法律成打压科研人员工具
                                                莫让法律成打压科研人员工具莫让法律成打压科研人员工具莫让法律成打压科研人员工具莫让法律成打压科研人员工具
                                                人员工具莫让法律成打压人员工具莫让法律成打压人员工具莫让法律成打压
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div><!--中间控制结束-->

                    <!--                    右侧 控制-->
                    <div style="width: 25%" class="ma-0 pa-0">
                        <!--                    右侧实时热热点 新闻排行-->
                        <div class="middel_right_1 ma-0 pa-0">
                            <div class="ma-0 pa-0 ">
                                <p class="heat_title title text-left ma-0 pa-0">实时热点</p>
                            </div>
                            <!--                        实时热点内容-->
                            <div class="mt-4 ma-0 pa-0">
                                <ul class="heat_ul text-left ma-0 pa-0 ">
                                    <!--                            热度信息-->
                                    <li class="heat_ul_li ma-0 pa-0">
                                        <!--                            序号-->
                                        <ul class="heat_ul_li_content_ul d-flex flex-row ma-0 pa-0"
                                            style="list-style: none">
                                            <li class="heat_ul_li_content_ul_number">1</li>
                                            <li class="heat_ul_li_content_ul_title">首架电动飞机试首架电动飞机试首架电动飞机试飞成功</li>
                                            <li class="heat_ul_li_content_ul__hot_icon">
                                                <v-icon color="primary">热度</v-icon>
                                            </li>
                                        </ul>
                                    </li>  <!--                            热度信息-->
                                    <li class="heat_ul_li ma-0 pa-0">
                                        <!--                            序号-->
                                        <ul class="heat_ul_li_content_ul d-flex flex-row ma-0 pa-0"
                                            style="list-style: none">
                                            <li class="heat_ul_li_content_ul_number">1</li>
                                            <li class="heat_ul_li_content_ul_title">首架电动飞机试飞成功</li>
                                            <li class="heat_ul_li_content_ul__hot_icon">
                                                <v-icon color="primary">hot</v-icon>
                                            </li>
                                        </ul>
                                    </li>  <!--                            热度信息-->
                                    <li class="heat_ul_li ma-0 pa-0">
                                        <!--                            序号-->
                                        <ul class="heat_ul_li_content_ul d-flex flex-row ma-0 pa-0"
                                            style="list-style: none">
                                            <li class="heat_ul_li_content_ul_number">1</li>
                                            <li class="heat_ul_li_content_ul_title">首架电动飞机试飞成功</li>
                                            <li class="heat_ul_li_content_ul__hot_icon">
                                                <v-icon color="primary">热度</v-icon>
                                            </li>
                                        </ul>
                                    </li>  <!--                            热度信息-->
                                    <li class="heat_ul_li ma-0 pa-0">
                                        <!--                            序号-->
                                        <ul class="heat_ul_li_content_ul d-flex flex-row ma-0 pa-0"
                                            style="list-style: none">
                                            <li class="heat_ul_li_content_ul_number">1</li>
                                            <li class="heat_ul_li_content_ul_title">首架电动飞机试飞成功</li>
                                            <li class="heat_ul_li_content_ul__hot_icon">
                                                <v-icon color="primary">热度</v-icon>
                                            </li>
                                        </ul>
                                    </li>  <!--                            热度信息-->
                                    <li class="heat_ul_li ma-0 pa-0">
                                        <!--                            序号-->
                                        <ul class="heat_ul_li_content_ul d-flex flex-row ma-0 pa-0"
                                            style="list-style: none">
                                            <li class="heat_ul_li_content_ul_number">1</li>
                                            <li class="heat_ul_li_content_ul_title">首架电动飞机试飞成功</li>
                                            <li class="heat_ul_li_content_ul__hot_icon">
                                                <v-icon color="primary">热度</v-icon>
                                            </li>
                                        </ul>
                                    </li>  <!--                            热度信息-->
                                    <li class="heat_ul_li ma-0 pa-0">
                                        <!--                            序号-->
                                        <ul class="heat_ul_li_content_ul d-flex flex-row ma-0 pa-0"
                                            style="list-style: none">
                                            <li class="heat_ul_li_content_ul_number">1</li>
                                            <li class="heat_ul_li_content_ul_title">首架电动飞机试飞成功</li>
                                            <li class="heat_ul_li_content_ul__hot_icon">
                                                <v-icon color="primary">热度</v-icon>
                                            </li>
                                        </ul>
                                    </li>  <!--                            热度信息-->
                                    <li class="heat_ul_li ma-0 pa-0">
                                        <!--                            序号-->
                                        <ul class="heat_ul_li_content_ul d-flex flex-row ma-0 pa-0"
                                            style="list-style: none">
                                            <li class="heat_ul_li_content_ul_number">1</li>
                                            <li class="heat_ul_li_content_ul_title">首架电动飞机试飞成功</li>
                                            <li class="heat_ul_li_content_ul__hot_icon">
                                                <v-icon color="primary">热度</v-icon>
                                            </li>
                                        </ul>
                                    </li>  <!--                            热度信息-->
                                    <li class="heat_ul_li ma-0 pa-0">
                                        <!--                            序号-->
                                        <ul class="heat_ul_li_content_ul d-flex flex-row ma-0 pa-0"
                                            style="list-style: none">
                                            <li class="heat_ul_li_content_ul_number">1</li>
                                            <li class="heat_ul_li_content_ul_title">首架电动飞机试飞成功</li>
                                            <li class="heat_ul_li_content_ul__hot_icon">
                                                <v-icon color="primary">热度</v-icon>
                                            </li>
                                        </ul>
                                    </li>  <!--                            热度信息-->
                                    <li class="heat_ul_li ma-0 pa-0">
                                        <!--                            序号-->
                                        <ul class="heat_ul_li_content_ul d-flex flex-row ma-0 pa-0"
                                            style="list-style: none">
                                            <li class="heat_ul_li_content_ul_number">1</li>
                                            <li class="heat_ul_li_content_ul_title">首架电动飞机试飞成功</li>
                                            <li class="heat_ul_li_content_ul__hot_icon">
                                                <v-icon color="primary">热度</v-icon>
                                            </li>
                                        </ul>
                                    </li>  <!--                            热度信息-->
                                    <li class="heat_ul_li ma-0 pa-0">
                                        <!--                            序号-->
                                        <ul class="heat_ul_li_content_ul d-flex flex-row ma-0 pa-0"
                                            style="list-style: none">
                                            <li class="heat_ul_li_content_ul_number">1</li>
                                            <li class="heat_ul_li_content_ul_title">首架电动飞机试飞成功</li>
                                            <li class="heat_ul_li_content_ul__hot_icon">
                                                <v-icon color="primary">热度</v-icon>
                                            </li>
                                        </ul>
                                    </li>

                                </ul>
                            </div>

                            <!--                    右侧 评论 点击排行-->
                            <div class="ranking middel_right_2 mt-6 ma-0 pa-0" style="height: 300px;">
                                <div class="ranking_title ma-0 pa-0">
                                    <div class="ma-0 pa-0">
                                        <p class="ranking_title ma-0 pa-0 title">新闻排行</p>
                                    </div>
                                </div>
                                <!--                                点击排行 评论排行-->
                                <div class="ranking_list_change mt-5 ">
                                    <v-tabs
                                            class="light-green lighten-5"
                                            :grow="true"
                                    >
                                        <v-tab class="light-green lighten-5"
                                               v-for="i in tables"
                                               :key="i"
                                               :href="`#tab-item-${i}`"
                                               @mouseover="changetab(i)"
                                               :id="i"
                                        >
                                            {{ i }}
                                        </v-tab>

                                        <v-tab-item
                                                class="light-green lighten-5"
                                                v-for="i in tables"
                                                :key="i"
                                                :value="'tab-item-' + i"
                                        >
                                            <v-card style="border: 0px"
                                                    class="text-left light-green lighten-5"
                                            >
                                                <v-card-text>
                                                    <div class="ranking_list_change_title">
                                                        {{i}}} {{i}}} {{i}}} {{i}}} {{i}}} {{i}}} {{i}}} {{i}}} {{i}}}
                                                    </div>
                                                </v-card-text>
                                                <v-card-text>
                                                    <div class="ranking_list_change_title">
                                                        {{i}}} {{i}}} {{i}}} {{i}}} {{i}}} {{i}}} {{i}}} {{i}}} {{i}}}
                                                    </div>
                                                </v-card-text>
                                                <v-card-text>
                                                    <div class="ranking_list_change_title">
                                                        {{i}}} {{i}}} {{i}}} {{i}}} {{i}}} {{i}}} {{i}}} {{i}}} {{i}}}
                                                    </div>
                                                </v-card-text>
                                                <v-card-text>
                                                    <div class="ranking_list_change_title">
                                                        {{i}}} {{i}}} {{i}}} {{i}}} {{i}}} {{i}}} {{i}}} {{i}}} {{i}}}
                                                    </div>
                                                </v-card-text>
                                                <v-card-text>
                                                    <div class="ranking_list_change_title">
                                                        {{i}}} {{i}}} {{i}}} {{i}}} {{i}}} {{i}}} {{i}}} {{i}}} {{i}}}
                                                    </div>
                                                </v-card-text>
                                                <v-card-text>
                                                    <div class="ranking_list_change_title">
                                                        {{i}}} {{i}}} {{i}}} {{i}}} {{i}}} {{i}}} {{i}}} {{i}}} {{i}}}
                                                    </div>
                                                </v-card-text>
                                                <v-card-text>
                                                    <div class="ranking_list_change_title">
                                                        {{i}}} {{i}}} {{i}}} {{i}}} {{i}}} {{i}}} {{i}}} {{i}}} {{i}}}
                                                    </div>
                                                </v-card-text>
                                                <v-card-text>
                                                    <div class="ranking_list_change_title">
                                                        {{i}}} {{i}}} {{i}}} {{i}}} {{i}}} {{i}}} {{i}}} {{i}}} {{i}}}
                                                    </div>
                                                </v-card-text>
                                                <v-card-text>
                                                    <div class="ranking_list_change_title">
                                                        {{i}}} {{i}}} {{i}}} {{i}}} {{i}}} {{i}}} {{i}}} {{i}}} {{i}}}
                                                    </div>
                                                </v-card-text>
                                                <v-card-text>
                                                    <div class="ranking_list_change_title">
                                                        {{i}}} {{i}}} {{i}}} {{i}}} {{i}}} {{i}}} {{i}}} {{i}}} {{i}}}
                                                    </div>
                                                </v-card-text>
                                            </v-card>
                                        </v-tab-item>
                                    </v-tabs>
                                </div>
                            </div>
                        </div>
                    </div>

                </v-col>

                <!--                右侧占用 列 不显示-->
                <v-col cols="1" class="green" style="visibility: hidden">1</v-col>
            </v-row>

            <!--                中部视觉焦点-->
            <v-row class="d-flex flex-row ma-0 pa-0 mt-11 mb-9">
                <v-col cols="1" class="green" style="visibility: hidden;">1</v-col>
                <v-col cols="10" class="visual_focus ma-0 pa-0">
                    <div class=" ma-0 pa-0 title text-left">
                        <p class=" visual_focus_title ma-0 pa-0">视觉焦点</p>
                    </div>
                    <!--                    视觉焦点-->
                    <v-row class=" ma-0 pa-0 d-flex flex-row text-left mt-6">
                        <v-col cols="2" class="ms-auto">
                            <p class="visual_focus_content_img">
                                <v-img src="https://inews.gtimg.com/newsapp_ls/0/10967397288_580328/0" width="216"
                                       height="120"/>
                            </p>
                            <p class="body-2 visual_focus_content_p">
                                司机为夜行母女打灯照明回机为夜行母女打灯照明回机为夜行母女打灯照明回家路，小女孩连做7个动作看哭网友</p>
                        </v-col>
                        <v-col cols="2" class="ms-auto">
                            <p class="visual_focus_content_img">
                                <v-img src="https://inews.gtimg.com/newsapp_ls/0/10967397288_580328/0" width="216"
                                       height="120"/>
                            </p>
                            <p class="body-2 visual_focus_content_p">
                                司机为夜行母女打灯照明回机为夜行母女打灯照明回机为夜行母女打灯照明回家路，小女孩连做7个动作看哭网友</p>
                        </v-col>
                        <v-col cols="2" class="ms-auto">
                            <p class="visual_focus_content_img">
                                <v-img src="https://inews.gtimg.com/newsapp_ls/0/10967397288_580328/0" width="216"
                                       height="120"/>
                            </p>
                            <p class="body-2 visual_focus_content_p">
                                司机为夜行母女打灯照明回机为夜行母女打灯照明回机为夜行母女打灯照明回家路，小女孩连做7个动作看哭网友</p>
                        </v-col>
                        <v-col cols="2" class="ms-auto">
                            <p class="visual_focus_content_img">
                                <v-img src="https://inews.gtimg.com/newsapp_ls/0/10967397288_580328/0" width="216"
                                       height="120"/>
                            </p>
                            <p class="body-2 visual_focus_content_p">
                                司机为夜行母女打灯照明回机为夜行母女打灯照明回机为夜行母女打灯照明回家路，小女孩连做7个动作看哭网友</p>
                        </v-col>
                        <v-col cols="2" class="ms-auto">
                            <p class="visual_focus_content_img">
                                <v-img src="https://inews.gtimg.com/newsapp_ls/0/10967397288_580328/0" width="216"
                                       height="120"/>
                            </p>
                            <p class="body-2 visual_focus_content_p">
                                司机为夜行母女打灯照明回机为夜行母女打灯照明回机为夜行母女打灯照明回家路，小女孩连做7个动作看哭网友</p>
                        </v-col>
                        <v-col cols="2" class="ms-auto">
                            <p class="visual_focus_content_img">
                                <v-img src="https://inews.gtimg.com/newsapp_ls/0/10967397288_580328/0" width="216"
                                       height="120"/>
                            </p>
                            <p class="body-2 visual_focus_content_p">
                                司机为夜行母女打灯照明回机为夜行母女打灯照明回机为夜行母女打灯照明回家路，小女孩连做7个动作看哭网友</p>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="1" class="green" style="visibility: hidden">1</v-col>
            </v-row>
            <!--            视觉焦点结束-->


            <!--            热门资讯 热点精选 -->
            <v-row class="d-flex flex-row mt-12 pa-0">
                <v-col cols="1" class="green" style="visibility: hidden">1</v-col>
                <v-col cols="10" class="ma-0 pa-0">
                    <v-row class="d-flex flex-row ma-0">
                        <v-col cols="2" class="green" style="visibility: hidden">1</v-col>
                        <v-col cols="7" class="ma-0 pa-0">
                            <div class="ma-0 pa-0"><p class="Latest_News_title font-weight-black headline ma-0 pa-0">
                                最新资讯</p></div>
                        </v-col>
                        <!--                        热门资讯 热点精选 标题区-->
                        <v-col cols="3" class="ma-0 pa-0 ">
                            <div class="ma-0 pa-0"><p
                                    class="hot_spots_selected_title ma-0 pa-0 text-left font-weight-black headline">
                                热点精选</p></div>
                        </v-col>
                        <!--                    标题区域结束    -->

                        <!--                        占空 列  -->
                        <v-col cols="2" style="visibility: hidden"></v-col>
                        <v-col cols="7" class="text-left title mt-4 ma-0 pa-0">
                            <div class="ma-0 pa-0">
                                <!--                                热点精选-->
                                <div class="mt-9 pa-0">
                                    <!--                                    热点精选文章-->
                                    <div class="hot_topic_content_div pb-2 mt-8 ma-3 pa-0">
                                        <ul class="Latest_News_title_ul hot_topic_ul  pa-0 d-flex flex-row ms-auto">
                                            <li class="Latest_News_title_ul_content_li_div_img">
                                                <v-img src="https://inews.gtimg.com/newsapp_ls/0/10968440261_294195/0"
                                                       width="231" height="133"/>
                                            </li>
                                            <li class="Latest_News_title_ul_content_li  ml-3 d-flex flex-row ma-0 pa-0 ">
                                                <div class="Latest_News_title_ul_content_li_div_text ma-1 pa-0"><p>
                                                    阿里上海研发中心启用：平头哥芯片研发及云计算
                                                    阿里上海研发中心启用：平头哥芯片研发及云计算
                                                    团队首批入驻.阿里上海研发中心启用：平头哥芯片研发及云计算团队首批
                                                    入驻，阿里上海研发中心启用：平头哥芯片研发及云计算团队首批入驻</p></div>
                                                <div class="Latest_News_title_ul_content_more ma-0 pa-0  mt-3 ml-3 d-flex flex-column"
                                                     style="width: 60px; height: 120px">
                                                    <p class="ma-0 pa-0 ml-2 mt-1 title">
                                                        分享
                                                    </p>
                                                    <p class="ma-0 pa-0 ml-2 mt-1 title">
                                                        回复
                                                    </p>
                                                    <p class="ma-0 pa-0 ml-2 mt-1 title">
                                                        举报
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="hot_topic_content_div pb-2 mt-8 ma-3 pa-0">
                                        <ul class="Latest_News_title_ul hot_topic_ul  pa-0 d-flex flex-row ms-auto">
                                            <li class="Latest_News_title_ul_content_li_div_img">
                                                <v-img src="https://inews.gtimg.com/newsapp_ls/0/10968440261_294195/0"
                                                       width="231" height="133"/>
                                            </li>
                                            <li class="Latest_News_title_ul_content_li  ml-3 d-flex flex-row ma-0 pa-0 ">
                                                <div class="Latest_News_title_ul_content_li_div_text ma-1 pa-0"><p>
                                                    阿里上海研发中心启用：平头哥芯片研发及云计算
                                                    阿里上海研发中心启用：平头哥芯片研发及云计算
                                                    团队首批入驻.阿里上海研发中心启用：平头哥芯片研发及云计算团队首批
                                                    入驻，阿里上海研发中心启用：平头哥芯片研发及云计算团队首批入驻</p></div>
                                                <div class="Latest_News_title_ul_content_more ma-0 pa-0  mt-3 ml-3 d-flex flex-column"
                                                     style="width: 60px; height: 120px">
                                                    <p class="ma-0 pa-0 ml-2 mt-1 title">
                                                        分享
                                                    </p>
                                                    <p class="ma-0 pa-0 ml-2 mt-1 title">
                                                        回复
                                                    </p>
                                                    <p class="ma-0 pa-0 ml-2 mt-1 title">
                                                        举报
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="hot_topic_content_div pb-2 mt-8 ma-3 pa-0">
                                        <ul class="Latest_News_title_ul hot_topic_ul  pa-0 d-flex flex-row ms-auto">
                                            <li class="Latest_News_title_ul_content_li_div_img">
                                                <v-img src="https://inews.gtimg.com/newsapp_ls/0/10968440261_294195/0"
                                                       width="231" height="133"/>
                                            </li>
                                            <li class="Latest_News_title_ul_content_li  ml-3 d-flex flex-row ma-0 pa-0 ">
                                                <div class="Latest_News_title_ul_content_li_div_text ma-1 pa-0"><p>
                                                    阿里上海研发中心启用：平头哥芯片研发及云计算
                                                    阿里上海研发中心启用：平头哥芯片研发及云计算
                                                    团队首批入驻.阿里上海研发中心启用：平头哥芯片研发及云计算团队首批
                                                    入驻，阿里上海研发中心启用：平头哥芯片研发及云计算团队首批入驻</p></div>
                                                <div class="Latest_News_title_ul_content_more ma-0 pa-0  mt-3 ml-3 d-flex flex-column"
                                                     style="width: 60px; height: 120px">
                                                    <p class="ma-0 pa-0 ml-2 mt-1 title">
                                                        分享
                                                    </p>
                                                    <p class="ma-0 pa-0 ml-2 mt-1 title">
                                                        回复
                                                    </p>
                                                    <p class="ma-0 pa-0 ml-2 mt-1 title">
                                                        举报
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="hot_topic_content_div pb-2 mt-8 ma-3 pa-0">
                                        <ul class="Latest_News_title_ul hot_topic_ul  pa-0 d-flex flex-row ms-auto">
                                            <li class="Latest_News_title_ul_content_li_div_img">
                                                <v-img src="https://inews.gtimg.com/newsapp_ls/0/10968440261_294195/0"
                                                       width="231" height="133"/>
                                            </li>
                                            <li class="Latest_News_title_ul_content_li  ml-3 d-flex flex-row ma-0 pa-0 ">
                                                <div class="Latest_News_title_ul_content_li_div_text ma-1 pa-0"><p>
                                                    阿里上海研发中心启用：平头哥芯片研发及云计算
                                                    阿里上海研发中心启用：平头哥芯片研发及云计算
                                                    团队首批入驻.阿里上海研发中心启用：平头哥芯片研发及云计算团队首批
                                                    入驻，阿里上海研发中心启用：平头哥芯片研发及云计算团队首批入驻</p></div>
                                                <div class="Latest_News_title_ul_content_more ma-0 pa-0  mt-3 ml-3 d-flex flex-column"
                                                     style="width: 60px; height: 120px">
                                                    <p class="ma-0 pa-0 ml-2 mt-1 title">
                                                        分享
                                                    </p>
                                                    <p class="ma-0 pa-0 ml-2 mt-1 title">
                                                        回复
                                                    </p>
                                                    <p class="ma-0 pa-0 ml-2 mt-1 title">
                                                        举报
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="hot_topic_content_div pb-2 mt-8 ma-3 pa-0">
                                        <ul class="Latest_News_title_ul hot_topic_ul  pa-0 d-flex flex-row ms-auto">
                                            <li class="Latest_News_title_ul_content_li_div_img">
                                                <v-img src="https://inews.gtimg.com/newsapp_ls/0/10968440261_294195/0"
                                                       width="231" height="133"/>
                                            </li>
                                            <li class="Latest_News_title_ul_content_li  ml-3 d-flex flex-row ma-0 pa-0 ">
                                                <div class="Latest_News_title_ul_content_li_div_text ma-1 pa-0"><p>
                                                    阿里上海研发中心启用：平头哥芯片研发及云计算
                                                    阿里上海研发中心启用：平头哥芯片研发及云计算
                                                    团队首批入驻.阿里上海研发中心启用：平头哥芯片研发及云计算团队首批
                                                    入驻，阿里上海研发中心启用：平头哥芯片研发及云计算团队首批入驻</p></div>
                                                <div class="Latest_News_title_ul_content_more ma-0 pa-0  mt-3 ml-3 d-flex flex-column"
                                                     style="width: 60px; height: 120px">
                                                    <p class="ma-0 pa-0 ml-2 mt-1 title">
                                                        分享
                                                    </p>
                                                    <p class="ma-0 pa-0 ml-2 mt-1 title">
                                                        回复
                                                    </p>
                                                    <p class="ma-0 pa-0 ml-2 mt-1 title">
                                                        举报
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="hot_topic_content_div pb-2 mt-8 ma-3 pa-0">
                                        <ul class="Latest_News_title_ul hot_topic_ul  pa-0 d-flex flex-row ms-auto">
                                            <li class="Latest_News_title_ul_content_li_div_img">
                                                <v-img src="https://inews.gtimg.com/newsapp_ls/0/10968440261_294195/0"
                                                       width="231" height="133"/>
                                            </li>
                                            <li class="Latest_News_title_ul_content_li  ml-3 d-flex flex-row ma-0 pa-0 ">
                                                <div class="Latest_News_title_ul_content_li_div_text ma-1 pa-0"><p>
                                                    阿里上海研发中心启用：平头哥芯片研发及云计算
                                                    阿里上海研发中心启用：平头哥芯片研发及云计算
                                                    团队首批入驻.阿里上海研发中心启用：平头哥芯片研发及云计算团队首批
                                                    入驻，阿里上海研发中心启用：平头哥芯片研发及云计算团队首批入驻</p></div>
                                                <div class="Latest_News_title_ul_content_more ma-0 pa-0  mt-3 ml-3 d-flex flex-column"
                                                     style="width: 60px; height: 120px">
                                                    <p class="ma-0 pa-0 ml-2 mt-1 title">
                                                        分享
                                                    </p>
                                                    <p class="ma-0 pa-0 ml-2 mt-1 title">
                                                        回复
                                                    </p>
                                                    <p class="ma-0 pa-0 ml-2 mt-1 title">
                                                        举报
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                </div>

                            </div>
                        </v-col>
                        <v-col cols="3" class="d-flex flex-row ma-0 pa-0">
                            <!--                            热门资讯内容-->
                            <div class="ma-0 pa-0 mt-4">
                                <ul class="hot_spots_selected_title_ul   d-flex flex-row pa-0"
                                    style="list-style: none">
                                    <li class="hot_spots_selected_title_ul_li_img">
                                        <v-img src="https://inews.gtimg.com/newsapp_ls/0/10967359849_294195/0"
                                               width="190" height="120"/>
                                    </li>
                                    <li class="hot_spots_selected_title_ul_li_text text-left pa-3">
                                        平头哥芯片研发及云计算平头哥芯片研发及云计算团队首批入驻.阿里上海研发中心启用：平头哥芯片研发及云计算团队首批
                                    </li>
                                </ul>
                                <ul class="hot_spots_selected_title_ul  d-flex flex-row pa-0"
                                    style="list-style: none">
                                    <li class="hot_spots_selected_title_ul_li_img">
                                        <v-img src="https://inews.gtimg.com/newsapp_ls/0/10967359849_294195/0"
                                               width="190" height="120"/>
                                    </li>
                                    <li class="hot_spots_selected_title_ul_li_text text-left pa-3">
                                        平头哥芯片研发及云计算平头哥芯片研发及云计算团队首批入驻.阿里上海研发中心启用：平头哥芯片研发及云计算团队首批
                                    </li>
                                </ul>
                                <ul class="hot_spots_selected_title_ul  d-flex flex-row pa-0"
                                    style="list-style: none">
                                    <li class="hot_spots_selected_title_ul_li_img">
                                        <v-img src="https://inews.gtimg.com/newsapp_ls/0/10967359849_294195/0"
                                               width="190" height="120"/>
                                    </li>
                                    <li class="hot_spots_selected_title_ul_li_text text-left pa-3">
                                        平头哥芯片研发及云计算平头哥芯片研发及云计算团队首批入驻.阿里上海研发中心启用：平头哥芯片研发及云计算团队首批
                                    </li>
                                </ul>
                                <ul class="hot_spots_selected_title_ul   d-flex flex-row pa-0"
                                    style="list-style: none">
                                    <li class="hot_spots_selected_title_ul_li_img">
                                        <v-img src="https://inews.gtimg.com/newsapp_ls/0/10967359849_294195/0"
                                               width="190" height="120"/>
                                    </li>
                                    <li class="hot_spots_selected_title_ul_li_text text-left pa-3">
                                        平头哥芯片研发及云计算平头哥芯片研发及云计算团队首批入驻.阿里上海研发中心启用：平头哥芯片研发及云计算团队首批
                                    </li>
                                </ul>
                            </div>

                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="1" class="green" style="visibility: hidden">1</v-col>
            </v-row>
            <v-footer style="margin-top: 360px;"
                      dark
                      padless
            >
                <v-card
                        flat
                        tile
                        class="light-green lighten-4 blue--text text-center"
                >
                    <v-card-text>
                        <v-btn
                                v-for="icon in icons"
                                :key="icon"
                                class="mx-4 blue--text"
                                icon
                        >
                            <v-icon size="24px">{{ icon }}</v-icon>
                        </v-btn>
                    </v-card-text>

                    <v-card-text style="width: 2000px;" class="blue--text pt-0 ms-auto">@Forever 2244141460 © 所有
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-text class="white--text">
                        {{ new Date().getFullYear() }} — <strong>FOREVER</strong>
                    </v-card-text>
                </v-card>
            </v-footer>

            <!--            底部-->
            <!--            <v-footer class="primary d-flex flex-row">-->
            <!--                <v-col class="col-12">-->
            <!--                    <v-card class="col-12">@Forever ©所有</v-card>-->
            <!--                </v-col>-->
            <!--            </v-footer>-->
        </v-content>
    </v-app>
</template>
<style scoped>
    @import "../../../../static/css/News/User/News Home/wl_news_home.scss";
</style>
<script>

    export default {
        data() {
            return {
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
        }, methods: {
            changetab(id) {
                let tag = document.getElementById(id);
                tag.click();
            }
        }
    }
</script>
