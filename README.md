## Inspiration
We began looking at the global humanitarian crisis. We decided to use the Global Health Observatory Dataset. The dataset contains data on health indicators, diseases, and health systems for countries around the world. We believed we could use the dataset can to develop an AI system to predict global health outcomes.

## What it does
Our model takes the following 13 parameters: age, sex, chest pain level (1-4), resting blood pressure in mm Hg on admission to the hospital, serum cholesterol in mg/dl, indicator to check if fasting blood sugar is > mg/dl (1(yes) or 0(no)), resting ECG result, maximum heart rate achieved, exercise induced angina, st depression induced by exercise relative to rest, slope of the peak exercised st segment (1 - 3), number of major vessels (0 - 3), thal (3, 6, or 7) and then predict if the person has a heart disease (severity ranging from 1 to 4) or not (0).

## How we built it
We standardized and performed PCA on the training data, and then used RBF kernel with Support Vector Machine to classify the presence/absence of heart disease.

0. No heart disease 
1. Level 1 severity 
2. Level 2 severity 
3. Level 3 severity 
4. Level 4 severity

## What's next for Heart Disease Machine Learning
We hope to collect more diverse data and bring up the accuracy of the testing. We also would like to decrease the number of parameters for the user interface while still predicting accurate results.

## Built With
`css` `html5` `javascript` `jquery` `numpy` `python` `scikit-learn`
