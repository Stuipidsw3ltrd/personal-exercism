class Clock {
  private hour: number;
  private minute: number;
  constructor(hour: number, minute?: number) {
    if (!!minute) {
      this.minute = minute;
    } else {
      this.minute = 0;
    }
    this.hour = hour;
  }
  public toString(): string {
    let [minuteNumber, hoursToRoll] = this.rollOverMinutes(this.minute);
    this.hour += hoursToRoll;
    let hourNumber = this.rollOverHours(this.hour);
    let hourString = this.getTimeString(hourNumber);
    let minuteString = this.getTimeString(minuteNumber);
    return `${hourString}:${minuteString}`;
  }

  public plus(minutes: number): Clock {
    this.minute += minutes;
    return this;
  }

  public minus(minutes: number): Clock {
    this.minute -= minutes;
    return this;
  }

  public equals(other: Clock): boolean {
    return this.toString() === other.toString();
  }

  private rollOverHours(hour: number): number {
    if (hour < 0) {
      let mod = Math.abs(hour) % 24;
      return mod === 0 ? 0 : 24 - mod;
    } else {
      return hour % 24;
    }
  }

  private rollOverMinutes(minute: number): number[] {
    let minutesAndHoursRoll = Array(2);
    let mod = Math.abs(minute) % 60;
    let div = Math.floor(Math.abs(minute) / 60);
    if (minute < 0) {
      minutesAndHoursRoll[0] = mod === 0 ? 0 : 60 - mod;
      minutesAndHoursRoll[1] = mod === 0 ? -div : -(div + 1);
    } else {
      minutesAndHoursRoll[0] = mod;
      minutesAndHoursRoll[1] = div;
    }
    return minutesAndHoursRoll;
  }

  private getTimeString(time: number) {
    let timeString = time.toString();
    return timeString.length < 2 ? "0" + timeString : timeString;
  }
}

let clock = new Clock(2, 20);
console.log(clock.minus(3000).toString());
