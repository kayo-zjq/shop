import { requestBannerImage, getFloorData } from '@/api'
const state = {
    bannerList : [],
    floorData : {},
};

const mutations = {
    setBannerList(state, data){
        state.bannerList = data;
    },

    setFloorData(state, data){
        state.floorData = data;
    }
};

const actions = {
    //获取Banner的轮播图数据
    async getBannerList(context){
        let bannerData = await requestBannerImage();
        if(bannerData.code == 200){
            bannerData = bannerData.data;
            context.commit('setBannerList',bannerData);
        }
    },

    //获取floor部分的所需的数据
    async getFloor(context){
        let floorData = await getFloorData();
        if(floorData.code == 200){
            floorData = floorData.data;
            context.commit('setFloorData',floorData);
        }
    },
};


export default{
    namespaced:true,
    state,
    mutations,
    actions,
}