import { reqcategoryList } from '@/api'
const state={
    list : [],
};

const mutations = {
    async getList(state){
        let tmpList = await reqcategoryList();
        
        state.list = tmpList.data;
       
    },
};

const actions = {
    getListAction(context){
        context.commit('getList')
    },
}

export default{
    namespaced: true,
    state,
    mutations,
    actions,
}