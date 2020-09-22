import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  dailies;
  url = "https://api.openweathermap.org/data/2.5/onecall?lat=39&lon=-104&units=imperial&appid=b2a76d4a4cecf0114e9e756042fe8a0b";
  current: any;
  constructor(private http:HttpClient) {
    this.getWeather();

   }

   getWeather(){
    this.http
    .get<any>(this.url).subscribe(result=>{
      this.dailies = result.daily;
      this.current = result.current;
      console.log(this.dailies)
    })
   }
  ngOnInit(): void {
  }

}
