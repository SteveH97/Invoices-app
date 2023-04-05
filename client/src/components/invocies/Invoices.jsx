import './Invoices.css';
import { useNavigate } from 'react-router-dom';
import { Typography, useTheme } from '@mui/material';
import { Right } from '../../assets/index.js';
import { Link } from 'react-router-dom';

const Invoices = ({_id, date, person, total, status}) => {

  const theme = useTheme();
  const newDate = new Date(date);  
  const id = _id.slice(0,8);
  const navigate = useNavigate();
  const invId = _id;


  return (
    <div className='Invoices__' style={{backgroundColor: theme.palette.widget, color: theme.palette.text.primary}}>
      
        
        <Typography
          sx={{
            marginLeft: '32px'
          }}
        >
          #{id}
        </Typography>
        <Typography variant='p'>
          Due {newDate.toDateString()}
        </Typography>
        <Typography variant='p'>
          {person}
        </Typography>
        <Typography>
          $ {total}
        </Typography>
        


        { status === 'draft' ? 
          (
            <div className='Invoices__status draft'>
                <div className='Invoices__circle' style={{backgroundColor: '#979797'}}></div>
                <div style={{color: '#979797'}}>
                  Draft
                </div>
            </div>
          ): (
            <>
              { status === 'paid' ? 
              (
                <div className='Invoices__status paid'>
                  <div className='Invoices__circle' style={{backgroundColor: '#33D69F'}}></div>
                  <div style={{color: '#33D69F'}}>
                  Paid
                  </div>
                </div>
              ) :
            
              (
                <div className='Invoices__status pending'>
                  <div className='Invoices__circle' style={{backgroundColor: '#FF8F00'}}></div>
                  <div style={{color: '#FF8F00'}}>
                  Pending
                  </div>
                </div>
              )}
            </>
          )}

          
          <Right style={{marginRight: '32px'}} onClick={()=>navigate(`/invoice/${invId}`)}/>
          

    </div>
  )
}

export default Invoices