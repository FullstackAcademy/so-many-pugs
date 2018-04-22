import React, {Component} from 'react'

const Load = (OtherComponent) => class Loader extends Component {
  state = {
    loaded: false,
    error: false
  }
  componentDidMount () {
    this.props.load()
      .then(() => this.setState({loaded: true}))
      .catch(() => this.setState({error: true}))
  }

  render () {
    const {loaded, error} = this.state
    return loaded
      ? <OtherComponent {...this.props} />
      : error
        ? <div>Oh noes!</div>
        : <div>Loading...</div>
  }
}

export default Load
