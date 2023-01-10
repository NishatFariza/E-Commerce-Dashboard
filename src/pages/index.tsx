import AdminLayout from "@/components/AdminLayout";
import { Button, Paper, Space, Table, Title } from "@mantine/core";

export default function Home() {
  return (
    <AdminLayout>
      <div className="flex justify-between items-center">
        <Title order={3} color={"dark.4"}>
          Products
        </Title>
        <Button> Add new</Button>
      </div>
      <Paper p={"md"}>
        <Table withBorder withColumnBorders>
          <thead>
            <tr>
              <th>#ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#fgfjhjf</td>
              <td>Product Title</td>
              <td>$10</td>
              <td>Image</td>
              <td className="flex gap-2">
                <Button>Edit</Button>
                
                <Button color={"red.5"}>Action</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Paper>
    </AdminLayout>
  );
}
