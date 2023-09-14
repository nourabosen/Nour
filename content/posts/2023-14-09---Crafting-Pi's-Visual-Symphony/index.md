---
title: "Crafting Pi's Visual Symphony: My Exploration of Mathematical Artistry"
date: "2023-09-14T11:00:37.121Z"
template: "post"
draft: false
slug: "/posts/crafting-pi's-visual-symphony"
category: "Mathematics"
tags:
  - "Mathematics"
  - "Pi"
  - "Beauty"
  - "Python"
description: "Discovering the beauty of mathematics and artistic expression in my attempt to create Pi's Visual Symphony"
socialImage: "./media/PiVisualSymphony.png"
---

Greetings, fellow math enthusiasts! Today, I'm excited to share a fun project where I combined my love for math and the mysterious number pi (π). Even though Pi Day happened on March 14th, I couldn't wait to show you my project. I created a cool visualization of the first 10,000 digits of pi in a way that looks amazing and is interesting to think about.

![Pi's Visual Symphony](/media/PiVisualSymphony.png)

Before we plunge into the details of this intriguing project, let's delve briefly into the profound nature of pi itself. Denoted by the Greek letter π, it represents the ratio of a circle's circumference to its diameter and is approximately equal to 3.14. Yet, what makes pi truly extraordinary is its infinite, non-repeating decimal expansion. It defies simple expression as a fraction, and its digits continue indefinitely without forming a predictable pattern. To date, mathematicians have calculated pi's decimal expansion to trillions of digits, fueling an ongoing quest for deeper understanding.<br/><br/>

Now, let's shift our gaze to Pi Day, the annual celebration that transpires on March 14th (3/14 in the month/day date format) This date pays homage to the transcendental mathematical constant and serves as a rallying point for math enthusiasts, students, and educators worldwide. On Pi Day, we revel in the elegance and significance of pi, engaging in a delightful array of activities and discussions centered around this captivating number. It's a day when intriguing facts about pi are shared, mathematical curiosities are explored, and, inevitably, a slice of pie is savored—an homage to the delightful homophonic connection between "pi" and "pie."<br/><br/>
<br/>
The goal of this project was to take the mathematical beauty of pi and transform it into a captivating visual representation. To accomplish this, I wrote a Python script that reads the first 10,000 digits of pi from a file and uses that data to create a mesmerizing display of circles. Each circle's size and color are determined by the corresponding digit in the pi sequence.
The code snippet:
``` Python
import matplotlib.pyplot as plt

# Load the first 10000 digits of pi from a file
with open('pi_digits.txt', 'r') as f:
    pi_digits = f.read().strip()[:10000]

# Initialize the x, y, size, and color lists
x = []
y = []
size = []
color = []

# Set the size of the figure
fig, ax = plt.subplots(figsize=(12, 12))

# Loop through each digit of pi and create a circle
for i, digit in enumerate(pi_digits):
    if i == 0:
        # For the first digit, create a circle with radius 50 at (0, 0)
        x.append(0)
        y.append(0)
        size.append(50)
        color.append(int(digit) / 9)
    else:
        # If this is a different digit than the previous one, make the previous circle bigger
        if digit != pi_digits[i - 1]:
            size[-1] = 50 + 5 * int(digit)
        # Add a new circle with radius 50 at the next position
        x.append(i % 100)
        y.append(i // 100)
        size.append(50)
        color.append(int(digit) / 9)

# Create a scatter plot of the circles
ax.scatter(x, y, s=size, c=color, cmap='gnuplot')

# Remove the axes and set the aspect ratio to equal
ax.axis('off')
ax.set_aspect('equal')

# Show the plot
plt.show()
```
<br/><br/>
What this visualization conveys:
<br/><br/>
**Circle Sizes:** The size of each circle reflects the value of the digit from pi. If a digit is the same as the previous one, the circle's size increases by a factor of 5. This creates the illusion of growing circles when the digits change.
<br/><br/>
**Circle Colors:** The color of each circle is based on the digit's value, with a color map used to map the digits to a range of colors. This adds a vibrant and visually appealing element to the display.
<br/><br/>
**Positioning:** The circles are positioned in a grid-like fashion, with each circle representing a digit from the pi sequence. As we move from left to right, we progress through the digits, and as we move from top to bottom, we advance to the next row of digits.

<br/><br/>
<br/><br/>
This visualization project is not just about displaying the digits of pi; it's about transforming abstract mathematical concepts into a form of artistic expression. It's a testament to how mathematics and programming can intersect with creativity and aesthetics. Pi, with its infinite and non-repeating decimal expansion, continues to be a source of wonder and exploration for mathematicians and enthusiasts alike. It's a constant reminder of the depth and complexity that mathematics offers. This visualization project is a reminder that math is not just a subject to be studied but also a canvas on which we can create beautiful works of art.
<br/><br/>
So, whether you're a math aficionado or simply someone with a curious mind, I invite you to join the celebration of pi, explore its mysteries, and perhaps embark on your own mathematical and artistic journeys. After all, in the world of mathematics, there are no limits to what you can discover and create.
