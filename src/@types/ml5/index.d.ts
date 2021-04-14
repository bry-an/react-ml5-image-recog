declare module "ml5" {
    export function imageClassifier(
      classifier: string,
      modelLoaded: Function
    ): {classify: Function};
  }