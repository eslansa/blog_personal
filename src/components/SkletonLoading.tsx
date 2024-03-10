function SkeletonLoader() {
    return (
       <div className="flex justify-center items-center h-screen w-full">
         <div role="status" className="max-w-sm animate-pulse">
           <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
           <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
           <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
           <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
           <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
           <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
           <span className="sr-only">Cargando...</span>
         </div>
       </div>
    );
   }
   
   export default SkeletonLoader;
   