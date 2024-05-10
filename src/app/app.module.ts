import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { CounterModule } from './counter/counter.module';
// import { HeroesModule } from './heroes/heroes.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DbzModule } from './dbz/dbz.module';

// import { CounterComponent } from './counter/counter.component';
// import { HeroComponent } from './heroes/components/hero/hero.component';
// import { ListComponent } from './heroes/components/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    // CounterComponent,
    // HeroComponent,
    // ListComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    // CounterModule,
    // HeroesModule
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
