import { TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { IsLoggedInGuard } from './is-logged-in.guard'

describe('IsLoggedInGuard', () => {
  let guard: IsLoggedInGuard

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [IsLoggedInGuard],
    })
    guard = TestBed.inject(IsLoggedInGuard)
  })

  it('should be created', () => {
    expect(guard).toBeTruthy()
  })
})
