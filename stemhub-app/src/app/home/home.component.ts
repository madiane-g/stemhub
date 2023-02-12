import { Component, } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { createSpeechlySpeechRecognition, SpeechRecognition } from '@speechly/speech-recognition-polyfill';

const appId = '312e04fb-3901-469e-aea9-bebaa077678b';
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
const speechRecognition: SpeechRecognition = new SpeechlySpeechRecognition();


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})

export class HomeComponent {

  constructor(private formBuilder: FormBuilder){}

  searchBar = this.formBuilder.group({Search: ''})

  startTranscribing = () => {
    this.searchBar.reset();
    speechRecognition.start();
    speechRecognition.onresult = ({ results }) => {
      const transcript = results[0][0].transcript;
      // Process the transcript
      console.log(transcript);
      this.searchBar.value.Search = transcript;
      this.onClick();
    }
  }

  onClick() {
    var input = this.searchBar.value.Search || '';
    this.searchBar.reset();
    console.log(input);
    if (input.toUpperCase() == "SCIENCE") {
      window.location.assign("http://localhost:4200/science")
    }
    else if (input.toUpperCase() == "TECHNOLOGY") {
      window.location.assign("http://localhost:4200/technology")
    }
    else if (input.toUpperCase() == "ENGINEERING") {
      window.location.assign("http://localhost:4200/engineering")
    }
    else if (input.toUpperCase() == "MATH") {
      window.location.assign("http://localhost:4200/math")
    }
    else {
      window.alert("Search result could not be found. Please enter a valid search.")
    }
  }

}
