import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IdeasComponent implements OnInit {

  private topic : string;
  private touched = false;
  private rotationIndex = 0;
  
  public static topIssues = ["Human Trafficking", "Food Shortages", "Nuclear Energy"];

  constructor(private ref: ChangeDetectorRef) { }

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
  }

  private takeFocus() {
    this.touched = true;
    this.topic = "";
  }
}
