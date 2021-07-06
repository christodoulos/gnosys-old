import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { CodemirrorQuery } from '@gnosys/state';
import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'gnosys-brython-runner',
  templateUrl: './brython-runner.component.html',
  styleUrls: ['./brython-runner.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrythonRunnerComponent implements OnInit, AfterViewInit {
  @ViewChild('brython_runner') iFrameElmRef: ElementRef | undefined;
  currcode$ = this.codemirrorQuery.currcode$;
  iframe: HTMLIFrameElement | undefined;
  iWindow: Window | null | undefined;
  constructor(private codemirrorQuery: CodemirrorQuery) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (this.iFrameElmRef) this.iframe = this.iFrameElmRef.nativeElement;
    this.iWindow = (this.iframe as HTMLIFrameElement).contentWindow;
  }

  run(): void {
    this.currcode$.subscribe((value) => {
      console.log(value);
      this.iWindow?.postMessage(value, this.iWindow.location.href);
    });
  }
}
