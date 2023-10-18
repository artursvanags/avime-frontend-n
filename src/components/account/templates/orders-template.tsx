import OrderOverview from "../components/order-overview"

const OrdersTemplate = () => {
  return (
    <div className="w-full">
      <div className="mb-8 flex flex-col gap-y-4">
        <h1 className="text-3xl font-bold">Orders</h1>
        <p className="text-sm">
          View your previous orders and their status. You can also create
          returns or exchanges for your orders if needed.
        </p>
      </div>
      <div>
        <OrderOverview />
      </div>
    </div>
  )
}

export default OrdersTemplate
