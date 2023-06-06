export class WriterComponent extends HTMLElement {
    static get observeAttributes(): string[];
    get source(): string;
    get speed(): number | 60;
    get dependsOnSelector(): string;
    get makeMistakes(): boolean;
    get styles(): string;
    get classes(): string;
    get finished(): string;
    get restart(): string;
    connectedCallback(): Promise<void>;
    writeLikeAHuman(): void;
}

