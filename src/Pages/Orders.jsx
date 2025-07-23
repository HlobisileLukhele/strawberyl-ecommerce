import OrderDetails from '@/Components/OrderDetails';
import Totalitems from '@/Components/TotalItems';


const Orders = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="md:cols-span-3">
            <OrderDetails />
        </div>
      <div className="md:cols-span-2">
        <TotalItems />
      </div>  
    </div>
    </div>
  );
}

export default Orders;