function About({id}) {
    return(
        <>
            <div id={id} className="about relative w-full h-screen justify-center items-center bg-black flex gap-10 px-20">
                <div className='w-3/4'>
                    <h1 className='text-4xl text-white font-serif'>About TickTime</h1>
                    <p className='text-lg text-white mt-5'>TickTime is a productivity application designed to help users manage their time effectively and complete tasks on schedule. 
                        Our mission is to provide a user-friendly platform that combines task management with time tracking, enabling users to stay organized and focused throughout their day. 
                        In TickTime, you can also customize your own notification sound. You can import some mp3 files to the application, change the  notification to the file that you imported, 
                        then foila! your notification is now sounds exactly like you wanted.
                    </p>
                </div>
            </div>
        </>
    )
}

export default About;