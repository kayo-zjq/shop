<template>
    <div>
        搜索
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default{
    computed:{
        ...mapState[
            'count'
        ],
    }
}
</script>