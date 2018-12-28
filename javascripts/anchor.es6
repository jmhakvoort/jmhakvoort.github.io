class Anchor {
  constructor(name, url) {
    this.name = name
    this.url = url
  }

  element() {
    let anchor = document.createElement('a')
    let text = document.createTextNode(this.name)
    anchor.href = this.url
    anchor.appendChild(text)
    return anchor
  }
}