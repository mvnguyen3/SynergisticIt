import { Component, ChangeDetectorRef, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './app.componentTest.html'
})
export default class AppComponentTest {
  
  constructor(private cd: ChangeDetectorRef) { }

  @Input() dynamicMsg : string;

  @Input() message : string;

  @Input() factResult: string;

  @Input() factInput: string;

  @Input() mapCookie: string;
  

  // implement OnInit's `ngOnInit` method
  ngOnInit() { 
    this.logIt(`OnInit`, 1); 
    console.log("New Vaalue")
  }

  ngOnChanges(){
    this.logIt(`ngOnChanges`, 2); 
  }

  ngDoCheck(){
    this.logIt(`ngDoCheck`, 3);
  }



  ngAfterContentInit(){
    this.logIt(`ngAfterContentInit`, 4);
  }

  ngAfterContentChecked(){
    this.logIt(`ngAfterContentChecked`, 5);
  }

  ngAfterViewInit(){
    this.logIt(`ngAfterViewInit`, 6);
  }

  ngAfterViewChecked(){
    this.logIt(`ngAfterViewChecked`, 7);
  }

  ngOnDestroy(){
    this.logIt(`ngOnDestroy`, 8);
  }

  logIt(msg: string, nextId: number) {
    console.log(`#${nextId++} ${msg}`);
  } 
}
