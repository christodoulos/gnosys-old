export interface Alert {
  id: string | undefined;
  type: AlertType | undefined;
  message: string | undefined;
  autoclose?: boolean | undefined;
  keepAfterRouteChange?: boolean | undefined;
}

export enum AlertType {
  Success,
  Error,
  Info,
  Warning,
}

export interface AlertOptions {
  autoclose?: boolean | undefined;
  keepAfterRouteChange?: boolean | undefined;
}
