import { getDetailData } from '@/api'

const state = {
    itemData : {},
}

const mutations = {
    setItemData(state,data){
        state.itemData = data;
    }
}

const actions = {
    async getItemData(context,params){
        let data = await getDetailData(params);
        let res = {};
        if(data.code == 200){
            res = data.data;
            context.commit('setItemData',res)
        }  
    },
}


export default{
    namespaced:true,
    state,
    mutations,
    actions,
}