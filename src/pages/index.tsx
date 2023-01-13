import productRepo from "@/app/api/repositories/product.repo";
import AdminLayout from "@/components/AdminLayout";
import {
  Button,
  Paper,
  Space,
  Table,
  Title,
  Image,
  Group,
  Modal,
} from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const { isLoading, data } = useQuery(["products"], () => {
    return productRepo.getProducts({ limit: 10, page: 1 });
  });

  const [opened, setOpened] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);

  return (
    <AdminLayout>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={"Product Image"}
      >
        <Image
          src={`http://104.251.211.125:8055/assets/${modalImage}`}
          radius={"sm"}
        />
      </Modal>
      <div className="flex justify-between items-center">
        <Title order={3} color={"dark.4"}>
          Products
        </Title>
        <Button> Add new</Button>
      </div>
      {/* <pre>{JSON.stringify(data?.data.data, null, 2)}</pre> */}
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
            {data?.data.data.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td
                  onClick={() => {
                    setOpened(true), setModalImage(product.cover_image);
                  }}
                  className="cursor-pointer"
                >
                  <Image
                    src={`http://104.251.211.125:8055/assets/${product.cover_image}?width=60`}
                    radius={"sm"}
                    alt={product.title}
                  />
                </td>
                <td>
                  <Group position="center">
                    <Button>Edit</Button>
                    <Button color={"red.5"}>Action</Button>
                  </Group>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Paper>
    </AdminLayout>
  );
}
