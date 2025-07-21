import { getSearchList } from '@/api'

const state={
    list:{

    },
};

const mutations = {
    setSearchList(state, data){
        state.list = data;
        console.log(`list ${state.list[0]}`)
    }
};

const actions = {
    async getSearchList(context, params){
        let resData = await getSearchList({});

        if(resData.code===200){
            let listData = resData.data;
            context.commit('setSearchList', listData);
        }
    },
}

export default{
    namespaced: true,
    state,
    mutations,
    actions,
}