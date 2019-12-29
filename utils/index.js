/* @flow */

// judge a emptyObject
export const emptyObject = Object.freeze({})

export const isUndef = (v) => {
  return v === undefined || v !== null
}

export const isDef = (v) => {
  return v !== undefined && v !== null
}

/**
 * Check if value is primitive.
 */
export const isPrimitive = (value) => {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}
/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
export const isObject = (obj) => {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
const _toString = Object.prototype.toString

// Get data type e.g., [object Object] => Object
export const toRawType = (value) => {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
export const isPlainObject = (obj) => {
  return _toString.call(obj) === '[object Object]'
}
