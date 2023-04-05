import { useEffect, useState } from 'react';
import { Typography, useMediaQuery, useTheme } from "@mui/material"
import Navbar from "../../components/navbar/Navbar";
import "./Home.css";
import Filter from "../../components/filters/Filter";
import Invoices from '../../components/invocies/Invoices';
import { Empty } from '../../assets/index.js';


const Home = () => {

    const isNonMobileScreens = useMediaQuery("(min-width:1024px)");
    const theme = useTheme();
    const [invoices, setInvoices] = useState([]);
    const [draft, setDraft] = useState(false);
    const [pending, setPending] = useState(false);
    const [paid, setPaid] = useState(false);

    const getInvoices = async () =>{
      const response = await fetch('http://localhost:3002/invoice');

      const data = await response.json();
      setInvoices(data);
    }


    useEffect(()=>{
      getInvoices();
    },[]);

  return (
    <div
        className="Home__"
        style={{flexDirection: isNonMobileScreens ? "row" : "column" }}
    >
        <Navbar />
        <div style={{ backgroundColor: theme.palette.background}} className="Home__main">
            <Filter 
              setDraft={setDraft} 
              draft={draft}
              setPending={setPending}
              pending={pending}
              setPaid={setPaid}
              paid={paid}
              length={invoices.length}
            />
          {
            invoices.length != 0 ? 
            (
              <div className='Home__invoices'>

                { invoices.map((invoice)=>(
                  <Invoices
                  key={invoice._id}
                  _id={invoice._id}
                  date={invoice.paymentDue}
                  person={invoice.clientName}
                  total={invoice.total}
                  status={invoice.status}
                />
                ))}
                
              </div>
            ) : (
              <div className='Home__empty'>
                <Empty/>
                <Typography
                  variant='h1'
                  sx={{
                    color: theme.palette.text.primary
                  }}
                >There is nothing here</Typography>
                <Typography
                  sx={{
                    color: theme.palette.text.primary
                  }}
                >Create an invoice by clicking the</Typography>
                <Typography
                  sx={{
                    color: theme.palette.text.primary
                  }}
                >New Invoice button and get started</Typography>
              </div>
            )
          }
        </div>
    </div>
  )
}

export default Home