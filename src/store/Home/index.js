import { requestBannerImage } from '@/api'
const state = {
    bannerList : [],
};

const mutations = {
    setBannerList(state, data){
        state.bannerList = data;
    }
};

const actions = {
    async getBannerList(context){
        let bannerData = await requestBannerImage();
        bannerData = bannerData.data;
        console.log(`bannerData ${bannerData}`);
        context.commit('setBannerList',bannerData);
    }
};


export default{
    namespaced:true,
    state,
    mutations,
    actions,
}