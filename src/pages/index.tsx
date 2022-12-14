import { LoginForm } from '@/components/LoginForm'
import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <div className="wrapper">
      <LoginForm />
    </div>
  );
}
