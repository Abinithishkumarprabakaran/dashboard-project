import ProgressBar from 'react-bootstrap/ProgressBar';

export function Additionals() {
  return (
    <div className="row">
      <div className="col-lg-6 mb-4">
        <div className="card">
          <div className="card-header">
            <h6>Projects</h6>
          </div>
          <div className="card-pro">
            <BasicExample />
          </div>
        </div>
        <ColorSystem />
      </div>
      <Illustrations />
    </div>
  );
}


function BasicExample() {
  const now = 10;
  return (
    <div className='checking-progress'>
      <div className='pro1'>
        <h4 className='small font-weight-bold'> Server Migration 
          <span className='float-right'> 20%</span>
        </h4>
        <ProgressBar variant="danger" now={20} />
      </div>

      <div className='pro1'>
        <h4 className='small font-weight-bold'> Sales Tracking 
          <span className='float-right'> 40%</span>
        </h4>
        <ProgressBar variant="warning" now={40} />
      </div>

      <div className='pro1'>
        <h4 className='small font-weight-bold'> Customer Database
          <span className='float-right'> 60%</span>
        </h4>
        <ProgressBar variant="info" now={60} />
      </div>

      <div className='pro1'>
        <h4 className='small font-weight-bold'>Payout Details
          <span className='float-right'> 80%</span>
        </h4>
        <ProgressBar now={80} />
      </div>

      <div className='pro1'>
        <h4 className='small font-weight-bold'> Account Setup
          <span className='float-right'> Complete! </span>
        </h4>
        <ProgressBar variant="success" now={100} />
      </div>
    </div>);
}

function ColorSystem() {
  return (
    <div className='row'>
      <div className='col-lg-6 mb-4'>
        <div className='card bg-primary text-white shadow'>
          <div className='card-body'>
            Primary
            <div>#4e73df</div>
          </div>
        </div>
      </div>
      <div className='col-lg-6 mb-4'>
        <div className='card bg-success text-white shadow'>
          <div className='card-body'>
          Success
            <div>#1cc88a</div>
          </div>
        </div>
      </div>
      <div className='col-lg-6 mb-4'>
        <div className='card bg-info text-white shadow'>
          <div className='card-body'>
          Info
            <div>#36b9cc</div>
          </div>
        </div>
      </div>
      <div className='col-lg-6 mb-4'>
        <div className='card bg-warning text-white shadow'>
          <div className='card-body'>
            Warning
            <div>#f6c23e</div>
          </div>
        </div>
      </div>
      <div className='col-lg-6 mb-4'>
        <div className='card bg-danger text-white shadow'>
          <div className='card-body'>
            Danger
            <div>#e74a3b</div>
          </div>
        </div>
      </div>
      <div className='col-lg-6 mb-4'>
        <div className='card bg-secondary text-white shadow'>
          <div className='card-body'>
            Secondary
            <div>#858796</div>
          </div>
        </div>
      </div>
      <div className='col-lg-6 mb-4'>
        <div className='card bg-light text-black shadow'>
          <div className='card-body'>
            Light
            <div>#f8f9fc</div>
          </div>
        </div>
      </div>
      <div className='col-lg-6 mb-4'>
        <div className='card bg-dark text-white shadow'>
          <div className='card-body'>
            Dark
            <div>#5a5c69</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Illustrations() {
  return (
    <div className='col-lg-6 mb-4'>
      <div className='card shadow mb-4'>
        <div className='card-header'>
          <h6>Illustrations</h6>
        </div>
        <div className='card-body'>
          <div className='text-center'>
            <img className='img-fluid px-3 px-sm-4 mt-3 mb-4' src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg" alt='...' />
          </div>
          <p>
            Add some quality, svg illustrations to your project courtest of <a target={"_blank"} rel="nofollow" href='https://undraw.co/'>UnDraw</a>
            , a constantly updated collection o beautiful svg images that you can use completley free and without attribution!
          </p>
          <a target={"_blank"} rel="nofollow" href='https://undraw.co/'>Browse Illustrations on UnDraw</a>
        </div>
      </div>
      <Approaches />
    </div>
  )
}

function Approaches() {
  return (
    <div className='card shadow mb-4'>
      <div className='card-header py-3'>
        <h6>Development Approach</h6>
      </div>
      <div className='card-body'>
        <p>
          SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance.
          Custom CSS classes are used to create custom components and custom utility classes.
        </p>
        <p className='mb-0'>
          Before working with this theme, you should become familiar with the Bootstrap framework, 
          especially the utility classes.
        </p>
      </div>
    </div>
  )
}

export default BasicExample;
