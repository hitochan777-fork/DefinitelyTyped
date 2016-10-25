// Type definitions for Expect v1.13.4
// Project: https://github.com/mjackson/expect
// Definitions by: Justin Reidy <https://github.com/jmreidy/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


export declare class Expectation {
    constructor(actual: any);
    toExist(message?: string): Expectation;
    toBeTruthy(message?: string): Expectation;
    toNotExist(message?: string): Expectation;
    toBeFalsy(message?: string): Expectation;
    toBe(value: any, message?: string): Expectation;
    toNotBe(value: any, message?: string): Expectation;
    toEqual(value: any, message?: string): Expectation;
    toNotEqual(value: any, message?: string): Expectation;
    toThrow(value?: any, message?: string): Expectation;
    toNotThrow(value?: any, message?: string): Expectation;
    toBeA(value: any, message?: string): Expectation;
    toBeAn(value: any, message?: string): Expectation;
    toNotBeA(value: any, message?: string): Expectation;
    toNotBeAn(value: any, message?: string): Expectation;
    toMatch(value: any, message?: string): Expectation;
    toNotMatch(value: any, message?: string): Expectation;
    toBeLessThan(value: any, message?: string): Expectation;
    toBeFewerThan(value: any, message?: string): Expectation;
    toBeGreaterThan(value: any, message?: string): Expectation;
    toBeMoreThan(value: any, message?: string): Expectation;
    toInclude(value: any, compareValues?: any, message?: string): Expectation;
    toContain(value: any, compareValues?: any, message?: string): Expectation;
    toExclude(value: any, compareValues?: any, message?: string): Expectation;
    toNotContain(value: any, compareValues?: any, message?: string): Expectation;
    toHaveBeenCalled(message?: string): Expectation;
    toHaveBeenCalledWith(...args: any[]): Expectation;
    toNotHaveBeenCalled(message?: string): Expectation;
    withContext(context: any): Expectation;
    withArgs(...args: any[]): Expectation;
}

export interface Extension {
    [name: string]: (args?: any[]) => void;
}

export interface Call {
    context: Spy;
    arguments: any[];
}

export interface Spy {
    __isSpy: Boolean;
    calls: Array<Call>;
    andCall(fn: Function): Spy;
    andCallThrough(): Spy;
    andThrow(object: Object): Spy;
    andReturn(value: any): Spy;
    getLastCall(): Call;
    restore(): void;
    destroy(): void;
}

declare function expect(actual: any): Expectation;

export declare function createSpy(fn?: Function, restore?: Function): Spy;
export declare function spyOn(object: Object, methodName: string): Spy;
export declare function isSpy(object: any): Boolean;
export declare function restoreSpies(): void;
export declare function assert(condition: any, messageFormat: string, ...extraArgs: any[]): void;
export declare function extend(extension: Extension): void;

export default expect;
