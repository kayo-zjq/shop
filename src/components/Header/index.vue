<template>
    <header class="header">
        <div class="top">
            <div class="container">
                <div class="loginList">
                    <p>线上商城欢迎您！</p>
                    <p>
                        <span>请</span>
                        <router-link :to="{name:'Login'}">登录</router-link>
                        <router-link :to="{name:'Register'}" class="register">免费注册</router-link>
                    </p>
                </div>

                <div class="typeList">
                    <a>我的订单</a>
                    <a>我的购物车</a>
                    <a>我的主页</a>
                    <a>企业采购</a>
                    <a>关注线上商城</a>
                    <a>合作</a>
                    <a>商家后台</a>
                </div>
            </div>
        </div>

        <div class="bottom">
            <h1 class="logoArea">
                <a class="logo" title="线上商城" target="_blank">
                    <img src="./images/logo.png">
                </a>
            </h1>

            <div class="searchArea">
                <form action="." class="searchForm">
                    <input
                        type="text"
                        id="autoComplete"
                        class="input-error input-xxlarge"
                        v-model="keywords">
                    <button
                        class="sui-btn btn-xlarge btn-danger"
                        type="button"
                        @click=goSearch>
                        搜索
                    </button>
                </form>
            </div>
        </div>
    </header>
</template>


<script>
export default{
    data(){
        return{
            keywords:'',
        }
    },
    methods:{
        goSearch(){
            this.$router.push({
                name: 'Search',
                params:{keyWords:this.keywords},
            })
        }
    }
}
</script>

<style lang="less" scoped>
.header{
    &>.top{
        background-color: #eaeaea;
        height: 30px;
        line-height: 30px;

        .container{
            width:1200px;
            margin: 0 auto;
            overflow: hidden;
            
            .loginList{
                float: left;

                p{
                    float: left;
                    margin-right: 10px;
                
                    .register {
                    
                        border-left: 1px solid #b3aeae;
                        padding: 0 5px;
                        margin-left: 5px;
                    }
                }
                
            }

            .typeList{
                float: right;

                a{
                    padding:0 10px;

                    &+a{
                        border-left:1px solid #b3aeae;
                    }
                }
            }
        }
    }


    &>.bottom{
        width: 1200px;
        margin: 0 auto;
        overflow:hidden;

        .logoArea{
            float: left;

            .logo{
                img{
                    width: 175px;
                    margin: 25px 45px;
                }
            }
        }

        .searchArea{
            float: right;
            margin-top:35px;

            .searchForm{
                overflow: hidden;

                input{
                    box-sizing: border-box;
                    width: 490px;
                    height: 32px;
                    padding: 0 4px;
                    border:2px solid #ea4a36;
                    float:left;

                    &:focus{
                        outline: none;
                    }
                }

                button{
                    height: 32px;
                    width: 68px;
                    background-color: #ea4a36;
                    border: none;
                    float:left;
                    cursor:pointer;
                    margin-left:5px;
                    +

                    &:focus{
                        outline:none;
                    }
                }
            }
        }
    }
}
</style>