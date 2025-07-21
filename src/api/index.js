//当前这个模块：所有的api接口进行统一的管理
import Requests from "@/api/mockRequest";


// import { mock } from "mockjs";

//三级联动接口
export const reqcategoryList = () => {
    console.log('getcategory');
    return Requests.get("/categoryList");
}

//banner图片数据
export const requestBannerImage = () => {
    return Requests.get('/banner');
}


//floor模块数据
export const getFloorData = () => {
    return Requests.get('/floor')
}

//搜索页数据
export const getSearchList = (params)=>{
    return Requests.get('/list')
}
