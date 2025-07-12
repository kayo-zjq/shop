<template>
    <div>
        <TypeNav></TypeNav>
        <ListContainer></ListContainer>
        <TodayRecommend></TodayRecommend>
        <Rank></Rank>
        <Like></Like>
    </div>
</template>


<script>
import TypeNav from './TypeNav';
import ListContainer from './ListContainer';
import TodayRecommend from './TodayRecommend'
import Rank from './Rank'
import Like from './Like'
export default{
    components:{
        TypeNav,
        ListContainer,
        TodayRecommend,
        Rank,
        Like,
    }
}
</script>