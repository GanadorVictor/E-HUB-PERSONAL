import React from 'react'

export default function EditModal({product,handleSaveEdit}){
  return (
    <div>
      <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
  <div>
                <input
                  type="text"
                  defaultValue={product.name}
                  onChange={(e) => handleSaveEdit(product.id, { name: e.target.value })}
                  className="input w-full max-w-xs" />
                <input
                  type="text"
                  value={product.imageUrl}
                  onChange={(e) => handleSaveEdit(product.id, { imageUrl: e.target.value })}
                />
                <input
                  type="number"
                  value={product.price}
                  onChange={(e) => handleSaveEdit(product.id, { price: parseFloat(e.target.value) })}
                />
                <button onClick={() => handleSaveEdit(product.id, product)}>Save</button>
              </div>
    <div className="modal-action">
      <form method="dialog">
        
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
  )
}

