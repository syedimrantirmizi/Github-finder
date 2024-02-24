import React from 'react'

const Profile = ({avatar_url,bio,bgColor}) => {
  return (
    <div className='flex justify-center p-5 '>
                <div className={"gap-5 flex justify-center p-5 w-[500px] flex-col bg-" + bgColor} >
                    <img src={avatar_url} alt="" />
                    <div className="font-bold">
                    <p className='text-gray-400'>
                        {bio}
                    </p>

                    </div>
                </div>
            </div>
  )
}

export default Profile