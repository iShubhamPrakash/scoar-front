export const getDiffInHr = (startDateTime, endDateime) =>{
  try{
    const d1 = new Date(startDateTime)
    const d2 = new Date(endDateime)
    const diff = d2.getTime() - d1.getTime()
    const hr = diff/(1000*60*60)
    return hr
  }catch (e){
    console.log("Error calculating time difference", e)
    return 0
  }
}