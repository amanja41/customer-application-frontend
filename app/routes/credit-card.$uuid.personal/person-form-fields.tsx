import type { MetaFunction } from "@remix-run/node";
import { useForm } from "react-hook-form";
import { z } from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { SnnInput } from "~/components/ssn-input";
import { personalFormSchema } from "./personal.form";
import { DaofBirthInput } from "~/components/date-of-birth";


interface PersonFormFieldsProps {
    form: ReturnType<typeof useForm<z.infer<typeof personalFormSchema>>>
}

export default function PersonFormFields({ form }: PersonFormFieldsProps) {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex w-full gap-4">
                <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                        <FormItem className="w-1/2">
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                        <FormItem className="w-1/2">
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
            </div>
            <div>
                <FormField
                    control={form.control}
                    name="dateOfBirth"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Date of Birth</FormLabel>
                            <FormControl>
                                <DaofBirthInput placeholder="MM / DD / YYYY" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
            </div>
            <div>
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                                <Input placeholder="(___) ___ - ___" {...field} />
                            </FormControl>
                            <FormDescription>
                                We use your phone number to help confirm your identity.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )} />
            </div>
            <div>
                <FormField
                    control={form.control}
                    name="ssn"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Social security number</FormLabel>
                            <FormControl>
                                <SnnInput placeholder="___ - __ - ___" {...field} />
                            </FormControl>
                            <FormDescription>
                                We need your Social Security Number in order to verify your identity and open an Avant account for you. We use 128-bit SSL protection and strict, high levels of security & encryption standards to keep your information safe.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )} />
            </div>
        </div>
    );
}


