// define all api for project,it calls  common api function

import commonApi from "./commonApi";   

//upload video api ,this function is called in the add component

export const uploadVideo =async(videoData)=>{
  return await commonApi('post','/Allvideos',videoData)
}

export const getVideoApi =async()=>{
  return await commonApi('get','/Allvideos',"")
}

export const addHistory = async(historyData)=>{
  return await commonApi('post','/Allhistory',historyData)
}

export const getHistoryApi =async() =>{
  return await commonApi('get','/Allhistory',"")
}

export const deletehisApi =async(id) =>{
  return await commonApi('delete',`/Allhistory/${id}`,{})
}

export const deleteAllVideos = async(id) =>{
  return await commonApi('delete',`/Allvideos/${id}`,{})
}

export const addCategory = async(category) =>{
  return await commonApi('post','/Allcategories',category)
}

export const getCategoryApi = async() =>{
  return await commonApi('get','/Allcategories',"")
}

export const singleVideo = async(id)=>{
  return await commonApi('get',`/Allvideos/${id}`,"")
}

export const updatecategoryApi =async(id,categoryData)=>{
  return await commonApi('put',`/Allcategories/${id}`,categoryData)
}

export const deleteCategoryApi = async(id) =>{
  return await commonApi('delete',`/Allcategories/${id}`,{})
}