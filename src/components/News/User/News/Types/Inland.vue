<template class="Inland_body ">
    <v-content class="ma-0 pa-0">
        <!--新闻热推 及时新闻 最新新闻-->
        <v-row class="d-flex flex-row ma-0 pa-0 mt-4 Inland_laster_news_row">
            <v-col cols="1" class="black" style="visibility: hidden">1</v-col>
            <v-col cols="6">
                <div class="Inland_laster_news_div_picture">
                    <v-carousel
                            cycle
                            height="380"
                            hide-delimiter-background
                            show-arrows-on-hover
                            class="ma-0 pa-0 "
                    >
                        <v-carousel-item class="ma-0 pa-0 "
                                         v-for="(i) in 5"
                                         :key="i"
                        >
                            <v-sheet class="ma-0 pa-0 fill-height text-center overflow-hidden">
                                <v-row class="fill-height text-center ma-0 pa-0" style="width: 100%;height: 100%">
                                    <div class="Realtime_subject_div ma-0 pa-0" style="width: 100%;height: 100%;">
                                        <a href="#"> <img
                                                src="../../../../../static/image/News/User/News_Types/Inland/0_1.jpg"
                                                width="100%" height="100%"/></a>
                                        <!--   <v-parallax
                                                   dark
                                           >
                                               <img src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"/>
                                               <v-row
                                                       align="center"
                                                       justify="center"
                                               >
                                                   <v-col class="text-center" cols="12">
                                                       <h1 class="display-1 font-weight-thin mb-4">Vuetify.js</h1>
                                                       <h4 class="subheading">Build your application today!</h4>
                                                   </v-col>
                                               </v-row>
                                           </v-parallax>-->
                                    </div>
                                </v-row>
                            </v-sheet>
                        </v-carousel-item>
                    </v-carousel>
                </div>
            </v-col>
            <!--及时新闻 最新新闻 -->
            <v-col cols="4" class="ml-4">
                <div class="Inland_laster_news_div">
                    <div class="ma-0 pa-0"><p class="Inland_laster_news_div_p text-left"><span
                            class="Inland_laster_news_div_p_title">即时</span><span class="display-1">&nbsp;·&nbsp;</span><span
                            class="Inland_laster_news_div_p_title">新闻</span></p></div>
                    <!--最新新闻标题-->
                    <div class="ma-0 pa-0">
                        <ul class="Inland_laster_news_div_ul_content">
                            <li><a href="#">气象灾害预警信息公众覆盖率提高到87气象灾害预警信息公众覆盖率提高到87.3% 现</a></li>
                            <li><a href="#">2020年博兴兴福手足外科医院新春年会隆重举行</a></li>
                            <li><a href="#">权威访谈:为实现民族复兴提供坚强制度保障</a></li>
                            <li><a href="#">外交部就台湾地区选举相关问题答问</a></li>
                            <li><a href="#">孙壮志：四“新”凸显新时代中俄关系亮点</a></li>
                            <li><a href="#">普京呼吁中东地区避免大规模军事冲突</a></li>
                            <li><a href="#">普京呼吁中东地区避免大规模军事冲突</a></li>
                        </ul>
                    </div>
                </div>
            </v-col>
            <v-col cols="1" class="black" style="visibility: hidden">

            </v-col>
        </v-row>
        <!--今日要闻 ：政治新闻 热门专题 标题-->
        <v-row class="d-flex flex-row ma-0 pa-0 Inland_today_news_row">
            <v-col cols="1" class="black" style="visibility: hidden">1</v-col>
            <v-col cols="6">
                <div class="Inland_today_news_div ma-0 pa-0">
                    <p class="Inland_today_news_p text-left  ma-0 pa-0"><span
                            class="Inland_today_news_title ">今日</span><span class="display-1">&nbsp;·&nbsp;</span>
                        <!--                        <span class="Inland_today_news_title">新闻</span>-->
                        <span class="Inland_today_news_title">要闻</span>
                    </p>
                </div>
            </v-col>
            <v-col cols="4" class=" ml-4">
                <div class="Inland_today_news_div pa-0 ml-3">
                    <p class="Inland_today_news_p text-left ma-0 pa-0"><span
                            class="Inland_today_news_title ">新闻</span>
                        <span class="display-1">&nbsp;·&nbsp;</span><span
                                class="Inland_today_news_title ">专题</span></p>
                </div>
            </v-col>
            <v-col cols="1" class="black" style="visibility: hidden">1</v-col>
        </v-row>
        <!--今日要闻 新闻专题 内容-->
        <v-row class="d-flex flex-row ma-0 pa-0 Inland_today_news_subject_row ">
            <!--今日·要闻-->
            <v-col cols="1" class="black" style="visibility: hidden">1</v-col>
            <v-col cols="6" class="pa-0 ">
                <!--今日要闻  优秀图片文章 div-->
                <div class="ma-0 ml-3 Inland_today_news_left_div">
                    <v-row class="d-flex flex-row ma-0 pa-0">
                        <v-col cols="8" class="pa-0">
                            <div class="ma-0 pa-0">
                                <ul class="Inland_today_news_ul">
                                    <li><a href="#">中方如何评论伊朗误击客机？外交部回应王毅:中方永远是津巴布韦的好朋友好伙伴</a></li>
                                    <li><a href="">王毅:中方永远是津巴布韦的好朋友好伙王毅:中方永远是津巴布韦的好朋友好伙伴</a></li>
                                    <li><a href="">王毅:中方永远是津巴布韦的好朋友好伙伴</a></li>
                                    <li><a href="">王毅:中方永远是津巴布韦的好朋友好伙伴</a></li>
                                    <li><a href="">王毅:中方永远是津巴布韦的好朋友好伙伴</a></li>
                                    <li><a href="">王毅:中方永远是津巴布韦的好朋友好伙伴</a></li>
                                </ul>
                                <ul class="Inland_today_news_ul">
                                    <li><a href="#">中方如何评论伊朗误击客机？外交部回应王毅:中方永远是津巴布韦的好朋友好伙伴</a></li>
                                    <li><a href="">王毅:中方永远是津巴布韦的好朋友好伙伴</a></li>
                                    <li><a href="">王毅:中方永远是津巴布韦的好朋友好伙伴</a></li>
                                    <li><a href="">王毅:中方永远是津巴布韦的好朋友好伙伴</a></li>
                                    <li><a href="">王毅:中方永远是津巴布韦的好朋友好伙伴</a></li>
                                    <li><a href="">王毅:中方永远是津巴布韦的好朋友好伙伴</a></li>
                                </ul>
                            </div>
                        </v-col>
                        <!--今日要闻 文章图片-->
                        <v-col cols="4" class="ma-0 pa-0">
                            <div class="Inland_today_news_selected_articles">
                                <a href="">
                                    <v-img width="100%" height="100%"
                                           src="https://t10.baidu.com/it/u=1909460607,1322575995&fm=173&app=49&f=JPEG?w=312&h=208&s=560043ACCF923AC89894BD840300F089"
                                           alt="网罗新闻">
                                        <v-row class="d-flex flex-column Inland_today_news_selected_articles_float_row"
                                        >
                                            <v-col class="text-center ma-0 pa-0" cols="12">
                                                <p class="ma-0 Inland_today_news_selected_articles_float_row_col_text">
                                                    中方永远是津巴布韦的好朋中方永远是津巴布韦的好朋</p>
                                            </v-col>
                                        </v-row>
                                    </v-img>
                                </a>
                            </div>
                            <div class="Inland_today_news_selected_articles" style="margin-top: 28%">
                                <a href="">
                                    <v-img width="100%" height="100%"
                                           src="https://t10.baidu.com/it/u=1909460607,1322575995&fm=173&app=49&f=JPEG?w=312&h=208&s=560043ACCF923AC89894BD840300F089"
                                           alt="网罗新闻">
                                        <v-row class="d-flex flex-column Inland_today_news_selected_articles_float_row"
                                        >
                                            <v-col class="text-center ma-0 pa-0" cols="12">
                                                <p class="ma-0 Inland_today_news_selected_articles_float_row_col_text">
                                                    中方永远是津巴布韦的好朋中方永远是津巴布韦的好朋</p>
                                            </v-col>
                                        </v-row>
                                    </v-img>
                                </a>
                            </div>
                        </v-col>
                    </v-row>
                </div>
            </v-col>
            <!--热门专题-->
            <v-col cols="4" class="ma-0 pa-0 ml-10">
                <div class="subject_of_the_news_div">
                    <ul class="subject_of_the_news pa-0">
                        <!--图片-->
                        <li><a href="">
                            <img
                                    src="http://nimg.ws.126.net/?url=http://pic-bucket.ws.126.net/photo/0001/2020-01-11/F2KOQL3S00AN0001NOS.jpg&thumbnail=600x2147483647&quality=75&type=jpg"
                                    width="100%" height="90"/>
                        </a></li>
                        <!--标题-->
                        <li><p><a href="">聚焦2020甘肃两会」代表荆升阳：落实“三化”改造 推进民营企业高质量发展</a></p>
                            <p class="ma-0 pa-0 mt-1"><span>青年日报</span><span class="ml-4">评论&nbsp;10</span></p>
                        </li>
                    </ul>
                    <ul class="subject_of_the_news pa-0">
                        <!--图片-->
                        <li><a href="">
                            <img
                                    src="https://t10.baidu.com/it/u=1909460607,1322575995&fm=173&app=49&f=JPEG?w=312&h=208&s=560043ACCF923AC89894BD840300F089"
                                    width="100%" height="90"/>
                        </a></li>
                        <!--标题-->
                        <li><p><a href="">聚焦2020甘肃两会」代表荆升阳：落实“三化”改造 推进民营企业高质量发展</a></p>
                            <p class="ma-0 pa-0 mt-1"><span>青年日报</span><span class="ml-4">评论&nbsp;10</span></p>
                        </li>
                    </ul>
                    <ul class="subject_of_the_news pa-0">
                        <!--图片-->
                        <li><a href="">
                            <img
                                    src="https://t10.baidu.com/it/u=1909460607,1322575995&fm=173&app=49&f=JPEG?w=312&h=208&s=560043ACCF923AC89894BD840300F089"
                                    width="100%" height="90"/>
                        </a></li>
                        <!--标题-->
                        <li><p><a href="">聚焦2020甘肃两会」代表荆升阳：落实“三化”改造 推进民营企业高质量发展</a></p>
                            <p class="ma-0 pa-0 mt-1"><span>青年日报</span><span class="ml-4">评论&nbsp;10</span></p>
                        </li>
                    </ul>
                    <ul class="subject_of_the_news pa-0">
                        <!--图片-->
                        <li><a href="">
                            <img
                                    src="https://t10.baidu.com/it/u=1909460607,1322575995&fm=173&app=49&f=JPEG?w=312&h=208&s=560043ACCF923AC89894BD840300F089"
                                    width="100%" height="90"/>
                        </a></li>
                        <!--标题-->
                        <li><p><a href="">聚焦2020甘肃两会」代表荆升阳：落实“三化”改造 推进民营企业高质量发展</a></p>
                            <p class="ma-0 pa-0 mt-1"><span>青年日报</span><span class="ml-4">评论&nbsp;10</span></p>
                        </li>
                    </ul>
                </div>
            </v-col>
            <v-col cols="1" class="black ma-0 pa-0" style="visibility: hidden">1</v-col>
        </v-row>
        <!--焦点新闻 热点排行：一周点击量排行 新闻标题-->
        <v-row class="d-flex flex-row ma-0 pa-0 Inland_focus_hot_news_title_row">
            <v-col cols="1" style="visibility: hidden">
                1
            </v-col>
            <v-col cols="6" class="pa-0">
                <div class="ma-0 Inland_focus_news_title_div ml-3">
                    <p class="text-left Inland_focus_news_title_p ma-0 pa-0"><span>焦点</span><span class="display-1">&nbsp;·&nbsp;</span>新闻<span></span>
                    </p>
                </div>
            </v-col>
            <v-col cols="4" class="pa-0  ml-10">
                <div class="ma-0   Inland_hot_list_news_title_div">
                    <p class="text-left Inland_hot_list_news_title_p  ma-0 pa-0">热点<span
                            class="display-1">&nbsp;·&nbsp;</span>排行</p>
                    <!--                    <p class="text-left Inland_hot_list_news_title_p  ma-0 pa-0">热点<span class="display-1">&nbsp;·&nbsp;</span>排行</p>-->
                </div>
            </v-col>
            <v-col cols="1" style="visibility: hidden">
                1
            </v-col>
        </v-row>
        <!--焦点新闻 热点排行 新闻内容-->
        <v-row class="d-flex flex-row ma-0 pa-0 Inland_focus_hot_news_content_row">
            <v-col cols="1" class="black" style="visibility: hidden">1</v-col>
            <v-col cols="6" class="pa-0">
                <!--焦点新闻 div-->
                <div class="ma-0 ml-3 Inland_today_news_left_div">
                    <v-row class="d-flex flex-row ma-0 pa-0">
                        <v-col cols="8" class="pa-0">
                            <div class="ma-0 pa-0">
                                <ul class="Inland_today_news_ul">
                                    <li><a href="#">中方如何评论伊朗误击客机？外交部回应王毅:中方永远是津巴布韦的好朋友好伙伴</a></li>
                                    <li><a href="">王毅:中方永远是津巴布韦的好朋友好伙王毅:中方永远是津巴布韦的好朋友好伙伴</a></li>
                                    <li><a href="">王毅:中方永远是津巴布韦的好朋友好伙伴</a></li>
                                    <li><a href="">王毅:中方永远是津巴布韦的好朋友好伙伴</a></li>
                                    <li><a href="">王毅:中方永远是津巴布韦的好朋友好伙伴</a></li>
                                    <li><a href="">王毅:中方永远是津巴布韦的好朋友好伙伴</a></li>
                                </ul>
                                <ul class="Inland_today_news_ul">
                                    <li><a href="#">中方如何评论伊朗误击客机？外交部回应王毅:中方永远是津巴布韦的好朋友好伙伴</a></li>
                                    <li><a href="">王毅:中方永远是津巴布韦的好朋友好伙伴</a></li>
                                    <li><a href="">王毅:中方永远是津巴布韦的好朋友好伙伴</a></li>
                                    <li><a href="">王毅:中方永远是津巴布韦的好朋友好伙伴</a></li>
                                    <li><a href="">王毅:中方永远是津巴布韦的好朋友好伙伴</a></li>
                                    <li><a href="">王毅:中方永远是津巴布韦的好朋友好伙伴</a></li>
                                </ul>
                            </div>
                        </v-col>
                        <!--焦点新闻 文章图片-->
                        <v-col cols="4" class="ma-0 pa-0">
                            <div class="Inland_today_news_selected_articles">
                                <a href="">
                                    <v-img width="100%" height="100%"
                                           src="https://t10.baidu.com/it/u=1909460607,1322575995&fm=173&app=49&f=JPEG?w=312&h=208&s=560043ACCF923AC89894BD840300F089"
                                           alt="网罗新闻">
                                        <v-row class="d-flex flex-column Inland_today_news_selected_articles_float_row"
                                        >
                                            <v-col class="text-center ma-0 pa-0" cols="12">
                                                <p class="ma-0 Inland_today_news_selected_articles_float_row_col_text">
                                                    中方永远是津巴布韦的好朋中方永远是津巴布韦的好朋</p>
                                            </v-col>
                                        </v-row>
                                    </v-img>
                                </a>
                            </div>
                            <div class="Inland_today_news_selected_articles" style="margin-top: 28%">
                                <a href="">
                                    <v-img width="100%" height="100%"
                                           src="https://t10.baidu.com/it/u=1909460607,1322575995&fm=173&app=49&f=JPEG?w=312&h=208&s=560043ACCF923AC89894BD840300F089"
                                           alt="焦点新闻">
                                        <v-row class="d-flex flex-column Inland_today_news_selected_articles_float_row"
                                        >
                                            <v-col class="text-center ma-0 pa-0" cols="12">
                                                <p class="ma-0 Inland_today_news_selected_articles_float_row_col_text">
                                                    中方永远是津巴布韦的好朋中方永远是津巴布韦的好朋</p>
                                            </v-col>
                                        </v-row>
                                    </v-img>
                                </a>
                            </div>
                        </v-col>
                    </v-row>
                </div>
            </v-col>
            <!--热点排行-->
            <v-col cols="4" class="ma-0 pa-0 ml-10">
                <div class="Inland_hot_news_div ma-0 pa-0">
                    <ul class="Inland_hot_news_div_ul  ma-0 pa-0">
                        <li>
                            <p class="ma-0 pa-0 Inland_hot_news_div_ul_li_p">
                                <span class="Inland_hot_news_div_ul_li_number">1</span>
                                <span class="Inland_hot_news_div_ul_li_title"><a href="">国办：将生育医疗费用将生育医疗费生育医疗费用将疗费用将生育医疗费生育医疗费用将生育医疗费用纳入医保支</a> </span>
                            </p>
                        </li>
                        <li>
                            <p class="ma-0 pa-0 Inland_hot_news_div_ul_li_p">
                                <span class="Inland_hot_news_div_ul_li_number">2</span>
                                <span class="Inland_hot_news_div_ul_li_title"><a href="">国办：将生育医疗费用将生育医疗费生育医疗费用将生育医疗费用纳入医保医疗费生育医疗费用将生育医疗费用纳入医保医疗费生育医疗费用将生育医疗费用纳入医保支</a> </span>
                            </p>
                        </li>
                        <li>
                            <p class="ma-0 pa-0 Inland_hot_news_div_ul_li_p">
                                <span class="Inland_hot_news_div_ul_li_number">3</span>
                                <span class="Inland_hot_news_div_ul_li_title"><a href="">国办：将生育医疗费用将生育医疗费生育医疗费用将生育医疗费用纳入医保支</a> </span>
                            </p>
                        </li>
                        <li>
                            <p class="ma-0 pa-0 Inland_hot_news_div_ul_li_p">
                                <span class="Inland_hot_news_div_ul_li_number">4</span>
                                <span class="Inland_hot_news_div_ul_li_title"><a href="">国办：将生育医疗费用将生育医疗费生育医疗费用将生育医疗费用纳入医保支</a> </span>
                            </p>
                        </li>
                        <li>
                            <p class="ma-0 pa-0 Inland_hot_news_div_ul_li_p">
                                <span class="Inland_hot_news_div_ul_li_number">5</span>
                                <span class="Inland_hot_news_div_ul_li_title"><a href="">国办：将生育医疗费用将生育医疗费生育医疗费用将生育医疗费用纳入医保支</a> </span>
                            </p>
                        </li>
                        <li>
                            <p class="ma-0 pa-0 Inland_hot_news_div_ul_li_p">
                                <span class="Inland_hot_news_div_ul_li_number">6</span>
                                <span class="Inland_hot_news_div_ul_li_title"><a href="">国办：将生育医疗费用将生育医疗费生育医疗费用将生育医疗费用纳入医保支</a> </span>
                            </p>
                        </li>
                        <li>
                            <p class="ma-0 pa-0 Inland_hot_news_div_ul_li_p">
                                <span class="Inland_hot_news_div_ul_li_number">7</span>
                                <span class="Inland_hot_news_div_ul_li_title"><a href="">国办：将生育医疗费用将生育医疗费生育医疗费用将生育医疗费用纳入医保支</a> </span>
                            </p>
                        </li>
                        <li>
                            <p class="ma-0 pa-0 Inland_hot_news_div_ul_li_p">
                                <span class="Inland_hot_news_div_ul_li_number">8</span>
                                <span class="Inland_hot_news_div_ul_li_title"><a href="">国办：将生育医疗费用将生育医疗费生育医疗费用将生育医疗费用纳入医保支</a> </span>
                            </p>
                        </li>
                        <li>
                            <p class="ma-0 pa-0 Inland_hot_news_div_ul_li_p">
                                <span class="Inland_hot_news_div_ul_li_number">9</span>
                                <span class="Inland_hot_news_div_ul_li_title"><a href="">国办：将生育医疗费用将生育医疗费生育医疗费用将生育医疗费用纳入医保支</a> </span>
                            </p>
                        </li>
                    </ul>
                </div>
            </v-col>
            <v-col cols="1" class="black ma-0 pa-0" style="visibility: hidden">1</v-col>
        </v-row>
        <!--本地新闻 视觉焦点 新闻标题-->
        <v-row class="d-flex flex-row ma-0 pa-0 Inland_locality_news_row">
            <v-col cols="1" style="visibility: hidden">
                1
            </v-col>
            <v-col cols="6">
                <div class="ma-0 Inland_locality_news_div_title">
                    <p class="text-left ma-0"><span>本地</span><span class="display-1">&nbsp;·&nbsp;</span><span>新闻</span>
                    </p>
                </div>
            </v-col>
            <v-col cols="4" class="pa-0 ml-10">
                <div class="ma-0 Inland_visual_focus_div">
                    <p class="text-left ma-0 pa-0"><span>视觉</span><span
                            class="display-1">&nbsp;·&nbsp;</span><span>焦点</span></p>
                </div>
            </v-col>
            <v-col cols="1" style="visibility: hidden">
                1
            </v-col>
        </v-row>
        <!--本地新闻 视觉焦点 新闻内容-->
        <v-row class="d-flex flex-row ma-0 pa-0 Inland_locality_news_visual_focus_row">
            <v-col cols="1" style="visibility: hidden"></v-col>
            <v-col cols="6" class="pa-0">
                <!--今日要闻 优秀图片文章 div-->
                <div class="ma-0  Inland_today_news_left_div">
                    <v-row class="d-flex flex-row ma-0 pa-0">
                        <v-col cols="8" class="ma-0 pa-0">
                            <div class="ma-0 pa-0">
                                <ul class="Inland_today_news_ul">
                                    <li><a href="#">中方如何评论伊朗误击客机？外交部回应王毅:中方永远是津巴布韦的好朋友好伙伴</a></li>
                                    <li><a href="">王毅:中方永远是津巴布韦的好朋友好伙王毅:中方永远是津巴布韦的好朋友好伙伴</a></li>
                                    <li><a href="">王毅:中方永远是津巴布韦的好朋友好伙伴</a></li>
                                    <li><a href="">王毅:中方永远是津巴布韦的好朋友好伙伴</a></li>
                                    <li><a href="">王毅:中方永远是津巴布韦的好朋友好伙伴</a></li>
                                    <li><a href="">王毅:中方永远是津巴布韦的好朋友好伙伴</a></li>
                                </ul>
                                <ul class="Inland_today_news_ul">
                                    <li><a href="#">中方如何评论伊朗误击客机？外交部回应王毅:中方永远是津巴布韦的好朋友好伙伴</a></li>
                                    <li><a href="">王毅:中方永远是津巴布韦的好朋友好伙伴</a></li>
                                    <li><a href="">王毅:中方永远是津巴布韦的好朋友好伙伴</a></li>
                                    <li><a href="">王毅:中方永远是津巴布韦的好朋友好伙伴</a></li>
                                    <li><a href="">王毅:中方永远是津巴布韦的好朋友好伙伴</a></li>
                                    <li><a href="">王毅:中方永远是津巴布韦的好朋友好伙伴</a></li>
                                </ul>
                            </div>
                        </v-col>
                        <!--今日要闻 文章图片-->
                        <v-col cols="4" class="ma-0 pa-0">
                            <div class="Inland_today_news_selected_articles">
                                <a href="">
                                    <v-img width="100%" height="100%"
                                           src="https://t10.baidu.com/it/u=1909460607,1322575995&fm=173&app=49&f=JPEG?w=312&h=208&s=560043ACCF923AC89894BD840300F089"
                                           alt="网罗新闻">
                                        <v-row class="d-flex flex-column Inland_today_news_selected_articles_float_row"
                                        >
                                            <v-col class="text-center ma-0 pa-0" cols="12">
                                                <p class="ma-0 Inland_today_news_selected_articles_float_row_col_text">
                                                    中方永远是津巴布韦的好朋中方永远是津巴布韦的好朋</p>
                                            </v-col>
                                        </v-row>
                                    </v-img>
                                </a>
                            </div>
                            <div class="Inland_today_news_selected_articles" style="margin-top: 30%">
                                <a href="">
                                    <v-img width="100%" height="100%"
                                           src="https://t10.baidu.com/it/u=1909460607,1322575995&fm=173&app=49&f=JPEG?w=312&h=208&s=560043ACCF923AC89894BD840300F089"
                                           alt="网罗新闻">
                                        <v-row class="d-flex flex-column Inland_today_news_selected_articles_float_row"
                                        >
                                            <v-col class="text-center ma-0 pa-0" cols="12">
                                                <p class="ma-0 Inland_today_news_selected_articles_float_row_col_text">
                                                    中方永远是津巴布韦的好朋中方永远是津巴布韦的好朋</p>
                                            </v-col>
                                        </v-row>
                                    </v-img>
                                </a>
                            </div>
                        </v-col>
                    </v-row>
                </div>
            </v-col>
            <!--热门专题-->
            <v-col cols="4" class="ma-0 pa-0 ml-10">
                <div class="subject_of_the_news_div">
                    <ul class="subject_of_the_news pa-0">
                        <!--图片-->
                        <li><a href="">
                            <img
                                    src="http://nimg.ws.126.net/?url=http://pic-bucket.ws.126.net/photo/0001/2020-01-11/F2KOQL3S00AN0001NOS.jpg&thumbnail=600x2147483647&quality=75&type=jpg"
                                    width="100%" height="90"/>
                        </a></li>
                        <!--标题-->
                        <li><p><a href="">聚焦2020甘肃两会」代表荆升阳：落实“三化”改造 推进民营企业高质量发展</a></p>
                            <p class="ma-0 pa-0 mt-1"><span>青年日报</span><span class="ml-4">评论&nbsp;10</span></p>
                        </li>
                    </ul>
                    <ul class="subject_of_the_news pa-0">
                        <!--图片-->
                        <li><a href="">
                            <img
                                    src="https://t10.baidu.com/it/u=1909460607,1322575995&fm=173&app=49&f=JPEG?w=312&h=208&s=560043ACCF923AC89894BD840300F089"
                                    width="100%" height="90"/>
                        </a></li>
                        <!--标题-->
                        <li><p><a href="">聚焦2020甘肃两会」代表荆升阳：落实“三化”改造 推进民营企业高质量发展</a></p>
                            <p class="ma-0 pa-0 mt-1"><span>青年日报</span><span class="ml-4">评论&nbsp;10</span></p>
                        </li>
                    </ul>
                    <ul class="subject_of_the_news pa-0">
                        <!--图片-->
                        <li><a href="">
                            <img
                                    src="https://t10.baidu.com/it/u=1909460607,1322575995&fm=173&app=49&f=JPEG?w=312&h=208&s=560043ACCF923AC89894BD840300F089"
                                    width="100%" height="90"/>
                        </a></li>
                        <!--标题-->
                        <li><p><a href="">聚焦2020甘肃两会」代表荆升阳：落实“三化”改造 推进民营企业高质量发展</a></p>
                            <p class="ma-0 pa-0 mt-1"><span>青年日报</span><span class="ml-4">评论&nbsp;10</span></p>
                        </li>
                    </ul>
                    <ul class="subject_of_the_news pa-0">
                        <!--图片-->
                        <li><a href="">
                            <img
                                    src="https://t10.baidu.com/it/u=1909460607,1322575995&fm=173&app=49&f=JPEG?w=312&h=208&s=560043ACCF923AC89894BD840300F089"
                                    width="100%" height="90"/>
                        </a></li>
                        <!--标题-->
                        <li><p><a href="">聚焦2020甘肃两会」代表荆升阳：落实“三化”改造 推进民营企业高质量发展</a></p>
                            <p class="ma-0 pa-0 mt-1"><span>青年日报</span><span class="ml-4">评论&nbsp;10</span></p>
                        </li>
                    </ul>
                </div>
            </v-col>
            <v-col cols="1" style="visibility: hidden"></v-col>
        </v-row>
        <!--热点精选  新闻标题-->
        <v-row class="d-flex flex-row ma-0 pa-0 Inland_hot_spots_title_row">
            <v-col cols="1" style="visibility: hidden">
                1
            </v-col>
            <v-col cols="6" class="pa-0">
                <div class="Inland_hot_spots_title_div">
                    <!--                       <p class="text-left ma-0 pa-0 Inland_hot_spots_title_div_p_title">热点精选</p>-->
                    <p class="text-left ma-0 pa-0 Inland_hot_spots_title_div_p_title">最新消息</p>
                </div>
            </v-col>
            <v-col cols="4">
                <div class="ma-0 pa-0">
                    <!--                    <p>热门新闻</p>-->
                </div>
            </v-col>
            <v-col cols="1" style="visibility: hidden">
                1
            </v-col>
        </v-row>
        <!--热点精选 新闻内容-->
        <v-row class="d-flex flex-row ma-0 pa-0 Inland_hot_spots_content_row">
            <v-col cols="1" style="visibility: hidden">
                1
            </v-col>
            <v-col cols="6" class="pa-0">
                <div class="Inland_hot_spots_content_div pa-0">
                    <!--热门精选 文章 列表-->
                    <!--文章没有图片显示 格式2 文章有图片显示格式一-->
                    <ul class="d-flex flex-row Inland_hot_spots_content_ul" v-for="(hot_spots,i) in hot_spots_arr">
                        <!--文章 封面-->
                        <li>
                            <!--图片溢出控制器-->
                            <div class="Inland_hot_spots_content_ul_li_img_div">
                                <a href=""><img src="https://p3.pstatp.com/list/190x124/pgc-image/RnFdYhZAVkakvP"
                                                width="220" height="130"/></a>
                            </div>
                        </li>
                        <!--文章标题 作者 评论 时间控制-->
                        <li>
                            <p class="ma-0 pa-0 Inland_hot_spots_content_ul_li_p_title"><a
                                    href="">{{hot_spots.title}}</a></p>
                            <p class="align-center Inland_hot_spots_content_ul_li_p_more ma-0 pa-0 d-flex flex-row ">
                                <!--作者 评论 时间-->
                                <span>
                                      <a href=""><v-avatar size="26">
                                          <v-img src="https://inews.gtimg.com/newsapp_ls/0/11201222242_294195/0"/>
                                      </v-avatar></a>
                                  </span>
                                <!--媒体-->
                                <span>
                                   <a href="">{{hot_spots.author}}</a>
                                  </span>
                                <!--评论数-->
                                <span>
                                      <a href="">评论 {{hot_spots.common_count+i}}</a>
                                  </span>

                                <!--评论时间-->
                                <span>
                                     {{hot_spots.date}}
                                  </span>
                            </p>
                        </li>
                    </ul>
                    <!--加载中 提示-->
                    <div class="loading pa-0">
                        <p class="ma-0 pa-0">
                            <v-progress-linear value="1"
                                               color="indigo lighten-4"
                                               buffer-value="100"
                                               height="25"
                                               background-opacity="0.10"
                                               indeterminate
                                               rounded
                                               class="ma-0 pa-0 font-weight-bold"
                            >加载中
                            </v-progress-linear>
                        </p>
                    </div>
                </div>
            </v-col>
            <v-col cols="4">
            </v-col>
            <v-col cols="1" style="visibility: hidden">
                1
            </v-col>
        </v-row>
    </v-content>
</template>
<style scoped="scoped">
    @import "../../../../../static/css/News/User/News/News_Type/Inland.scss";
</style>
<script>
    export default {
        name: "Inland",
        data() {
            return {
                /*控制下卡加载*/
                hot_spots_arr: null,
                scroll: true,//控制开关避免重复请求
                pagenum: 1,//当前页
                time: '',
                totalnum: 0,
                num: 0,//数组下标计数
                colors: [
                    'indigo',
                    'warning',
                    'pink darken-2',
                    'red lighten-1',
                    'deep-purple accent-4',
                ]
            }
        }, created() {
            /*加载热点精选*/
            this.get_hot_spots_Data();
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll);
        },
        methods: {
            handleScroll() {
                //变量scrollTop是滚动条滚动时,距离顶部的距离
                let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                //变量windowHeight是可视区的高度
                let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
                //变量scrollHeight是滚动条的总高度
                let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
                /*            console.log("高度" + windowHeight);
                            console.log("顶部距离" + scrollTop);
                            console.log("滚动条总高度" + scrollHeight);
                     //滚动条到底部的条件
                     /!*4舍5入 取大*!/
                     console.log("计算结果"+Math.ceil(scrollTop + windowHeight));*/
                if (Math.ceil(scrollTop + windowHeight) >= scrollHeight) {
                    //写后台加载数据的函数
                    console.log('到底部了');
                    clearInterval(this.time);
                    this.time = null;
                    /*显示加载动画*/
                    $(".loading").show();
                    /*滚动到页面底部*/
                    this.time = setInterval(this.get_hot_spots_Data, 500);
                }
            }, get_hot_spots_Data(url, data) {
                /*获取热点精选内容*/
                if (this.pagenum === 1) {
                    /*初始化页面数据*/
                    this.hot_spots_arr = [];
                    let newobj = {
                        title: "伊拉克一驻有美军军事基地再遭2枚火箭弹袭击 未造成人员伤亡",
                        author: "环球网",
                        common_count: "193",
                        date: "2020-10-11"
                    };
                    this.hot_spots_arr[this.num] = newobj;
                    this.pagenum = 2;
                    this.totalnum = 10;
                    this.num++;
                    console.log(this.num);
                } else {
                    console.log(this.num);
                    /*下拉指定秒数刷新*/
                    let newobj = {
                        title: "伊拉克一驻有美军军事基地再遭2枚火箭弹袭击 未造成人员伤亡",
                        author: "环球网",
                        common_count: "193",
                        date: "2020-10-11"
                    };
                    newobj.title += this.num;
                    /*强制视图刷新  对象数组名       数组key 下标  value值*/
                    if (newobj) {
                        this.$set(this.hot_spots_arr, this.num, newobj);
                    }
                    console.log(typeof this.hot_spots_arr);
                    console.log(this.hot_spots_arr);
                    clearInterval(this.time);
                    this.time = null;
                    this.num++;
                }
                /*增加当前页数*/
                ++this.pagenum;
                /*关闭 加载条*/
                $(".loading").hide();
                /*清除滚动至最底部*/
            }
        }
    }
</script>

