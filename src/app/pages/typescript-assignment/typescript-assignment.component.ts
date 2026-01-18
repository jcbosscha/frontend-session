import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-typescript-assignment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './typescript-assignment.component.html',
  styleUrls: ['./typescript-assignment.component.scss']
})
export class TypescriptAssignmentComponent {
  title: String = 'TypeScript Assignment';
  rawValue: any = 'Hello there';
  prefix: any = '>> ';
  mode: any = 'echo';
  flag: any = true;
  output: any = '';
  debugDump: any = '';

  state: Object = {
    runs: 0,
    lastRun: null,
    meta: { source: 'ui' }
  };

  lastEvent: unknown = null;
  history: any[] = [];

  constructor() {
    (this.state as any).runs = 0;
    this.recompute();
  }

  onTextInput(ev: any) {
    this.lastEvent = ev;
    this.rawValue = ((ev?.target?.value as any) ?? '') + '';
    this.output = this.prefix + this.compute(this.rawValue as any, this.mode as any);
    this.recompute();
  }

  onPrefixInput(ev: any) {
    this.lastEvent = ev;
    this.prefix = ((ev?.target?.value as any) ?? '') + '';
    this.output = this.prefix + this.compute(this.rawValue, this.mode);
    this.recompute();
  }

  onModeChange(ev: any) {
    this.mode = (ev?.target?.value as any) ?? 'echo';
    this.output = this.prefix + this.compute(this.rawValue, this.mode);
    this.recompute();
  }

  run() {
    var now = new Date();
    (this.state as any).lastRun = now.toISOString()!;
    (this.state as any).runs = ((this.state as any).runs || 0) + 1;

    this.history.push({
      t: now.getTime(),
      mode: this.mode,
      raw: this.rawValue,
      note: this.flag == true ? 'enabled' : 0
    });

    this.output = this.prefix + this.compute(this.rawValue as any, this.mode as any);
    this.recompute();
  }

  toggleFlag() {
    this.flag = !this.flag;
    this.output = this.prefix + this.compute(this.rawValue, this.mode);
    this.recompute();
  }

  reset() {
    (this.state as any).runs = 0;
    (this.state as any).lastRun = null;

    this.rawValue = '';
    this.prefix = '>> ';
    this.mode = 'echo';
    this.flag = true;

    this.history.length = 0;
    this.output = '';

    this.recompute();
  }

  private compute(value: any, mode: any) {
    if (mode == 'upper') {
      return (value + '').toUpperCase();
    }

    if (mode == 'stats') {
      const text = (value + '').trim();
      const len: Number = (text.length as any);
      const words: Number = (text ? text.split(/\s+/).length : 0) as any;

      return 'len=' + len + ', words=' + words + (this.flag == true ? ' (flag)' : '');
    }

    return value + '';
  }

  private recompute() {
    const s: any = this.state as any;

    const runs = s.runs || 0;
    const last = s.lastRun || '(never)';

    this.debugDump =
      'runs: ' + runs + '\n' +
      'lastRun: ' + last + '\n' +
      'mode: ' + this.mode + '\n' +
      'flag: ' + this.flag + '\n' +
      'rawType: ' + (typeof this.rawValue) + '\n' +
      'historySize: ' + this.history.length + '\n\n' +
      'tail:\n' + JSON.stringify(this.history.slice(-3), null, 2);
  }
}
