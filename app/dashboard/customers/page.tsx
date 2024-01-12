import CustomersTable from '@/app/ui/customers/table';
import { fetchFilteredCustomers } from '@/app/lib/data';
import { Suspense } from 'react';
import { TableRowSkeleton } from '@/app/ui/skeletons';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
    title: 'Customers',
};

export default async function Page({ searchParams }: {
    searchParams?: {
        query?: string,
    };
}) {
    const query = searchParams?.query || '';
    const customers = await fetchFilteredCustomers(query);
    return (
        <main>
            <Suspense fallback={ <TableRowSkeleton/>} >
                <CustomersTable customers={customers}></CustomersTable>
            </Suspense>
        </main>
    )
}