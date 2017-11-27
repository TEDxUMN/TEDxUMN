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
                new WordWeight("Human Trafficking", 11), 
                new WordWeight("Broke Artists", 8), 
                new WordWeight("Identities", 10), 
                new WordWeight("Healthcare", 12), 
                new WordWeight("Refugees", 17), 
                new WordWeight("Education", 17), 
                new WordWeight("LGBTQ", 9), 
                new WordWeight("Soil science", 8), 
                new WordWeight("Communication", 11), 
                new WordWeight("Language", 11), 
                new WordWeight("Youth Action", 10), 
                new WordWeight("Changing Media", 10), 
                new WordWeight("Fake News", 9), 
                new WordWeight("Stories", 12), 
                new WordWeight("White Supremacy", 9)
            ];
            
            res(we);
        });
    }
}