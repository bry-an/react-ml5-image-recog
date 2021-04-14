import React, { FunctionComponent } from "react"
import {imageClassifier} from "ml5"

interface IProps {
    imageRef: HTMLImageElement | null,
}
const ImageRecognition: FunctionComponent<IProps> = (props) => {
    const imageRef = {props}
  const classifier = imageClassifier('MobileNet', modelLoaded);

// When the model is loaded
function modelLoaded() {
  console.log('Model Loaded!');
}

// Make a prediction with a selected image
classifier.classify(imageRef, (err: Error, results: []) => {
  console.log(results);
});
return (
    <div></div>
)
}
export default ImageRecognition