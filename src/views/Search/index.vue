<template>
    <TypeNav></TypeNav>
</template>

<script>
import { mapState } from 'vuex';
import TypeNav from '@/views/Home/TypeNav';

export default{
    components:{
        TypeNav,
    },
    computed:{
        ...mapState[
            'count'
        ],
    }
}
</script>