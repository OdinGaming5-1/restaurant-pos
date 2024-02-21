import React,{useState} from "react";
import { Insert } from "../goodsTableHandler";

function AddItem() {
  const [state, setState] = useState({"name":"","detail":"","price":"0","vat":"0.18","icon":""});
  const setField = ({ name, e }) => {
    setState({
      ...state,
      [name]: e.target.value,
    });
  };
  const setFieldOption = (e) => {
    setState({
      ...state,
      ["vat"]: e.target.value,
    });
  };

  async function insertItem(){
    if(state.name.length<=0)
    {
        console.log("Please enter a name!")
    }
    else if(state.detail.length<=0)
    {
        console.log("Please enter the details!")
    }
    else{
        await Insert(state);
        setState({"name":"","detail":"","price":"0","vat":"0.18","icon":""});
    }

  }

  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <b>Add new item</b>
      <div className="flex flex-col">
        <div className="py-4">
          <label className="mx-2">Name</label>
          <input type="text" placeholder="item name" 
          onChange={(e) => setField({ name: "name", e: e })}
          value={state?.name}
          />
        </div>
        <div className="py-4">
          <label className="mx-2">Detail</label>
          <input type="text" placeholder="extra information about item" 
            onChange={(e) => setField({ name: "detail", e: e })}
            value={state?.detail}
          />
        </div>
        <div className="py-4">
          <label className="mx-2">Price</label>
          <input type="number" step="0.01" 
            onChange={(e) => setField({ name: "price", e: e })}
            value={state?.price}
          />
        </div>
        <div className="py-4">
          <label className="mx-2">VAT</label>
          <select defaultValue={1} className="mx-2" onChange={setFieldOption}>
            <option key={0.08} value={0.08}>8%</option>
            <option key={0.18} value={0.18}>18%</option>
          </select>
        </div>
        <div className="py-4">
          <label className="mx-2">Icon link:</label>
          <input type="text" 
            onChange={(e) => setField({ name: "icon", e: e })}
            value={state?.icon}
          />
        </div>
        <div className="py-4">
          <button onClick={insertItem}>Ekle</button>
        </div>
      </div>
    </div>
  );
}
export default AddItem;

// https://www.biosantarim.com/tema/genel/uploads/urunler/armut.png
// https://akn-ayb.a-cdn.akinoncdn.com/products/2022/02/10/8539/b4b2dbf5-42d9-44ca-96a2-ba20d175452d_size780x780_quality60_cropCenter.jpg