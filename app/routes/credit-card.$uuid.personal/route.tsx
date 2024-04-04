import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";
import PersonFormFields from "./person-form-fields";
import CustomerFormFields from "./customer-form-fields";
import { usePersonalForm } from "./personal.form";
import { Form } from "~/components/ui/form";



export default function Personal() {
    const personalForm = usePersonalForm();

    const onSubmit = (data: any) => {

        console.log(data);
    }

    return (
        <Form {...personalForm}>
            <form onSubmit={personalForm.handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-14">
                    <hgroup>
                        <h1 className="text-[40px] leading-[40px] font-bold">Welcome! Let's get started to see if you qualify for an AvantCard.</h1>
                        <h2 className="font-bold my-4">Checking to see if you qualify for an AvantCard <span className="text-primary">does not affect your credit score.</span></h2>
                    </hgroup>
                    <h4 className="font-bold">Have a mail offer? <a className="text-primary hover:underline" href="https://www.dev.avant.com/">Redeem here</a>  </h4>
                    <div>
                        <h3 className="font-bold text-[28px] mb-4">Please tell us a little about yourself.</h3>
                        <PersonFormFields form={personalForm}></PersonFormFields>
                    </div>
                    <div>
                        <h3 className="font-bold text-[28px] mb-4">Create a login to save your progress and access your account.</h3>
                        <CustomerFormFields form={personalForm}></CustomerFormFields>
                    </div>
                    <div>
                        <Button type="submit" className="w-full" disabled={personalForm.formState.isDirty && !personalForm.formState.isValid}>Continue</Button>
                        <p className="font-bold mt-4 text-center">Checking to see if you qualify for an Avant Card DOES NOT not affect your credit score.</p>
                    </div>
                </div>
            </form>
        </Form>
    );
}


