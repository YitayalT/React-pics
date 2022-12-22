import React, { Component, createRef } from 'react'

class ImageCard extends Component {
     
    constructor(props) {
        super(props);
        this.imageRef = createRef();
    }


    componentDidMount() {
        console.log(this.imageRef);
    }
     render() {
         const { description, urls } = this.props.image;
    return (
            <img ref={this.imageRef} src={urls.regular} alt={description} />  
    )
  }
}

export default ImageCard;