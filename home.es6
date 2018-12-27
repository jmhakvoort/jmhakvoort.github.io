class Home {
  constructor(data) {
    this.data = data
    this.keys = Object.keys(data)
    this.main = document.getElementsByTagName('main')[0]
  }

  render() {
    for( const key of this.keys ) {
      let section = new Section(key, this.data[key])
      this.main.appendChild( section.element() )
    }
  }
}
