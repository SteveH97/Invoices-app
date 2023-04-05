import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { Left } from '../../assets';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import './Invoice.css';
import { useEffect, useState } from 'react';

const Invoice = () => {

    const isNonMobileScreens = useMediaQuery("(min-width:1024px)");
    const theme = useTheme();
    const navigate = useNavigate();
    const { invId } = useParams();
    const [invoice, setInvoice] = useState(null);
    let dueDate;

    const getInvoice = async() => {
        const response = await fetch(`http://localhost:3002/invoice/${invId}`);

        const data = await response.json();
        setInvoice(data);
        dueDate = new Date(data.paymentDue);
        console.log(data);
    }

    useEffect(()=>{
        getInvoice();
    },[]);



  return (
    <div 
        className='Invoice__' 
        style={{flexDirection: isNonMobileScreens ? "row" : "column" }}
    >
        <Navbar />
        <div 
            className='Invoice__main'
            style={{ backgroundColor: theme.palette.background}} 
        >
            <div className='Invoice__goBack'>
                <Left onClick={()=>navigate(-1)}/>              
                <Typography sx={{color: theme.palette.text.primary}}>
                    Go back
                </Typography>
            </div>

        {
        invoice === null ?
        (
                <div>loading</div>
        ):(
            <div className='Invoice__group1' style={{backgroundColor: theme.palette.widget}}>
                <div className='Invoice__status'>
                    <Typography sx={{color: theme.palette.text.primary, marginRight: '20px'}}>Status</Typography>
                    { invoice.status === 'draft' ? 
                        (
                            <div className='Invoices__status draft'>
                                <div className='Invoices__circle' style={{backgroundColor: '#979797'}}></div>
                                <div style={{color: '#979797'}}>
                                Draft
                                </div>
                            </div>
                        ): (
                            <>
                            { invoice.status === 'paid' ? 
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
                </div>

                <div className='Invoice__buttons'>
                    <button className='Edit' > 
                        Edit
                    </button>
                    <button className='Delete'>
                        Delete
                    </button>
                    {invoice.status === 'pending' ? (
                        <button className='MaP'>
                            Mark as Paid
                        </button>
                    ): (<></>)}
                </div>
            </div>
        )}

        {
        invoice === null ?
        (
            <></>
        ) : (

            <div className='Invoice__group2' style={{backgroundColor: theme.palette.widget}}>
                <div className='Invoice__group2-a' style={{color: theme.palette.text.primary}}>
                    <div className='id_desc'>
                        <Typography>#{invoice._id}</Typography>
                        <Typography variant='p'>{invoice.description}</Typography>
                    </div>
                    <div className='sender_addy'>
                        <Typography variant='p'>{invoice.senderAddress.street}</Typography>
                        <Typography variant='p'>{invoice.senderAddress.city}</Typography>
                        <Typography variant='p'>{invoice.senderAddress.postCode}</Typography>
                        <Typography variant='p'>{invoice.senderAddress.country}</Typography>
                    </div>
                </div>

                <div className='Invoice__group2-b' style={{color: theme.palette.text.primary}}>
                    <div className='date'>
                        <Typography variant='p'>Payment Due</Typography>
                        <Typography>{invoice.paymentDue}</Typography>
                    </div>
                </div>
            </div>        
        )}
        </div>
    </div>
  )
}

export default Invoice