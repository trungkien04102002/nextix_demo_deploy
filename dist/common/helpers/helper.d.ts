/// <reference types="node" />
import { URLSearchParams } from 'url';
export declare function enumToArray(enumme: any): any[];
export declare const concatAndToLowerCase: (...args: string[]) => string;
export declare const paramBuilder: (data: Record<string, any>) => URLSearchParams;
export declare const logInfo: (category: string, scopeName: string, functionName: string, message: string, error?: any) => void;
export declare const hideSensitiveText: (sensitiveText: string, numberOfLeftText?: number, numberOfRightText?: number) => string | undefined;
export declare const formatDateEPL: (dateString: string) => string;
export declare const generateSlug: (text: string) => string;
