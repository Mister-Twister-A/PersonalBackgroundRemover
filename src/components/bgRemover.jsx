import { useState } from 'react'

export default function BgRemover() {
  const [imagePreview, setImagePreview] = useState(null)

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImagePreview(URL.createObjectURL(file))
    }
  }

  return (
    <div style={{ marginTop: '2rem' }}>
      <p>Upload an image to test the UI:</p>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      
      {imagePreview && (
        <div style={{ marginTop: '1.5rem' }}>
          <img 
            src={imagePreview} 
            alt="Preview" 
            style={{ maxWidth: '300px', borderRadius: '8px', border: '1px solid #ccc' }} 
          />
        </div>
      )}
    </div>
  )
}
