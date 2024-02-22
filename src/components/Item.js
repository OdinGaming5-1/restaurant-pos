import React, { useState } from "react";
import Barcode from 'react-jsbarcode';
import { UpdateRow } from "../goodsTableHandler";

function Item({data}){

    const [state, setState] = useState(data);
    const setField = ({ name, e }) => {
        console.log(state);
        setState({
          ...state,
          [name]: e.target.value,
        });
    };
    
    async function updateItem()
    {
        await UpdateRow(state);
    }

    return (<>
            <img alt={state.name} src={state.icon==="" ? "logo512.png" : state.icon} width={100} height={90} className="bg-white"/>
            <div width={100} height={90}><Barcode value={state.barcode} options={{displayValue:true,format:"msi",textMargin:"0"}}/></div>
            <div><div className="flex flex-col px-2 text-black">
            <div><label>Category:</label><select defaultValue={state.category}>
                <option key={"meyve"} value={"meyve"}>Meyve</option>
                </select></div>
            <div><label>Name:</label><input type="text" value={state.name} onChange={(e) => setField({ name: "name", e: e })}/></div>
            <div><label>Detail:</label><input type="text" value={state.detail} onChange={(e) => setField({ name: "detail", e: e })}/></div>
            <div><label>Price:</label><input type="number" value={state.price} step={0.01} onChange={(e) => setField({ name: "price", e: e })}/></div>
            <div><label>VAT:</label><select defaultValue={100*parseFloat(state.vat)+'%'} onChange={(e) => setField({ name: "vat", e: e })}>
            <option key={0.18} value={0.18}>18%</option>
            <option key={0.08} value={0.08}>8%</option>
            </select></div>
            <div><label>Icon:</label><input type="text" value={state.icon} onChange={(e) => setField({ name: "icon", e: e })}/></div>
            <div><label>Barcode:</label><input type="text" value={state.barcode} onChange={(e) => setField({ name: "barcode", e: e })}/></div>
            </div></div>
            <div><button onClick={updateItem}>Update</button></div>
            </>
            );
}

export default Item;