// const BASE_URL =
//   "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/inr.json";


function getdata(dataId){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      console.log("dataId",dataId);
      resolve("succes");
    },3000);
  });
}
 async function getalldata(){
  await getdata(1);
  await getdata(2);
}