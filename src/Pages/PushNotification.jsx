// import { Link } from "react-router-dom";
import "../style.css";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import Heading from "../Components/Heading";
import { useState, useEffect } from 'react';
import { LiaImage } from "react-icons/lia";
import { FaUsers } from "react-icons/fa";
// import Skeleton from 'react-loading-skeleton';


const PushNotification = () => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState(null);
  // const [isHovered, setIsHovered] = useState(false);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const selectedImage = e.dataTransfer.files[0];
    setImage(selectedImage);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  // const handleImageHover = () => {
  //   setIsHovered(true);
  // };

  // const handleImageHoverExit = () => {
  //   setIsHovered(false);
  // };

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
        setLoading(false)
    }, 1000)
  }, [])

    return ( 
        <div>

          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="flex flex-row">
              {/* Sidebar */}
              <div>
                <Sidebar/>
              </div>

              {/* Header */}
              <div className="w-full">
                <div className="mb-4"><Header title="Push Notification" link="/PushNotification"/></div>
                
                <div className="px-8">
                  <div className="mb-4"><Heading title="Push Notification"/></div>
                </div>

                {/* Body */}
                <div className="border border-disable rounded-md px-10 py-8 mx-8">
                  {/* Form */}
                    <form  className='space-y-4'>
                                
                        {/* Title */}
                        <div className='space-y-1 md:space-y-2 items-start text-left'>
                            <label htmlFor="title" className='text-md text-black2'>Title</label><br/>
                            <input 
                                className='border p-4 w-full rounded-md border-disable bg-white focus:outline-disable' 
                                type='text' 
                                id = "title" 
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                // required
                                />
                                {/* {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}<br/><br/> */}
                        </div>
                        
                        {/* Body */}
                        <div className='space-y-2 text-left' style={{ position: 'relative' }}>
                            <label htmlFor="body" className='text-md text-left text-black2'>Body</label><br/>
                            <input 
                                className='border p-4 w-full rounded-md border-disable bg-white focus:outline-disable' 
                                id = "text" 
                                value={body}
                                onChange={(e) => setBody(e.target.value)}
                            />
                            {/* {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}<br/> */}
                        </div>

                        {/* Image */}
                        <div className='space-y-2 text-left mb-4' style={{ position: 'relative' }}>
                            <label htmlFor="image" className='text-md text-left text-black2'>Upload Image</label><br/>
                            
                            {image ? (
                              <div
                                // onMouseEnter={handleImageHover}
                                // onMouseLeave={handleImageHoverExit}
                                style={{ position: 'relative', display: 'inline-block' }}
                              >
                                <img
                                  src={URL.createObjectURL(image)}
                                  alt="Selected Image"
                                  style={{  maxHeight: '300px', borderRadius: '6px' }}
                                  className="w-full"
                                /><br/>

                                <div className="grid justify-items-start">
                                  {/* Option to change image */}
                                  <label
                                    htmlFor="imageInput"
                                    className="text-white bg-primary px-4 py-2 rounded-md cursor-pointer"
                                  >
                                    Change Image
                                  </label>

                                  {/* Option to remove the image */}
                                  <button 
                                    className="text-black2 bg-disable px-4 py-2 rounded-md" 
                                    onClick={handleRemoveImage}
                                    style={{
                                      position: 'absolute',
                                      bottom: 0,
                                      right: 0,
                                      cursor: 'pointer',
                                    }}
                                    >
                                  Remove Image</button>
                                </div>
                                                                
                              </div>
                            ) : (
                            
                              <div
                                  onDrop={handleDrop}
                                  onDragOver={handleDragOver}
                                  // className="h-50 text-center"
                                  style={{
                                  border: '2px dashed #ccc',
                                  borderRadius: '5px',
                                  padding: '40px',
                                  textAlign: 'center',
                                  cursor: 'pointer',
                                  }}
                              >
                                  <input
                                  type="file"
                                  accept=".jpg, .png"
                                  onChange={handleImageChange}
                                  style={{ display: 'none' }}
                                  id="imageInput"
                                  />

                                  <label htmlFor="imageInput" className="text-black2" style={{ cursor: 'pointer' }}>
                                    <div className="grid justify-items-center"><LiaImage className="text-c4 size-32"/></div>
                                    Drag and drop files, or <b className="text-primary">Browse</b><br/>
                                    <p className="text-xs">JPG, PNG - Max file size (10MB)</p>
                                  </label>
                                  
                              </div>
                            )}
                            
                            {/* {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}<br/> */}
                        </div>
                        
                        {/* Submit Button */}
                        <div className="grid justify-items-end">
                        <input
                            // onClick = {handleSubmit} 
                            type='submit' 
                            value="Send"
                            // disabled={loading} 
                            className=' py-4 px-24 rounded-md border-fa bg-primary hover:bg-black cursor-pointer text-white text-md font-bold'
                        />
                        </div> 
                    </form>
                </div>
                
              </div>

            </div>
          )}

         
           
        </div>
     );
}
 
export default PushNotification;
