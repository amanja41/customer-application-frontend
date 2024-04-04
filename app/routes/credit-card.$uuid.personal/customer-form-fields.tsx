import type { MetaFunction } from "@remix-run/node";
import { useForm } from "react-hook-form";
import { Button } from "~/components/ui/button";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { personalFormSchema } from "./personal.form";

interface CustomerFormFieldsProps {
    form: ReturnType<typeof useForm<z.infer<typeof personalFormSchema>>>
}

export default function CustomerFormFields({ form }: CustomerFormFieldsProps) {
    return (
        <div className="flex flex-col gap-4">
            <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
            <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Create password</FormLabel>
                        <FormControl>
                            <Input type="password" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
            <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Comfirm password</FormLabel>
                        <FormControl>
                            <Input {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
        </div>
    );
}

