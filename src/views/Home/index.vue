<template>
    <div>
        <TypeNav></TypeNav>
        <ListContainer></ListContainer>
        <TodayRecommend></TodayRecommend>
        <Rank></Rank>
        <Like></Like>
        <Floor v-for="nowData in floorData" :floorData="nowData">

        </Floor>
        
    </div>
</template>


<script>
import TypeNav from './TypeNav';
import ListContainer from './ListContainer';
import TodayRecommend from './TodayRecommend'
import Rank from './Rank'
import Like from './Like'
import Floor from './Floor'

import { mapState } from 'vuex';
export default{
    components:{
        TypeNav,
        ListContainer,
        TodayRecommend,
        Rank,
        Like,
        Floor,
    },
    data(){
        return {

        }
    },
    mounted(){
        this.$store.dispatch('Home/getFloor');
    },
    computed:{
        ...mapState({
            floorData: state => state.Home.floorData,
        })
    },
    methods:{
    },
}
</script>