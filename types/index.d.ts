import { Decomposer } from "./dist/decomposer";
import { Writer } from "./dist/writer";

declare module "@human-writes/core" {
    export { Decomposer, Writer };
}
