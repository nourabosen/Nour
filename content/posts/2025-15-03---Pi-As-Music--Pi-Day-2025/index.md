---
  title: "Pi Day Symphony: A Composition from the Digits of Pi"
  date: "2025-03-14T11:00:37.121Z"
  template: "post"
  draft: false
  slug: "/posts/pi-day-symphony-a-composition-from-the-digits-of-pi"
  category: "Mathematics"
  tags:
    - "Mathematics"
    - "Pi"
  description: "A Sonic Pi composition that transforms the digits of pi into melody, rhythm, and harmony, creating a dynamic soundscape"
  thumbnail: "./media/Designer_1741991578636_0.jpeg"
---
![Pi as Music Visual](/media/Designer_1741991578636_0.jpeg)

There’s a quiet magic in the way mathematics whispers through the world—sometimes in spirals, sometimes in stars… and sometimes, in sound.

This Pi Day, I didn’t bake a pie.

I composed one.

Using nothing but the first 1,000 digits of π — that endless, irrational, beautifully unpredictable number — I turned math into melody. The result? A living, breathing piece of music, born from code, shaped by numbers, and meant to be *felt*.

You can listen here:  
🎧 [Listen to “Pi as Music” on X (Twitter)](https://x.com/NourAbosen/status/1900670730791952420)

---

## Why Pi? Why Music?

Math and music have danced together since Pythagoras plucked strings and noticed harmonies in ratios. Euler’s formula sings in waves. Fibonacci spirals echo in sonatas.

But pi?  
Pi is different.

It doesn’t repeat. It doesn’t settle. It refuses to be tamed.

And yet… it’s everywhere.

In circles. In waves. In the rhythm of your heartbeat.

So I wondered: *What if we let pi speak—not as a decimal, but as a song?*

---

## Translating Infinity Into Sound

I used **Sonic Pi** — a beautiful, code-based music tool that turns programming into poetry — to map each digit of π to musical elements. Not arbitrarily. Not randomly. With intention.

Here’s how the numbers became notes:

### 🎼 Melody  
Each digit (0–9) mapped to a note within a changing scale — mostly C major, but shifting subtly to avoid repetition.  
> `0 = C`, `1 = D`, `2 = E`, ..., `9 = B`  

The melody doesn’t loop. It never repeats. Just like pi itself.

### ⏱️ Rhythm  
Digits controlled note lengths:  
> `0 → 0.25s`, `1 → 0.5s`, `2 → 0.75s`, up to `9 → 2s`

Longer digits = longer, lingering tones. Short ones = staccato pulses. The rhythm breathes with pi’s chaos.

### 🎹 Harmony  
Every three digits were averaged to pick a chord:  
> `[3, 1, 4] → average = 2.67 → mapped to C major`  
> `[5, 9, 2] → average = 5.33 → mapped to F minor`

Only major and minor chords were used — clean, emotionally resonant. No dissonance for dissonance’s sake. Just harmony born from structure.

### 🎛️ Timbre & Texture  
Different instruments brought out different layers:  
- **Piano** carried the melody — clear, intimate.  
- **Ambient pads** swelled with harmonic averages — like mist over water.  
- **Deep bass synth** pulsed every fourth digit — grounding the piece in a steady, hypnotic groove.

### 🔊 Dynamics  
Volume followed the digit directly:  
> `0 = softest (pianissimo)`  
> `9 = loudest (fortissimo)`

A high digit isn’t just a note — it’s a sigh. A cry. A whisper.

---

## The Code Behind the Symphony

Four synchronized threads ran in Sonic Pi:

```ruby
live_loop :melody do
  pi_digits.each_with_index do |digit, i|
    play scale(:c4, :major)[digit], release: 0.3, pan: rand(-0.5..0.5)
    sleep get_duration(digit) # Maps digit to time value
  end
end

live_loop :bass do
  pi_digits.each_slice(4) do |group|
    note = scale(:c3, :pentatonic)[group[0]]
    play note, attack: 0.1, release: 1.5, amp: 0.8
    sleep 1
  end
end

live_loop :harmony do
  pi_digits.each_slice(3) do |triplet|
    avg = (triplet.sum.to_f / 3).round
    chord = avg.even? ? :c_major : :f_minor
    play_chord chord, release: 4, amp: 0.3
    sleep 4
  end
end

live_loop :percussion do
  digit = pi_digits.tick
  case digit
  when 0..1 then sample :drum_heavy_kick
  when 2..3 then sample :drum_snare_hard
  when 4..5 then sample :drum_cymbal_closed
  end
  sleep 0.25
end
