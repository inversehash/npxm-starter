import { Injectable } from '@angular/core'
import { ApolloAngularSDK } from '@demo/shared/util/sdk'

@Injectable({ providedIn: 'root' })
export class WebCoreDataAccessService extends ApolloAngularSDK {}
