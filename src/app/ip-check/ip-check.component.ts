import { Component, OnInit } from '@angular/core';
import { IpApiService } from './service/ip-api.service';

@Component({
  selector: 'app-ip-check',
  templateUrl: './ip-check.component.html',
  styleUrls: ['./ip-check.component.css']
})
export class IpCheckComponent implements OnInit {

  ip: string;
  ipData: string;

  constructor(private ipApiService: IpApiService) {
  }

  ngOnInit() {
  }

  getIpData() {
    this.ipData = null;
    this.ipApiService.getIpData(this.ip).subscribe(res => this.ipData = JSON.stringify(res, null, 2));
  }
}
