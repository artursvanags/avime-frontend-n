import SkeletonOrderConfirmedHeader from "@/components/skeletons/components/skeleton-order-confirmed-header";
import SkeletonOrderInformation from "@/components/skeletons/components/skeleton-order-information";
import SkeletonOrderItems from "@/components/skeletons/components/skeleton-order-items";

const SkeletonOrderConfirmed = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] animate-pulse bg-gray-50 py-6">
      <div className="content-container flex justify-center">
        <div className="h-full w-full  max-w-4xl p-10">
          <SkeletonOrderConfirmedHeader />

          <SkeletonOrderItems />

          <SkeletonOrderInformation />
        </div>
      </div>
    </div>
  );
};

export default SkeletonOrderConfirmed;
