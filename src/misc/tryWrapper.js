export default function(fn,origin){ 
  try{ fn() } 
  catch(e){
    console.error(`${origin} ${e}`)
  }
}