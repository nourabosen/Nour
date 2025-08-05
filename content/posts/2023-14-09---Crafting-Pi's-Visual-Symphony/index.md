---
title: "Crafting Pi's Visual Symphony: My Exploration of Mathematical Artistry"
date: "2023-09-14T11:00:37.121Z"
template: "post"
draft: false
slug: "/posts/crafting-pis-visual-symphony"
category: "Mathematics"
tags:
  - "Mathematics"
  - "Pi"
  - "Beauty"
  - "Python"
description: "Discovering the beauty of mathematics and artistic expression in my attempt to create Pi's Visual Symphony"
socialImage: "./media/PiVisualSymphony.png"
---

Greetings, fellow math enthusiasts! Today, I'm excited to share a fun project where I combined my love for math and the mysterious number pi (π). Even though Pi Day is celebrated on March 14th, I couldn’t wait to showcase this project. I created a captivating visualization of the first 10,000 digits of pi—one that’s both visually stunning and intellectually engaging.

![Pi's Visual Symphony](/media/PiVisualSymphony.png)

Before diving into the project details, let’s briefly reflect on the nature of pi itself. Denoted by the Greek letter π, it represents the ratio of a circle’s circumference to its diameter and is approximately equal to 3.14. What makes pi extraordinary is its infinite, non-repeating decimal expansion. It defies simple expression as a fraction, and its digits continue indefinitely without forming a predictable pattern. Mathematicians have computed trillions of digits of pi, continuing the quest for deeper mathematical insights.

Now, let’s shift our gaze to **Pi Day**—an annual celebration held on March 14th (3/14 in month/day format). This date pays homage to the transcendental constant and serves as a rallying point for math lovers, educators, and students around the world. On Pi Day, we celebrate the elegance of pi through intriguing facts, mathematical curiosities, and—of course—a slice of pie, honoring the delightful wordplay between “pi” and “pie.”

## The Project: Visualizing Pi
The goal of this project was to capture the mathematical beauty of pi in a visually compelling way. I wrote a Python script to read the first 10,000 digits of pi from a file and generate a mesmerizing display of circles. Each circle’s size and color are based on its corresponding digit in the sequence.

### The Code
```python
import matplotlib.pyplot as plt

# Load the first 10,000 digits of pi from a file
with open('pi_digits.txt', 'r') as f:
    pi_digits = f.read().strip()[:10000]

# Initialize lists for positions, sizes, and colors
x, y, size, color = [], [], [], []

# Set up the plot
fig, ax = plt.subplots(figsize=(12, 12))

# Loop through each digit and generate visual properties
for i, digit in enumerate(pi_digits):
    if i == 0:
        x.append(0)
        y.append(0)
        size.append(50)
        color.append(int(digit) / 9)
    else:
        if digit != pi_digits[i - 1]:
            size[-1] = 50 + 5 * int(digit)
        x.append(i % 100)
        y.append(i // 100)
        size.append(50)
        color.append(int(digit) / 9)

# Plot the visualization
ax.scatter(x, y, s=size, c=color, cmap='gnuplot')
ax.axis('off')
ax.set_aspect('equal')
plt.show()
````

## What This Visualization Conveys
* **Circle Sizes**: Each circle’s size reflects the corresponding digit. If a digit is different from the previous one, the previous circle increases in size, creating a dynamic “growing” effect.
* **Circle Colors**: The color is determined by the digit’s value, mapped through a color map. This adds vibrancy and depth to the visual representation.
* **Positioning**: The circles are arranged in a grid-like structure. Moving left to right follows the digit sequence, while moving top to bottom advances the rows.

## A Symphony of Math and Art
This visualization is more than just a display of digits—it’s a fusion of math, programming, and visual art. It highlights how abstract numerical data can be transformed into expressive and aesthetic forms. Pi, with its infinite and unpredictable expansion, remains a source of wonder and exploration for mathematicians and enthusiasts alike.
Whether you're a math aficionado or a curious mind, I invite you to explore pi’s mysteries and perhaps create your own mathematical art. In the world of mathematics, there are no limits to what you can discover—or create.
