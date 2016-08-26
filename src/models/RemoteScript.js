/**
 * Created by nickwph on 6/26/16.
 */

import Script from './Script'

export default class RemoteScript extends Script {

  constructor(type, url) {
    super(type);
    this.url = url
  }
}