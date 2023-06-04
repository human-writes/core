# Human Writes

## What does it do?

HumanWrites goal is to imitate the human writing style on a keyboard via a component set on a web app.

However, this package does actually nothing. It only contains library files to be imported from.

## Contents of the package

- Decomposer: transforms an encoded HTML text composed of tags in an ordered list of objects. 
- Writer: loops through the text from the first to the last character and determines an action accordingly to the character and options passed.
- Component: it's a base class to make a web compoenent.

## Features

Two options are proposed: 
- to write HTML text
- to write code snippet

### Text writer
When an HTML tag is found the style of this tag is applied to the text.

### Code writer
Writes HTML text inside a _pre_ tag embedding a _code_ tag for the decoration. When a tag is found it is written as is and not interpreted.

It supports code highlighting thanks to HighlightJS library integration. All resources of the HighlightJS library are requested inside the webcomponent, so you do not have to worry about them.

### Commaon features

Both components also propose to:
- make mistakes :angry:
- correct mistakes right away :smile:
- chain each other with the parameter _depends-on-selector_, eg: with 2 components if the second references the first it starts when the first finishes.
- write at random speed. The speed is computed from 25% faster to 75% slower than the given speed parameter.  

## Live demo

Go to https://human-writes.io/ to see how they work. Look at the page source to see the implementations.

## Installation

Please, refer to modules @human-writes/text-writer and  @human-writes/code-writer.