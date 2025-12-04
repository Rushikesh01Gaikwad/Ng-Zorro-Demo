import { Component, inject } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFloatButtonModule } from 'ng-zorro-antd/float-button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { MenuFoldOutline, MenuUnfoldOutline } from '@ant-design/icons-angular/icons';


interface ItemData {
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'app-home',
  imports: [
    NzButtonModule,
    CommonModule,
    FormsModule,
    NzIconModule,
    NzFloatButtonModule,
    NzDividerModule,
    NzBreadCrumbModule,
    NzLayoutModule,
    NzMenuModule,
    NzUploadModule,
    NzPopconfirmModule,
    NzSpaceModule,
    NzStepsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzCheckboxModule,
    NzFormModule,
    NzInputModule,
    NzAvatarModule,
    NzAlertModule,
    NzBadgeModule,
    NzCardModule,
    NzEmptyModule,
    NzTableModule,
    NzTagModule,
    NzModalModule ,
    NzProgressModule,
    
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  isLoadingOne = false;
  isLoadingTwo = false;
  isCollapsed = false;
  current = 1;
  labelOfSaveNext = 'Save';

  protected readonly date = new Date();

  constructor(private message: NzMessageService, private notification: NzNotificationService) {}

  listOfColumn = [
    {
      title: 'Name',
      compare: (a: ItemData, b: ItemData) => a.name.localeCompare(b.name),
      priority: 1,
    },
    {
      title: 'Age',
      compare: (a: ItemData, b: ItemData) => a.age - b.age,
      priority: 2,
      width: '100px',
    },
    {
      title: 'Address',
      compare: (a: ItemData, b: ItemData) => a.address.localeCompare(b.address),
      priority: 3,
    },
  ];

  loadOne(): void {
    this.isLoadingOne = true;
    setTimeout(() => {
      this.isLoadingOne = false;
      this.labelOfSaveNext = 'Saved';
      this.createNotification('success');
    }, 5000);
  }

  loadTwo(): void {
    this.isLoadingTwo = true;
    setTimeout(() => {
      this.isLoadingTwo = false;
    }, 5000);
  }

  index = 0;
  maxIndex = 3;

  onIndexChange(event: number): void {
    this.index = event;
  }

  next(): void {
    if (this.index < this.maxIndex) {
      this.index++;
    }
  }

  prev(): void {
    if (this.index > 0) {
      this.index--;
    }
  }

  getStatus(step: number): 'wait' | 'process' | 'finish' {
    if (step < this.index) {
      return 'finish';
    } else if (step === this.index) {
      return 'process';
    } else {
      return 'wait';
    }
  }

  private fb = inject(NonNullableFormBuilder);
  validateForm = this.fb.group({
    username: this.fb.control('', [Validators.required]),
    password: this.fb.control('', [Validators.required]),
    remember: this.fb.control(true),
  });

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      this.createBasicMessage();
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  createBasicMessage(): void {
    this.message.success(
      'This is a prompt message for success, and it will disappear in 10 seconds',
      {
        nzDuration: 10000,
      }
    );
  }

  listOfData: ItemData[] = [];

  ngOnInit(): void {
    const data: ItemData[] = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
      });
    }
    this.listOfData = data;
  }

  isVisible = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  createNotification(type: string): void {
    this.notification.create(
      type,
      'Data saved successfully',
      'You can now view and edit your saved data.'
    );
  }

  cancel(): void {
    this.message.info('Cancelled');
  }

  confirm(): void {
    this.message.info('Confirmed');
  }

  beforeConfirm(): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, 3000);
    });
  }
}
