import { Component } from '@angular/core';


@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',//We use jsx
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';
  setMyName = "Minh";
  message = "Hello " + this.setMyName;
  dynamicMsg = "Dynamic Message";
  factInput = "0";
  factResult = "0";
  mapCookie = new Map();

  constructor(){}

  ClickMe(isBold){   
    alert("Text Is "+ isBold);
  }

  ChangeMe(){
    var nameInput = (document.getElementById("username") as HTMLInputElement).value;
    this.message = "Hello " + nameInput;    
  }  

  factCal(){
    var input = (document.getElementById("num") as HTMLInputElement).value;
    this.factInput = input;
    this.factResult = this.calculateF(input);

    // Trying to save it to the local storage

    this.storeToCookie(this.factInput, this.factResult);
      // Store cookie to a map
    this.mapCookie = this.getCookie();
    this.mapCookie.forEach((v, k) => console.log("key: " + k + ", Value: " + v));
  }

  showTable(){
  document.getElementById("cookieTable").style.display = "inline";
  }

  hideTable(){
  document.getElementById("cookieTable").style.display = "none";
  }
  
  calculateF(num){
    if(num == 1){
      return 1;
    }
    return num * this.calculateF(num-1);    
  }

  storeToCookie(cname, cvalue){
    document.cookie = cname + "=" + cvalue;
  }

  // Return cookie as a map structure
  getCookie(){
      var decodedCookie = decodeURIComponent(document.cookie);
      console.log("decoded Cookie: " + decodedCookie);
      var ca = decodedCookie.split(";");
      var map = new Map();
      
      for(var i=0; i<ca.length; i++){
       // console.log("All Cookies: " + ca[i]);

        // Use this to display into HTML page
        var myArr = ca[i].split("=");
       // console.log("My Arr: " + myArr[0] + "  " +  myArr[1]);
       map.set(myArr[0], myArr[1]);      
      }      
      return map;
  }

  clearCookie(){
    document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
    this.hideTable();

  }
}


















