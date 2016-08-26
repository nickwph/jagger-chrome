/**
 * Created by nickwph on 6/26/16.
 */

import Script from './Script'

export default class CodeScript extends Script {

  constructor(type, code) {
    super(type);
    this.code = code
  }
}