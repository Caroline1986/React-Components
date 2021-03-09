import React from "react";
import {render} from "@testing-library/react";

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {

    }

    render() {
        const {description, urls} = this.props.image;

        return (
            <div>
                <img ref={this.imageRef}
                     alt={this.props.image.description}
                     src={this.props.image.urls.regular}/>
            </div>
        )
    }
}

export default ImageCard;