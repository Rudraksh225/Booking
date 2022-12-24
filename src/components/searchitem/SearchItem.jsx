import "./searchItem.css"

const SearchItem = () => {
  return (
    <div className="searchItem">
        <img src="https://images.rawpixel.com/image_600/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvZnJiZWRfYmVkcm9vbV9kb3VibGVfYmVkLWltYWdlLWt5YmVhZjNjLmpwZw.jpg" alt="" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">Tower Street Apartment</h1>
            <span className="siDistance">500 from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">Studio compartment with AirConditioning</span>
            <span className="siFeatures">Entire studio • 1 Bathroom • 21m² 1 full bed</span>
            <span className="siCancelOp">Free Cancelation</span>
            <span className="siCanselOpSubtitle">You can cancel later, so lock in this great price today!</span>
        </div>

        <div className="siDetails">

            <div className="siRating">
              <span>Excellent</span>
              <button>8.9</button>
            </div>

            <div className="siDetailTexts">
              <span className="siPrice">$123</span>
              <span className="siTaxOp">Includes taxes and fees</span>
              <button className="siCheckButton">See availability</button>
            </div>
        </div>
    </div>   
  )
}

export default SearchItem

