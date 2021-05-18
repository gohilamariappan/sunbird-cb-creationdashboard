
import { DOCUMENT } from '@angular/common'
import { AfterViewInit, Component, Inject, OnDestroy, OnInit } from '@angular/core'
/* tslint:disable */
import _ from 'lodash'
import { environment } from '../../../../../../../../../src/environments/environment'
import { ProfileV2Service } from '../../services/home.servive'
/* tslint:enable */

@Component({
  selector: 'ws-app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  /* tslint:disable */
  host: { class: 'flex flex-1 margin-top-l' },
  /* tslint:enable */
})

export class WelcomeComponent implements OnInit, AfterViewInit, OnDestroy {
  sliderData1!: any
  sliderData2!: any
  sliderData3!: any
  sliderData4!: any
  sliderData5!: any

  resolutionFilter = 'week'
  compFilter = 'table'
  showCBPLink = false
  showKarmayogiLink = false

  constructor(@Inject(DOCUMENT) private document: Document, private homeResolver: ProfileV2Service) {
    this.sliderData1 = {
      widgetType: 'slider',
      widgetSubType: 'sliderBanners',
      style: {
        'border-radius': '8px',
      },
      widgetData: [
        {
          banners: {
            l: 'assets/instances/eagle/cbc_welcome/banner.png',
            m: 'assets/instances/eagle/cbc_welcome/banner.png',
            s: 'assets/instances/eagle/cbc_welcome/banner.png',
            xl: 'assets/instances/eagle/cbc_welcome/banner.png',
            xs: 'assets/instances/eagle/cbc_welcome/banner.png',
            xxl: 'assets/instances/eagle/cbc_welcome/banner.png',
          },
        },
      ],
    }
    this.sliderData2 = {
      widgetType: 'slider',
      widgetSubType: 'sliderBanners',
      style: {
        'border-radius': '8px',
      },
      widgetData: [
        {
          banners: {
            l: 'assets/instances/eagle/cbc_welcome/thisweek.png',
            m: 'assets/instances/eagle/cbc_welcome/thisweek.png',
            s: 'assets/instances/eagle/cbc_welcome/thisweek.png',
            xl: 'assets/instances/eagle/cbc_welcome/thisweek.png',
            xs: 'assets/instances/eagle/cbc_welcome/thisweek.png',
            xxl: 'assets/instances/eagle/cbc_welcome/thisweek.png',
          },
        },
      ],
    }
    this.sliderData3 = {
      widgetType: 'slider',
      widgetSubType: 'sliderBanners',
      style: {
        'border-radius': '8px',
      },
      widgetData: [
        {
          banners: {
            l: 'assets/instances/eagle/cbc_welcome/tranding.png',
            m: 'assets/instances/eagle/cbc_welcome/tranding.png',
            s: 'assets/instances/eagle/cbc_welcome/tranding.png',
            xl: 'assets/instances/eagle/cbc_welcome/tranding.png',
            xs: 'assets/instances/eagle/cbc_welcome/tranding.png',
            xxl: 'assets/instances/eagle/cbc_welcome/tranding.png',
          },
        },
      ],
    }
    this.sliderData4 = {
      widgetType: 'slider',
      widgetSubType: 'sliderBanners',
      style: {
        'border-radius': '8px',
      },
      widgetData: [
        {
          banners: {
            l: 'assets/instances/eagle/cbc_welcome/cbpUploads.png',
            m: 'assets/instances/eagle/cbc_welcome/cbpUploads.png',
            s: 'assets/instances/eagle/cbc_welcome/cbpUploads.png',
            xl: 'assets/instances/eagle/cbc_welcome/cbpUploads.png',
            xs: 'assets/instances/eagle/cbc_welcome/cbpUploads.png',
            xxl: 'assets/instances/eagle/cbc_welcome/cbpUploads.png',
          },
        },
      ],
    }
    this.sliderData5 = {
      widgetType: 'slider',
      widgetSubType: 'sliderBanners',
      style: {
        'border-radius': '8px',
      },
      widgetData: [
        {
          banners: {
            l: 'assets/instances/eagle/cbc_welcome/compcoverage.png',
            m: 'assets/instances/eagle/cbc_welcome/compcoverage.png',
            s: 'assets/instances/eagle/cbc_welcome/compcoverage.png',
            xl: 'assets/instances/eagle/cbc_welcome/compcoverage.png',
            xs: 'assets/instances/eagle/cbc_welcome/compcoverage.png',
            xxl: 'assets/instances/eagle/cbc_welcome/compcoverage.png',
          },
        },
      ],
    }
  }
  filterR(type: string) {
    this.resolutionFilter = type
  }
  filterComp(type: string) {
    this.compFilter = type
  }
  ngOnDestroy() {

  }
  ngOnInit() {
    this.getUserDetails()
    this.fetchRoles()
  }
  getUserDetails() {
    this.homeResolver.getUserDetails().subscribe((res: any) => {
      if (res.roles && res.roles.length > 0) {
        Object.keys(res.roles).forEach((key: any) => {
          const objVal = res.roles[key]
          if (objVal === 'CONTENT_CREATOR' || objVal === 'EDITOR' || objVal === 'PUBLISHER' || objVal === 'REVIEWER') {
            this.showCBPLink = true
          }
          if (objVal === 'Member') {
            this.showKarmayogiLink = true
          }
        })
      }
    })
  }
  fetchRoles() {
    const rolesAndAccessData: any[] = []
    this.homeResolver.getMyDepartment().subscribe((roles: any) => {
      roles.rolesInfo.forEach((role: { roleName: string }) => {
        rolesAndAccessData.push({
          role: role.roleName,
          count: roles.noOfUsers,
        })
      })
    })
  }

  openky() {
    this.openNewWindow()
  }
  openNewWindow(): void {
    const link = this.document.createElement('a')
    link.target = '_blank'
    link.href = environment.karmYogiPath
    link.click()
    link.remove()
  }
  openCBP() {
    this.openNewWindowCBP()
  }
  openNewWindowCBP(): void {
    const link = this.document.createElement('a')
    link.target = '_blank'
    link.href = environment.cbpPath
    link.click()
    link.remove()
  }
  ngAfterViewInit() {
  }
}
