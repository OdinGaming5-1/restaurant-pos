import React,{useState} from "react";
import { FindByName } from "../goodsTableHandler";
import Barcode from 'react-jsbarcode';


function UpdateItem()
{
    const [rows, setRows] = useState([]);

    async function searchItem(e) {
        try {
            const data = await FindByName(e.target.value);
            setRows(data);
            console.log(data)
        } catch (error) {
        console.log(error)            
        }
    }
    return (<div className="items-center justify-center bg-slate-900 flex flex-col h-screen">
    <input type="text" placeholder="search by name..." onChange={searchItem}/>
    {rows.length <=0 && <h3>Kayıt Yok</h3>}
    {rows.map((row, key) => (
            <div key={row.uuid} className="flex flex-row">
            <img alt={row.name} src={row.icon==="" ? "item.png" : row.icon} width={100} height={90}/>
            <div width={100} height={90}><Barcode value={row.barcode} options={{displayValue:true,format:"msi",textMargin:"0"}}/></div>
            <div><div className="flex flex-col px-2">
            <span>{row.name}</span>
            <span>{row.price}₺</span>
            <span>{100*parseFloat(row.vat)}%</span>
            </div></div>
            </div>))}
    </div>);
}

export default UpdateItem;