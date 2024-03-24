import SkeletonLoader from "@/components/ui/SkletonLoading";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-screen-xl mx-auto">
        <SkeletonLoader />
      </div>
    </div>
  );
}
