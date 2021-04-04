import React, { Component } from 'react';
import CategorySelector from "./CategorySelector";
import Footer from "./Footer"
import style from '../styles/Gallery.module.css';
import * as _ from "underscore";

// Displays grid of images
class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: this.props.initialCategory,   // category of images to display in gallery
            // imageData: []                           // metadata for images to display
        };
    }

    // componentDidMount() {
    //     // clear loader
    //     setTimeout(function() {
    //         document.getElementById("loader-container").style.display = "none";
    //         document.getElementById("g-gallery").style.display = "flex";
    //     }, 500);
    //
    //     // set fetch options
    //     let options = {
    //         sheetId: '1S_GLsf_4g2aDGEnJPsDvkvokQ0V8sIvLN5_py09fIxY',
    //         sheetNumber: 1,
    //         returnAllResults: false,
    //     };
    //
    //     // fetch data
    //     GSheetReader(options, results => {
    //         this.setState({
    //             imageData: results
    //         });
    //     }).catch(err => {
    //             console.log(err);
    //     });
    // }

    // componentDidUpdate() {
    //     // clear loader
    //     setTimeout(function() {
    //         document.getElementById("loader-container").style.display = "none";
    //         document.getElementById("g-gallery").style.display = "flex";
    //     }, 500);
    // }


    /**
     * Update the selected category value
     */
    updateCategory = (newCategory) => {
        // display loader
        // document.getElementById("loader-container").style.display = "block";
        // document.getElementById("g-gallery").style.display = "none";
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
            // console.log(img);
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
                <Footer/>
            </div>
                
        );
    }
}

export default Gallery;