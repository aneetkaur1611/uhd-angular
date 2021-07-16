import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],


})
export class HomeComponent implements OnInit {
  
  tabs = [
    { title: 'Business', content: `Why Choose UHD?`, 
    subheading1: `Affordability`, desc1:`With the lowest tuition of any university in Houston, UHD provides an excellent education at an
    affordable rate, freeing up your income while in school, and leaving you with less debt after graduation.
    Our goal is to make the financial part of education as stress-free as possible so you focus on earning
    your degree.`,
    subheading2: `flexibility`, desc2:`Work-life balance can be tough. That’s why we offer a wide range of day, evening, weekend, online and
    hybrid course options to fit every schedule. UHD ranks #22 among top colleges for adults returning to
    school according to Best College Reviews. With locations across Houston and online, we can fit any
    schedule!`,
    subheading3: ` Earning Ability`, desc3:`UHD ranks as one of the best Texas universities based on alumni salary. First-year earnings of UHD grads
    are the third highest in the state according to College Measures. A degree from UHD will set you up with a
    strong earning potential.`
  },
    { title: 'Completion', content: 'Completion',
     subheading1: ` Earning Ability`, desc1:`UHD ranks as one of the best Texas universities based on alumni salary. First-year earnings of UHD grads
    are the third highest in the state according to College Measures. A degree from UHD will set you up with a
    strong earning potential.`,
    subheading2: `Affordability`, desc2:`With the lowest tuition of any university in Houston, UHD provides an excellent education at an
    affordable rate, freeing up your income while in school, and leaving you with less debt after graduation.
    Our goal is to make the financial part of education as stress-free as possible so you focus on earning
    your degree.`,
    subheading3: `flexibility`, desc3:`Work-life balance can be tough. That’s why we offer a wide range of day, evening, weekend, online and
    hybrid course options to fit every schedule. UHD ranks #22 among top colleges for adults returning to
    school according to Best College Reviews. With locations across Houston and online, we can fit any
    schedule!`},
    { title: 'Criminal Justice', content: 'Criminal Justice',
    subheading1: `flexibility`, desc1:`Work-life balance can be tough. That’s why we offer a wide range of day, evening, weekend, online and
    hybrid course options to fit every schedule. UHD ranks #22 among top colleges for adults returning to
    school according to Best College Reviews. With locations across Houston and online, we can fit any
    schedule!`,
    subheading2: ` Earning Ability`, desc2:`UHD ranks as one of the best Texas universities based on alumni salary. First-year earnings of UHD grads
    are the third highest in the state according to College Measures. A degree from UHD will set you up with a
    strong earning potential.` ,
    subheading3: `Affordability`, desc3:`With the lowest tuition of any university in Houston, UHD provides an excellent education at an
    affordable rate, freeing up your income while in school, and leaving you with less debt after graduation.
    Our goal is to make the financial part of education as stress-free as possible so you focus on earning
    your degree.`,},
    { title: 'Education ', content: 'Education ', 
    subheading1: `Affordability`, desc1:`With the lowest tuition of any university in Houston, UHD provides an excellent education at an
    affordable rate, freeing up your income while in school, and leaving you with less debt after graduation.
    Our goal is to make the financial part of education as stress-free as possible so you focus on earning
    your degree.`,
    subheading2: `flexibility`, desc2:`Work-life balance can be tough. That’s why we offer a wide range of day, evening, weekend, online and
    hybrid course options to fit every schedule. UHD ranks #22 among top colleges for adults returning to
    school according to Best College Reviews. With locations across Houston and online, we can fit any
    schedule!`,
    subheading3: ` Earning Ability`, desc3:`UHD ranks as one of the best Texas universities based on alumni salary. First-year earnings of UHD grads
    are the third highest in the state according to College Measures. A degree from UHD will set you up with a
    strong earning potential.`},
    { title: 'Humanities & Social Sciences ', content: 'Humanities & Social Sciences ',
    subheading1: ` Earning Ability`, desc1:`UHD ranks as one of the best Texas universities based on alumni salary. First-year earnings of UHD grads
    are the third highest in the state according to College Measures. A degree from UHD will set you up with a
    strong earning potential.`,
    subheading2: `Affordability`, desc2:`With the lowest tuition of any university in Houston, UHD provides an excellent education at an
    affordable rate, freeing up your income while in school, and leaving you with less debt after graduation.
    Our goal is to make the financial part of education as stress-free as possible so you focus on earning
    your degree.`,
    subheading3: `flexibility`, desc3:`Work-life balance can be tough. That’s why we offer a wide range of day, evening, weekend, online and
    hybrid course options to fit every schedule. UHD ranks #22 among top colleges for adults returning to
    school according to Best College Reviews. With locations across Houston and online, we can fit any
    schedule!`},
    { title: 'Public Service ', content: 'Public Service ', 
    subheading1: `flexibility`, desc1:`Work-life balance can be tough. That’s why we offer a wide range of day, evening, weekend, online and
    hybrid course options to fit every schedule. UHD ranks #22 among top colleges for adults returning to
    school according to Best College Reviews. With locations across Houston and online, we can fit any
    schedule!`,
    subheading2: ` Earning Ability`, desc2:`UHD ranks as one of the best Texas universities based on alumni salary. First-year earnings of UHD grads
    are the third highest in the state according to College Measures. A degree from UHD will set you up with a
    strong earning potential.` ,
    subheading3: `Affordability`, desc3:`With the lowest tuition of any university in Houston, UHD provides an excellent education at an
    affordable rate, freeing up your income while in school, and leaving you with less debt after graduation.
    Our goal is to make the financial part of education as stress-free as possible so you focus on earning
    your degree.` },
    { title: 'Science ', content: 'Science ', 
    subheading1: `Affordability`, desc1:`With the lowest tuition of any university in Houston, UHD provides an excellent education at an
    affordable rate, freeing up your income while in school, and leaving you with less debt after graduation.
    Our goal is to make the financial part of education as stress-free as possible so you focus on earning
    your degree.`,
    subheading2: `flexibility`, desc2:`Work-life balance can be tough. That’s why we offer a wide range of day, evening, weekend, online and
    hybrid course options to fit every schedule. UHD ranks #22 among top colleges for adults returning to
    school according to Best College Reviews. With locations across Houston and online, we can fit any
    schedule!`,
    subheading3: ` Earning Ability`, desc3:`UHD ranks as one of the best Texas universities based on alumni salary. First-year earnings of UHD grads
    are the third highest in the state according to College Measures. A degree from UHD will set you up with a
    strong earning potential.` }
  ];

  constructor() { }
  ngOnInit(): void {
  }
 
}
