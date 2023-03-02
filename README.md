# @actinc/docusaurus-plugin-panzoom

This plugin adds the ability to pan and zoom images and SVG images inside of a docusaurus website.  This is useful for embedding diagrams or
complex mermaid.js renders around models and object schemas.  The normal theme doesn't scale tremendously well in a browser so some augmentation
for complex diagrams is necessary.

This implements the excellent [@panzoom/panzoom](https://www.npmjs.com/package/@panzoom/panzoom) plugin 

## Installation

```bash
npm install docusaurus-plugin-panzoom
```

```javascript
// In docusaurus.config.js
// ...
plugins: ['docusaurus-plugin-panzoom'],
// or
plugins: [['docusaurus-plugin-panzoom', {} /* options */]],
```

## Configuration
