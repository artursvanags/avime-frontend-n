import { Address, ShippingMethod } from "@medusajs/medusa"

type ShippingDetailsProps = {
  address: Address
  shippingMethods: ShippingMethod[]
}

const ShippingDetails = ({
  address,
  shippingMethods,
}: ShippingDetailsProps) => {
  return (
    <div className="text-base-regular">
      <h2 className="text-2xl font-bold">Delivery</h2>
      <div className="my-2">
        <h3 className="text-sm font-semibold">Address</h3>
        <div className="flex flex-col text-sm text-muted-foreground">
          <span>{`${address.first_name} ${address.last_name}`}</span>
          <span>{`${address.address_1}${
            address.address_2 && ", " + address.address_2
          }`}</span>
          <span>{`${address.city}, ${address.province} ${address.postal_code}`}</span>
          <span>{address.country_code?.toUpperCase()}</span>
        </div>
      </div>
      <div className="my-2">
        <h3 className="text-sm font-semibold">Delivery method</h3>
        <div className="text-sm text-muted-foreground">
          {shippingMethods.map((sm) => {
            return <div key={sm.id}>{sm.shipping_option.name}</div>
          })}
        </div>
      </div>
    </div>
  )
}

export default ShippingDetails
