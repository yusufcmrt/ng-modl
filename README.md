# NgModl

A simple Angular 8 dialog, with built-in solutions for features including:
* Alert
* Confirm
* Custom Dialog Content

## Installation
```shell script
npm install ng-modl
```

## Usage
1. Import *BrowserAnimationsModule* and *NgModlModule*
```typescript
import {AppComponent} from './app.component';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModlModule} from 'ng-modl';

@NgModule({
  imports: [
  // ...
  BrowserAnimationsModule,
  NgModlModule,
  // ...
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

2. Inject *NgModlService*
```typescript
import {Component} from '@angular/core';
import {NgModlService} from 'ng-modl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private modlService: NgModlService) {
  }
}
```

## API
### NgModlOption
* `width` (`number` | default: ) set dialog width
* `height` (`number` | default: ) set dialog height
* `minWidth` (`number` | default: ) set dialog minWidth
* `minHeight` (`number` | default: ) set dialog minHeight
* `maxWidth` (`number` | default: ) set dialog maxWidth
* `maxHeight` (`number` | default: ) set dialog maxHeight
* `inputs` (`{[field: string]: any}` | default: ) set inputs
* `outputs` (`{[field: string]: $event => any}` | default: ) handle output events


# Usage and Sample

