import React from 'react'
import "./writepage.scss"

function Writepage() {
  return (
    <div className='writePage'>
      <img src="assets/post/1.jpeg" alt="" className="writePostImg" />
      <form className='writeForm'>
        <div className="writeFormGroup1">
          <label htmlFor="fileInput">
            <i class=" addIcon fa-solid fa-square-plus"></i>
          </label>
          <input type="file" id='fileInput' style={{ display: "none" }} />
          <input placeholder='Title' type="text" className='titleInput' autoFocus={true} />


        </div>

        <div className="writeFormGroup2">
          <input placeholder='Tell your Story ...' type="text" className='descriptionInput ' />
          <button className='publishButton'>Publish</button>


        </div>

      </form>



    </div>
  )
}

export default Writepage