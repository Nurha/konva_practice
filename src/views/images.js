import React, { Component } from 'react';
// import Konva from 'konva';
import { Stage, Layer, Image } from 'react-konva';

class YodaImage extends Component {

    state = {
        image : null
    }

    componentDidMount() {
        const image = new window.Image();
        image.src = 'http://konvajs.github.io/assets/yoda.jpg';
        image.onload = () => {
            this.setState({
                image: image
            })
        }
    }

    render() {
        return <Image image={this.state.image} />;
    }
}

export default class Images extends Component {
    render() {
        return(
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    <YodaImage />
                </Layer>
            </Stage>
        );
    }
}