<template>
  <div>
    <TypeNav />
    <div class="main">
      <div class="py-container">
        <!--bread-->
        <div class="bread">
          <ul class="fl sui-breadcrumb">
            <li>
              <a href="#">全部结果</a>
            </li>
          </ul>
          <ul class="fl sui-tag">
            <li class="with-x" v-if="$route.query.categoryName">{{ $route.query.categoryName }}<i @click="resetQuery">×</i></li>
            <li class="with-x" v-if="$route.params.keyWords">{{  $route.params.keyWords }}<i @click="resetParams">×</i></li>
            <li class="with-x" v-if="searchParams.trademark">{{ searchParams.trademark.split(':')[1] }}<i @click="resetTradeMark">×</i></li>
            <li class="with-x" v-if="searchParams.props" v-for="data in searchParams.props">{{ data.split(':')[2] }}<i @click="resetProps(data)">×</i></li>
          </ul>
        </div>

        <!--selector-->
        <SearchSelector @getTrademarkName="postTrademarkName" @getAttrsList="postAttrsList"/>

        <!--details-->
        <div class="details clearfix">
          <div class="sui-navbar">
            <div class="navbar-inner filter">
              <ul class="sui-nav">
                <li :class="{active:this.searchParams.order.indexOf('1')!=-1}" @click="changeButton('1')">
                  <a @click.prevent>综合
                    <span v-show="ifAsc">⬆</span>
                    <span v-show="ifDesc">⬇</span>
                  </a>
                </li>
                <li :class="{active:this.searchParams.order.indexOf('2')!=-1}" @click="changeButton('2')" >
                  <a @click.prevent>价格
                    <span v-if="ifAsc">⬆</span>
                    <span v-if="ifDesc">⬇</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="goods-list">
            <ul class="yui3-g">
              <li class="yui3-u-1-5" v-for="data in listData[0]?.goodsList" :key="data.id">
                <div class="list-wrap">
                  <div class="p-img">
                    <a href="item.html" target="_blank"><img :src="data.defaultImg" /></a>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>{{ data.price }}</i>
                    </strong>
                  </div>
                  <div class="attr">
                    <a target="_blank" href="item.html" :title="data.title">{{ data.defaultDescribe }}</a>
                  </div>
                  <div class="commit">
                    <i class="command">已有<span>{{ data.hotScore }}</span>人评价</i>
                  </div>
                  <div class="operate">
                    <a href="success-cart.html" target="_blank" class="sui-btn btn-bordered btn-danger">加入购物车</a>
                    <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                  </div>
                </div>
              </li>
              <!--li class="yui3-u-1-5">
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/mobile02.png" />
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>6088.00</i>
                    </strong>
                  </div>
                  <div class="attr">
                    <a target="_blank" href="item.html" title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】">Apple苹果iPhone
                      6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)</a>
                  </div>
                  <div class="commit">
                    <i class="command">已有<span>2000</span>人评价</i>
                  </div>
                  <div class="operate">
                    <a href="success-cart.html" target="_blank" class="sui-btn btn-bordered btn-danger">加入购物车</a>
                    <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                  </div>
                </div>
              </li>
              <li class="yui3-u-1-5">
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/mobile03.png" />
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>6088.00</i>
                    </strong>
                  </div>
                  <div class="attr">
                    <a target="_blank" href="item.html" title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】">Apple苹果iPhone
                      6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)</a>
                  </div>
                  <div class="commit">
                    <i class="command">已有<span>2000</span>人评价</i>
                  </div>
                  <div class="operate">
                    <a href="success-cart.html" target="_blank" class="sui-btn btn-bordered btn-danger">加入购物车</a>
                    <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                  </div>
                </div>
              </li>
              <li class="yui3-u-1-5">
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/mobile04.png" />
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>6088.00</i>
                    </strong>
                  </div>
                  <div class="attr">
                    <a target="_blank" href="item.html" title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】">Apple苹果iPhone
                      6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)</a>
                  </div>
                  <div class="commit">
                    <i class="command">已有<span>2000</span>人评价</i>
                  </div>
                  <div class="operate">
                    <a href="success-cart.html" target="_blank" class="sui-btn btn-bordered btn-danger">加入购物车</a>
                    <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                  </div>
                </div>
              </li>
              <li class="yui3-u-1-5">
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/mobile05.png" />
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>6088.00</i>
                    </strong>
                  </div>
                  <div class="attr">
                    <a target="_blank" href="item.html" title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】">Apple苹果iPhone
                      6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)</a>
                  </div>
                  <div class="commit">
                    <i class="command">已有<span>2000</span>人评价</i>
                  </div>
                  <div class="operate">
                    <a href="success-cart.html" target="_blank" class="sui-btn btn-bordered btn-danger">加入购物车</a>
                    <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                  </div>
                </div>
              </li>
              <li class="yui3-u-1-5">
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/mobile06.png" />
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>6088.00</i>
                    </strong>
                  </div>
                  <div class="attr">
                    <a target="_blank" href="item.html" title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】">Apple苹果iPhone
                      6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)</a>
                  </div>
                  <div class="commit">
                    <i class="command">已有<span>2000</span>人评价</i>
                  </div>
                  <div class="operate">
                    <a href="success-cart.html" target="_blank" class="sui-btn btn-bordered btn-danger">加入购物车</a>
                    <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                  </div>
                </div>
              </li>
              <li class="yui3-u-1-5">
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/mobile01.png" />
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>6088.00</i>
                    </strong>
                  </div>
                  <div class="attr">
                    <a target="_blank" href="item.html" title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】">Apple苹果iPhone
                      6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)</a>
                  </div>
                  <div class="commit">
                    <i class="command">已有<span>2000</span>人评价</i>
                  </div>
                  <div class="operate">
                    <a href="success-cart.html" target="_blank" class="sui-btn btn-bordered btn-danger">加入购物车</a>
                    <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                  </div>
                </div>
              </li>
              <li class="yui3-u-1-5">
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/mobile02.png" />
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>6088.00</i>
                    </strong>
                  </div>
                  <div class="attr">
                    <a target="_blank" href="item.html" title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】">Apple苹果iPhone
                      6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)</a>
                  </div>
                  <div class="commit">
                    <i class="command">已有<span>2000</span>人评价</i>
                  </div>
                  <div class="operate">
                    <a href="success-cart.html" target="_blank" class="sui-btn btn-bordered btn-danger">加入购物车</a>
                    <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                  </div>
                </div>
              </li>
              <li class="yui3-u-1-5">
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/mobile03.png" />
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>6088.00</i>
                    </strong>
                  </div>
                  <div class="attr">
                    <a target="_blank" href="item.html" title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】">Apple苹果iPhone
                      6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)</a>
                  </div>
                  <div class="commit">
                    <i class="command">已有<span>2000</span>人评价</i>
                  </div>
                  <div class="operate">
                    <a href="success-cart.html" target="_blank" class="sui-btn btn-bordered btn-danger">加入购物车</a>
                    <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                  </div>
                </div>
              </li>
              <li class="yui3-u-1-5">
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/mobile04.png" />
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>6088.00</i>
                    </strong>
                  </div>
                  <div class="attr">
                    <a target="_blank" href="item.html" title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】">Apple苹果iPhone
                      6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)</a>
                  </div>
                  <div class="commit">
                    <i class="command">已有<span>2000</span>人评价</i>
                  </div>
                  <div class="operate">
                    <a href="success-cart.html" target="_blank" class="sui-btn btn-bordered btn-danger">加入购物车</a>
                    <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                  </div>
                </div>
              </li-->
            </ul>
          </div>

          <!--continues 连续页码 pageNo 当前是第几页  pageSize 每页有多少数据   total 一共有多少条数据  totalPage 一共多少页-->
          <FrPage :pageNo="4" :pageSize="10" :total="92" :continue="7"></FrPage>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import SearchSelector from './SearchSelector/SearchSelector';
import TypeNav from '@/views/Home/TypeNav';
export default {
  name: 'Search',

  components: {
    SearchSelector,
    TypeNav,
  },
  //通过三级联动点击进入search页面，数据通过url的query传送，在head部分通过点击搜索按钮传递的参数，通过params传输
  data() {
    return {
      //listData : {},
      
      searchParams: {
        category1Id: undefined,
        category2Id: undefined,
        category3Id: undefined,
        categoryName: undefined,
        keyWords: undefined,
        props: [],
        trademark: undefined,
        order: '1.desc',
        pageNo: 1,
        pageSize: 10,
      },
      TrademarkName:undefined,
    }
  },

  beforeMount() {
    //进入当前页面，设置search需要传递的参数，有params的情况下，对应的是keywords，有query的情况下，
    //对应categoryName和categoryId
    //this.searchParams.category1Id = this.searchParams.category2Id = this.searchParams.category3Id = 0;
    this.searchParams = Object.assign( this.searchParams, this.$route.query, this.$route.params)
    console.log(`111 ${this.$route.query.category1Id} ${this.$route.query.category2Id} ${this.$route.query.category3Id} ${this.searchParams.category3Id}`);
    this.getData(this.searchParams);
    
    
  },

  mounted() {
    
  },

  watch: {
    $route(oldValue, newValue) {
      console.log('change');
      this.searchParams.category1Id = this.searchParams.category2Id = this.searchParams.category3Id = undefined;
      console.log(this.$route.query);
      this.searchParams = Object.assign( this.searchParams, this.$route.query, this.$route.params);
      this.getData(this.searchParams);

      //this.listData = this.$store.state.Search.list;
    }
  },

  methods: {
    getData(params) {
      //发送请求，把服务器端的数据存在仓库里
      console.log(`category1Id ${params.category1Id}`);
      console.log(`category2Id ${params.category2Id}`);
      console.log(`category3Id ${params.category3Id}`);
      console.log(`categoryName ${params.categoryName}`);
      console.log(`keyword ${params.keyWords}`);
      console.log(`props ${params.props}`);
      console.log(`trademark ${params.trademark}`);
      console.log(`order ${params.order}`);
      
      this.$store.dispatch('Search/getSearchList',params);
    },
    resetQuery(){
       //置空category相关的参数
       this.searchParams.category1Id = this.searchParams.category2Id = this.searchParams.category3Id = this.searchParams.categoryName= undefined;
       //重新进入页面
       this.$router.push({name:'Search',params:this.$route.params})
    },
    resetParams(){
      //置空搜索框
      //置空searchParams中的keywords
      this.searchParams.keyWords = '';
      
      //重新进入页面，保留query，置空params
      console.log("111");
      this.$router.push({name:'Search',query:this.$route.query,params:{keyWords:undefined}});
    },
    postTrademarkName(data){
      this.searchParams.trademark = `${data.tmId}:${data.tmName}`;
      this.getData(this.searchParams);

    },
    resetTradeMark(){
      //置空search传输数据中的tardemark
      this.searchParams.trademark = undefined;
      //重新获取当前显示的数据
      this.getData(this.searchParams);
    },
    postAttrsList(data){
      //把子组件获得的数据记录，并发送请求当前数据
      if(this.searchParams.props.indexOf(data)==-1){
        this.searchParams.props.push(data);
      }
      this.getData(this.searchParams);

    },
    resetProps(data){
      let index = this.searchParams.props.indexOf(data);
      this.searchParams.props.splice(index,1);
      this.getData(this.searchParams);

    },
    //点击综合或价格按钮时，修改当前排序图标，并且重新向服务器发生请求
    changeButton(id){
      //如果点击按钮和上一个默认按钮是同一个，则只切换状态
      //如果点击按钮和上一个默认按钮不是同一个，则切换按钮，并返回按钮默认顺序
      let nextOrder = '';
      if( this.searchParams.order[0] != id ){
        //默认降序
        nextOrder = `${id}:desc`;
      }else{
        nextOrder = `${id}:${this.searchParams.order.indexOf('desc')==-1?'desc':'asc'}`;
      }
      //更新params参数
      this.searchParams.order = nextOrder;
      //发送数据
      this.getData(this.searchParams);
    }
    
    
  },
  computed: {
    listData() {
       return this.$store.state.Search.list;
    },
    
    ifAsc(){
      return this.searchParams.order.indexOf('asc') != -1;
    },
    ifDesc(){
      console.log(`desc ${this.searchParams.order.indexOf('desc') != -1}`);
      return this.searchParams.order.indexOf('desc') != -1;
    }
  },

}
</script>

<style lang="less" scoped>
.main {
  margin: 10px 0;

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .bread {
      margin-bottom: 5px;
      overflow: hidden;

      .sui-breadcrumb {
        padding: 3px 15px;
        margin: 0;
        font-weight: 400;
        border-radius: 3px;
        float: left;

        li {
          display: inline-block;
          line-height: 18px;

          a {
            color: #666;
            text-decoration: none;

            &:hover {
              color: #4cb9fc;
            }
          }
        }
      }

      .sui-tag {
        margin-top: -5px;
        list-style: none;
        font-size: 0;
        line-height: 0;
        padding: 5px 0 0;
        margin-bottom: 18px;
        float: left;

        .with-x {
          font-size: 12px;
          margin: 0 5px 5px 0;
          display: inline-block;
          overflow: hidden;
          color: #000;
          background: #f7f7f7;
          padding: 0 7px;
          height: 20px;
          line-height: 20px;
          border: 1px solid #dedede;
          white-space: nowrap;
          transition: color 400ms;
          cursor: pointer;

          i {
            margin-left: 10px;
            cursor: pointer;
            font: 400 14px tahoma;
            display: inline-block;
            height: 100%;
            vertical-align: middle;
          }

          &:hover {
            color: #28a3ef;
          }
        }
      }
    }

    .details {
      margin-bottom: 5px;

      .sui-navbar {
        overflow: visible;
        margin-bottom: 0;

        .filter {
          min-height: 40px;
          padding-right: 20px;
          background: #fbfbfb;
          border: 1px solid #e2e2e2;
          padding-left: 0;
          border-radius: 0;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);

          .sui-nav {
            position: relative;
            left: 0;
            display: block;
            float: left;
            margin: 0 10px 0 0;

            li {
              float: left;
              line-height: 18px;

              a {
                display: block;
                cursor: pointer;
                padding: 11px 15px;
                color: #777;
                text-decoration: none;
              }

              &.active {
                a {
                  background: #e1251b;
                  color: #fff;
                }
              }
            }
          }
        }
      }

      .goods-list {
        margin: 20px 0;

        ul {
          display: flex;
          flex-wrap: wrap;

          li {
            height: 100%;
            width: 20%;
            margin-top: 10px;
            line-height: 28px;

            .list-wrap {
              .p-img {
                padding-left: 15px;
                width: 215px;
                height: 255px;

                a {
                  color: #666;

                  img {
                    max-width: 100%;
                    height: auto;
                    vertical-align: middle;
                  }
                }
              }

              .price {
                padding-left: 15px;
                font-size: 18px;
                color: #c81623;

                strong {
                  font-weight: 700;

                  i {
                    margin-left: -5px;
                  }
                }
              }

              .attr {
                padding-left: 15px;
                width: 85%;
                overflow: hidden;
                margin-bottom: 8px;
                min-height: 38px;
                cursor: pointer;
                line-height: 1.8;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;

                a {
                  color: #333;
                  text-decoration: none;
                }
              }

              .commit {
                padding-left: 15px;
                height: 22px;
                font-size: 13px;
                color: #a7a7a7;

                span {
                  font-weight: 700;
                  color: #646fb0;
                }
              }

              .operate {
                padding: 12px 15px;

                .sui-btn {
                  display: inline-block;
                  padding: 2px 14px;
                  box-sizing: border-box;
                  margin-bottom: 0;
                  font-size: 12px;
                  line-height: 18px;
                  text-align: center;
                  vertical-align: middle;
                  cursor: pointer;
                  border-radius: 0;
                  background-color: transparent;
                  margin-right: 15px;
                }

                .btn-bordered {
                  min-width: 85px;
                  background-color: transparent;
                  border: 1px solid #8c8c8c;
                  color: #8c8c8c;

                  &:hover {
                    border: 1px solid #666;
                    color: #fff !important;
                    background-color: #666;
                    text-decoration: none;
                  }
                }

                .btn-danger {
                  border: 1px solid #e1251b;
                  color: #e1251b;

                  &:hover {
                    border: 1px solid #e1251b;
                    background-color: #e1251b;
                    color: white !important;
                    text-decoration: none;
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