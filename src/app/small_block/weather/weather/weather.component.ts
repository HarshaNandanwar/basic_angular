import { Component } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  WeatherData: any;
  location: string = 'bhopal';
  show:boolean=false;
  constructor() { }

  ngOnInit() {
    this.WeatherData = {
      main : {}
    };
  }

  getWeatherData(location:any) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=ff1bc4683fc7325e9c57e586c20cc03e`)
      .then(response => response.json())
      .then(data => { this.setWeatherData(data); })
  }

  getLocation(data: any) {
    this.show=true;
    this.location = data;
    this.getWeatherData(this.location);
   
  }

  setWeatherData(data: any) {
    this.WeatherData = data;
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
  }
}
