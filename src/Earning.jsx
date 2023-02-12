import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ChatIcon from '@mui/icons-material/Chat';


export function Earning() {
  return (
    <div className="earnings">
      <div className="row">
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-primary">
            <div className="card-body earn-card">
              <div className="contents">
                <div className='para-content'>EARNING (MONTHLY)</div>
                <div className='para-rating'>$40,000</div>
              </div>
              <div className="icons">
                <CalendarTodayIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-primary">
            <div className="card-body earn-card">
              <div className="contents">
                <div className='para-content'>EARNINGS (ANNUAL)</div>
                <div className='para-rating'>$215,000</div>
              </div>
              <div className="icons">
                <AttachMoneyIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-primary">
            <div className="card-body earn-card">
              <div className="contents">
                <div className='para-content'>Tasks</div>
                {/* <div className='para-rating'>$215,000</div> */}
                <label className='percent'>50%</label>
                <progress id="file" max="100" value="50"> 50% </progress>
              </div>
              <div className="icons">
                <AssignmentIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-primary">
            <div className="card-body earn-card">
              <div className="contents">
                <div className='para-content'>pending requests</div>
                <label className='percent'>18</label>
              </div>
              <div className="icons">
                <ChatIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}