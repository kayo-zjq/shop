//当前这个模块：所有的api接口进行统一的管理
import Requests from "@/api/mockRequest";
// import { mock } from "mockjs";

//三级联动接口
export const reqcategoryList = () => Requests.get("/categoryList");

