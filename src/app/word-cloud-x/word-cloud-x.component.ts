import { Component, OnInit } from '@angular/core';

import { WordService, WsWordService, MockWordService } from '../WordCloud/word.service';
import {WordWeight} from '../WordCloud/word-weight';

declare var WordCloud: any

@Component({
  selector: 'app-word-cloud-x',
  templateUrl: './word-cloud-x.component.html',
  styleUrls: ['./word-cloud-x.component.css'],
  providers: [WsWordService, MockWordService]
})
export class WordCloudXComponent implements OnInit {

  protected maxSize : number = 200;

  

  constructor(private wordService: MockWordService) { }

  ngOnInit() {
    this.setText("promessi_sposi.txt");
  }

  setText(text : string) {
    this.wordService.GetWordsCount(text).then((list) => {
        let scale = list.map((ww) => new WordWeight(ww.word, Math.pow(ww.count,2)));

        let max = scale.map((ww) => ww.count).
            reduce((max, cur) => {
                return Math.max(max, cur);
            }, 0);

        scale = scale.map((ww) => new WordWeight(ww.word, (ww.count / max) * this.maxSize));

        let outarray = scale.map((ww) => [ww.word, ww.count]);

        WordCloud(document.getElementById("x_canvas"), {
            letterCloud: outarray,
            gridSize: 1,
            minSize: 0,
            shape: "triangle"
            // backgroundColor: '#333300',
            // color: function (word, weight) { return '#000000' }
        });

    });
}

}
