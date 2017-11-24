import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

import { WordService, WsWordService, MockWordService } from '../WordCloud/word.service';
import {WordWeight} from '../WordCloud/word-weight';

declare var WordCloud: any

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [WsWordService, MockWordService]
})



export class IdeasComponent implements OnInit {

  public topic : string;
  public touched = false;
  public rotationIndex = 0;
  
  public static topIssues = ["Human Trafficking", "Food Shortages", "Nuclear Energy"];

  constructor(private ref: ChangeDetectorRef, private wordService: MockWordService) { }

  ngOnInit() {
    this.topic = IdeasComponent.topIssues[this.rotationIndex];

    setInterval(() => {
      if (!this.touched) {
        
        if (++this.rotationIndex >= IdeasComponent.topIssues.length) {
          this.rotationIndex = 0;
        }
  
        this.topic = IdeasComponent.topIssues[this.rotationIndex];
        this.ref.markForCheck();
      }
    }, 3000);

    this.addWordText();
  }

  addWordText(added : string = "") {
    this.wordService.GetWordsCount()
      .then((list) => {
        if (added != "") {
          return [new WordWeight(added, 30)].concat(list);
        } else {
          return list;
        }
      })
      .then((list) => {
        console.log(list);
        let maxTotal = list.map((ww) => ww.count * ww.word.length).reduce((max, cur) => {
            return Math.max(max, cur);
        }, 0);;

        let maxCount = list.map((ww) => ww.count).reduce((max, cur) => {
            return Math.max(max, cur);
        }, 0);;

        list = list.map((ww) => new WordWeight(ww.word, 1250 * ww.count / (Math.sqrt(maxTotal) * maxCount )));
        list.map((ww) => console.log(ww));
        let outarray = list.map((ww) => [ww.word, ww.count]);
        
        WordCloud(document.getElementById("x_canvas"), {
            list: outarray,
            minSize: 0,
            backgroundColor: 'white',
            abort: () => console.log("Aborting"),
            color: function (word, weight) { 
              if (weight != 30) {
                return '#1f1f1f' 
              } else {
                return '#e62b1e' 
              }
              
            }
        });
    });
  }

  public takeFocus() {
    this.touched = true;
    this.topic = "";
  }
}
