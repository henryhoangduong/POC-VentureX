import { Admin } from '../pages/Admin'
import { Lender1 } from '../pages/Lender/Lender1'
import { Lender2 } from '../pages/Lender/Lender2'
import { Borrower } from '../pages/Borrower'
import { BorrowerPool } from '../pages/BorrowerPool'
import { SystemPool } from '../pages/SystemPool'
import { Fundraising } from '../pages/Fundraising'
import { Home } from '../pages/Home'
export const router = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/admin',
    element: <Admin />,
  },
  {
    path: '/lender1',
    element: <Lender1 />,
  },
  {
    path: '/lender2',
    element: <Lender2 />,
  },
  {
    path: '/borrower',
    element: <Borrower />,
  },
  {
    path: '/systempool',
    element: <SystemPool />,
  },
  {
    path: '/borrowerpool',
    element: <BorrowerPool />,
  },
  {
    path: '/fundraising',
    element: <Fundraising />,
  },
]
