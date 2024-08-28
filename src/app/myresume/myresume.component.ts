import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExperienceDialogComponent } from '../popup/experience-dialog/experience-dialog.component';
import { ContactMeComponent } from '../popup/contact-me/contact-me.component';
import 'jspdf-autotable';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-myresume',
  templateUrl: './myresume.component.html',
  styleUrls: ['./myresume.component.scss']
})
export class MyresumeComponent implements OnInit {
  showHobbies = false;
  base64String: BlobPart;

  constructor(private dialog: MatDialog) { }

  name = 'Khushboo Devi';
  jobTitle = 'Front-End Developer';
  contactInfo = {
    email: 'khushboodevi343@gmail.com',
    phone: '+91-9140544858',
    linkedIn: 'https://www.linkedin.com/in/khushboo-devi-052294198/'
  };
  imageUrl = 'assets/img/brand/ppic.jpg';

  experiences = [
    {
      dates: 'June 2022 - Present',
      description: 'Developed and maintained responsive, user-friendly web applications using HTML, CSS, JavaScript, TypeScript, and Angular, collaborating with UX/UI designers and backend developers. Ensured cross-browser compatibility, optimized performance, conducted testing, resolved technical issues, and maintained code documentation with Git.'
    }
  ];

  education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'AKTU Lucknow',
      graduationDate: '2020'
    }

  ];
  hieghschool = [
    {
      degree: 'High School (10th)',
      institution: 'U.P Board',
      graduationDate: '2013'
    }
  ];
  enterclass=[
    {
      degree: 'Intermediate (12th)',
      institution: 'U.P Board',
      graduationDate: '2015'
    }
  ]
  skills = [
    { name: 'Angular', rating: 5 },
    { name: 'TypeScript', rating: 4 },
    { name: 'JavaScript', rating: 4 },
    { name: 'HTML/CSS', rating: 5 },
  ];


  portfolio = [
    {
      title: 'Project One',
      description: 'Contributed to the development of SoftCTL, a next-generation cloud-based ERP software tailored forthe courier & cargo, logistics, transport, and warehouse c cargo, logistics, transport, and warehouse industry.',
      link: 'https://softctl.dvcexpress.in/#/auth/login'
    },

  ];

  timeline = [
    {
      date: 'August 2024',
      description: 'Completed assignment for creating a static web resume using Angular.'
    },
    {
      date: 'July 2024',
      description: 'Started working on the SoftCTL project.'
    },
  ];
  jobs = [
    { title: 'Frontend Developer', company: 'Neotech IT Services', description: 'Passionate and skilled Frontend Developer with over 2 years of experience in building dynamic and responsive web applications using modern frameworks and technologies such as Angular, TypeScript, JavaScript, and HTML/CSS. Proven track record of delivering high-quality projects on time while ensuring optimal user experience and performance. Excellent problem-solving and communication skills, with a keen interest in implementing innovative solutions and staying abreast of the latest industry trends.' },
  ];
contact=[
]
   toggleHobbies(): void {
    this.showHobbies = !this.showHobbies;
  }

  openDialog(job: any): void {
    this.dialog.open(ExperienceDialogComponent, {
      data: job,
       width: '400px',   // Set the width of the dialog
      height: '500px'
    });
  }
  openContact(contact: any): void {
    this.dialog.open(ContactMeComponent, {
      data: contact,
      width: '700px',
      height: '550px'
    });
  }

  onClickDownloadPdf() {
    const data = document.getElementById('resumeContent');

    if (data) {
      html2canvas(data).then(canvas => {
        const imgWidth = 208;
        const pageHeight = 295;
        const imgHeight = canvas.height * imgWidth / canvas.width;
        let heightLeft = imgHeight;

        const doc = new jsPDF('p', 'mm', 'a4');
        let position = 0;

        doc.addImage(canvas, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          doc.addPage();
          doc.addImage(canvas, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        doc.save('Resume.pdf'); // Generated PDF name
      });
    }
  }
  ngOnInit(): void {
  }
  // generatePDF() {
  //   const doc = new jsPDF();
  //   doc.text(`Resume - ${this.name}`, 10, 10);
  //   // Add more content to the PDF here
  //   doc.save('resume.pdf');
  // }
}
