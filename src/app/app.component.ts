import { Component, ViewChild, ComponentFactoryResolver, OnInit } from '@angular/core';
import { HolderComponent } from './holder/holder.component';
import { AddComponentDirective } from './add-component.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  @ViewChild(AddComponentDirective) appAddComponent: AddComponentDirective;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {

  }
  loadComponent() {
    const componentFactory = this.
      componentFactoryResolver.resolveComponentFactory(HolderComponent);
    this.appAddComponent.viewContainerRef.createComponent(componentFactory);

  }
  ngOnInit() {
    this.loadComponent();
  }

}
