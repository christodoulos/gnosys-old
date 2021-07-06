import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
  HostListener,
  AfterViewInit,
} from '@angular/core';

import { CodemirrorQuery, CodemirrorService } from '@gnosys/state';

@Component({
  selector: 'gnosys-codemirror',
  templateUrl: './codemirror.component.html',
  styleUrls: ['./codemirror.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodemirrorComponent implements OnInit, AfterViewInit {
  @ViewChild('editor') iFrameElmRef: ElementRef | undefined;
  code$ = this.codemirrorQuery.code$;
  iframe: HTMLIFrameElement | undefined;
  iWindow: Window | null | undefined;
  constructor(
    private codemirrorQuery: CodemirrorQuery,
    private codemirrorService: CodemirrorService
  ) {}

  @HostListener('window:message', ['$event'])
  onMessage(e: MessageEvent) {
    if (e.data.editor !== undefined) {
      const currCode = e.data.editor;
      this.codemirrorService.updateCurrCode(currCode);
    }
  }
  ngOnInit(): void {
    this.code$.subscribe((data: string) => {
      this.iWindow?.postMessage(data, '');
    });
  }

  ngAfterViewInit(): void {
    if (this.iFrameElmRef) this.iframe = this.iFrameElmRef.nativeElement;
    this.iWindow = (this.iframe as HTMLIFrameElement).contentWindow;
  }
}
