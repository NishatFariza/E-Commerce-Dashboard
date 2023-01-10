import AdminLayout from '@/components/AdminLayout';
import { Button, Title } from '@mantine/core';


export default function Home() {
  return (
    <AdminLayout>
      <div className='flex justify-between items-center'>
        <Title order={3} color={'dark.4'}>Products</Title>
        <Button> Add new</Button>
      </div>
    </AdminLayout>
  );
}
