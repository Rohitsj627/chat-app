const MessageSkeleton = () => {
	return (
		<div className='flex gap-3 items-center'>
			<div className='w-10 h-10 rounded-full bg-gray-300 animate-pulse'></div>
			<div className='flex flex-col gap-1'>
				<div className='w-40 h-4 rounded bg-gray-300 animate-pulse'></div>
				<div className='w-32 h-3 rounded bg-gray-300 animate-pulse'></div>
			</div>
		</div>
	);
};
export default MessageSkeleton;