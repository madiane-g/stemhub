import { Time } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { timer } from 'rxjs';

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.css']
})

export class StudyComponent {
  timeLeft: number = 60*30;
  interval: any;
  subscribeTimer: any;
  timeFormatted: string = "30:00";
  studyTime: string = "30:00";
  studyMin: string = "30";
  studySec: string = "00";
  breakMin: string = "05";
  breakSec: string = "00";
  breakTime: string = "05:00";
  minutes: string = "30";
  seconds: string = "00";
  startorpause: string = "Start";
  study: boolean = true;

  TimerForm = this.formBuilder.group({smin: '',ssec: '',bmin: '', bsec: ''});

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  onSubmit(): void {
    this.studyMin = this.TimerForm.get('smin')?.value ?? "00";
    this.studySec = this.TimerForm.get('ssec')?.value ?? "00";
    this.breakMin = this.TimerForm.get('bmin')?.value ?? "00";
    this.breakSec = this.TimerForm.get('bsec')?.value ?? "00";

    this.studyTime = this.studyMin + ":" + this.studySec;
    this.breakTime = this.breakMin + ":" + this.breakSec;
    this.TimerForm.reset();
    this.setStudy();
  }

  oberserableTimer() {
    const source = timer(1000, 2000);
    const abc = source.subscribe(val => {
      console.log(val, '-');
      this.subscribeTimer = this.timeLeft - val;
    });
  }

  startTimer() {
    this.startorpause = "Pause";
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
        this.displayTime();
      } else if (this.timeLeft == 0){
        this.startorpause = "Start";
        this.resetTimer();
      }
    },1000)

  }

  pauseTimer() {
    clearInterval(this.interval);
    this.startorpause = "Play";
  }

  resetTimer() {
    clearInterval(this.interval);
    if (this.study) {
      this.timeLeft = Number.parseInt(this.studyMin) * 60 + Number.parseInt(this.studySec);
    } else {
      this.timeLeft = Number.parseInt(this.breakMin) * 60 + Number.parseInt(this.breakSec);
    }
    this.displayTime();
  }

  timer() {
    if (this.startorpause == "Start" || this.startorpause == "Play") {
      this.startTimer();
    } else {
      this.pauseTimer();
    }
  }

  displayTime() {

    if (this.timeLeft >= 60) {
      this.minutes = Math.floor(this.timeLeft/60).toString();

      if (this.minutes.length == 1) {
        this.minutes = "0" + this.minutes;
      }

      this.timeLeft-= 60*Number.parseInt(this.minutes);
    }

    this.seconds = this.timeLeft.toString();

    if (this.seconds.length == 1) {
      this.seconds = "0" + this.seconds;
    }

    this.timeFormatted = this.minutes + ":" + this.seconds;

  }

  setStudy() {
    this.study = true;
    this.timeFormatted = this.studyTime;
    this.timeLeft = Number.parseInt(this.studyMin) * 60 + Number.parseInt(this.studySec);
  }

  setBreak() {
    this.study = false;
    this.timeFormatted = this.breakTime;
    this.timeLeft = Number.parseInt(this.breakMin) * 60 + Number.parseInt(this.breakSec);
  }
}
