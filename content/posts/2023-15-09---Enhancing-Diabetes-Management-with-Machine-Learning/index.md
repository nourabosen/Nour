---
title: "Enhancing Diabetes Management with Machine Learning: The Diabetes Tracker Project"
date: "2023-09-15T18:00:37.121Z"
template: "post"
draft: false
slug: "/posts/enhancing-diabetes-management-with-machine-learning"
category: "Machine Learning"
tags:
  - "Linear Regression"
  - "Random Forest Regressor"
  - Gradient Boosting Regressor"
  - Elastic Net Regression"
  - Support Vector Regression"
description: "This article provides insights into the project's data collection, preprocessing, feature selection, and the performance of various machine learning algorithms. Explore the results and find out which model and training approach emerged as the most effective, potentially offering improved diabetes management tools."
socialImage: "./media/Diabetes.jpg"
---

![Tracking Diabetes](/media/Diabetes.jpg)

## Introduction
The Diabetes Tracker project leverages Machine Learning (ML) technology to address the challenge faced by individuals with diabetes in tracking their blood sugar concentrations over extended periods. In this article, we will discuss the methods, experiments, and results of the project, which aims to provide an effective solution for diabetes management.

## Methods

### Data Collection
- The project utilized data from [Jonathan Lifferth's "nudge_in_streamlit" GitHub project](https://github.com/jlifferth/nudge_in_streamlit).
- The dataset offers continuous blood glucose measurements over five days, with readings every five minutes, including timestamps.

### Data Preprocessing
- The dataset underwent preprocessing to clean and prepare it for model training:
   - Unnecessary columns, such as "Unnamed: 0," were removed.
   - Time windows with a 30-minute interval were defined, and frame shifts were calculated.
   - New columns representing glucose measurements at different time intervals were created.
   - Rows with missing values were dropped for data consistency.

### Feature Selection
- Relevant characteristics were extracted from the dataset by specifying time frames and shifts.
- Additional features like "Glucose Minus 30," "Glucose Minus 60," and "Glucose Minus 90" were generated to capture temporal dynamics in glucose levels.

### Machine Learning Algorithms
- The project employed five ML algorithms:
   - Linear Regression (lin_model)
   - Random Forest Regressor (rand_model)
   - Gradient Boosting Regressor (gb_model)
   - Elastic Net Regression (en_model)
   - Support Vector Regression (svr_model)
- Each algorithm was configured with specific parameters for optimal performance.

## Results

The table below summarizes the mean squared errors for different combinations of models and training approaches:

| Model                   | MSE - First 70% training | MSE - Random 70% training | MSE - Drop 7th reading training |
|-------------------------|--------------------------|-----------------------------|--------------------------------|
| lin_model               | 21.73                    | 21.35                       | 21.46                          |
| rand_model              | 40.24                    | 17.15                       | 39.93                          |
| gb_model                | 40.26                    | 19.83                       | 39.96                          |
| en_model                | 21.73                    | 21.35                       | 20.36                          |
| svr_model               | 90.61                    | 73.42                       | 90.64                          |
| (rand + gb)_model       | 27.87                    | 18.09                       | 16.76                          |
| ...                     | ...                      | ...                         | ...                            |

The best-performing model was (rand + gb)_model when trained using the "Drop 7th reading" approach, achieving an MSE of 16.76.

## Conclusion

The Diabetes Tracker project demonstrates the potential of Machine Learning in improving diabetes management. By carefully selecting and preprocessing data and employing ensemble learning techniques, the project succeeded in creating models that can predict blood glucose levels more accurately. This advancement has the potential to enhance the quality of life for individuals living with diabetes by providing them with better tools to manage their condition.

[Link to the Diabetes Tracker Project on GitHub](https://github.com/jlifferth/nudge_in_streamlit)

## References

- jlifferth. (n.d.). GitHub - jlifferth/nudge_in_streamlit: Machine learning web app to predict user glucose levels. GitHub. [https://github.com/jlifferth/nudge_in_streamlit](https://github.com/jlifferth/nudge_in_streamlit)
