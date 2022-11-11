import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { USERS } from '../../users';
import { UsersModule } from '../../users.module';
import { UsersCardComponent } from './users-card.component';
import { RouterTestingModule } from '@angular/router/testing';
import { routes, UsersRoutingModule } from '../../users-routing.module';
import { DebugElement, EventEmitter } from '@angular/core';
import { By } from '@angular/platform-browser';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppDashboardModule } from 'src/app/modules/dashboard/app-dashboard.module';

describe('UsersCardComponent', () => {
  let component: UsersCardComponent;
  let fixture: ComponentFixture<UsersCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersCardComponent],
      imports: [
        CommonModule,
        SharedModule,
        ReactiveFormsModule,
        AppDashboardModule,
        UsersRoutingModule,
        MatSnackBarModule,
        UsersModule,
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes(routes),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`hideMales should be defined`, () => {
    expect(component.hideMales).toBeDefined();
  });

  it(`hideMales should be falsy`, () => {
    expect(component.hideMales).toBeFalse();
  });

  it(`activateCards should be defined`, () => {
    expect(component.activateCards).toBeDefined();
  });

  it(`activateCards should be falsy`, () => {
    expect(component.activateCards).toBeFalse();
  });

  it(`user to be undefined`, () => {
    expect(component.user).toBeUndefined();
  });

  it(`switchGender to be EventEmitter`, () => {
    expect(component.switchGender).toBeInstanceOf(EventEmitter);
  });

  it(`switchGender to be defined`, () => {
    expect(component.switchGender).toBeDefined();
  });

  it(`activateCard to be EventEmitter`, () => {
    expect(component.activate).toBeInstanceOf(EventEmitter);
  });

  it(`activateCard to be defined`, () => {
    expect(component.activate).toBeDefined();
  });

  it('should emit when changeGender() is called', () => {
    spyOn(component.switchGender, 'emit');
    component.changeGender(USERS[0]);
    expect(component.switchGender.emit).toHaveBeenCalledOnceWith(USERS[0]);
  });

  it('should emit when activateCard() is called', () => {
    spyOn(component.activate, 'emit');
    component.activateCard(USERS[0]);
    expect(component.activate.emit).toHaveBeenCalledOnceWith(USERS[0]);
  });

  it('should navigate to edit form when editUser() is called', () => {
    spyOn(component.router, 'navigate');
    component.editUser(USERS[0]);
    expect(component.router.navigate).toHaveBeenCalledOnceWith([
      `/users/edit/${USERS[0].userInfo.name}`,
    ]);
  });
});
