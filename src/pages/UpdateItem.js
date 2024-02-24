import React,{useState} from "react";
import { FindByName } from "../goodsTableHandler";
import Item from "../components/Item";


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

    return (<div className="items-center justify-top flex flex-col px-2 py-2 h-screen">
    <input type="text" placeholder="search by name..." onChange={searchItem} className="px-4 py-4 border-slate-900 border-2"/>
    {rows.length <=0 && <h3>Kayıt Yok</h3>}
    {rows.map((row, key) => (
            <div key={row.uuid} className="flex flex-row bg-white my-4 border-slate-900 border-2 rounded-lg" >
            <Item data={row}/>
            </div>))}
    </div>);
}

export default UpdateItem;