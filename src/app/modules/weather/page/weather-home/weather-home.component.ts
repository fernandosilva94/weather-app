import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service'; 
import { WeatherDatas } from 'src/app/models/interfaces/WeatheDatas';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: []
})
export class WeatherHomeComponent implements OnInit {
  initialCityName = "Recife";
  weatherDatas!: WeatherDatas;

  constructor(private weatherService: WeatherService) {}
  
  ngOnInit(): void {
    this.getWeatherDatas(this.initialCityName);
  }

  getWeatherDatas(cityName: string): void {
    this.weatherService.getWeatherDatas(cityName).subscribe({
      next: (response) => {
        response && (this.weatherDatas = response)
        console.log("dados da city: ", this.weatherDatas)
      },
      error: (error) => console.log(error)
    });
  };

}
