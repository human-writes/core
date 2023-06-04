declare module "@human-writes/core";

const Decomposer = require('./src/decomposer');
const Component = require('./src/writer-component');
const Writer = require('./src/writer');

module.exports = { Decomposer, Component, Writer };