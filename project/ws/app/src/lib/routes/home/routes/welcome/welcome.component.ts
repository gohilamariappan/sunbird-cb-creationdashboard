
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

  selectedDashboardId = "";

  // List of available dashboards
  dashboardList = [
    {
      statusInfo: {
        statusCode: 200,
        statusMessage: "success",
        errorMessage: "",
      },
      responseData: [
        {
          name: "Overview",
          id: "overview",
        },
        {
          name: "Informatics",
          id: "informatics",
        },
      ],
    },
  ];

  currentDashboard: any = [];

  dashboardOne = {
    showFilters: "false",
    showWidgets: "false",
    // filtersDetails: [
    //   {
    //     name: "Content",
    //     id: 1,
    //     key: "content",
    //     values: [
    //       "All",
    //       "Collection",
    //       "Course",
    //       "Knowledge Board",
    //       "Learning Path",
    //       "Resource",
    //     ],
    //   },
    // ],
    visualizationDetails: [
      {
        row: 1,
        name: "Visualization Row 1",
        vizArray: [
          {
            id: 23,
            name: "Learning Trend",
            dimensions: {
              height: 250,
              width: 12,
            },
            vizType: "chart",
            noUnit: true,
            charts: [
              {
                id: "learningTrend",
                name: "Learning Trend",
                code: "",
                chartType: "line_bar",
                filter: "",
                headers: [],
              },
            ],
          },

        ],
      },
      {
        row: 2,
        name: "Visualization Row 2",
        vizArray: [
          {
            id: 21,
            name: "Diversity",
            dimensions: {
              height: 250,
              width: 6,
            },
            vizType: "chart",
            noUnit: true,
            isCollapsible: false,
            charts: [
              {
                id: "diversity",
                name: "Diversity",
                code: "",
                chartType: "polararea",
                filter: "",
                headers: [],
              },
            ],
          },
          {
            id: 12,
            name: "Learning Time Trend",
            dimensions: {
              height: 250,
              width: 6,
            },
            vizType: "chart",
            noUnit: true,
            charts: [
              {
                id: "learningTime",
                name: "Learning Time Trend",
                code: "",
                chartType: "line",
                filter: "",
                headers: [],
              },
            ],
          },

        ],
      }
    ],
    chartDetails: [
      {
        statusInfo: {
          statusCode: 200,
          statusMessage: "success",
          errorMessage: "",
        },
        responseData: {
          chartType: "line",
          visualizationCode: "learningTime",
          chartFormat: null,
          drillDownChartId: "none",
          filterKeys: null,
          customData: null,
          dates: null,
          filter: null,
          data: [
            {
              headerName: "Learning Time",
              headerValue: 431720.3772538068,
              headerSymbol: "number",
              colorPaletteCode: null,
              colorPaletteId: null,
              plots: [
                {
                  label: "Header",
                  name: "Apr-2020",
                  value: 631.8648329412255,
                  valueLabel: "Value",
                  symbol: "number",
                  parentName: null,
                  parentLabel: null,
                },
                {
                  label: "Header",
                  name: "May-2020",
                  value: 295.25799994127203,
                  valueLabel: "Value",
                  symbol: "number",
                  parentName: null,
                  parentLabel: null,
                },
                {
                  label: "Header",
                  name: "Jun-2020",
                  value: 1658.7826694690932,
                  valueLabel: "Value",
                  symbol: "number",
                  parentName: null,
                  parentLabel: null,
                },
                {
                  label: "Header",
                  name: "Jul-2020",
                  value: 64810.795044640516,
                  valueLabel: "Value",
                  symbol: "number",
                  parentName: null,
                  parentLabel: null,
                },
                {
                  label: "Header",
                  name: "Aug-2020",
                  value: 94765.17582970156,
                  valueLabel: "Value",
                  symbol: "number",
                  parentName: null,
                  parentLabel: null,
                },
                {
                  label: "Header",
                  name: "Sep-2020",
                  value: 62954.23232729481,
                  valueLabel: "Value",
                  symbol: "number",
                  parentName: null,
                  parentLabel: null,
                },
                {
                  label: "Header",
                  name: "Oct-2020",
                  value: 27367.78634477248,
                  valueLabel: "Value",
                  symbol: "number",
                  parentName: null,
                  parentLabel: null,
                },
                {
                  label: "Header",
                  name: "Nov-2020",
                  value: 67071.49751383436,
                  valueLabel: "Value",
                  symbol: "number",
                  parentName: null,
                  parentLabel: null,
                },
                {
                  label: "Header",
                  name: "Dec-2020",
                  value: 36885.41300287151,
                  valueLabel: "Value",
                  symbol: "number",
                  parentName: null,
                  parentLabel: null,
                },
                {
                  label: "Header",
                  name: "Jan-2021",
                  value: 44833.261666659295,
                  valueLabel: "Value",
                  symbol: "number",
                  parentName: null,
                  parentLabel: null,
                },
                {
                  label: "Header",
                  name: "Feb-2021",
                  value: 30446.310021680656,
                  valueLabel: "Value",
                  symbol: "number",
                  parentName: null,
                  parentLabel: null,
                },
              ],
              insight: null,
              isDecimal: null,
            },
          ],
        },
      },
      {
        statusInfo: {
          statusCode: 200,
          statusMessage: "success",
          errorMessage: "",
        },
        responseData: {
          chartType: "polararea",
          visualizationCode: "diversity",
          chartFormat: null,
          drillDownChartId: "none",
          filterKeys: null,
          customData: null,
          dates: null,
          filter: null,
          data: [
            {
              headerName: "Diversity",
              headerValue: 1228,
              headerSymbol: "number",
              colorPaletteCode: null,
              colorPaletteId: null,
              plots: [
                {
                  label: "Header",
                  name: "Male",
                  value: 843,
                  valueLabel: "Value",
                  symbol: "number",
                  parentName: null,
                  parentLabel: null,
                },
                {
                  label: "Header",
                  name: "Female",
                  value: 383,
                  valueLabel: "Value",
                  symbol: "number",
                  parentName: null,
                  parentLabel: null,
                },
                {
                  label: "Header",
                  name: "Others",
                  value: 2,
                  valueLabel: "Value",
                  symbol: "number",
                  parentName: null,
                  parentLabel: null,
                },
              ],
              insight: null,
              isDecimal: null,
            },
          ],
        },
      },
      {
        statusInfo: {
          statusCode: 200,
          statusMessage: "success",
          errorMessage: "",
        },
        responseData: {
          chartType: "line_bar",
          visualizationCode: "learningTrend",
          chartFormat: null,
          drillDownChartId: "none",
          filterKeys: null,
          customData: null,
          dates: null,
          filter: null,
          data: [
            {
              headerName: "Learning Time",
              headerValue: 431720.3772538068,
              headerSymbol: "number",
              colorPaletteCode: null,
              colorPaletteId: null,
              plots: [
                {
                  label: "Header",
                  name: "Apr-2020",
                  value: 631.8648329412255,
                  valueLabel: "Value",
                  symbol: "number",
                  parentName: null,
                  parentLabel: null,
                },
                {
                  label: "Header",
                  name: "May-2020",
                  value: 295.25799994127203,
                  valueLabel: "Value",
                  symbol: "number",
                  parentName: null,
                  parentLabel: null,
                },
                {
                  label: "Header",
                  name: "Jun-2020",
                  value: 1658.7826694690932,
                  valueLabel: "Value",
                  symbol: "number",
                  parentName: null,
                  parentLabel: null,
                },
                {
                  label: "Header",
                  name: "Jul-2020",
                  value: 64810.795044640516,
                  valueLabel: "Value",
                  symbol: "number",
                  parentName: null,
                  parentLabel: null,
                },
                {
                  label: "Header",
                  name: "Aug-2020",
                  value: 94765.17582970156,
                  valueLabel: "Value",
                  symbol: "number",
                  parentName: null,
                  parentLabel: null,
                },
                {
                  label: "Header",
                  name: "Sep-2020",
                  value: 62954.23232729481,
                  valueLabel: "Value",
                  symbol: "number",
                  parentName: null,
                  parentLabel: null,
                },
                {
                  label: "Header",
                  name: "Oct-2020",
                  value: 27367.78634477248,
                  valueLabel: "Value",
                  symbol: "number",
                  parentName: null,
                  parentLabel: null,
                },
                {
                  label: "Header",
                  name: "Nov-2020",
                  value: 67071.49751383436,
                  valueLabel: "Value",
                  symbol: "number",
                  parentName: null,
                  parentLabel: null,
                },
                {
                  label: "Header",
                  name: "Dec-2020",
                  value: 36885.41300287151,
                  valueLabel: "Value",
                  symbol: "number",
                  parentName: null,
                  parentLabel: null,
                },
                {
                  label: "Header",
                  name: "Jan-2021",
                  value: 44833.261666659295,
                  valueLabel: "Value",
                  symbol: "number",
                  parentName: null,
                  parentLabel: null,
                },
                {
                  label: "Header",
                  name: "Feb-2021",
                  value: 30446.310021680656,
                  valueLabel: "Value",
                  symbol: "number",
                  parentName: null,
                  parentLabel: null,
                },
              ],
              insight: null,
              isDecimal: null,
            },
            {
              headerName: "User Average",
              headerValue: 2414.6296621315787,
              headerSymbol: "number",
              colorPaletteCode: null,
              colorPaletteId: null,
              plots: [
                {
                  label: "Header",
                  name: "Apr-2020",
                  value: 21.06216109804085,
                  valueLabel: "Value",
                  symbol: "number",
                  parentName: null,
                  parentLabel: null,
                },
                {
                  label: "Header",
                  name: "May-2020",
                  value: 9.524451611008775,
                  valueLabel: "Value",
                  symbol: "number",
                  parentName: null,
                  parentLabel: null,
                },
                {
                  label: "Header",
                  name: "Jun-2020",
                  value: 36.861837099313185,
                  valueLabel: "Value",
                  symbol: "number",
                  parentName: null,
                  parentLabel: null,
                },
                {
                  label: "Header",
                  name: "Jul-2020",
                  value: 535.6264053276076,
                  valueLabel: "Value",
                  symbol: "number",
                  parentName: null,
                  parentLabel: null,
                },
                {
                  label: "Header",
                  name: "Aug-2020",
                  value: 357.60443709321345,
                  valueLabel: "Value",
                  symbol: "number",
                  parentName: null,
                  parentLabel: null,
                },
                {
                  label: "Header",
                  name: "Sep-2020",
                  value: 319.56463110301934,
                  valueLabel: "Value",
                  symbol: "number",
                  parentName: null,
                  parentLabel: null,
                },
                {
                  label: "Header",
                  name: "Oct-2020",
                  value: 150.37245244380483,
                  valueLabel: "Value",
                  symbol: "number",
                  parentName: null,
                  parentLabel: null,
                },
                {
                  label: "Header",
                  name: "Nov-2020",
                  value: 309.0852419992367,
                  valueLabel: "Value",
                  symbol: "number",
                  parentName: null,
                  parentLabel: null,
                },
                {
                  label: "Header",
                  name: "Dec-2020",
                  value: 200.46420110256255,
                  valueLabel: "Value",
                  symbol: "number",
                  parentName: null,
                  parentLabel: null,
                },
                {
                  label: "Header",
                  name: "Jan-2021",
                  value: 234.72911867360887,
                  valueLabel: "Value",
                  symbol: "number",
                  parentName: null,
                  parentLabel: null,
                },
                {
                  label: "Header",
                  name: "Feb-2021",
                  value: 239.73472458016263,
                  valueLabel: "Value",
                  symbol: "number",
                  parentName: null,
                  parentLabel: null,
                },
              ],
              insight: null,
              isDecimal: null,
            },
          ],
        },
      }
    ],
  };

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
