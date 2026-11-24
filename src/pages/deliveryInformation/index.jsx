
const DeliveryInformation = () => {
  return (
    <main className="w-full bg-white px-3 py-5 text-black sm:px-5 md:px-6 md:py-6">
      <article className="mx-auto w-full max-w-[1280px] font-poppins text-[17px] font-normal leading-[1.5] sm:text-[18px]">

        {/* Page Title */}
        <h1 className="mb-7 text-center text-[22px] font-bold leading-tight sm:text-[24px] md:text-[26px]">
          UK & International Delivery Information
        </h1>

        {/* Introduction */}
        <p className="mb-7 text-center text-[17px] leading-[1.5] sm:text-[18px] md:text-[19px]">
          At{" "}
          <strong className="font-bold italic">
            FD Plastix, Toolz & Sparez Ltd
          </strong>
          , we aim to dispatch all orders quickly and safely to customers across the UK and worldwide
          <br className="hidden md:block" />
          using reliable local and global couriers—including{" "}
          <strong className="font-bold">
            Royal Mail, Parcelforce, DHL, DPD, UPS, and Evri
          </strong>
          —selected based on your
          <br className="hidden md:block" />
          location.
        </p>

        {/* Order Processing & Dispatch */}
        <section className="mb-7">
          <h2 className="mb-5 text-center text-[20px] font-bold sm:text-[21px] md:text-[22px]">
            Order Processing & Dispatch
          </h2>

          <ul className="list-disc list-inside space-y-5 text-center text-[16px] leading-[1.55] sm:text-[17px] md:text-[18px]">
            <li>
              <strong className="font-bold">Processing Time:</strong>{" "}
              In-stock orders are typically processed and dispatched within{" "}
              <strong className="font-bold">1–2 working days</strong> of cleared payment
              (Monday through Friday, excluding bank/public holidays). Orders placed
              over the weekend or on a holiday will begin processing on the next working day.
            </li>

            <li>
              <strong className="font-bold">
                Out-of-Stock & Special Order Items:
              </strong>{" "}
              If an item is not currently listed as in-stock, dispatch and delivery
              timeframes will differ from our standard schedule. Feel free to reach
              out to us for current lead times before placing your order.
            </li>

            <li>
              <strong className="font-bold">Multiple-Item Orders:</strong>{" "}
              If your order contains both in-stock and special-order items, we may
              hold the order until all items are ready or dispatch available items
              separately at our discretion.
            </li>

            <li>
              <strong className="font-bold">Click & Collect (Widnes):</strong>{" "}
              Local collection from our Widnes warehouse is available by prior
              arrangement. Please contact us before ordering to confirm stock
              availability and arrange a collection time.
            </li>
          </ul>
        </section>

        {/* Shipping & Logistics */}
        <section className="mb-7">
          <h2 className="mb-5 text-center text-[20px] font-bold sm:text-[21px] md:text-[22px]">
            Shipping & Logistics
          </h2>

          <ul className="list-disc list-inside space-y-5 text-center text-[16px] leading-[1.55] sm:text-[17px] md:text-[18px]">
            <li>
              <strong className="font-bold">
                United Kingdom Domestic Shipping:
              </strong>{" "}
              Available via fully tracked and insured courier services.
              Standard UK mainland deliveries typically arrive within{" "}
              <strong className="font-bold">1–3 working days</strong> of dispatch.
              Please note that couriers do not operate on UK bank or public holidays,
              so no deliveries take place on those dates. Shipping charges will be
              calculated and added to the final invoice based on your delivery address.
            </li>

            <li>
              <strong className="font-bold">UK Highlands & Islands:</strong>{" "}
              Deliveries to Northern Ireland, the Scottish Highlands and Islands,
              the Isle of Man, and the Channel Islands may incur additional courier
              surcharges and require an extra 1–2 working days for transit.
            </li>

            <li>
              <strong className="font-bold">International Shipping:</strong>{" "}
              Global delivery is available. Prospective international buyers are
              requested to message us directly with their country and postal code
              to receive a competitive, custom freight quotation.
            </li>

            <li>
              <strong className="font-bold">Customs, Duties & Taxes:</strong>{" "}
              International orders are shipped on a Delivered Duty Unpaid (DDU)
              basis unless stated otherwise at checkout. Any local import duties,
              customs fees, or VAT applied by the destination country are the
              responsibility of the buyer.
            </li>

            <li>
              <strong className="font-bold">
                Order Tracking & Proof of Delivery:
              </strong>{" "}
              Once your order leaves our Widnes warehouse, you will receive an
              email confirmation containing your tracking number and a direct
              courier link to follow your delivery. High-value orders and
              specialist courier shipments require a signature upon delivery,
              so please ensure someone is available at the delivery address
              to sign for the parcel.
            </li>
          </ul>
        </section>

        {/* Heavy, Bulky & Restricted Items */}
        <section className="mb-7">
          <h2 className="mb-5 text-center text-[20px] font-bold sm:text-[21px] md:text-[22px]">
            Heavy, Bulky & Restricted Items
          </h2>

          <ul className="list-disc list-inside text-center text-[16px] leading-[1.55] sm:text-[17px] md:text-[18px]">
            <li>
              Certain oversized automotive components, heavy power tools, or
              items containing lithium-ion batteries may require specialist
              courier handling and can be subject to regional shipping
              restrictions. Any applicable surcharges will be clearly
              calculated at checkout.
            </li>
          </ul>
        </section>

        {/* Delivery Issues & Damaged Parcels */}
        <section className="mb-7">
          <h2 className="mb-5 text-center text-[20px] font-bold sm:text-[21px] md:text-[22px]">
            Delivery Issues & Damaged Parcels
          </h2>

          <ul className="list-disc list-inside space-y-5 text-center text-[16px] leading-[1.55] sm:text-[17px] md:text-[18px]">
            <li>
              <strong className="font-bold">
                Delivery Address & Failed Attempts:
              </strong>{" "}
              Please ensure your shipping address and contact details are
              accurate at checkout. If a parcel is returned to our Widnes
              warehouse due to an incorrect address or repeated missed
              delivery attempts, a redelivery fee may apply.
            </li>

            <li>
              <strong className="font-bold">
                Damaged or Missing Items:
              </strong>{" "}
              Please inspect your parcel upon arrival. If an item arrives
              damaged in transit or if your order is incomplete, please
              notify us at{" "}
              <a
                href="mailto:info@plastixely.com"
                className="break-words font-bold italic text-blue-700 underline"
              >
                info@plastixely.com
              </a>{" "}
              within <strong className="font-bold">48 hours</strong> of delivery,
              including clear photos of the packaging and item, so we can
              resolve this promptly with the courier.
            </li>
          </ul>
        </section>

        {/* Questions & Support */}
        <section className="mt-7">
          <h2 className="mb-3 text-center text-[20px] font-bold sm:text-[21px] md:text-[22px]">
            Questions & Support
          </h2>

          <p className="text-center text-[16px] leading-[1.55] sm:text-[17px] md:text-[18px]">
            If you have questions about an existing delivery or need a custom
            shipping quote for a bulk or international order, please contact
            our team at{" "}
            <a
              href="mailto:info@plastixely.com"
              className="break-words font-bold italic text-blue-700 underline"
            >
              info@plastixely.com
            </a>{" "}
            with your order number or delivery postcode. For information on
            returning an item, please see our{" "}
            <strong className="font-bold">
              Returns & Refunds Policy
            </strong>.
          </p>
        </section>

      </article>
    </main>
  );
};

export default DeliveryInformation;
