import React from 'react'

const Background = () => {
    return (
        <>
            <div className='fixed z-[2] w-full h-screen'>
                <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[18vw] leading-none tracking-tighter font-semibold text-zinc-900'>Docs</h1>
                {/* <div className='absolute top-[4%] w-full py-10 flex justify-center items-center text-xl text-zinc-400'>Documents</div> */}
            </div>
        </>
    )
}

export default Background