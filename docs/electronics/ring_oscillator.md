---
icon: fontawesome/solid/microchip
---

# Ring Oscillator

A **ring oscillator** is the simplest oscillator you can build in digital CMOS.

It consists of:

- An **odd number of inverters**
- Connected in a **loop (ring)**

Conceptually:

```plain
ADD DIAGRAM
```

The output of the last inverter feeds back to the first.

Let’s analyze a **3-stage ring oscillator**:

1. Suppose the first node is `0`
2. INV1 → outputs `1`
3. INV2 → outputs `0`
4. INV3 → outputs `1`
5. That `1` feeds back to INV1, which now wants to output `0`

But signals take **finite propagation time** to change.

So the inversion propagates around the loop continuously.

There is **no stable state**.

The loop keeps flipping forever, this means oscillation.

If you use:

- **Even number of inverters** means positive feedback so the system settles to a stable value
- **Odd number** means negative feedback so no stable DC solution therefore oscillation

Let:

- $N$ = number of stages
- $t_{d}$ = number of stages

One transition must propagate through all $N$ stages twice (rising + falling).

So:

$$
T = 2 N t_{d}
$$

$$
f_{\text{osc}} = \frac{ 1 }{ 2 N t_{d} }
$$

**Important**

Frequency depends directly on **gate delay**.

And gate delay depends on:

- Supply voltage (VDD)
- Temperature
- Process corner
- Transistor sizing
- Load capacitance

That’s why ring oscillators are very PVT-sensitive.
