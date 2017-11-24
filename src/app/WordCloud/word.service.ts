import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {WordWeight} from "./word-weight";

export interface WordService {
    GetWordsCount(name: string): Promise<WordWeight[]>;
}

@Injectable()
export class WsWordService implements WordService {
    private wordWSUrl = "http://localhost:3005";

    constructor() { }

    public GetWordsCount(name: string): Promise<WordWeight[]> {
        return new Promise(function(resolve, reject) {
            resolve([new WordWeight("test", 1)]);
        });
    }
}

@Injectable()
export class MockWordService implements WordService {
    public GetWordsCount(): Promise<WordWeight[]> {
        return new Promise((res, rej) => {
            let we = [
                ["Human Trafficking", 11], 
                // ["This is a test!", 30],
                ["Broke Artists", 8], 
                ["Identities", 10], 
                ["Healthcare", 12], 
                ["Refugees", 17], 
                ["Education", 17], 
                ["LGBTQ", 9], 
                ["Soil science", 8], 
                ["Communication", 11], 
                ["Language", 11], 
                ["Youth Action", 10], 
                ["Changing Media", 10], 
                ["Fake News", 9], 
                ["Stories", 12], 
                ["White Supremacy", 9]
            ];
            
            res(we.map((item) => new WordWeight(String(item[0]), Number(item[1]))));
        });
    }
}