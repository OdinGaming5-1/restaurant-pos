import React, { useState, useEffect }  from "react";
import { FindAll,FindByCategory } from "../goodsTableHandler";
import Barcode from 'react-jsbarcode';

function HomePage(){
    const [rows, setRows] = useState([]);
    async function loadData() {
        try {
            const data = await FindByCategory("meyve");
            setRows(data);
        } catch (error) {
        console.log(error)            
        }
    }
    useEffect(() => {
        loadData();
    }, []);

    
    return (<div className="h-screen">
        {rows.length <=0 && <h3>Kayıt Yok</h3>}
        {rows.length >0 && <div className="grid grid-cols-4 gap-4 content-evenly">
         {rows.map((row, key) => (
            <div key={row.uuid} className="flex flex-row bg-white border-slate-900 border-2 rounded-lg">
            <img alt={row.name} src={row.icon==="" ? "logo512.png" : row.icon} width={100} height={90}/>
            <div width={100} height={90}><Barcode value={row.barcode} options={{displayValue:true,format:"msi",textMargin:"0"}}/></div>
            <div><div className="flex flex-col px-2">
            <span>{row.name}</span>
            <span>{row.price}₺</span>
            <span>{100*parseFloat(row.vat)}%</span>
            </div></div>
            </div>))}
            </div>
        }
    </div>);
    }

export default HomePage;