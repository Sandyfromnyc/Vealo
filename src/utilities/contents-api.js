import sendRequest from "./send-request";
const BASE_URL = '/api/contents';


export async function getSources() {
  const sourceData = await sendRequest(`${BASE_URL}/sources`)
  console.log(sourceData, 'this is the sourceData')
  return sourceData 
  
}

export async function getHuluTopTen(){
  const topTenSourceData = await sendRequest(`${BASE_URL}/hulutopten`)
  console.log(topTenSourceData, 'this is the hulutopten')
  return topTenSourceData 
}

export async function getSearch(searchData) {
  const searchTitle = await sendRequest(`${BASE_URL}/search?searchItem=${searchData}`)
  console.log(searchTitle);
  return searchTitle
}

