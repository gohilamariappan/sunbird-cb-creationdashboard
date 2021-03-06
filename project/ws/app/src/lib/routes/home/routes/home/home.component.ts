
import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef, HostListener, ViewChild } from '@angular/core'
import { Router, Event, NavigationEnd, NavigationError, ActivatedRoute } from '@angular/router'
import { ValueService } from '@sunbird-cb/utils'
import { map } from 'rxjs/operators'
/* tslint:disable */
import _ from 'lodash'
import { ILeftMenu } from '@sunbird-cb/collection'
import { NsWidgetResolver } from '@sunbird-cb/resolver'
/* tslint:enable */

@Component({
  selector: 'ws-app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  /* tslint:disable */
  host: { class: 'margin-top-l' },
  /* tslint:enable */
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  sideNavBarOpened = true
  panelOpenState = false
  titles = [{ title: 'NETWORK', url: '/app/network-v2', icon: 'group' }]
  widgetData!: NsWidgetResolver.IWidgetData<ILeftMenu>
  unread = 0
  currentRoute = 'home'
  myRoles!: Set<string>
  banner!: NsWidgetResolver.IWidgetData<any>
  private bannerSubscription: any
  public screenSizeIsLtMedium = false
  isLtMedium$ = this.valueSvc.isLtMedium$
  mode$ = this.isLtMedium$.pipe(map(isMedium => (isMedium ? 'over' : 'side')))
  userRouteName = ''
  @ViewChild('stickyMenu', { static: true }) menuElement!: ElementRef
  elementPosition: any
  sticky = false
  department: any = {}
  departmentName = ''
  private defaultSideNavBarOpenedSubscription: any
  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset
    if (windowScroll >= this.elementPosition) {
      this.sticky = true
    } else {
      this.sticky = false
    }
  }
  constructor(private valueSvc: ValueService, private router: Router, private activeRoute: ActivatedRoute) {

    if (this.activeRoute.snapshot.data.userRoles) {
      this.myRoles = this.activeRoute.snapshot.data.userRoles
    }
    this.router.events.subscribe((event: Event) => {

      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        // console.log(event.url)
        this.bindUrl(event.urlAfterRedirects.replace('/app/home/', ''))
        // this.widgetData = this.activeRoute.snapshot.data &&
        //   this.activeRoute.snapshot.data.pageData.data.menus || []
        if (this.activeRoute.snapshot.data.department.data) {
          const leftData = this.activeRoute.snapshot.data.pageData.data.menus
          _.set(leftData, 'widgetData.logo', true)
          _.set(leftData, 'widgetData.logoPath', _.get(this.activeRoute, 'snapshot.data.department.data.logo'))
          _.set(leftData, 'widgetData.name', _.get(this.activeRoute, 'snapshot.data.department.data.deptName'))
          _.set(leftData, 'widgetData.userRoles', this.myRoles)
          this.widgetData = leftData
        } else {
          this.widgetData = this.activeRoute.snapshot.data.pageData.data.menus
        }

        this.department = this.activeRoute.snapshot.data.department.data
        this.departmentName = this.department ? this.department.deptName : ''
      }

      if (event instanceof NavigationError) {
        // Hide loading indicator

        // Present error to user
        // console.log(event.error)
      }
    })

  }
  ngOnInit() {
    this.defaultSideNavBarOpenedSubscription = this.isLtMedium$.subscribe(isLtMedium => {
      this.sideNavBarOpened = !isLtMedium
      this.screenSizeIsLtMedium = isLtMedium
    })
  }
  ngAfterViewInit() {
    // this.elementPosition = this.menuElement.nativeElement.offsetTop
  }
  bindUrl(path: string) {
    if (path) {
      this.currentRoute = path
    }
  }

  ngOnDestroy() {
    if (this.defaultSideNavBarOpenedSubscription) {
      this.defaultSideNavBarOpenedSubscription.unsubscribe()
    }
    if (this.bannerSubscription) {
      this.bannerSubscription.unsubscribe()
    }
  }

}
