import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static outlets = [ "result" ]

  connect() {
    console.log(
      this.resultOutletElements
    )
  }
}
