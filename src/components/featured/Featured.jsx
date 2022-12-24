import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">

      <div className="featuredItem">

        <img src="https://images.rawpixel.com/image_600/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvc2sxOTg2LWltYWdlLWt3dnhhdmJoLmpwZw.jpg" alt="" className="featuredImg" />
        
        <div className="featuredTitle">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>

      <div className="featuredItem">

        <img src="https://images.rawpixel.com/image_600/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvYXVzdGluLXRleGFzLWNhcGl0b2wuanBn.jpg" alt="" className="featuredImg" />

        <div className="featuredTitle">
          <h1>Austin</h1>
          <h2>532 properties</h2>
        </div>
      </div>

      <div className="featuredItem">

        <img src="https://images.rawpixel.com/image_600/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvZmwzNzYwMTI0MjY2Ni1pbWFnZS1reWJlazE1bC5qcGc.jpg" alt="" className="featuredImg" />

        <div className="featuredTitle">
          <h1>Reno</h1>
          <h2>533 properties</h2>
        </div>
      </div>

    </div>
  )
}

export default Featured