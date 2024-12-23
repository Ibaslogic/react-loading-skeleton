// import Skeleton from 'react-loading-skeleton';
import { CustomSkeleton } from './CustomSkeleton';

const CardSkeleton = ({ cardItems }: { cardItems: number }) => {
  const skeletonItems = Array(cardItems).fill(0);

  return skeletonItems.map((_, index) => (
    <li
      className="border-b border-gray-100 text-sm sm:text-base flex gap-4 items-center p-4"
      key={index}
    >
      {/* <Skeleton circle width={48} height={48} />
      <Skeleton count={1.7} containerClassName="flex-1" /> */}
      <div className="flex items-center space-x-4">
        <CustomSkeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <CustomSkeleton className="h-4 w-48" />
          <CustomSkeleton className="h-4 w-28" />
        </div>
      </div>
    </li>
  ));
};

export default CardSkeleton;

{
  /* <div className="flex items-center space-x-4">
        <CustomSkeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <CustomSkeleton className="h-4 w-48" />
          <CustomSkeleton className="h-4 w-28" />
        </div>
      </div> */
}
