import { Controller } from "@hotwired/stimulus"

const textLimit = 20

export default class extends Controller {
  static targets = [ "input", "output" ]

  count() {
    let contentLength = this.inputTarget.value.length
    if (contentLength <= ( textLimit - 5)) {
      this.outputTarget.innerHTML = ""
    } else if (contentLength > (textLimit - 5) && contentLength <= textLimit) {
      this.outputTarget.innerHTML =  `Reaching text limit [${contentLength}/${textLimit}]`
    } else if (contentLength > textLimit) {
      this.outputTarget.innerHTML = `Too long [${contentLength}/${textLimit}]`
    }
  }
}
