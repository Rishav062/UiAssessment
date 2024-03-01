import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [MatToolbarModule,MatTableModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})
export class StudentListComponent {
  students:any[] = [
    { name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210' },
    { name: 'Alice Johnson', email: 'alice@example.com', phone: '555-555-5555' },
    { name: 'Robert Brown', email: 'robert@example.com', phone: '111-222-3333' },
    { name: 'Emily Davis', email: 'emily@example.com', phone: '444-444-4444' },
    { name: 'Michael Wilson', email: 'michael@example.com', phone: '777-777-7777' },
    { name: 'Sarah Taylor', email: 'sarah@example.com', phone: '999-999-9999' },
    { name: 'David Martinez', email: 'david@example.com', phone: '666-666-6666' },
    { name: 'Laura Anderson', email: 'laura@example.com', phone: '888-888-8888' },
    { name: 'Christopher Thomas', email: 'christopher@example.com', phone: '555-555-5555' },
    { name: 'Jessica Hernandez', email: 'jessica@example.com', phone: '222-222-2222' },
    { name: 'Daniel Young', email: 'daniel@example.com', phone: '333-333-3333' },
    { name: 'Ashley Lee', email: 'ashley@example.com', phone: '111-111-1111' },
    { name: 'Matthew Walker', email: 'matthew@example.com', phone: '444-444-4444' },
    { name: 'Emma Perez', email: 'emma@example.com', phone: '777-777-7777' },
    { name: 'Andrew Hall', email: 'andrew@example.com', phone: '999-999-9999' },
    { name: 'Olivia Allen', email: 'olivia@example.com', phone: '888-888-8888' },
    { name: 'James Sanchez', email: 'james@example.com', phone: '666-666-6666' },
    { name: 'Isabella Wright', email: 'isabella@example.com', phone: '555-555-5555' },
    { name: 'William King', email: 'william@example.com', phone: '222-222-2222' }
  ];
  
  displayedColumns: string[] = ['name', 'email', 'phone'];
  dataSource = this.students;
}
