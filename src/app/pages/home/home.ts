import { Component } from '@angular/core';
import { Navbar } from '../../layout/navbar/navbar';
import { Footer } from '../../layout/footer/footer';
import { Hero } from '../../sections/hero/hero';
import { About } from '../../sections/about/about';
import { Stack } from '../../sections/stack/stack';
import { Experience } from '../../sections/experience/experience';
import { Education } from '../../sections/education/education';
import { Projects } from '../../sections/projects/projects';
import { Contact } from '../../sections/contact/contact';

@Component({
  selector: 'app-home',
  imports: [
    Navbar,
    Hero,
    About,
    Stack,
    Experience,
    Education,
    Projects,
    Contact,
    Footer,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}