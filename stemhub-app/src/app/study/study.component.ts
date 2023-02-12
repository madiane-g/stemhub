import { Time } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  breakTime: string = "05:00";
  breakMin: string = "05";
  breakSec: string = "00";

  safeTime: string = "00";
  minutes: string = "30";
  seconds: string = "00";
  startorpause: string = "Start";
  study: boolean = true;
  tasks: Array<string> = [];

  TimerForm = this.timerFormBuilder.group({smin: ['', Validators.required],ssec: ['', Validators.required],bmin: ['', Validators.required], bsec: ['', Validators.required]});
  TaskForm = this.taskFormBuilder.group({newTask: ''});

  constructor(
    private timerFormBuilder: FormBuilder,
    private taskFormBuilder: FormBuilder,
  ) { }

  // Task list code
  onTaskSubmit(): void {

    let newTask = this.TaskForm.get('newTask')?.value;
    if (newTask != undefined) {
      this.tasks.push(newTask);
    }
    this.TaskForm.reset();
  }

  deleteTask(task: string) {
    let i = this.tasks.indexOf(task);
    this.tasks.splice(i,1);
  }

  // Timer-related code
  onTimerSubmit(): void {
    if (this.TimerForm.status == 'INVALID'){
      window.alert("Please enter all fields before setting the timer.")
    } else {
      this.studyMin = this.TimerForm.get('smin')?.value ?? this.safeTime;
      this.studySec = this.TimerForm.get('ssec')?.value ?? this.safeTime;
      this.breakMin = this.TimerForm.get('bmin')?.value ?? this.safeTime;
      this.breakSec = this.TimerForm.get('bsec')?.value ?? this.safeTime;

      if (this.studyMin.length == 1) {
        this.studyMin = "0" + this.studyMin;
      }

      if (this.studySec.length == 1) {
        this.studySec = "0" + this.studySec;
      }

      if (this.breakMin.length == 1) {
        this.breakMin = "0" + this.breakMin;
      }

      if (this.breakSec.length == 1) {
        this.breakSec = "0" + this.breakSec;
      }

      this.studyTime = this.studyMin + ":" + this.studySec;
      this.breakTime = this.breakMin + ":" + this.breakSec;
      this.TimerForm.reset();
      this.setStudy();
    }
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
    var timeRem = this.timeLeft;
    if (timeRem >= 60) {
      this.minutes = Math.floor(this.timeLeft/60).toString();

      if (this.minutes.length == 1) {
        this.minutes = "0" + this.minutes;
      }

      timeRem-= 60*Number.parseInt(this.minutes);
    }

    this.seconds = timeRem.toString();

    if (this.seconds.length == 1) {
      this.seconds = "0" + this.seconds;
    }

    this.timeFormatted = this.minutes + ":" + this.seconds;

    if (Number.parseInt(this.seconds) === 0) {
      this.minutes = (Number.parseInt(this.minutes) - 1).toString();
      if (this.minutes.length == 1) {
        this.minutes = "0" + this.minutes;
      }
    }
  }

  setStudy() {
    this.study = true;
    this.timeFormatted = this.studyTime;
    this.timeLeft = Number.parseInt(this.studyMin) * 60 + Number.parseInt(this.studySec);
    this.displayTime();
  }

  setBreak() {
    this.study = false;
    this.timeFormatted = this.breakTime;
    this.timeLeft = Number.parseInt(this.breakMin) * 60 + Number.parseInt(this.breakSec);
    this.displayTime();
  }
}
