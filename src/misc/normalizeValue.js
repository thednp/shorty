export default function( value ) {
  if ( value === 'true' ) {
    return true
  }

  if ( value === 'false' ) {
    return false
  }

  if ( !isNaN(value) ) {
    return +value
  }

  if ( value === '' || value === 'null' ) {
    return null
  }

  // string / function / Element / Object
  return value
}