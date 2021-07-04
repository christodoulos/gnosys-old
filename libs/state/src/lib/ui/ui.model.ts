export interface MenuEntry {
  icon?: string;
  text: string;
  url: string;
}

export interface LandingSidebarMenu {
  entries: Array<MenuEntry>;
  active: number;
}

export interface GnosysUI {
  landingSidebarMenu: LandingSidebarMenu;
}
