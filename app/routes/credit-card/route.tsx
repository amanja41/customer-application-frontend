import { ClientLoaderFunctionArgs, MetaFunction, Outlet, redirect, useLoaderData, useParams } from "@remix-run/react";
import Footer from "~/components/footer";
import { CustomerApplicationService } from "~/services/avant-basic";

export const meta: MetaFunction = () => {
    return [
        { title: "Credit Card" },
    ];
};

export async function clientLoader({ params }: ClientLoaderFunctionArgs) {
    const service = new CustomerApplicationService();
    if (!params["uuid"]) {
        // const response = await service.createCustomer();
        throw redirect(`/credit-card/uuid/personal`);
    }
    return {};
}

export default function Index() {
    const data = useLoaderData();
    return (
        <div className="container items-center w-full py-16 flex-col">
            <div className="bg-white py-16 px-8 max-w-[900px] w-full rounded-lg">
                <Outlet />
            </div>
            <Footer className="my-8"></Footer>
        </div>
    );
}