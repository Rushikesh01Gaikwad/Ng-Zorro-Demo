import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { routes } from './app.routes';
import { provideNzIcons } from 'ng-zorro-antd/icon';

import {
  SyncOutline,
  UserOutline,
  HomeOutline,
  DashboardOutline,
  SettingOutline,
  LogoutOutline,
  MenuFoldOutline,
  MenuUnfoldOutline,
  PlusOutline,
  EditOutline,
  DeleteOutline,
  SearchOutline,
  BellOutline,
  FolderOpenOutline,
  FileOutline,
  BookOutline,
  ShoppingCartOutline,
  StarOutline,
  TeamOutline,
  CalendarOutline,
  PieChartOutline,
  BarChartOutline,
  DatabaseOutline,
  ToolOutline
} from '@ant-design/icons-angular/icons';


import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimationsAsync(),
    importProvidersFrom(HttpClientModule),
    provideRouter(routes),
    { provide: NZ_I18N, useValue: en_US },

    // ✅ REGISTER ALL ICONS HERE
    provideNzIcons([
      SyncOutline,
      MenuFoldOutline,
      MenuUnfoldOutline,
      UserOutline,
  HomeOutline,
  DashboardOutline,
  SettingOutline,
  LogoutOutline,
  PlusOutline,
  EditOutline,
  DeleteOutline,
  SearchOutline,
  BellOutline,
  FolderOpenOutline,
  FileOutline,
  BookOutline,
  ShoppingCartOutline,
  StarOutline,
  TeamOutline,
  CalendarOutline,
  PieChartOutline,
  BarChartOutline,
  DatabaseOutline,
  ToolOutline
    ])
  ],
};
