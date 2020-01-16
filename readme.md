# Utilitarian

Utilitarian is a CSS utility and component library for small projects written in SCSS. This is still an early stage project, and has many improvements in store.

Forked from a utility library written for [ThankView, LLC.](https://thankview.com). Open sourced with permission.


## Usage

Download `dist/utilitarian.min.css`, include as desired. You may also import `src/utilitarian.scss` into your own build process if you'd like to customize the output. Build variables can be found in `src/_config.scss`.

It is highly recommended to process the library using PurgeCSS to limit the output to just the classes you use for performance reasons. Below is an example of using PurgeCSS with gulp (example is gulp v3 code).

```javascript
const purgecss = require('gulp-purgecss');
gulp.task('purgecss', function () {
    return gulp.src(['path/to/utilitarian.css'])
        .pipe(purgecss({
            content: [
                'path/to/templates.html'
            ]
        }))
        .pipe(gulp.dest('public/css'));
});
```


## Planned Improvements

Below is a running list of improvements I'd like to make (in no particular order). Want to help? Submit a PR!

- [ ] Replace color palette with better defaults [#1](https://github.com/joshvickerson/utilitarian/issues/1)
- [ ] Improve the set of flex and grid utility classes
- [ ] Create a typographic scale that doesn't rely on pixel sizing
- [ ] Validate choice of breakpoint sizes through more comprehensive research
- [ ] Explore source structure improvements to reduce output size (e.g. can the output contain fewer repeat breakpoints?)
- [ ] Create more components that don't require JS to function
- [ ] Documentation improvements (i.e. more than the introductory list here)
    - [ ] More detailed KSS comments
    - [ ] Nicer output from KSS-node and a hosted docs site
- [ ] Ensure component defaults meet WCAG 2.0 AA recommendations
- [ ] Better codify naming conventions for class names for better predictability
- [ ] Publish to npm


## Developing

Use the following steps if you'd like to develop for Utilitarian, or would like to generate the more comprehensive documentation

```
1. Clone the repo
2. npm i
3. npm run docs - generate KSS documentation
4. gulp build - compile SCSS
```


## General Naming Conventions

Class names aim to strike a balance between clarity, predictability and brevity. This is done by usually following a [property]-[value]-[unit] naming scheme, except in cases where including the property doesn't add clarity. Class names also try to avoid un-obvious abbreviations. This is an attempt to make class names predictable, thus making it easier to "memorize" this library. Of course, what is "obvious" is highly subjective, so class names are likely to change based on feedback from usage by others before a real "version 1.0" ships.

Most classes also come in "responsive" flavors, using the format [size prefix]-[property]-[value]-[unit]. Standard breakpoints are written as "mobile first" min-width queries. The size prefixes and their corresponding breakpoints are as follows:

| Size prefix | Breakpoint Size |
|-------------------|-----------------|
| 'sm' | 450px |
| 'md' | 725px |
| 'lg' | 1000px |
| 'xl' | 1441px |

The spacing utilities demonstrate the naming pattern well:

| Class Name       | CSS Values       |
|------------------|------------------|
| .pad-t-0px | padding-top: 0px; |
| .pad-r-0px | padding-right: 0px; |
| .pad-b-0px | padding-bottom: 0px; |
| .pad-l-0px | padding-left: 0px; |
| .pad-t-4px | padding-top: 4px; |
| .pad-r-4px | padding-right: 4px; |
| .pad-b-4px | padding-bottom: 4px; |
| .pad-l-4px | padding-left: 4px; |
| .margin-t-8px | margin-top: 8px; |
| .margin-r-8px | margin-right: 8px; |
| .margin-b-8px | margin-bottom: 8px; |
| .margin-l-8px | margin-left: 8px; |
| ...           | ...              |
| .margin-t-120px | margin-top: 120px; |
| .margin-r-120px | margin-right: 120px; |
| .margin-b-120px | margin-bottom: 120px; |
| .margin-l-120px | margin-top: 120px; |

For both margins and padding, utilities are available size prefixed along an 8px scale, along with 0px and 4px sizes. Top, right, bottom and left directions are abbreviated to just their letters and "padding" is abbreviated to "pad".

The display and position classes are a decent example of cases where the property part of the naming convention is dropped because the brevity was deemed more valuable than the clarity of including the propery name.

| Class Name       | CSS Values       |
|------------------|------------------|
| .block | display: block; |
| .inline | display: inline; |
| .inline-block | display: inline-block; |
| .flex | display: flex; |
| .grid | display: -ms-grid; <br/> display: grid; |
| .none | display: none; |
| .relative | position: relative; |
| .absolute | position: absolute; |
| .fixed | position: fixed; |

Color classes for fonts, backgrounds and borders use the following format:

| Class Name       | CSS Values       |
|------------------|------------------|
| .font-[color-name] | color: $colorName; |
| .bg-[color-name] | background-color: $colorName; |
| .border-color-[color-name] | border-color: $colorName; |

The current color pallette is with names and values are below.

| Color Name       | Value            |
|------------------|------------------|
| $light-accent-gray | #f7f7f7 |
| $accent-gray | #edeff0 |
| $ultra-light-gray | #e0e3e9 |
| $light-gray | #b2b8c6 |
| $medium-gray | #757b88 |
| $charcoal | #5e6065 |
| $soft-black | #38393b |
| $light-blue | #d4e2fe |
| $navy-blue | #0a2463 |
| $french-blue | #276dfa |
| $royal-blue | #003bd0 |
| $light-purple | #e7d8f9 |
| $dark-purple | #520f9a |
| $rich-purple | #7215d8 |
| $light-red | #f8dae1 |
| $dark-red | #981738 |
| $light-green | #d8eacc |
| $dark-green | #0c4537 |
| $success-green | #04a678 |
| $light-error-red | #e8839c |
| $error-red | #d8305a |
| $dark-error-red | #b8294d |
| $light-orange | #fae5cc |
| $charred-orange | #3d3935 |
| $rich-orange | #ff960b |