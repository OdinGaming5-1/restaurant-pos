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

    return (<div>
        <h2>Home page</h2>

        {rows.length <=0 ? 
          <h3>Kayıt Yok</h3>
          : rows.map((row, key) => (
            <div key={row.uuid}>
            <span>{row.name}</span>
            <img alt={row.name} src={row.icon} width={50} height={50}/>
            <span>{row.price}₺</span>
            <span>{100*parseFloat(row.vat)}%</span>
            </div>
            
        ))}

    </div>);
    }

export default HomePage;