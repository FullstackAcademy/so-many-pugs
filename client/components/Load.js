import React, {Component} from 'react'

const Load = (OtherComponent) => class Loader extends Component {
  componentDidMount () {
    this.props.load()
  }

  render () {
    return <OtherComponent {...this.props} />
  }
}

export default Load
