import { cn } from '../lib/utils';

export function CustomSkeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-md',
        'before:absolute before:inset-0 before:animate-shimmer',
        'before:bg-gradient-to-r before:from-[#d5d4d3] before:via-[#f2f0ef] before:to-[#d5d4d3] before:bg-[length:200%_100%]',
        className
      )}
      style={{ backgroundColor: '#d5d4d3' }}
      {...props}
    />
  );
}

// import { cn } from '../lib/utils';

// export function CustomSkeleton({
//   className,
//   ...props
// }: React.HTMLAttributes<HTMLDivElement>) {
//   return (
//     <div
//       className={cn(
//         'animate-pulse rounded-md bg-[#d5d4d3]',
//         className
//       )}
//       {...props}
//     />
//   );
// }
