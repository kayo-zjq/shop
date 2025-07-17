<template>
    <div class="type-nav">
        <div class="container">

            <div @mouseleave="mouseLeaveEvent" @mouseenter="mouseEnterEvent">
                <h2 class="all">全部商品分类</h2>
                <Transition>
                    <div class="sort" v-show="show">
                        <div class="all-sort-list2" @click="goSearch">
                            <div class="item" v-for="(list_data1, index) in list" :key="list_data1.categoryId"
                                @mouseenter="setChooseIndex(index)">
                                <h3 :class="{ chooseNow: nowIndex == index }">
                                    <a :categoryName="list_data1.categoryName" :categoryId1="list_data1.categoryId">{{
                list_data1.categoryName }}</a>
                                </h3>
                                <div class="item-list clearfix"
                                    :style="{ display: nowIndex == index ? 'block' : 'none' }">
                                    <div class="subitem">
                                        <dl class="fore" v-for="list_data2 in list_data1.categoryChild"
                                            :key="list_data2.categoryId">
                                            <dt>
                                                <a :categoryName="list_data2.categoryName"
                                                    :categoryId2="list_data2.categoryId">{{ list_data2.categoryName
                                                    }}</a>
                                            </dt>
                                            <dd>
                                                <em v-for="list_data3 in list_data2.categoryChild"
                                                    :key="list_data3.categoryId">
                                                    <a :categoryName="list_data3.categoryName"
                                                        :categoryId3="list_data3.categoryId">{{ list_data3.categoryName
                                                        }}</a>
                                                </em>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>


            <nav class="nav">
                <a href="###">服装城</a>
                <a href="###">美妆馆</a>
                <a href="###">尚品汇超市</a>
                <a href="###">全球购</a>
                <a href="###">闪购</a>
                <a href="###">团购</a>
                <a href="###">有趣</a>
                <a href="###">秒杀</a>
            </nav>



        </div>
    </div>
</template>

<script>
import throttle from 'lodash/throttle'

import { mapState } from 'vuex'

export default {
    computed: {
        list() {
            return this.$store.state.TypeNav.list;
        }
    }
    ,
    created() {
        if (this.$route.name != 'Home') {
            this.show = false;
        }

    },
    data() {
        return {
            show: true,
            //list: [],
            //当前鼠标停留的位置
            nowIndex: -1,
        }
    },
    methods: {
        setChooseIndex: throttle(
            function (index) {
                this.nowIndex = index;
            }, 50
        ),

        mouseEnterEvent() {
            if (this.$route.name != 'Home') {
                this.show = true;
            }
            //this.nowIndex = -1;
        },
        mouseLeaveEvent() {
            if (this.$route.name != 'Home') {
                this.show = false;
            }
            this.nowIndex = -1;
        },

        goSearch(event) {
            //通过事件委托获得当前点击的标签
            let e = event.target;
            //获得当前标签的id和name值
            let id1 = e.getAttribute('categoryId1');
            let name = e.getAttribute('categoryName');
            let id2 = e.getAttribute('categoryId2');
            let id3 = e.getAttribute('categoryId3');


            //提取当前标签
            
            if (name) {//如果需要跳转，记录跳转对象并进行跳转
                let toPath = {
                    name: '',
                    query: {
                    }
                };
                toPath.name = 'Search';
                toPath.query.name = name;
                if(id1){
                    toPath.query.category1Id = id1;
                }
                if(id2){
                    toPath.query.category2Id = id2;
                }
                if(id3){
                    toPath.query.category3Id = id3;
                }
                if(this.$route.params){
                    toPath.params = this.$route.params;
                }
                this.$router.push(toPath);
            }






        }
    }

}
</script>

<style lang="less">
.type-nav {

    .v-enter-active,
    .v-leave-active {
        transition: opacity 0.5s ease;
    }

    .v-enter-from,
    .v-leave-to {
        opacity: 0;
    }



    border-bottom: 2px solid #e1251b;

    .chooseNow {
        background-color: skyblue;
    }

    .container {
        width: 1200px;
        margin: 0 auto;
        display: flex;
        position: relative;

        .all {
            width: 210px;
            height: 45px;
            background: #e1251b;
            line-height: 45px;
            text-align: center;
            color: #fff;
            font-size: 14px;
            font-weight: bold;
        }

        .nav {
            a {
                height: 45px;
                margin: 0 22px;
                line-height: 45px;
                font-size: 16px;
                color: #333;
            }
        }

        .sort {
            position: absolute;
            left: 0;
            top: 45px;
            width: 210px;
            height: 461px;
            background-color: #fafafa;
            z-index: 999;

            .all-sort-list2 {
                .item {
                    /*
                    &:hover {
                        .item-list {
                            display: block;
                        }
                    }*/

                    h3 {
                        line-height: 30px;
                        font-size: 14px;
                        font-weight: 400;
                        overflow: hidden;
                        padding: 0 20px;
                        margin: 0;

                        a {
                            color: #333;
                        }
                    }

                    .item-list {
                        display: none;
                        position: absolute;
                        width: 734px;
                        min-height: 460px;
                        background: #f7f7f7;
                        left: 210px;
                        border: 1px solid #ddd;
                        top: 0;
                        z-index: 9999 !important;

                        .subitem {
                            float: left;
                            width: 650px;
                            padding: 0 4px 0 8px;

                            dl {
                                border-top: 1px solid #eee;
                                padding: 6px 0;
                                overflow: hidden;
                                zoom: 1;

                                &.fore {
                                    border-top: 0;
                                }

                                dt {
                                    float: left;
                                    width: 54px;
                                    line-height: 22px;
                                    text-align: right;
                                    padding: 3px 6px 0 0;
                                    font-weight: 700;
                                }

                                dd {
                                    float: left;
                                    width: 415px;
                                    padding: 3px 0 0;
                                    overflow: hidden;


                                    em {
                                        float: left;
                                        height: 14px;
                                        line-height: 14px;
                                        padding: 0 8px;
                                        margin-top: 5px;
                                        border-left: 1px solid #ccc;
                                    }
                                }
                            }
                        }

                    }


                }
            }
        }
    }
}
</style>