import AdminLayout from '@/components/AdminLayout';
import { Button } from '@mantine/core';


export default function Home() {
  return (
    <AdminLayout>
      <h1>Hello</h1>
      <Button className='bg-indigo-500'>Indego</Button>
    </AdminLayout>
  );
}
