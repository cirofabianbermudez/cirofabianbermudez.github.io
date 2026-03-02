---
icon: fontawesome/solid/microchip
---

# Tapped Delay Line

A **tapped delay line (TDL)** is a circuit made of a **series of delay elements connected in cascade**,
where you can access (or _tap_) the signal at intermediate points along the chain.

Each delay cell introduces a small propagation delay (for example, 20–50 ps in ASIC).
Each tap gives you the signal delayed by a multiple of that unit delay.

If each delay cell adds $\Delta t$:

- Tap 0  $\to 0 \Delta t$:
- Tap 1  $\to 1 \Delta t$:
- Tap N  $\to N \Delta t$:
