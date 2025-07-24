<template>
    <div class="fr page">
            <div class="sui-pagination clearfix">
              <ul>
                <li class="prev " >
                  <span @click="goPage(Math.max(pageNo-1,1))" >上一页</span>
                </li>
                <li :class="{active:pageNo==1}" v-show="startPage-2>=0" >
                  <span @click="goPage(1)">1</span>
                </li>
                <li class="dotted" v-show="startPage-3>=0"><span>...</span></li>
                <li v-for="data in pageList" :class="{active:pageNo==data}" >
                  <span @click="goPage(data)">{{ data }}</span>
                </li>
                <li class="dotted" v-show="endPage+2 <= totalPage"><span>...</span></li>
                <li v-show="endPage+1 <= totalPage"  :class="{active:pageNo==totalPage}" >
                  <span @click="goPage(totalPage)">{{ totalPage }}</span>
                </li>
                <li class="next"  >
                  <span @click="goPage(Math.min(pageNo+1,totalPage))" >下一页</span>
                </li>
              </ul>
              <div><span>共{{totalPage}}页</span></div>
            </div>
          </div>
</template>

<script>
    export default{
        name:'FrPage',
        props:["pageNo","pageSize","total","continue"],
        computed:{
            totalPage(){
                return Math.ceil( this.total / this.pageSize );
            },
            half(){
                return Math.floor(this.continue / 2);
            },
            startPage(){
                let startNum = Math.max(1, this.pageNo - this.half);
                return startNum;

            },
            endPage(){
                return Math.min( this.totalPage, this.startPage +  this.continue-1)
            },
            pageList(){
              let res = [];
              for(let i = this.startPage;i <= this.endPage;++i){
                res.push(i);
              }
              return res;
            }
        },
        methods:{
          goPage(data){
            this.$emit('goNewPage',data);
          },
          
        }
    }
</script>

<style scoped lang="less">
          .page {
        //width: 1000px;
        height: 66px;
        overflow: hidden;
        float: left;
        
        
      

        .sui-pagination {
          margin: 18px 0;

          ul {
            margin-left: 0;
            margin-bottom: 0;
            vertical-align: middle;
            //width: 690px;
            float: left;

            li {
              line-height: 18px;
              display: inline-block;

              span {
                position: relative;
                float: left;
                line-height: 18px;
                text-decoration: none;
                background-color: #fff;
                border: 1px solid #e0e9ee;
                margin-left: -1px;
                font-size: 14px;
                padding: 9px 18px;
                color: #333;
              }

              &.active {
                span {
                  background-color: #fff;
                  color: #e1251b;
                  border-color: #fff;
                  cursor: default;
                }
              }

              &.prev {
                span {
                  background-color: #fafafa;
                }
              }

              &.disabled {
                span {
                  color: #999;
                  cursor: default;
                }
              }

              &.dotted {
                span {
                  margin-left: -1px;
                  position: relative;
                  float: left;
                  line-height: 18px;
                  text-decoration: none;
                  background-color: #fff;
                  font-size: 14px;
                  border: 0;
                  padding: 9px 18px;
                  color: #333;
                }
              }

              &.next {
                span {
                  background-color: #fafafa;
                }
              }
            }
          }

          div {
            color: #333;
            font-size: 14px;
            float: right;
            width: 150px;
            height: 37px;
            span{
              line-height: 37px;
              text-align: center;
            }
          }
        }
      }

</style>