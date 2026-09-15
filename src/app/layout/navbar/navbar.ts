import { Component, signal } from '@angular/core';
@Component({selector:'app-navbar',imports:[],templateUrl:'./navbar.html',styleUrl:'./navbar.css'})
export class Navbar { open = signal(false); close(){this.open.set(false);} }
