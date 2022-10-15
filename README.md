## Stacked Table

Playing with TypeScript generics and stacked tables for mobile uses.

**Note: Prototype that I decided to push to Github for later reference. Don't expect support**

### Features

- Data and presentation configuration are separated. Ideal for throwing API rows into.
- Collapsable fields with help from Tailwind
  - Possible to define where it should collapse to, or omit for hiding

### Tasks

- [x] Accepts any data, infers types or accepts a generic
- [x] `renderField` correctly infers correct types for value, field-config and row
- [x] Geared towards data-driven tables, but also supports extraFields.
- [ ] Uses default key ordering, but field configuration also accepts "weight"
