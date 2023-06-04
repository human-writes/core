import { Decomposer }  from "../src/decomposer";
import { Writer } from "../src/writer";
import { WriterComponent } from "../src/writer-component";

declare module "@human-writes/core" {
    export = Decomposer;
    export = Writer;
    export = WriterComponent;
 }