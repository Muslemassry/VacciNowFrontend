import { Component, OnInit } from '@angular/core';
import { Branch } from '../classes';
import { VaccNowService } from '../vacc-now.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-all-branches',
  templateUrl: './list-all-branches.component.html',
  styleUrls: ['./list-all-branches.component.css']
})
export class ListAllBranchesComponent implements OnInit {
  branches: Branch[] = [];

  constructor(private vaccNowService: VaccNowService, private router: Router) { 
  }

  getBranches(): void {
    this.vaccNowService.listAllBranches().subscribe(branches => this.branches = branches);
  }

  setBranchAndNavigate(branch : Branch): void {
    this.vaccNowService.setBranch(branch);
    this.router.navigate(['branchDetails']);
  }

  ngOnInit() {
    this.getBranches();
  }
}
