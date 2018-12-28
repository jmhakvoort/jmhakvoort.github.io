class Section {
  constructor(title, data) {
    this.name = title
    this.data = data
    this.keys = Object.keys(data)
    this.list = document.createElement("dl")
  }

  element() {
    let description = document.createElement('dd')
    for( const key of this.keys ) {
      var anchor = new Anchor( key, this.data[key] )
      description.appendChild( anchor.element() )
    }
    let title = document.createElement('dt')
    let text = document.createTextNode(this.name)
    title.appendChild( text )
    title.classList.add("translucent")
    this.list.appendChild( description )
    this.list.appendChild( title )
    return this.list
  }
}
