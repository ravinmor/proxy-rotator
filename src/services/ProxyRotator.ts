import UserAgent from 'user-agents'
import * as puppeteer from 'puppeteer'

class Task {
  name: string
  description: string
  finished: boolean
  dueDate: any

  constructor(
    name: string,
    description: string,
    finished: boolean,
    dueDate: any
  ) {
    this.name = name;
    this.description = description;
    this.finished = finished;
    this.dueDate = dueDate;
  }
}

class TaskBuilder{
  name: any;
  description: any;
  isFinished = false;
  dueDate: any;

  setName (name: any) {
      this.name = name;
      return this;
  }
  setDescription (description: any) {
      this.description = description;
      return this;
  }
  setFinished (finished: any) {
      this.isFinished = finished;
      return this;
  }
  setDueDate (dueDate: any) {
      this.dueDate = dueDate;
      return this;
  }
  build () {
      return new Task(this.name, this.description, this.isFinished, this.dueDate);
  }
};

export {
  TaskBuilder
}