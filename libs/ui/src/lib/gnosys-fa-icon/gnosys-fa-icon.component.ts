import { Component, Input } from '@angular/core';
import {
  faSignInAlt,
  faBuilding,
  faUser,
  faUserPlus,
  faUnlock,
  faEnvelope,
  faCloudUploadAlt,
  faCloudDownloadAlt,
  faFileDownload,
  faTrashAlt,
  faSignOutAlt,
  faTrash,
  faTimes,
  faHandshake,
  faKey,
  faQuestion,
  faClipboardCheck,
  faCogs,
  faCodeBranch,
  faSave,
  faFileArchive,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGoogle,
  faFacebookF,
  faGithub,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'gnosys-faicon',
  templateUrl: './gnosys-fa-icon.component.html',
  styleUrls: ['./gnosys-fa-icon.component.css'],
})
export class GnosysFaIconComponent {
  @Input() icon = '';

  get fa_icon() {
    switch (this.icon) {
      case 'faUnlock':
        return faUnlock;
      case 'faEnvelope':
        return faEnvelope;
      case 'faCloudUploadAlt':
        return faCloudUploadAlt;
      case 'faCloudDownloadAlt':
        return faCloudDownloadAlt;
      case 'faUser':
        return faUser;
      case 'faBuilding':
        return faBuilding;
      case 'faTrashAlt':
        return faTrashAlt;
      case 'faFileDownload':
        return faFileDownload;
      case 'faSignInAlt':
        return faSignInAlt;
      case 'faUserPlus':
        return faUserPlus;
      case 'faSignOutAlt':
        return faSignOutAlt;
      case 'faTimes':
        return faTimes;
      case 'faTrash':
        return faTrash;
      case 'faHandshake':
        return faHandshake;
      case 'faLinkedin':
        return faLinkedinIn;
      case 'faGoogle':
        return faGoogle;
      case 'faFacebook':
        return faFacebookF;
      case 'faGithub':
        return faGithub;
      case 'faKey':
        return faKey;
      case 'faClipboardCheck':
        return faClipboardCheck;
      case 'faCogs':
        return faCogs;
      case 'faCodeBranch':
        return faCodeBranch;
      case 'faSave':
        return faSave;
      case 'faFileArchive':
        return faFileArchive;
      default:
        return faQuestion;
    }
  }
}
