# Design Guidelines

This document aims to specify and define the rules and patterns that should be follow when implementing and developing new features and components for TOMI.

>This is a summary. For a more extensive version, components and UI Design, visit the publically available **[PenPot file](https://github.com/GarretTomlin/Budgeting-web-app-monorepo/blob/main/docs/Style_Guide.svg)**.

## Table of contents
- [Design Guidelines](#design-guidelines)
  - [Table of contents](#table-of-contents)
  - [Color scheme](#color-scheme)
      - [Gray shades](#gray-shades)
  - [Typography](#typography)
      - [Web Embed](#web-embed)
    - [Desktop](#desktop)


## Color scheme

- **Accent**: `#26baee`
- **Pure White**: `#FFFFFF`

#### Gray shades
- ***Bali Hai**: `#829499`
- **Full Grey**: `#9ba9ad`


## Typography

The font chosen for this project is `Inter`.

Inter is a free font available on Google Fonts. Clean and bold headings, readable paragraph text and an overall versatile font.

We'll be using two of its styles:
- Inter Bold (`700`)
- Inter Medium (`500`)

#### Web Embed

HTML's `link` method

```html
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;700&display=swap" rel="stylesheet">
```

CSS/SCSS `@import`

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;700&display=swap');
```

CSS Rules

```scss
font-family: 'Inter', sans-serif;

// Regular
font-weight: 500;

// Bold
font-weight: 700;
```


Tag | Font Size | Line Height | Weight
--- | --------- | ----------- | ------
**H1** | 56px | 90 | 700
**H2** | 40px | 64 | 700
**H3** | 28px | 45 | 700
**H4** | 20px | 32 | 700
**P** | 14px | 22 | 500 - 700
**P (small)** | 12px | 22 | 500 - 700

