export class Decomposer {
    constructor(html: any, doMarkUpQuotes?: boolean);
    get list(): object[];
    get text(): string;
    get workingText(): string;
    get words(): string[];
    get mistakes(): string[];
    get mistakeCursors(): string[];
    get phraseStarts(): string[];
    get phraseLengths(): string[];
    get wordEnds(): string[];
    translateBracket(base: string, name: string, isClosing?: boolean): {
        word: string;
        translated: boolean;
    };
    markupQuotes(): void;
    doAttributes(attributesText: any): {};
    isClosedTag(tag: object): boolean;
    isCloserTag(tag: object): boolean;
    makeTag(tag: object, parentIds: number[], depth: number, hasCloser: boolean, isCloser?: boolean): {
        id: number;
        name: string;
        text: string;
        startsAt: number;
        endsAt: number;
        uid: () => number;
        method: string;
        /**
* @type {string[]}
*/
        props: string[];
        depth: number;
        hasCloser: boolean;
        node: boolean;
        isSingle: boolean;
        parentId: number;
    };
    protect(): void;
    collectTags(htmlText: string, rule?: string): string[];
    collectWords(htmlText: string): void;
    makeMistakes(): void;
    makeFaultyText(): void;
    splitTags(allTags: object[]): {
        regularTags: object[];
        singleTags: object[];
    };
    replaceTags(text: string, tags: object[]): string;
    doComponents(rule?: string): void;
    #private;
}

