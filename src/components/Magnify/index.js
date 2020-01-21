import React, { Component } from 'react';

import { ImageContainer, Image, AbsoluteContainerImg, AbsoluteImg } from './styles';

import throttle from '../../helpers/throttle'
import debounce from '../../helpers/debounce'

class Magnify extends Component {
  constructor(props) {
    super(props)
    this.img = null;
    this.container = null;
    this.state = {
      x: '0px',
      y: '0px',
      showZoom: false
    };
  }

  handleMove = throttle((e) => {
    if(!this.state.showZoom) return

    const { target } = e;

    let { 
      offsetLeft: left,
      offsetTop: top
    } = this.container

    const relX = (e.clientX - left) / target.clientWidth;
    const relY = (e.clientY - top) / target.clientHeight;

    this.setState({
      x: ((-relX) * Math.abs(this.img.getBoundingClientRect().width-target.clientWidth)) + 'px',
      y: ((-relY)* Math.abs(this.img.getBoundingClientRect().height-target.clientHeight)) + 'px'
    })
  }, 30)

  handleTouchMove = throttle((e) => {
    if(e.touches.length === 1) {
      e.preventDefault()
      this.handleMove({
        target: e.target,
        clientX: e.touches[0].clientX,
        clientY: e.touches[0].clientY
      })
    }
  }, 30)

  render() {
    return (
      <ImageContainer
        actualCursor={!!this.state.showZoom ? 'zoom-out' : 'zoom-in'}
        onMouseMove={this.handleMove}
        onTouchMove={this.handleTouchMove}
        ref={container => this.container = container}
      >
        <Image
          {...this.props}
          onClick={() => this.setState({ showZoom: !this.state.showZoom })}
        />
        {
          this.state.showZoom && (
            <AbsoluteContainerImg>
              <AbsoluteImg
                alt='image'
                src={this.props.src}
                ref={(ref) => this.img = ref}
                transform={
                  `translate(${this.state.x}, ${this.state.y})`
                }
              />
            </AbsoluteContainerImg>
          )
        }
      </ImageContainer>
    );
  }
}

export default Magnify
