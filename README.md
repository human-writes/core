# HumanWrites/Core

## What does it do?

HumanWrites puropse is to imitate the human writing style on a keyboard via a component set on a web app.

However, this package does actually nothing. It only contains library files to be imported.

## Contents of the package

The files exposed by this package consist in:

- Decomposer: it transforms an HTML encoded text composed of tags in an ordered list of objects.
- Writer: it loops through the text from the first to the last character and determines an action accordingly to the
  character and options passed.

## Features

Two options are proposed:

- to write HTML text
- to write code snippet

### Text writer

When an HTML tag is found the style of this tag is applied to the text.

### Code writer

Writes HTML text inside a _pre_ tag embedding a _code_ tag for the decoration. When a tag is found it is written as is
and not interpreted.

It supports code highlighting thanks to HighlightJS library integration. All resources of the HighlightJS library are
requested inside the webcomponent, so you do not have to worry about them.

### Common features

Both writers also propose to:

- make typos :angry:
- correct typos right away :smile:
- write at random speed. The speed is computed from 25% faster to 75% slower than the given speed parameter.

## Live demo

Go to https://human-writes.io/ to see how they work. Look at the page source to see the implementations.

## Installation

Please, refer to module [@human-writes/web-components](https://www.npmjs.com/package/@human-writes/web-components) to
actually use these features.

## Changelog

v0.5.63 - Core files are no more strongly linked to web components. This opens a option to code frontend frameworks plugins.

v0.5.61 - Fixes README.

v0.5.60 - Fixes declaration types for package dependencies.

## Roadmap

Today only web components can be used as an implementation of this library.

New implementations are coming:

- asap: a Vue plugin
- a little later: a React plugin
- when I have time: an Angular plugin
