import React, { FunctionComponent } from "react"
import {imageClassifier} from "ml5"

interface IProps {
    image: HTMLElement,
}
const ImageRecognition: FunctionComponent<IProps> = (props) => {
    const image = {props}
  const classifier = imageClassifier('MobileNet', modelLoaded);

// When the model is loaded
function modelLoaded() {
  console.log('Model Loaded!');
}

// Make a prediction with a selected image
classifier.classify(image, (err: Error, results: []) => {
  console.log(results);
});
return <div></div>
}
export default ImageRecognition