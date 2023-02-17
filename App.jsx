import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CheckIcon from '@mui/icons-material/Check';

import { CardActions, CardContent } from "@mui/material";
// import InfoIcon from '@mui/icons-material/Info';
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';
export default function App() {
  const [counter, setCounter] = useState();

  return (



    <div className='flex-row'>


      <div style={{ margin: "20px" }}>
        <div className='tag'>
          <h5 className="top">FREE</h5>
          <h6 className="down">$0<span class="period">/month</span></h6>
          <hr class="mt-1 mb-1" />

          <ul class="fa-ul">
            <span className="fa-li"><CheckIcon />  Single User</span>
            <span className="fa-li"><CheckIcon />  5GB Storage</span>
            <span className="fa-li"><CheckIcon />  Unlimited Public Projects</span>
            <span className="fa-li"><CheckIcon />  Community Access</span>
            < span className="fa-li textColor" > < ClearIcon />  Unlimited
              Private Projects</span>


            <span className="fa-li textColor">< ClearIcon /> Dedicated Phone Support</span>

            <span className="fa-li textColor"><ClearIcon /> Free Subdomain</span>

            <span className="fa-li textColor"><ClearIcon /> Monthly Status Reports</span>
          </ul>

          <div className="d-grid" >
            <Button variant="contained" >Button</Button>
          </div>

        </div>
      </div>
      <div style={{ margin: "20px" }}>
        <div className='tag'>
          <h5 className="top">PLUS</h5>
          <h6 className="down">$9<span className="period">/month</span></h6>
          <hr class="mt-1 mb-1" />
          <ul className="fa-ul">
            <span className="fa-li"><CheckIcon />   <strong>5 Users</strong>        </span>
            <span className="fa-li"><CheckIcon />   50GB Storage        </span>
            <span className="fa-li"><CheckIcon />  Unlimited Public Projects         </span>
            <span className="fa-li"><CheckIcon />  Community Access         </span>
            <span className="fa-li"><CheckIcon />  Unlimited Private Projects           </span>
            <span className="fa-li"><CheckIcon />   Dedicated Phone Support           </span>
            <span className="fa-li"><CheckIcon />    Free Subdomain       </span>
            <span className="fa-li textColor"><ClearIcon />      Monthly Status  Reports </span>

          </ul>
          <div className="d-grid">
            <Button variant="contained">Button</Button>
          </div>

        </div>
      </div>
      <div style={{ margin: "20px" }}>
        <div className='tag'>
          <h5 className="top">PRO</h5>
          <h6 className="down">$49<span className="period">/month</span></h6>
          <hr class="mt-1 mb-1" />
          <ul className="fa-ul">
            <span className="fa-li"><CheckIcon />  <strong>Unlimited Users</strong>  </span>

            <span className="fa-li"><CheckIcon />  150GB Storage  </span>
            <span className="fa-li"><CheckIcon />   Unlimited Public Projects </span>
            <span className="fa-li"><CheckIcon />   Community Access </span>
            <span className="fa-li"><CheckIcon />   Unlimited Private Projects </span>
            <span className="fa-li"><CheckIcon />   Dedicated Phone Support </span>
            <span className="fa-li"><CheckIcon />   <strong>Unlimited</strong> Free Subdomains </span>

            <span className="fa-li"><CheckIcon />  Monthly Status Reports   </span>
          </ul>
          <div className="d-grid">
            <Button variant="contained">Button</Button>
          </div>
        </div>
      </div>

    </div>


  )
}



