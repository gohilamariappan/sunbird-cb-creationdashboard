import { Injectable, SkipSelf } from '@angular/core'
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'
import { EMPTY, Observable } from 'rxjs'
import { map, catchError } from 'rxjs/operators'
import { AuthKeycloakService, ConfigurationsService, IResolveResponse } from '@sunbird-cb/utils'
import { NSProfileDataV2 } from '../../home/models/profile-v2.model'
import { ProfileV2Service } from '../services/home.servive'

@Injectable()
export class DepartmentResolve
  implements
  Resolve<Observable<IResolveResponse<NSProfileDataV2.IProfile>> | IResolveResponse<NSProfileDataV2.IProfile>> {
  constructor(private profileService: ProfileV2Service, private router: Router, private authSvc: AuthKeycloakService, @SkipSelf() private configService: ConfigurationsService) { }

  resolve(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot,
  ): Observable<IResolveResponse<NSProfileDataV2.IProfile>> {
    console.log(this.configService)
    return this.profileService.getMyDepartment().pipe(
      map(data => ({ data, error: null })),
      catchError(() => {
        this.router.navigate(['error-access-forbidden'])
        this.authSvc.logout()
        return EMPTY
      }))
  }
}
