import { Box, useTheme, Typography } from '@mui/material'
import { useState } from 'react';
import { Down, Plus } from '../../assets/index.js'
import './Filter.css'

const Filter = ({ setDraft, draft, setPending, pending, setPaid, paid, length }) => {

    const theme = useTheme();
    const [ menu, setMenu ] = useState(false);


    const handleCheck = (e) =>{
        console.log(e.target + 'hey');
    }

  return (
    <div className='Filter__'>
        <Box>
            <Typography
                sx={{
                    fontSize: theme.typography.h1,
                    color: theme.palette.text.primary
                }}
            >
                Invoices
            </Typography>
            <Typography
                sx={{
                    fontSize: theme.typography.p,
                    color: theme.palette.text.primary
                }}
            >
                {`There are ${length} total invoices`}
            </Typography>
        </Box>
        <div className='Filter__rightSide'>
            <div className='Filter__main'>
                <label style={{color: theme.palette.text.primary, fontWeight: 700}}>Filter by status</label>
                <Down transform={menu ? 'rotate(180)' : ''} onClick={()=>setMenu(!menu)}/>

                <div className='Filter__main-menu' style={{backgroundColor: theme.palette.widget, display: menu ? 'flex' : 'none'}}>
                    <div className='Filter__checkboxes'>
                        <input type='checkbox' id="draft" name='draft' onClick={()=>setDraft(!draft)}/>
                        <label htmlFor="draft" style={{color: theme.palette.text.primary}}>Draft</label>
                    </div>
                    <div className='Filter__checkboxes'>
                        <input type='checkbox' id="pending" name='pending' onChange={()=>setPending(!pending)}/>
                        <label htmlFor="pending" style={{color: theme.palette.text.primary}}>Pending</label>
                    </div>
                    <div className='Filter__checkboxes'>
                        <input type='checkbox' id="paid" name='paid' onChange={()=> setPaid(!paid)}/>
                        <label htmlFor="paid" style={{color: theme.palette.text.primary}}>Paid</label>
                    </div>
                </div>
            </div>

            <button className='Filter__add' onClick={()=>console.log("click!")}>
                <div className='circle'>
                    <Plus/>
                </div>
                New Invoice
            </button>
        </div>
       
    </div>
  )
}

export default Filter