"use client"

import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { EditUserProfileSchema } from '@/lib/type'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Loader2 } from 'lucide-react'

type Props = {}

const ProfileForm = (props: Props) => {
    const [isLoading, setIsLoading] = React.useState(false)

    const form = useForm<z.infer<typeof EditUserProfileSchema>>({
        mode: "onChange",
        resolver: zodResolver(EditUserProfileSchema),
        defaultValues: {
            name: "",
            email: "",
        }
    })
  return (
    <Form {...form}>
        <form
            className='flex flex-col gap-6'
            onSubmit={() => {}}
        >
            <FormField
                disabled={isLoading}
                control={form.control}
                name='name'
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className='text-lg'>User full name</FormLabel>
                        <FormControl>
                            <Input
                                placeholder='Name'
                                {...field}
                            />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
            />
            <FormField
                disabled={true}
                control={form.control}
                name='email'
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className='text-lg'>User full name</FormLabel>
                        <FormControl>
                            <Input
                                placeholder='Email'
                                type='email'
                                {...field}
                            />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
            />
            <Button
                type='submit'
                className='self-start hover:bg-[#2f006b] hover:text-white  font-semibold'
            >
                {isLoading ? (
                    <>
                        <Loader2 className='mr-2 h-4 w-4 animate-spin'/>
                        <span className='font-semibold'>Saving</span>
                    </>
                ) : (
                    "Saver User Settings"
                )}
            </Button>
        </form>
    </Form>
  )
}

export default ProfileForm