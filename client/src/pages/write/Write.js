import React from 'react'
import "./write.scss"
import { useState, useContext } from 'react'
import axios from 'axios'
import { Context } from '../../context/Context'


function Write() {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [file, setFile] = useState(null)

  const { user } = useContext(Context)


  const handleSubmit = async (e) => {
    e.preventDefault()
    const newPost = {
      username: user.username,
      title,
      desc,
    }
    if (file) {
      const data = new FormData()
      const filename = Date.now() + file.name
      data.append("name", filename)
      data.append("file", file)
      newPost.postPic = filename
      try {
        await axios.post("/upload", data)
      } catch (error) {

      }
    }
    try {
      const res = await axios.post("/posts/newPost/", newPost)
      window.location.replace("/post/" + res.data._id)
    } catch (error) {

    }

  }


  return (
    <div className='write'>
      {file && (<img src={URL.createObjectURL(file)} alt="" className="writePostImg" />)}

      <form className='writeForm' onSubmit={handleSubmit}>
        <div className="writeFormGroup1">
          <label htmlFor="fileInput">
            <i className=" addIcon fa-solid fa-square-plus"></i>
          </label>
          <input type="file" id='fileInput' style={{ display: "none" }} onChange={e => setFile(e.target.files[0])} />
          <input placeholder='Title' type="text" className='titleInput' autoFocus={true} onChange={e => setTitle(e.target.value)} />
        </div>

        <div className="writeFormGroup2">
          <input placeholder='Tell your Story ...' type="text" className='descriptionInput ' onChange={e => setDesc(e.target.value)} />
          <button className='publishButton' type="submit">Publish</button>
        </div>
      </form>
    </div>
  )
}
export default Write