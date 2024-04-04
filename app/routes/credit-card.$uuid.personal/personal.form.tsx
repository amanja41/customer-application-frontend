import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const personalFormSchema = z.object({
    firstName: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    lastName: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    dateOfBirth: z.string().refine((data) => {
        const date = new Date(data)
        console.log(date)
        return date instanceof Date && !isNaN(date.getTime())
    }, {
        message: "Invalid date",
    }),
    phone: z.string().min(10, {
        message: "Please enter a valid phone number.",
    }),
    ssn: z.string().min(9, {
        message: "Please enter a valid social security number.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
    confirmPassword: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
}).refine((data) => data.dateOfBirth.startsWith('2'), {
    message: "worg.",
    path: ["dateOfBirth"],
})



function usePersonalForm() {
    const personalForm = useForm<z.infer<typeof personalFormSchema>>({
        mode: "onTouched",
        resolver: zodResolver(personalFormSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            phone: "",
            ssn: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    })

    return personalForm
}

export { personalFormSchema, usePersonalForm }