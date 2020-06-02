export function tryWrapper (fn,origin){ 
  try{ fn() } 
  catch(e){
    console.error(`${origin}: ${e}`)
  }
}