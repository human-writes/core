# Human Writes

## What does it do?

HumanWrites puropse is to imitate the human writing style on a keyboard via a component set on a web app.

However, this package does actually nothing. It only contains library files to be imported from.

## Contents of the package

Files exposed by this package to be inherited in other packages consist in:
- Decomposer: it transforms an encoded HTML text composed of tags in an ordered list of objects. 
- Writer: it loops through the text from the first to the last character and determines an action accordingly to the character and options passed.

## Features

Two options are proposed: 
- to write HTML text
- to write code snippet

### Text writer
When an HTML tag is found the style of this tag is applied to the text.

### Code writer
Writes HTML text inside a _pre_ tag embedding a _code_ tag for the decoration. When a tag is found it is written as is and not interpreted.

It supports code highlighting thanks to HighlightJS library integration. All resources of the HighlightJS library are requested inside the webcomponent, so you do not have to worry about them.

### Common features

Both components also propose to:
- make mistakes :angry:
- correct mistakes right away :smile:
- chain each other with the parameter _depends-on-selector_, eg: with 2 components if the second references the first it starts when the first finishes.
- write at random speed. The speed is computed from 25% faster to 75% slower than the given speed parameter.  

## Live demo

Go to https://human-writes.io/ to see how they work. Look at the page source to see the implementations.

## Installation

Please, refer to module @human-writes/web-components to actually use these features.

## Changelog

v0.5.60 - Fixes declaration types for package dependencies.

## Roadmap

- Asap: implement a Vue plugin
- A little later: implement a React plugin
- When I have time: implement an Angular plugin