import { Component, OnInit } from '@angular/core';
import { Member } from '../../models/member.model';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.scss']
})
export class MembersListComponent implements OnInit {

  members: Array<Member> = [
    {
      id: 1,
      name: 'Nathan',
      monthlyPayment: 150,
      lastPaymentDate: new Date(),
      inclusionDate: new Date()
    },
    {
      id: 2,
      name: 'Allan',
      monthlyPayment: 150,
      lastPaymentDate: new Date(),
      inclusionDate: new Date()
    },
    {
      id: 3,
      name: 'Paulo',
      monthlyPayment: 150,
      lastPaymentDate: new Date(),
      inclusionDate: new Date()
    },
    {
      id: 4,
      name: 'Mauricio',
      monthlyPayment: 150,
      lastPaymentDate: new Date(),
      inclusionDate: new Date()
    },
    {
      id: 5,
      name: 'Palloma',
      monthlyPayment: 150,
      lastPaymentDate: new Date(),
      inclusionDate: new Date()
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
