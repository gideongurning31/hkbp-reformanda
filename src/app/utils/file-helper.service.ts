import { Injectable } from '@angular/core';

@Injectable()
export class FileHelperService {

  constructor() {}

  downloadFile(file: Blob, fileId?: string) {
    const blob = new Blob([file], { type: 'application/pdf' });
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(blob);
      return;
    }

    const url = window.URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = fileId ? fileId : 'WJ_Reformanda' + '.pdf';
    anchor.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
    setTimeout(() => {
      window.URL.revokeObjectURL(url);
      anchor.remove();
    }, 100);
  }

}
