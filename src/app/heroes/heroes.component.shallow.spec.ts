import {ComponentFixture, TestBed} from "@angular/core/testing";
import {HeroesComponent} from "./heroes.component";
import {HeroService} from "../hero.service";
import {Component, EventEmitter, Input, NO_ERRORS_SCHEMA, Output} from "@angular/core";
import {Observable, of} from "rxjs";
import {Hero} from "../hero";
import {By} from "@angular/platform-browser";

describe('HeroesComponent (shallow tests', () => {
  let fixture: ComponentFixture<HeroesComponent>;
  let mockHeroService: { getHeroes: { and: { returnValue: (arg0: Observable<any>) => void; }; }; };
  let HEROES;


  beforeEach(() => {
    HEROES = [
      {id:1, name: 'SpiderDude', strength: 8},
      {id:2, name: 'Wonderful Woman', strength: 24},
      {id:3, name: 'SuperDude', strength: 55}
    ]

    mockHeroService = jasmine.createSpyObj([['getHeroes', 'addHero', 'deleteHero']])


    TestBed.configureTestingModule({
      declarations: [HeroesComponent],
      providers: [
        {provide: HeroService, useValue: mockHeroService }
      ],
       schemas: [NO_ERRORS_SCHEMA]
    })
    fixture = TestBed.createComponent(HeroesComponent);

    it('should set heroes correctly from the service', () => {
      mockHeroService.getHeroes.and.returnValue(of(HEROES))
      fixture.detectChanges();

      expect(fixture.componentInstance.heroes.length).toBe(3);
    })

  });



})
