/**
 * Created by nickwph on 6/26/16.
 */

export default class Script {

  constructor(type) {
    // super(type)
    this.type = sanitizeType(type) // css or javascript
  }
}

function sanitizeType(type) {
  if (type !== 'css' || type !== 'javascript') {
    throw DOMException()
  }
  return type
}