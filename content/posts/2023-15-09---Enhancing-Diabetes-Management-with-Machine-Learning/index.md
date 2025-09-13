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

## A Personal Journey Into the Numbers Behind Blood Sugar

Let’s be honest—managing diabetes isn’t just about checking glucose levels or counting carbs. It’s a quiet, daily dance with your body. One minute you’re fine; the next, your sugar spikes—or crashes—without warning.

I’ve seen how overwhelming this can be. That’s why I built the **Diabetes Tracker Project**: not just as a technical exercise, but as an attempt to bring some calm, clarity, and predictability into a world full of uncertainty.

This isn’t science fiction. It’s real data—over 14,000 blood glucose readings collected every five minutes across five days—and it taught me something powerful: *machine learning doesn’t replace human intuition… it amplifies it.*

---

## How We Got Here: From Raw Data to Insight

The project began with a public dataset from [Jonathan Lifferth’s GitHub repository](https://github.com/jlifferth/nudge_in_streamlit), which offered continuous glucose monitoring (CGM) data—like what you’d get from a modern wearable sensor. 

But raw data? Messy. Overwhelming. Full of timestamps, extra columns, and gaps.

So we cleaned it up:

- Removed useless columns like `"Unnamed: 0"` (yes, they exist more than you’d think).
- Grouped readings into 30-minute windows to reflect real-world decision-making.
- Created new features: “Glucose Minus 30,” “Glucose Minus 60,” even “Glucose Minus 90”—essentially asking the model, *“What did your body do in the last hour?”*
- Dropped rows with missing values. No guesswork allowed.

We weren’t trying to overcomplicate things. We wanted to listen—to let the data speak in its own rhythm.

---

## The Models We Tested: Who Played Well Together?

We trained five classic regression models, each with its own personality:

| Model | Style |
|-------|-------|
| Linear Regression | The straightforward one—assumes everything follows a straight line. |
| Elastic Net | A thoughtful hybrid—balances simplicity and strength. |
| Random Forest | The team player—makes decisions by listening to many voices. |
| Gradient Boosting | The perfectionist—learns slowly, correcting mistakes step by step. |
| Support Vector Regression | The quiet genius—powerful, but sometimes too slow for real life. |

And then came the twist: instead of training all models the same way, we tested three different approaches:

1. **First 70% training** — Simple chronological split.
2. **Random 70% training** — Shuffled randomly (common in ML, but unrealistic for time-series).
3. **Drop 7th reading training** — We skipped every 7th reading to preserve temporal structure while still having enough data. This felt closest to real-world usage.

Why? Because diabetes doesn’t care about random sampling. Your sugar doesn’t jump around randomly—it trends, lags, reacts. So our evaluation had to respect that.

---

## The Surprising Winner: Teamwork Makes the Dream Work

Here’s what we found—the most telling numbers from our tests:

| Model                   | MSE - First 70% | MSE - Random 70% | MSE - Drop 7th Reading |
|-------------------------|------------------|-------------------|------------------------|
| lin_model               | 21.73            | 21.35             | 21.46                  |
| en_model                | 21.73            | 21.35             | 20.36                  |
| rand_model              | 40.24            | 17.15             | 39.93                  |
| gb_model                | 40.26            | 19.83             | 39.96                  |
| svr_model               | 90.61            | 73.42             | 90.64                  |
| **(rand + gb)_model**   | **27.87**        | **18.09**         | **16.76** ← Best!      |

👉 The star performer? **A combination of Random Forest and Gradient Boosting**, trained using the *“Drop 7th reading”* method.

With an MSE of just **16.76**, this ensemble didn’t just outperform single models—it *shattered* them in realistic conditions.

What does that mean?

It means we could predict your glucose level 30 minutes ahead—with meaningful accuracy—not by guessing, but by learning from patterns your body has shown before.

---

## Why This Matters Beyond the Numbers

Let me say this plainly:  
**This isn’t about building a better algorithm. It’s about building a better life.**

For someone living with diabetes, knowing their sugar might drop after lunch—or rise after stress—isn’t just helpful. It’s life-changing.

Imagine:
- Getting a gentle alert before a nighttime crash.
- Adjusting insulin doses based on trend, not just snapshots.
- Feeling less anxious because your phone isn’t just showing a number—it’s offering insight.

That’s the promise here.

Machine learning doesn’t need to be complex to be powerful. Sometimes, it just needs to be thoughtful.

---

## What’s Next?

You can explore the full code, datasets, and notebooks on GitHub:  
🔗 [Diabetes Tracker Project on GitHub](https://github.com/nourabosen/DiabetesTracker)

I’m already thinking about next steps:
- Adding meal logs or activity data.
- Building a mobile interface with simple visual alerts.
- Testing with real users—not just datasets.

Because technology should serve people. Not the other way around.

---

## Final Thought

Mathematics, code, and data aren’t cold tools.  
They’re bridges—between uncertainty and peace, between chaos and control.

If this project helps even one person feel a little more confident managing their health… then it was worth every late night spent debugging and tuning.

Thank you for reading.  
And if you’re living with diabetes—or caring for someone who is—you’re already doing something extraordinary.

Keep going.  
You’re not alone.

💛
