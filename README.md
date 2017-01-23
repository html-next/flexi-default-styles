# Flexi-default-styles

[![npm version](https://badge.fury.io/js/flexi-default-styles.svg)](http://badge.fury.io/js/flexi-default-styles)
[![Ember Observer Score](http://emberobserver.com/badges/flexi-default-styles.svg)](http://emberobserver.com/addons/flexi-default-styles)
[![Build Status](https://travis-ci.org/html-next/flexi-default-styles.svg)](https://travis-ci.org/html-next/flexi-default-styles)
[![Code Climate](https://codeclimate.com/github/html-next/flexi-default-styles/badges/gpa.svg)](https://codeclimate.com/github/html-next/flexi-default-styles)

Default styles to match the attributes converted by [flexi-dsl](https://github.com/html-next/flexi-dsl), as well as styles for the [flexi-layouts](https://github.com/html-next/flexi-layouts) components.


### Installation

It is recommended that you manage your flexi addons through [the main flexi addon](https://github.com/html-next/flexi):

```cli
ember install flexi
```

This will provide a prompt to install only the addons you want. Flexi will also maintain
compatibility between addons.


### Config

The flexi-config dependency's default blueprint will install `config/flexi.js` with the [default settings](https://github.com/html-next/flexi-config/blob/master/blueprints/flexi-config/files/config/flexi.js).

**Settings**

```js
{
  // the number of columns for the grid
  columns: 12,

  // optional, used for column classes: `${colPrefix}-${breakpointPrefix}-${columnNumber}`
  columnPrefix: 'col',

  // if false, @media css is not included
  includeMediaCSS: true,

  // if false, default element styles are not included
  includeElementCSS: true,

  // if true, will convert layout attributes on non-layout elements to classes as well
  transformAllElementLayoutAttributes: false,

  // grid and layout element gutters
  gutterPadding: '.5rem',

  // if false, no styles are included (trumps `includeMediaCSS` and `includeElementCSS`)
  includeCSS: true,

  // an array of breakpoints to use in your app (see below)
  breakpoints: []
}
```

**config.breakpoints**

Your config must have a `breakpoints` array.  A breakpoint has the structure:

```js
  { name: 'mobile', prefix: 'xs', begin: 0 }
```

`name` will be used for blueprint generation of layout names, and is made available as an `is<Name>`
boolean on the `device/layout` service.

`prefix` is a shorthand for the breakpoint name used for column attributes, classes, and responsive utilities.
With a `prefix` of `xs`.

`begin` is the pixel value at which the breakpoint becomes valid if equal to or larger than.

**Using a breakpoint's prefix**

`.col-xs-1` ... `.col-xs-n` will be valid class names (if `columnPrefix` is set to `col`).
```html
<box xs="n visible vertical">
```

Is valid shorthand for
```html
<box class="col-xs-n visible-xs vertical-xs">
```

The following responsive utilities are made available for each prefix:

```css
.hidden-xs,
.visible-xs,
.container-xs,
.vertical-xs,
.horizontal-xs,
.wrap-xs,
.nowrap-xs {}
```

[Read More](https://html-next.github.io/flexi/#/docs/settings)


## Support, Questions, Collaboration

Join the [flexi](https://embercommunity.slack.com/messages/e-flexi/) channel on Slack.

[![Slack Status](https://ember-community-slackin.herokuapp.com/badge.svg)](https://ember-community-slackin.herokuapp.com/)


## Contributing

 - Open an Issue for discussion first if you're unsure a feature/fix is wanted.
 - Use descriptive branch names (e.g. `<type>/<short-description>`)
 - Use [Angular Style Commits](https://github.com/angular/angular.js/blob/v1.4.8/CONTRIBUTING.md#commit)

### Commmits

Angular Style commit messages have the full form:

 ```cli
 <type>(<scope>): <title>

 <body>

 <footer>
 ```

 But the abbreviated form (below) is acceptable and often preferred.

 ```cli
 <type>(<scope>): <title>
 ```

 Examples:

 - chore(deps): bump deps in package.json and bower.json
 - docs(component): document the `fast-action` component

## Thanks

A special thanks goes out to [@ebryn](https://github.com/ebryn) for the
inspiration to pursue a solution for explicit layouts, and [IsleofCode](https://isleofcode.com)
for providing the time to built it.
