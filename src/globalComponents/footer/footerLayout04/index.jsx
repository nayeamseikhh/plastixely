import React from 'react'
import GenarateRating from '../../../utils/genarateRating'
import { FaStar } from 'react-icons/fa'

const FooterLayout04 = () => {
  return (
    <>
    {/* <div className=" text-green-300">
      <div className="flex items-center justify-start gap-2">
          <FaStar/>
          <h6>TrustPilot</h6>
      </div>
       <div className="flex"><GenarateRating/></div>
    </div> */}
    <div
  class="trustpilot-widget"
  data-locale="en-US"
  data-template-id="YOUR_TEMPLATE_ID"
  data-businessunit-id="YOUR_BUSINESS_UNIT_ID"
  data-style-height="52px"
  data-style-width="100%">
</div>

<script
src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
async>
</script>
   
    </>
  )
}

export default FooterLayout04




