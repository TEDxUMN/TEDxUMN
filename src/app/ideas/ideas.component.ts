import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

import { WordService, WsWordService, MockWordService } from '../WordCloud/word.service';
import {WordWeight} from '../WordCloud/word-weight';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable  } from 'rxjs/Observable';
import { BehaviorSubject  } from 'rxjs/BehaviorSubject';

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

  private approvedWordsCollection: AngularFirestoreCollection<WordWeight>;
  
  words = new BehaviorSubject<WordWeight[]>([]);
  // words = new BehaviorSubject<WordWeight[]>([
  //   new WordWeight("Human Trafficking", 11), 
  //   new WordWeight("Broke Artists", 8), 
  //   new WordWeight("Identities", 10), 
  //   new WordWeight("Healthcare", 12), 
  //   new WordWeight("Refugees", 17), 
  //   new WordWeight("Education", 17), 
  //   new WordWeight("LGBTQ", 9), 
  //   new WordWeight("Soil science", 8), 
  //   new WordWeight("Communication", 11), 
  //   new WordWeight("Language", 11), 
  //   new WordWeight("Youth Action", 10), 
  //   new WordWeight("Changing Media", 10), 
  //   new WordWeight("Fake News", 9), 
  //   new WordWeight("Stories", 12), 
  //   new WordWeight("White Supremacy", 9)
  // ]);

  constructor(private ref: ChangeDetectorRef, private wordService: MockWordService, private afs: AngularFirestore) { 
    this.approvedWordsCollection = afs.collection<WordWeight>('word_cloud_words', ref => ref.where('approved', '==', true));
    this.approvedWordsCollection.valueChanges().subscribe((list) => {
      this.words.next(list);
    });

  }

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

    this.words.subscribe(this.updateWordCloud);
    this.updateWordCloud(this.words.getValue());
  }


  addWord(name: string, count = 30) {
    this.approvedWordsCollection.add({ word: name, count: count, approved: true });
  }

  updateWordCloud(list) {
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
  }

  addWordText(added : string = "") {
    if (added != "") {
      let words = this.words.getValue().concat([new WordWeight(added, 30)]);
      this.updateWordCloud(words);
    }
  }

  public takeFocus() {
    this.touched = true;
    this.topic = "";
  }
}
