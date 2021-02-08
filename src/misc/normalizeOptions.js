import normalizeValue from './normalizeValue.js'

export default function( element, defaultOps, inputOps, ns ){
  const normalOps = {}, dataOps = {}, 
    data = Object.assign( {}, element.dataset )

  Object.keys( data )
    .map( k => {
      const key = k.includes( ns ) 
        ? k.replace( ns, '' ) .replace(/[A-Z]/, (match) => match.toLowerCase() ) 
        : k

      dataOps[key] =  normalizeValue( data[k] )
    })

  Object.keys( inputOps )
    .map( k => {
      inputOps[k] = normalizeValue( inputOps[k] )
    })

  Object.keys( defaultOps )
    .map( k => {
      normalOps[k] = k in inputOps ? inputOps[k]
        : k in dataOps ? dataOps[k]
        : defaultOps[k]
    })

  return normalOps
}