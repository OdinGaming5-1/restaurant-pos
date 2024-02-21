import React, { useState, useEffect }  from "react";
import { FindAll } from "../goodsTableHandler";

function HomePage(){
    const [rows, setRows] = useState([]);
    async function loadData() {
        const data = await FindAll();
        setRows(data);
    }
    useEffect(() => {
        loadData();
    }, []);

    return (<div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
        {rows.length <=0 && <h3>Kayıt Yok</h3>}
        {rows.length >0 && <div className="grid grid-cols-4 gap-4 content-evenly ...">
         {rows.map((row, key) => (
            <div key={row.uuid}>
            <span>{row.name}</span>
            <img alt={row.name} src={row.icon==="" ? "item.png" : row.icon} width={150} height={150}/>
            <span>{row.price}₺</span>
            <span>{100*parseFloat(row.vat)}%</span>
            </div>))}
            </div>
        }
    </div>);
    }

export default HomePage;