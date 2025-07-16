import { reqcategoryList } from '@/api'
const state={
    list : [],
};

const mutations = {
    async getList(state){
        let tmpList = await reqcategoryList();
        
        state.list = tmpList.data;
       
    }
};

const action = {

}

export default{
    namespaced: true,
    state,
    mutations,
    action,
}