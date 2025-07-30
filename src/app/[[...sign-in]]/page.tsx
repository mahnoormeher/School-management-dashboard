'use client'

import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'
import { useUser } from '@clerk/nextjs'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const LoginPage=()=>{

    const { isSignedIn, user, isLoaded } = useUser()

    const router=useRouter();

    useEffect(()=>{
const role = user?.publicMetadata.role;

if(role){
router.push(`/${role}`)
}

    },[user,router])
    return(
        <div className='h-screen flex items-center justify-center bg-purple-100'>
            <SignIn.Root>
                <SignIn.Step name='start' className='bg-white p-12 rounded-md shadow-2xl flex flex-col gap-2'>
<h1 className='text-xl font-bold flex items-start gap-2'>
    <Image src="/logo.png" alt="" width={24} height={24}/>
    StarsSchool
</h1>
<h2 className='text-gray-400'>Sign in to your account</h2>

<Clerk.GlobalError className='text-sm text-red-400'/>
<Clerk.Field name="identifier" className='flex flex-col gap-2'>
<Clerk.Label className='text-xs text-gray-500'>Username</Clerk.Label>
<Clerk.Input type='text' autoComplete="off" required className='p-2 rounded-md ring-1 ring-gray-300'/>
<Clerk.FieldError className='tex-xs text-red-400'/>
</Clerk.Field>
<Clerk.Field name="password" className='flex flex-col gap-2'>
<Clerk.Label className='text-xs text-gray-500'>Password</Clerk.Label>
<Clerk.Input type='password' autoComplete="off" required className='p-2 rounded-md ring-1 ring-gray-300'/>
<Clerk.FieldError className='tex-xs text-red-400'/>
</Clerk.Field>
<SignIn.Action submit className='bg-purple-500 text-white my-1 rounded-md text-sm p-[10px]'>Sign In</SignIn.Action>
                </SignIn.Step>
            </SignIn.Root>
        </div>
    )
}

export default LoginPage;