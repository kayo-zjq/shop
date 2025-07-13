<template>
    <div>
        <TypeNav></TypeNav>
        <ListContainer></ListContainer>
        <TodayRecommend></TodayRecommend>
        <Rank></Rank>
        <Like></Like>
        <Floor></Floor>
        <Floor></Floor>
    </div>
</template>


<script>
import TypeNav from './TypeNav';
import ListContainer from './ListContainer';
import TodayRecommend from './TodayRecommend'
import Rank from './Rank'
import Like from './Like'
import Floor from './Floor'
export default{
    components:{
        TypeNav,
        ListContainer,
        TodayRecommend,
        Rank,
        Like,
        Floor,
    }
}
</script>