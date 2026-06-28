# Periodic Table

## Data

- Using element data stored as objects (data/elements.ts)

```
  {
    atomicNumber: 1,
    symbol: "H",
    name: "Hydrogen",
    atomicMass: 1.008,
    group: 1,
    period: 1,
    block: Block.S,
    category: ElementCategory.Nonmetal,
    electronConfiguration: "1s1",
    location: { row: 1, column: 1 },
    discoveredBy: "Henry Cavendish",
    description: "Hydrogen gas was first produced artificially in the 17th century by the reaction of acids with metals. Henry Cavendish, in 1766–1781, identified hydrogen gas as a distinct substance and discovered its property of producing water when burned: this is the origin of hydrogen's name, which means 'water-former' (from Ancient Greek: ὕδωρ, romanized: húdōr, lit. 'water', and γεννάω, gennáō, 'I bring forth'). Understanding the colors of light absorbed and emitted by hydrogen was a crucial part of the development of quantum mechanics.",
    balmerLines: [656, 486, 434, 410]
  },
```

### Balmer Lines

- Place the wavelength numbers associated with that element and these are passed to the SpectralSeries component and will give an output of the spectrogram with those wavelengths missing
- Used in the Periodic table display when click on each element.
