---
hide:
#   - navigation
#   - toc
---

# Digital implementation flows, from RTL to GDS

In this sections you can access Digital-on-Top implementation flows (RTL to GDS).
The design flows are developed to be a good starting point for projects that 
aim to perform complex Digital-on-Top design implementation in the High 
Energy Physics environment, and are constantly mantained by the CERN ASIC
Support team and the designers community.

The design flows are separated by target technology allowing all required 
customization, while mantaining the shared library of procedures/flows steps 
in common.

For TSMC 28nm and TPSCO 65nm only a Cadence Flowkit based flow is available 
at the moment. For TSMC 65nm and 130nm instead both a Cadence Flowkit based 
flow and a standard TCL (Stylus UI) based flow are available.


## Featured of the design flows

The design flows are always up-to-date with the latest Europractice EDA tools
release and are based on Cadence EDA tools (Genus, Innovus, Tempus, Voltus,
PVS, Quantus) and Siemens Calibre for DRC and LVS.

The design flows include:

- A set of advanced scripts for synthesis and physical implementation specific for the design nodes and tailored to foundry and tool vendors recommendations
- Support for radiation-tolerant designs techniques and TMR design constraints
- Advanced sign-off procedures, power reduction techniques and multiple power domain support
- Support for all libraries, OCVs and other foundry recommended settings
- Support for mixed-signal OA database sharing
- Easier configuration with YAML files and self-contained flow steps

## Available flows for download

Select your target technology below. The repositories that include technology 
specific information require a valid 3-way NDA for that specific technology.
To request access or to sign the 3-way NDA, please contact [asic.support@cern.ch]().

> [**TSMC 28 nm (Flowkit)**]()

---

> [**TSMC 65 nm (Flowkit)**]()

---

> [**TSMC 65 nm (Stylus UI)**]()

---

> [**TSMC 130 nm (Flowkit)**]()

---

> [**TPSCO 65 nm (Flowkit)**]()

---

> [**GF 130 nm (Stylus UI)**]()
