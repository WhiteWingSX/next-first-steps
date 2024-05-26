import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Pricing',
    description: 'this is a pay page',
    keywords: ['pricing Page', 'Bastian', 'pay', '...']
};

export default function PricingPage() {

    return (
        <>
            <h1 className="text-7xl">Pricing</h1>
        </>
    );
}
