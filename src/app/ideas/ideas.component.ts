import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

import {WordWeight} from '../WordCloud/word-weight';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable  } from 'rxjs/Observable';
import { BehaviorSubject  } from 'rxjs/BehaviorSubject';

declare var WordCloud: any

interface WordCloudWord {
  word: string;
  count: number;
  approved: boolean;
}


@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class IdeasComponent implements OnInit {

  public topic : string;
  public touched = false;
  public rotationIndex = 0;

  public submitted: string[] = [];
  
  
  public static topIssues = ["Human Trafficking", "Food Shortages", "Nuclear Energy"];

  private approvedWordsCollection: AngularFirestoreCollection<WordCloudWord>;
  
  private words = new BehaviorSubject<WordWeight[]>([]);
  blank_words = [
    new WordWeight("Human Trafficking", 11, false, ""), 
    new WordWeight("Broke Artists", 8, false, ""), 
    new WordWeight("Identities", 10, false, ""), 
    new WordWeight("Healthcare", 12, false, ""), 
    new WordWeight("Refugees", 17, false, ""), 
    new WordWeight("Education", 17, false, ""), 
    new WordWeight("LGBTQ", 9, false, ""), 
    new WordWeight("Soil science", 8, false, ""), 
    new WordWeight("Communication", 11, false, ""), 
    new WordWeight("Language", 11, false, ""), 
    new WordWeight("Youth Action", 10, false, ""), 
    new WordWeight("Changing Media", 10, false, ""), 
    new WordWeight("Fake News", 9, false, ""), 
    new WordWeight("Stories", 12, false, ""), 
    new WordWeight("White Supremacy", 9, false, "")
  ];

  constructor(private ref: ChangeDetectorRef, private afs: AngularFirestore) { 
    this.approvedWordsCollection = afs.collection<WordCloudWord>('word_cloud_words');
    
    this.approvedWordsCollection.snapshotChanges().subscribe((list) => {
      this.words.next(list.map(word => {
        const data = word.payload.doc.data() as WordCloudWord;
        return new WordWeight(data.word, data.count, this.submitted.some(x=>x==data.word), word.payload.doc.id);
      }));
    });
  }

  // private prePopulate() {
  //   // Otherwise add it to the collection
  //   this.blank_words.forEach(word => {
  //     this.approvedWordsCollection.add({ word: word.word, count: word.count, approved: true});
  //   });
  // }

  ngOnInit() {
    console.log(this.submitted);
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

    // this.prePopulate();
  }


  addWord(name: string) {
    if (this.submitted.some(x=> x== name)) {
      // Already submitted this word
      return;
    }

   

    this.submitted.push(name);
    var tmpWord = this.words.getValue().find(x => x.word == name);
    if (tmpWord) {
       // If the word exists
       console.log(tmpWord, " already exists: ");
       this.approvedWordsCollection.doc(tmpWord.path).update({count: tmpWord.count+1});
    } else {
       // Otherwise add it to the collection
       console.log(" New word! ");
       this.topic = "";
       this.ref.markForCheck();
       this.approvedWordsCollection.add({ word: name, count: 1, approved: false});
      }
    }

  private updateWordCloud = (list) => {
    list.filter(word => word.approved);
    if (!list.length) return;

    var fcanvas = document.createElement('canvas');
    var fctx = fcanvas.getContext('2d', { willReadFrequently: true });

    let maxCount = list.map((ww) => ww.count).reduce((max, cur) => {
      return Math.max(max, cur);
    }, 0);

    // Fake makes the user submitted words the biggest
    list = list.map((ww) => {
      if (ww.personal) {
        console.log("Found a personal!");
        ww.count = maxCount;
      }
      return ww;
    });

    let maxPixel = list.map((ww) => {
      fctx.font = 'normal ' + (ww.count).toString(10) + 'px ' + '"Trebuchet MS", "Heiti TC", "Arial Unicode MS", "Droid Fallback Sans", sans-serif';
      return fctx.measureText(ww.word).width
     }).reduce((max, cur) => Math.max(max, cur), 0);

    let canvasSize = 1100;
    let scalingFactor = (canvasSize/2)/maxPixel;

    list.map((ww) => console.log(ww));
    let outarray = list.map((ww) => [ww.word, ww.count]);
    
    WordCloud(document.getElementById("x_canvas"), {
        list: outarray,
        minSize: 0,
        weightFactor: scalingFactor,
        backgroundColor: 'white',
        drawOutOfBound: true,
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
    console.log("Adding word to wordcloud");
    if (added != "") {
      var addedWord = new WordWeight(added, 1, true, "");
      let words = this.words.getValue().concat([]);
      this.updateWordCloud(words);
    }
  }

  public takeFocus() {
    this.touched = true;
    this.topic = "";
  }
}
