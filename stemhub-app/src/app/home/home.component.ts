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
    const re: RegExp = /SCIENCE/
    const re1: RegExp = /TECHNOLOGY/
    const re2: RegExp = /ENGINEERING/
    const re3: RegExp = /MATH/
    const re4: RegExp = /STUDY/
    const re5: RegExp = /PLAYLIST/
    if (re.test(input.toUpperCase())) {
      window.location.assign("/science")
    }
    else if (re1.test(input.toUpperCase())) {
      window.location.assign("/technology")
    }
    else if (re2.test(input.toUpperCase())) {
      window.location.assign("/engineering")
    }
    else if (re3.test(input.toUpperCase())) {
      window.location.assign("/math")
    }
    else if (re4.test(input.toUpperCase())) {
      window.location.assign("/study")
    }
    else if (re5.test(input.toUpperCase())) {
      window.location.assign("/study")
    }
    else {
      window.alert("Search result could not be found. Please enter a valid search.")
    }
  }

}
