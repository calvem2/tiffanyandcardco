import React, { Component } from 'react';
import CategorySelector from "./CategorySelector";
import style from '../styles/Gallery.module.css';
import * as _ from "underscore";

// Displays grid of images
class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: this.props.initialCategory,   // category of images to display in gallery
        };
    }

    /**
     * Update the selected category value
     */
    updateCategory = (newCategory) => {
        this.setState({
            category: newCategory
        });
    };

    /**
     * Produces array img tags to be rendered on the page
     */
    makeGalleryImgs = () => {
        let imageData = this.props.imageData;
        let category = this.state.category;
        // filter images
        if (category !== "all" && category !== "home_page") {
            imageData = this.props.imageData.filter(function(img) {
                return img.category === category;
            });
        }

        // create tags for individual elements
        let imgs = [];
        for (let img of imageData) {
            let descriptionText = img.materials !== undefined ? img.materials.split(";") : [];

            // add bullet point for each element in description if it's not empty
            let description = [];
            for (let i = 0; i < descriptionText.length; i++) {
                description.push(<li>{descriptionText[i]}</li>)
            }

            imgs.push(
                <div className={style['img-container']}>
                    <img
                        className={style['gallery-img']}
                        src={img.url}
                    />
                    {this.state.category !== "home_page" &&
                        <div
                            className={description.length !== 0 ?
                                style.description :
                                style['empty-description']}><ul>{description}</ul>
                        </div>
                    }
                </div>
            );
        }
        return imgs;
    };

    render() {
        console.log(this.props);
        return (
            <div>
                <div className={style.gallery}>
                    <CategorySelector 
                        selected={this.state.category} 
                        onChange={this.updateCategory}
                    />
                    <div id="g-gallery" className={style['gallery-container']}>
                        {this.makeGalleryImgs()}
                    </div>
                </div>
            </div>
                
        );
    }
}

export default Gallery;